import React from 'react';

import { RoundCard } from '../components/RoundCard';

export function Arena() {
    return (
        <div>

            <h3 className="text-2xl">Current Rounds</h3>
            <RoundCard
                num={11}
                name="Top Artist of 2022"
                desc="Songs must be from your top artist of 2022"
            />
            
            <h3 className="text-2xl">Upcoming Rounds</h3>

            <h3 className="text-2xl">Completed Rounds</h3>

        </div>
    );
}
