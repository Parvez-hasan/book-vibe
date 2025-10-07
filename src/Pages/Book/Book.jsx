import React from 'react';
import { FaStarHalfStroke } from "react-icons/fa6";
import { PiBookmarkSimpleDuotone } from 'react-icons/pi';
import { Link } from 'react-router';
const Book = ({ singleBook }) => {
    // const data = use(bookPromise);
    console.log(singleBook);
    const { bookName, bookId, image, category, rating, tags, yearOfPublishing
        , publisher} = singleBook;


    return (
        <Link to={`/BookDetails/${bookId}`}>
            <div className="card bg-base-100 shadow-sm border p-4">
                <figure className='bg-gray-100 p-4'>
                    <img className='h-64 w-auto'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-center gap-7'>
                        {
                            tags.map(tag => <button>{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p className='font-bold'>Book By : {publisher}</p>
                    <div className='border-t-1 border-dashed'></div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating}<FaStarHalfStroke></FaStarHalfStroke> </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;