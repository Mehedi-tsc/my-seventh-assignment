import React from 'react';
import Friend from './Friend';

const CardSection = async() => {
    const res = await fetch('https://my-seventh-assignment-blond.vercel.app/friends.json', {
        cache: 'no-store'
    })
    const friends = await res.json();
    
    return (
        <div className='w-9/12 mx-auto mb-20'>
            <h2 className='mb-4 text-2xl font-semibold'>Your Friends</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
                {
                    friends.map(friend=><Friend friend={friend} key={friend.id}></Friend>)
                }
            </div>
        </div>
    );
};

export default CardSection;