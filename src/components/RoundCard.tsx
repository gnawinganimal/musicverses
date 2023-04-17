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
        <div className='bg-white shadow-md p-6'>
            <h6 className=''>ROUND {num}</h6>
            
            <h4 className='text-2xl'>{name}</h4>
            
            <p>{desc}</p>
        </div>
    );  
}
