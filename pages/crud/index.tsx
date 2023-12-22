import React, { useState } from 'react'
import Modal from '../book/model'
import { useSelector } from 'react-redux';
import { Book } from '@/redux/features/book.slice';

const index = () => {
    const books = useSelector((state: any) => state.book.books);
    console.log(books)

    const [isModalopen, setIsModal] = useState(false)
    const handleModal = () => {
        setIsModal(!isModalopen)
    }
    

  return (
    <div className="container mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
      <h1 className='text-lg justify-center text-center'>Manage Page</h1>
      <button 
        className='bg-green-600 text-white p-2 rounded-md'
        onClick={handleModal}
    >
        Create +
      </button>
      <h1 className="text-3xl font-semibold mb-4">Book's Information</h1>
        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
                <thead>
                <tr>
                    <th className="border border-gray-300 p-4">Id</th>
                    <th className="border border-gray-300 p-4">Title</th>
                    <th className="border border-gray-300 p-4">Image</th>
                    <th className="border border-gray-300 p-4">Category</th>
                    <th className="border border-gray-300 p-4">Action</th>
                </tr>
                </thead>
                <tbody>
                    {books.map((book: Book) => {
                        return (
                            <tr>
                            <td className="border border-gray-300 p-4">{book.id}</td>
                            <td className="border border-gray-300 p-4">{book.title}</td>
                            <td className="border border-gray-300 p-4"><img src={book.image}/></td>
                            <td className="border border-gray-300 p-4">{book.category}</td>
                            <td className="border border-gray-300 p-4">
                            <button 
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Edit
                            </button>
                            <button 
                                className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                            >
                                Delete
                            </button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
            {isModalopen && <Modal onClose={handleModal} />}
        </div>
    </div>
  )
}

export default index
