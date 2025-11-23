import './index.css'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import dummyBooks from './data/dummyBooks'; 

function App() {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem('bookshelf_books');
    return savedBooks ? JSON.parse(savedBooks) : dummyBooks;
  });

  useEffect(() => {
    localStorage.setItem('bookshelf_books', JSON.stringify(books));
  }, [books]);

  const addBook = (newBook) => {
    setBooks((prevBooks) => [
      { ...newBook, id: String(prevBooks.length + 1) }, 
      ...prevBooks,
    ]);
  };

  const updateBook = (updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
  };

  const deleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4 mt-4">
        <Routes>
          <Route
            path="/"
            element={<Home books={books} addBook={addBook} updateBook={updateBook} deleteBook={deleteBook} />}
          />
          <Route
            path="/book/:id"
            element={<BookDetail books={books} updateBook={updateBook} deleteBook={deleteBook} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;