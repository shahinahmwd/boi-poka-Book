import { key } from 'localforage';
import React from 'react'
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { image, bookName, author, tags, category,bookId } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card w-96 bg-base-100 shadow-xl p-6">
                <figure className='bg-[#F3F3F3] py-8 rounded-2xl'>
                    <img src={image} alt={bookName} className='h-[166px]' />
                </figure>
                <div className="card-body">
                    <div className="flex  gap-6 ">
                        {
                            tags.map((tag, index) => 
                            <button  key={index}
                             className="btn btn-xs bg-green-200
                             text-green-500 rounded-full">{tag}
                            </button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                    </h2>
                    <p> By:{author} </p>
                    <div className=" border-t-2 border-dashed"></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-300" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Book