import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Friend = ({ friend }) => {
    return (
        <Link href={`/friend-details/${friend.id}`}>
            <div className="card bg-base-100 shadow-sm">
                <figure className='p-6 rounded-full'>
                    <Image
                        className='rounded-full'
                        src={friend.picture}
                        alt={friend.name}
                        width={100}
                        height={100}
                    />
                </figure>
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-center">
                        {friend.name}
                    </h2>
                    <p className='text-center text-[12px] text-[#64748B]'>{`${friend.days_since_contact}d ago`}</p>

                    <div className='flex gap-1 justify-center'>
                        {
                            friend.tags.map((tag, ind) => <div key={ind} className="text-[10px] badge badge-soft text-[#244D3F] bg-[#CBFADB]">{tag.toUpperCase()}</div>)
                        }
                    </div>
                    <div className='flex justify-center'>
                        <div className={`badge text-white rounded-4xl ${friend.status === 'On-Track' ? 'bg-[#244D3F]' : friend.status === 'Overdue' ? 'bg-[#EF4444]' : friend.status === 'Almost Due' ? 'bg-[#EFAD44]' : ''} mb-4`}>{friend.status}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Friend;