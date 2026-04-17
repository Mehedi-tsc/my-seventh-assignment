'use client'
import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
export const timelineContext = createContext();

const friendsData = fetch('https://my-seventh-assignment-blond.vercel.app/friends.json', {
    cache: 'no-store'
}).then(res => res.json());

const TimelineProvider = ({children}) => {
const [timelineStatus, setTimelineStatus]=useState([])
const handleClickCallBtn = (friend)=>{
    const timelineData = {
        name: friend.name,
        type: 'Call'
    }
    setTimelineStatus([...timelineStatus, timelineData ])
    toast.success(`Call succesfully to ${timelineData.name}`)
}
const handleClickTextBtn = (friend)=>{
    const timelineData = {
        name: friend.name,
        type: 'Text'
    }
    setTimelineStatus([...timelineStatus, timelineData ])
    toast.success(`Sent text succesfully to ${timelineData.name}`)
}
const handleClickVedioBtn = (friend)=>{
    const timelineData = {
        name: friend.name,
        type: 'Video'
    }
    setTimelineStatus([...timelineStatus, timelineData ])
    toast.success(`Video call succesfully to ${timelineData.name}`)
}

    const data={
        timelineStatus,
        handleClickCallBtn,
        handleClickTextBtn,
        handleClickVedioBtn
    }
    return (
        <timelineContext.Provider value={data}>{children}</timelineContext.Provider>
    );
};

export default TimelineProvider;