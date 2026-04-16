'use client'
import TimeLineData from "@/components/timeline/TimeLineData";
import { timelineContext } from "@/context/TimelineProvider";
import Image from "next/image";
import { useContext, useState } from "react";

const TimelinePage = () => {
    const { timelineStatus } = useContext(timelineContext)
    const [filterType, setFilterType] = useState('Filter timeline')
    const filterdTimeling = filterType==='Filter timeline' ? timelineStatus : timelineStatus.filter(item=> item.type===filterType)

    return (
        <div className="py-12">
            <h2 className="w-9/12 mx-auto text-[#1F2937] mb-6 font-bold text-5xl">Timeline</h2>
            <div className="w-9/12 mx-auto mb-6">
            <select value={filterType} onChange={(e)=>setFilterType(e.target.value)} className="select w-60">
                <option>Filter timeline</option>
                <option>Call</option>
                <option>Text</option>
                <option>Video</option>
            </select>

            </div>
            <div className='grid grid-cols-1 gap-4'>
            {filterdTimeling.map((fr, i) => <TimeLineData key={i} fr={fr}></TimeLineData>)}
        </div>
        </div>
    
    );
};

export default TimelinePage;