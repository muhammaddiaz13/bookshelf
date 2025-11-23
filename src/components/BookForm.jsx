import React, { useState, useEffect } from 'react';

const BookForm = ({ bookToEdit, onSubmit, onCancel }) => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    publicationDate: '',
    publisher: '',
    description: '',
  });

  useEffect(() => {
    if (bookToEdit) {
      setBook(bookToEdit);
    } else {
      setBook({
        title: '',
        author: '',
        publicationDate: '',
        publisher: '',
        description: '',
      });
    }
  }, [bookToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book);
    setBook({ // Reset form setelah submit jika tidak sedang mengedit
      title: '',
      author: '',
      publicationDate: '',
      publisher: '',
      description: '',
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        {bookToEdit ? 'Edit Book' : 'Add New Book'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={book.title}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            placeholder="Book Title"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700 text-sm font-bold mb-2">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={book.author}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            placeholder="Author Name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="publicationDate" className="block text-gray-700 text-sm font-bold mb-2">
            Publication Date
          </label>
          <input
            type="date"
            id="publicationDate"
            name="publicationDate"
            value={book.publicationDate}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="publisher" className="block text-gray-700 text-sm font-bold mb-2">
            Publisher
          </label>
          <input
            type="text"
            id="publisher"
            name="publisher"
            value={book.publisher}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            placeholder="Publisher Name"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Description (Optional)
          </label>
          <textarea
            id="description"
            name="description"
            value={book.description}
            onChange={handleChange}
            rows="3"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            placeholder="A brief description of the book..."
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200"
          >
            {bookToEdit ? 'Update Book' : 'Add Book'}
          </button>
          {bookToEdit && (
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4 transition-colors duration-200"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default BookForm;