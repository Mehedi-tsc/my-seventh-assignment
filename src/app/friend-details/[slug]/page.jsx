'use client'
import { timelineContext } from '@/context/TimelineProvider';
import Image from 'next/image';
import Link from 'next/link';
import React, { use, useContext } from 'react';

const friendsData = fetch('https://my-seventh-assignment-blond.vercel.app/friends.json', {
    cache: 'no-store'
}).then(res => res.json());

const FriendDetails = ({ params }) => {
    const { slug } = use(params);
    const friends = use(friendsData)
    const friend = friends.find(friend => friend.id == slug)
    const {handleClickCallBtn, handleClickTextBtn, handleClickVedioBtn}=useContext(timelineContext);
    return (
        <div className='w-10/12 mx-auto my-8'>
            <div className='grid grid-cols-5 grid-rows-8 gap-2'>
                {/* card-1 */}
                <div className="card bg-base-100 shadow-sm col-span-5  lg:col-span-2 row-span-5">
                    <figure className='p-4 rounded-full'>
                        <Image
                            className='rounded-full'
                            src={friend.picture}
                            alt={friend.name}
                            width={100}
                            height={100}
                        />
                    </figure>
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold text-center">
                            {friend.name}
                        </h2>
                        <div className='flex justify-center'>
                            <div className={`badge text-white rounded-4xl ${friend.status === 'On-Track' ? 'bg-[#244D3F]' : friend.status === 'Overdue' ? 'bg-[#EF4444]' : friend.status === 'Almost Due' ? 'bg-[#EFAD44]' : ''} mb-4`}>{friend.status}</div>
                        </div>
                        <div className='flex gap-1 justify-center'>
                            {
                                friend.tags.map((tag, ind) => <div key={ind} className="font-semibold badge badge-soft text-[#244D3F] bg-[#CBFADB]">{tag.toUpperCase()}</div>)
                            }
                        </div>
                        <h2 className='italic px-2 text-center font-medium text-[#64748B]'>{friend.bio}</h2>
                        <h2 className='pb-2 px-2 text-center text-sm text-[#64748B] '>{`Preferred: ${friend.email}`}</h2>

                    </div>
                </div>
                {/* card-2 */}
                <div className="card space-y-2 bg-base-100 shadow-sm col-span-5 lg:col-span-1 row-span-3 px-4 py-8 text-center">
                    <h2 className='font-semibold text-3xl text-[#244D3F]'>{friend.days_since_contact}</h2>
                    <p className='text-lg text-[#64748B]'>Days Since Contact</p>
                </div>
                {/* card-3 */}
                <div className="card space-y-2 bg-base-100 shadow-sm col-span-5 lg:col-span-1 row-span-3 px-4 py-8 text-center">
                    <h2 className='font-semibold text-3xl text-[#244D3F]'>{friend.goal}</h2>
                    <p className='text-lg text-[#64748B]'>Goal (Days)</p>
                </div>
                {/* card-4 */}
                <div className="card space-y-2 bg-base-100 shadow-sm col-span-5 lg:col-span-1 row-span-3 px-4 py-8 text-center">
                    <h2 className='font-semibold text-3xl text-[#244D3F]'>{friend.next_due_date}</h2>
                    <p className='text-lg text-[#64748B]'>Next Due</p>
                </div>
                {/* card-5 */}
                <div className="card bg-base-100 shadow-sm col-span-5 lg:col-span-3 row-span-2 px-4 py-8 flex-row justify-between">
                    <div className='space-y-2'>
                        <h2 className='font-medium text-2xl text-[#244D3F]'>Relationship Goal</h2>
                        <p className='text-lg text-[#64748B]'>Connect every <span className='font-bold text-lg text-[#1F2937]'>{`${friend.goal} days`}</span></p>
                    </div>
                    <button className='btn'>Edit</button>
                </div>
                {/* card-6 */}
                <div className='rounded-lg bg-base-100 shadow-sm col-span-2 flex justify-center items-center gap-1 row-span-1'>
                    <figure className='p-4 rounded-full'>
                        <Image
                            src='/BellSimpleZ.png'
                            alt='Snooze Btn'
                            width={20}
                            height={20}
                        />
                    </figure>
                    <h2 className='font-medium text-lg'>Snooze 2 weeks</h2>
                </div>
                {/* card-7 */}
                <div className='card bg-base-100 shadow-sm col-span-3 row-span-3 p-4'>
                    <h2 className='text-xl font-medium text-[#244D3F] mb-2'>Quick Check-In</h2>
                    <div className='flex gap-2 lg:justify-between items-center flex-col lg:flex-row'>
                        <Link href='/timeline' onClick={()=>handleClickCallBtn(friend)} className='cursor-pointer shadow-md active:shadow-sm bg-base-200 border border-base-200 rounded-xl space-y-2 flex flex-col justify-center items-center py-5 w-[75%] lg:w-[25%]'>
                            <Image 
                             src='/call.png'
                             alt='Call Btn'
                             width={32}
                             height={32}
                            />
                            <p className='text-lg'>Call</p>
                        </Link>
                        <Link href='/timeline' onClick={()=>handleClickTextBtn(friend)} className='cursor-pointer shadow-md active:shadow-sm bg-base-200 border border-base-200 rounded-xl space-y-2 flex flex-col justify-center items-center py-5 w-[75%] lg:w-[25%]'>
                            <Image 
                             src='/text.png'
                             alt='Text Btn'
                             width={32}
                             height={32}
                            />
                            <p className='text-lg'>Text</p>
                        </Link>
                        <Link href='/timeline' onClick={()=>handleClickVedioBtn(friend)} className='cursor-pointer shadow-md active:shadow-sm bg-base-200 border border-base-200 rounded-xl space-y-2 flex flex-col justify-center items-center py-5 w-[75%] lg:w-[25%]'>
                            <Image 
                             src='/video.png'
                             alt='Video Btn'
                             width={32}
                             height={32}
                            />
                            <p className='text-lg'>Video</p>
                        </Link>
                    </div>
                </div>
                {/* card 8 */}
                <div className='rounded-lg bg-base-100 shadow-sm col-span-2 flex justify-center items-center gap-1 row-span-1'>
                    <figure className='p-4 rounded-full'>
                        <Image
                            src='/Archive.png'
                            alt='Archive Btn'
                            width={20}
                            height={20}
                        />
                    </figure>
                    <h2 className='font-medium text-lg'>Archive</h2>
                </div>
                {/* card-9 */}
                <div className='text-[#EF4444] rounded-lg bg-base-100 shadow-sm col-span-2 flex justify-center items-center gap-1 row-span-1'>
                    <figure className='p-4 rounded-full'>
                        <Image
                            src='/Trash.png'
                            alt='Snooze Btn'
                            width={20}
                            height={20}
                        />
                    </figure>
                    <h2 className='font-medium text-lg'>Delete</h2>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;