import { Book } from '@/redux/features/book.slice';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Modal = ({onClose} : any) => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const categories = useSelector((state: any) => state.book.categories);
   
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white p-8 rounded-lg">
            <span className="text-2xl font-bold mb-4">Create Book</span>
            <form>
            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-semibold text-gray-600">
                Title:
                </label>
                <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="image" className="block text-sm font-semibold text-gray-600">
                Image
                </label>
                <input
                type="file"
                id="image"
                //   value={image}
                //   onChange={(e) => setImage(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-semibold text-gray-600">
                Category:
                </label>
                <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                >
                {categories.map((category: string) => (
                    <option key={category} value={category}>
                    {category}
                    </option>
                ))}
                </select>
            </div>
            <div className="flex justify-end">
                <button
                type="button"
                //   onClick={handleAddBook}
                className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                Add Book
                </button>
                <button
                type="button"
                onClick={onClose}
                className="ml-2 text-gray-600 px-4 py-2 rounded"
                >
                Close
                </button>
            </div>
            </form>
        </div>
        </div>
  );
};

export default Modal