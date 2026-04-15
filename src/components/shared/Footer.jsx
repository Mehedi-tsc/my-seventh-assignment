import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] pt-20 pb-7'>
            <div className='w-9/12 mx-auto'>
                <div className='flex justify-center'>
                    <Image
                    
                        src='/logo-xl.png'
                        alt='Footer-Logo'
                        width={350}
                        height={60}
                    />
                </div>
                <p className='mt-4 mb-6 text-[#FFFFFF]/70 text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className='mb-4 font-medium text-[#FFFFFF] text-center'>Social Links</p>
                <div className='flex justify-center items-center gap-2'>
                    <Image
                        src='/instagram.png'
                        alt='Instagram-Logo'
                        width={40}
                        height={40}
                    />
                    <Image
                        src='/facebook.png'
                        alt='Facebook-Logo'
                        width={40}
                        height={40}
                    />
                    <Image
                        src='/twitter.png'
                        alt='Twitter-Logo'
                        width={40}
                        height={40}
                    />
                   
                </div>
                <div className='mt-16 flex justify-between'>
                    <p className='text-[#FAFAFA]/50'>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className='flex gap-5'>
                        <p className='text-[#FAFAFA]/50'>Privacy Policy   </p>
                        <p className='text-[#FAFAFA]/50'>Terms of Service </p>
                        <p className='text-[#FAFAFA]/50'>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;