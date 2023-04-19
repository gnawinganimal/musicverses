import React from 'react';

export function RoundCard({
    num,
    name,
    desc,
}: {
    num: number,
    name: string,
    desc: string,
}) {
    return (
        <div className='bg-white shadow-md p-6 space-y-6'>
            <div>
                <h6 className=''>ROUND {num}</h6>
                <h4 className='text-2xl'>{name}</h4>
                <p>{desc}</p>
            </div>

            <hr className=''/>

            <div className='flex justify-evenly'>
                <a href='' className='text-blue-400 hover:text-blue-600'>Listen to playlist</a>
                <a href='' className='text-blue-400 hover:text-blue-600'>Standings</a>
            </div>
        </div>
    );  
}
