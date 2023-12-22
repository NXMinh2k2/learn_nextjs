import { Book } from '@/redux/features/book.slice';
import React from 'react'
import { useSelector } from 'react-redux'

const ListBook = () => {
    const books = useSelector((state: any) => state.book.books);
  return (
    <div className='bg-gray-100'>
        <div className="container mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-semibold mb-4">Book List</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="bookList">   
                {books.map((book: Book) => {
                    return (
                        <li key={book.id}>
                            <div className='flex flex-col  border-black border-2 items-center'>
                                <span>{book.title}</span>
                                <img src={book.image} alt="" />
                                <span>{book.category}</span>
                                <img src="/image/neymar.jpeg" alt="" />
                            </div>
                        </li>   
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default ListBook
