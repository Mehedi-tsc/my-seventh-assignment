import Image from 'next/image';
import React from 'react';

const TimeLineData = ({ fr }) => {
    const currentDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    return (
        <div className="w-9/12 mx-auto">
            <div className='rounded-lg bg-base-200 shadow-sm flex justify-start items-center gap-2'>
                <figure className='p-4 rounded-full'>
                    <Image
                        src={fr.type === 'Call' ? '/call.png' : fr.type === 'Text' ? '/text.png' : '/video.png'}
                        alt='Snooze Btn'
                        width={20}
                        height={20}
                    />
                </figure>
                <div className="space-y-2 pb-2">
                    <h2 ><span className='font-medium text-xl font-[#244D3F]'>{fr.type}</span> <span className='text-lg font-[#64748B]'>{`with ${fr.name}`}</span></h2>
                    <p className="font-medium font-[#64748B]">{currentDate}</p>
                </div>
            </div>
        </div>
    );
};

export default TimeLineData;