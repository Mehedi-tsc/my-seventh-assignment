import Link from "next/link";


const NotFound = () => {
    return (
        <div className='my-10 bg-base-100 space-y-5 w-6/12 mx-auto shadow-sm flex flex-col items-center justify-center text-center p-4'>
            <h2 className='text-7xl'>4 <span className='text-red-600'>0</span> 4</h2>
            <p className='text-xs text-gray-500 border border-gray-200 px-3 py-1'>Page not found</p>
            <p className='text-gray-500 max-w-sm'>The page you are looking for does not exist or has been moved.</p>
            <Link href='/'><button className="btn btn-primary">Go Home</button></Link>
        </div>
    );
};

export default NotFound;