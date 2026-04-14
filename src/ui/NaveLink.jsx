'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const NaveLink = () => {
    const pathName=usePathname();
        return (
        <>
        <li className={`${pathName==='/'?'bg-[#244D3F] text-white  font-semibold':'bg-none font-medium text-[#64748B]'}`}> <Link href='/'><Image className={`${pathName==='/'?'brightness-0 invert':''}`} src='/Vector.png' alt='vetorImg' width={15} height={15}/> Home</Link> </li>
        <li className={`${pathName==='/timeline'?'bg-[#244D3F] text-white  font-semibold':'bg-none font-medium text-[#64748B]'}`}> <Link href='/timeline'><Image className={`${pathName==='/timeline'?'brightness-0 invert':''}`} src='/Clock.png' alt='clockrImg' width={15} height={15}/> Timeline</Link> </li>
        <li className={`${pathName==='/stats'?'bg-[#244D3F] text-white  font-semibold':'bg-none font-medium text-[#64748B]'}`}> <Link href='/stats'><Image className={`${pathName==='/stats'?'brightness-0 invert':''}`} src='/ChartLine.png' alt='statsImg' width={15} height={15}/> Stats</Link> </li>
        </>
    );
};

export default NaveLink;