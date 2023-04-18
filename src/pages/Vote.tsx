import React, { FunctionComponent, useEffect, useState } from "react";

type VoteMap = { [song: string]: number };

export function Vote() {
    // should be replaced by GET request
    let songs = ['The Winner Takes It All', 'Angeleyes', 'Head Over Heels'];

    let [votes, setVotes]: [VoteMap, (voteMap: VoteMap) => void] = useState({});

    return (
        <div className='p-24 bg-gray-100 space-y-6'>
            <div className="bg-white shadow-md p-6 space-y-6">
                {songs.map(function(song, i) {
                    return (
                        <div>
                            {song}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}