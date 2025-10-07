import React, { Suspense, useEffect } from 'react';
import { useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    const [allBooks, setAllBooks] = useState([]);

    // useEffcet diye data load
    // useEffect(() => {
    //     fetch('booksData.json')
    //     .then(res => res.json())
    //     .then(data => {
    //       //  console.log(data);\
    //       setAllBooks(data);
    //           })
    // },[])

   // const bookPromise = fetch('booksData.json').then(res => res.json());

    return (
        <div>
            <h3 className='text-3xl text-center font-semibold'>Books</h3>
            <Suspense fallback={<h3 className='text-3xl text-center mt-4'><span>Loading....</span></h3>}>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 max-w-6xl mx-auto'>
                    {
                    data.map(singleBook => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
               </div>
            </Suspense>
        </div>
    );
};

export default Books;