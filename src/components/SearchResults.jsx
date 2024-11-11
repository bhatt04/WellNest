// import React, { useEffect, useState } from "react";
// import { useLocation, Link } from "react-router-dom";
// import axios from "axios";

// const SearchResults = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const query = new URLSearchParams(useLocation().search).get("query");

//   const fetchBooks = async () => {
//     if (!query) return;

//     try {
//       const res = await axios.get(
//         `https://www.googleapis.com/books/v1/volumes?q=${query}`
//       );
//       setBooks(res.data.items || []);
//     } catch (err) {
//       setError("Error fetching search results. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, [query]);

//   if (loading) {
//     return <div className="text-center">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500 text-center">{error}</div>;
//   }

//   return (
//     <div className="container mx-auto py-6">
//       <h2 className="text-2xl font-semibold mb-4">
//         Search Results for: "{query}"
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {books.map((book) => (
//           <Link
//             to={`/books/${book.id}`} // Updated path to match your routing
//             key={book.id}
//             className="flex flex-col items-center bg-white p-4 rounded shadow hover:shadow-lg transition duration-300"
//           >
//             {book.volumeInfo.imageLinks &&
//             book.volumeInfo.imageLinks.thumbnail ? (
//               <img
//                 src={book.volumeInfo.imageLinks.thumbnail}
//                 alt={book.volumeInfo.title}
//                 className="w-32 h-auto mb-2 rounded"
//               />
//             ) : (
//               <div className="bg-gray-300 w-32 h-48 flex items-center justify-center rounded mb-2">
//                 <span className="text-gray-600">No Image</span>
//               </div>
//             )}
//             <h3 className="font-bold text-center">{book.volumeInfo.title}</h3>
//             <p className="text-gray-600 text-center">
//               Authors:{" "}
//               {book.volumeInfo.authors
//                 ? book.volumeInfo.authors.join(", ")
//                 : "Unknown"}
//             </p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchResults;


import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
const SearchResults = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const query = new URLSearchParams(useLocation().search).get("query");
  const fetchBooks = async () => {
    if (!query) return;
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      setBooks(res.data.items || []);
    } catch (err) {
      setError("Error fetching search results. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, [query]);
  if (loading) {
    return <div className="text-center">Loading...</div>;
  }
  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }
  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-semibold mb-4">
        Search Results for: "{query}"
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <Link
            to={`/books/${book.id}`} // Updated path to match your routing
            key={book.id}
            className="flex flex-col items-center bg-white p-4 rounded shadow hover:shadow-lg transition duration-300"
          >
            {book.volumeInfo.imageLinks &&
            book.volumeInfo.imageLinks.thumbnail ? (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                className="w-32 h-auto mb-2 rounded"
              />
            ) : (
              <div className="bg-gray-300 w-32 h-48 flex items-center justify-center rounded mb-2">
                <span className="text-gray-600">No Image</span>
              </div>
            )}
            <h3 className="font-bold text-center">{book.volumeInfo.title}</h3>
            <p className="text-gray-600 text-center">
              Authors:{" "}
              {book.volumeInfo.authors
                ? book.volumeInfo.authors.join(", ")
                : "Unknown"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default SearchResults;