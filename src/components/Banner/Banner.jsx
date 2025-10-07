import React from 'react';
import bookImg from '..//..//assets/books.jpg'
const Banner = () => {
    return (
       <div className='py-4 '>
           <div className='flex flex-col-reverse md:flex-row justify-between items-center bg-gray-100 rounded h-80 p-4 md:px-18 '>
            <div>
                <h2 className='text-2xl md:text-5xl font-semibold'>Books to freshen up <br /> your bookshelf</h2>
                <button className="btn btn-success mt-5">View The List</button>
            </div>
            <div>
                <img className='max-w-52 md:max-w-82 h-auto rounded' src={bookImg} alt="" />
            </div>
        </div>
       </div>
    );
};

export default Banner;