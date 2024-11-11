// components/AuthorBooks.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const AuthorBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const query = new URLSearchParams(useLocation().search);
  const author = query.get("author");
  const navigate = useNavigate(); // Use navigate for redirection

  const fetchAuthorBooks = async () => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}`
      );
      setBooks(res.data.items || []);
    } catch (err) {
      setError("Error fetching author's books. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAuthorBooks();
  }, [author]);

  const handleBookClick = (bookId) => {
    navigate(`/books/${bookId}`); // Navigate to BookDetails on click
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-4">Books by {author}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="border rounded-lg p-4 shadow-lg cursor-pointer"
            onClick={() => handleBookClick(book.id)} // Make book clickable
          >
            {book.volumeInfo.imageLinks && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                className="mb-2 rounded"
              />
            )}
            <h3 className="font-bold">{book.volumeInfo.title}</h3>
            {book.volumeInfo.authors && (
              <p className="text-gray-600">
                Authors: {book.volumeInfo.authors.join(", ")}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorBooks;