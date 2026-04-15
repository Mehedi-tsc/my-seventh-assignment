import React from 'react';

const CardSection = async() => {
    const res = await fetch('https://my-seventh-assignment-blond.vercel.app/friends.json')
    const friends = await res.json();
    console.log(friends)
    return (
        <div>
            
        </div>
    );
};

export default CardSection;