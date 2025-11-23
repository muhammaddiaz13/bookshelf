import React, { useState } from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

const Home = ({ books, addBook, updateBook, deleteBook }) => {
  const [editingBook, setEditingBook] = useState(null);

  const handleAddBook = (newBook) => {
    addBook(newBook);
    alert('Book added successfully!');
  };

  const handleEditBook = (book) => {
    setEditingBook(book);
  };

  const handleUpdateBook = (updatedBook) => {
    updateBook(updatedBook);
    setEditingBook(null); 
    alert('Book updated successfully!');
  };

  const handleCancelEdit = () => {
    setEditingBook(null);
  };

  const handleDeleteBook = (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      deleteBook(id);
      alert('Book deleted successfully!');
    }
  };

  return (
    <div className="space-y-6">
      <BookForm
        bookToEdit={editingBook}
        onSubmit={editingBook ? handleUpdateBook : handleAddBook}
        onCancel={handleCancelEdit}
      />
      <BookList
        books={books}
        onEdit={handleEditBook}
        onDelete={handleDeleteBook}
      />
    </div>
  );
};

export default Home;