import NaveLink from '@/ui/NaveLink';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-base-200  shadow-sm w-full rounded-md'>
            <div className="max-lg:collapse container mx-auto ">
                <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
                <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
                <div className="collapse-title lg:flex lg:justify-between">
                    <div className="flex justify-between">
                       
                            <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                        
                        
                            <button className="btn btn-ghost text-xl">
                                <Image
                                src='/logo.png'
                                alt='Navbar-logo'
                                width={141}
                                height={31}
                                />
                            </button>
                        
                        
                    </div>
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <NaveLink></NaveLink>
                        </ul>
                    </div>
                </div>

                <div className="collapse-content lg:hidden z-1">
                    <ul className="menu">
                        <NaveLink></NaveLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;