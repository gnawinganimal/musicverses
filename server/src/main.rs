use diesel::prelude::*;
use diesel::pg::PgConnection;
use dotenvy::dotenv;
use std::env;
use std::io::{stdin, Read};

use crate::models::{Post, NewPost};

pub mod models;
pub mod schema;

pub fn establish_connection() -> PgConnection {
    dotenv().ok();

    let db_url = env::var("DATABASE_URL")
        .expect("DATABASE_URL not set");

    PgConnection::establish(&db_url)
        .unwrap_or_else(|_| panic!("Couldn't connect to {db_url}"))
}

fn create_post(con: &mut PgConnection, title: &str, body: &str) -> Post {
    use crate::schema::posts;

    let new_post = NewPost { title, body };

    diesel::insert_into(posts::table)
        .values(&new_post)
        .get_result(con)
        .expect("Couldn't create new post")
}

fn main() {
    use self::schema::posts::dsl::*;

    let mut connection = establish_connection();
    
    let results = posts
        .filter(published.eq(true))
        .limit(5)
        .load::<Post>(&mut connection)
        .expect("Couldn't load posts");

    println!("Displaying {} posts", results.len());
    for post in results {
        println!("{}", post.title);
        println!("-----------\n");
        println!("{}", post.body);
    }
}
