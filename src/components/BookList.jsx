import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Available Books</h2>
      {books.length === 0 ? (
        <p className="text-gray-600">No books found. Add a new book!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <div key={book.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
              <div>
                <Link to={`/book/${book.id}`} className="block">
                  <h3 className="text-xl font-semibold text-blue-700 hover:underline mb-2">{book.title}</h3>
                </Link>
                <p className="text-gray-600">
                  <span className="font-medium">Author:</span> {book.author}
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-medium">Published:</span> {book.publicationDate}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  <span className="font-medium">Publisher:</span> {book.publisher}
                </p>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  onClick={() => onEdit(book)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm py-1 px-3 rounded focus:outline-none focus:shadow-outline transition-colors duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(book.id)}
                  className="bg-red-500 hover:bg-red-600 text-white text-sm py-1 px-3 rounded focus:outline-none focus:shadow-outline transition-colors duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;