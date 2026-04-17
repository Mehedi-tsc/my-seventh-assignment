'use client'
import { timelineContext } from '@/context/TimelineProvider';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const StatsPage = () => {
    const { timelineStatus } = useContext(timelineContext)
    const callData = timelineStatus.filter(call=>call.type==='Call')
    const textData = timelineStatus.filter(text=>text.type==='Text')
    const videoData = timelineStatus.filter(video=>video.type==='Video')
    
    
    const data = [
        { name: 'Call', value:parseInt(`${callData.length}`), fill: '#244D3F' },
        { name: 'Text', value: parseInt(`${textData.length}`), fill: '#7E35E1' },
        { name: 'Video', value: parseInt(`${videoData.length}`), fill: '#37A163' },

    ];
    return (
        <div className='bg-[#F8FAFC]'>
            <div className='w-9/12 mx-auto my-10'>
                <h2 className='mb-5 font-bold text-5xl text-[#1F2937]'>Friendship Analytics</h2>
                <div className='p-5 shadow-sm bg-base-100'>
                    <h2 className='text-[#244D3F] text-lg font-medium mb-2'>By Interaction Type</h2>
                    <div>
                        <PieChart className='mx-auto' style={{ width: '80%', maxWidth: '500px', maxHeight: '50vh', aspectRatio: 1 }} responsive>
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"
                                // Corner radius is the rounded edge of each pie slice
                                cornerRadius="10%"
                                fill="#8884d8"
                                // padding angle is the gap between each pie slice
                                paddingAngle={5}
                                dataKey="value"
                            // isAnimationActive={isAnimationActive}
                            />
                            <Tooltip />
                            <Legend wrapperStyle={{ paddingTop: '15px' }}/>
                            {/* <RechartsDevtools /> */}
                        </PieChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsPage;