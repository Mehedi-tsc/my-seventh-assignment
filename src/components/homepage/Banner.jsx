import React from 'react';

const Banner = () => {
    return (
        <div className='w-9/12 mx-auto pt-20 space-y-4 text-center'>
            <h2 className='text-5xl font-bold'>Friends to keep close in your life</h2>
            <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                <br /> relationships that matter most.</p>
            <button className="btn bg-[#244D3F] text-white">+ Add a Friend</button>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className="card bg-base-100 card-sm shadow-sm">
                    <div className="py-6">
                        <h2 className="text-3xl font-semibold text-center">32</h2>
                        <p className='text-lg text-[#64748B]'>Total Friends</p>
                    </div>
                </div>
                <div className="card bg-base-100 card-sm shadow-sm">
                    <div className="py-6">
                        <h2 className="text-3xl font-semibold text-center">3</h2>
                        <p className='text-lg text-[#64748B]'>On Track</p>
                    </div>
                </div>
                <div className="card bg-base-100 card-sm shadow-sm">
                    <div className="py-6">
                        <h2 className="text-3xl font-semibold text-center">6</h2>
                        <p className='text-lg text-[#64748B]'>Need Attention</p>
                    </div>
                </div>
                <div className="card bg-base-100 card-sm shadow-sm">
                    <div className="py-6">
                        <h2 className="text-3xl font-semibold text-center">12</h2>
                        <p className='text-lg text-[#64748B]'>Interactions This Month</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;