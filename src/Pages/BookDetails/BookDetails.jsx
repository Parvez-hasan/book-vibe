import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { id } = useParams();
    //  console.log(id);
    const data = useLoaderData();
    const bookId = parseInt(id);
    const singleBook = data.find(book => book.bookId === bookId);
    console.log(singleBook);
    const { bookName, image,totalPages,yearOfPublishing,rating,review,publisher} = singleBook;

    return (
        <div className='h-[550px] w-10/12 mx-auto p-4'>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center bg-gray-100 rounded h p-2 md:px-18 '>
                 <div className='w-3/12'>
                    <img className= 'w-56 md:max-w-80 h-auto rounded' src={image} alt="" />
                </div>

                {/* /// contact section */}
                <div className='w-7/12 p-4'>
                    <h2 className='text-2xl md:text-3xl font-semibold'>{bookName}</h2>
                     <p className='text-sm py-1'>Review : {review}</p>
                    
                    <p className='font-medium'>Book By : {publisher}</p>
                    <hr className='py-1 mt-2' />
                    <h2>Number of Pages:  {totalPages}</h2>
                    <h2>Publisher:  {publisher}</h2>
                    <p>Year of Publishing: {yearOfPublishing}</p>
                    <p>Rating: {rating}</p>
                    <div className='mt-3 space-x-4'>
                        <button className="btn btn-info">Read</button>
                    <button className="btn btn-success ">Wishlist</button>
                    </div>
                    
                </div>

                 
            </div>
        </div>
    );
};

export default BookDetails;