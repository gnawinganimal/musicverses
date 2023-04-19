docker volume create cw-postgres

docker run -d --name postgres \
-p 5432:5432 \
-e POSTGRES_USER=postgres \
-e POSTGRES_PASSWORD=admin \
-e POSTGRES_DB=db \
-v cw-postgres:/var/lib/postgresql/data \
postgres:13.0

docker run -d --name redis \
-p 6379:6379 \
redis:6.0.10 \
redis-server --requirepass SuperSecret