import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';

const BookDetail = ({ books, updateBook, deleteBook }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const foundBook = books.find((b) => b.id === id);
    setBook(foundBook);
  }, [id, books]);

  if (!book) {
    return <div className="text-center text-gray-600 text-xl py-8">Book not found.</div>;
  }

  const handleUpdate = (updatedBook) => {
    updateBook(updatedBook);
    setIsEditing(false); 
    setBook(updatedBook); 
    alert('Book updated successfully!');
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      deleteBook(book.id);
      alert('Book deleted successfully!');
      navigate('/'); 
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {isEditing ? (
        <BookForm bookToEdit={book} onSubmit={handleUpdate} onCancel={() => setIsEditing(false)} />
      ) : (
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{book.title}</h1>
          <p className="text-xl text-gray-700 mb-2">
            <span className="font-semibold">Author:</span> {book.author}
          </p>
          <p className="text-md text-gray-600 mb-2">
            <span className="font-semibold">Publication Date:</span> {book.publicationDate}
          </p>
          <p className="text-md text-gray-600 mb-4">
            <span className="font-semibold">Publisher:</span> {book.publisher}
          </p>
          {book.description && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Description:</h3>
              <p className="text-gray-800 leading-relaxed">{book.description}</p>
            </div>
          )}
          <div className="flex space-x-4 mt-6">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200"
            >
              Edit Book
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200"
            >
              Delete Book
            </button>
            <button
              onClick={() => navigate('/')}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetail;