import React, { useEffect, useState } from 'react'
import Book from './Book';

const Books = () => {

  const [books, setBooks] = useState([]);
// data load
  useEffect( () =>{
    fetch('./booksData.json')
    .then(res => res.json())
    .then(data => setBooks(data))

  },[])
  return (
    <div className='pt-24'>
      <h3 className="font-bold text-2xl md:text-4xl text-center pb-5 ">Books</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          books.map(book => <Book book={book} key={book.bookId}/>)
        }
      </div>
    </div>
  )
}

export default Books;