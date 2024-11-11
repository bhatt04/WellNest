import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Book,
  Bell,
  X,
  ChevronDown,
  ChevronUp,
  Star,
  BookOpen,
  Trophy,
  PenTool,
  Send,
} from "lucide-react"; // lucide-react import
import { useSpring, animated } from "@react-spring/web";
export default function Component() {
  const { selectedGenres } = useUser();
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [latestUpdates, setLatestUpdates] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [expandedBook, setExpandedBook] = useState(null);
  const [storyTitle, setStoryTitle] = useState("");
  const [storyContent, setStoryContent] = useState("");
  const navigate = useNavigate();
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  const fetchRecommendedBooks = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      if (selectedGenres.length === 0) {
        setRecommendedBooks([]);
        setLoading(false);
        return;
      }
      const results = await Promise.all(
        selectedGenres.map((genre) =>
          axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&maxResults=10`
          )
        )
      );

      const allBooks = results.flatMap((res) => res.data.items || []);
      setRecommendedBooks(allBooks);
    } catch (error) {
      console.error("Error fetching recommended books:", error);
      setError("Error fetching recommended books.");
    } finally {
      setLoading(false);
    }
  }, [selectedGenres]);
  const searchBooks = async () => {
    if (!searchTerm) return;
    setLoading(true);
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=20`
      );
      setSearchResults(res.data.items || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setError("Error fetching search results.");
    } finally {
      setLoading(false);
    }
  };
  const fetchLatestUpdates = () => {
    const updates = [
      { id: 1, title: "New Release: The Great Adventure", author: "John Doe" },
      {
        id: 2,
        title: "Best Seller: Journey to the Unknown",
        author: "Jane Smith",
      },
      {
        id: 3,
        title: "Upcoming: Secrets of the Universe",
        author: "Alice Johnson",
      },
    ];
    setLatestUpdates(updates);
  };
  useEffect(() => {
    fetchRecommendedBooks();
    fetchLatestUpdates();
  }, [fetchRecommendedBooks]);
  const toggleFavorite = (book) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((fav) => fav.id === book.id);
      if (isFavorite) {
        return prevFavorites.filter((fav) => fav.id !== book.id);
      } else {
        return [...prevFavorites, book];
      }
    });
  };
  const toggleReadBook = (book) => {
    setReadBooks((prevReadBooks) => {
      const isRead = prevReadBooks.some((readBook) => readBook.id === book.id);
      if (isRead) {
        return prevReadBooks.filter((readBook) => readBook.id !== book.id);
      } else {
        return [...prevReadBooks, book];
      }
    });
  };
  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
  };
  const handleStorySubmit = (e) => {
    e.preventDefault();
    console.log("Story submitted:", {
      title: storyTitle,
      content: storyContent,
    });
    setStoryTitle("");
    setStoryContent("");
    alert("Your story has been submitted successfully!");
  };
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-primary">
        Loading...
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        {error}
      </div>
    );
  }
  return (
    <div className="flex flex-col min-h-screen bg-purple-100">
      <animated.div style={fadeIn}>
        <main className="flex-grow p-4 md:p-6">
          <div className="max-w-8xl mx-auto">
            <div className="flex flex-col md:flex-row gap-7">
              {/* Main Content */}
              <div className="flex-grow">
                {/* Search Input */}
                <div className="mb-6">
                  <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden">
                    <input
                      type="text"
                      placeholder="Search for books..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="flex-grow p-3 focus:outline-none"
                    />
                    {searchTerm && (
                      <button
                        onClick={clearSearch}
                        className="p-3 text-gray-500 hover:text-gray-700"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                    <button
                      onClick={searchBooks}
                      className="bg-primary text-primary-foreground p-3 transition duration-300 hover:bg-primary/90"
                    >
                      <Search className="w-5 h-5" />
                      <span className="sr-only">Search</span>
                    </button>
                  </div>
                </div>

                {/* Favorites Toggle */}
                <div className="mb-4">
                  <button
                    onClick={() => setShowFavorites(!showFavorites)}
                    className="flex items-center text-primary font-semibold"
                  >
                    {showFavorites ? (
                      <ChevronUp className="w-4 h-4 mr-1" />
                    ) : (
                      <ChevronDown className="w-4 h-4 mr-1" />
                    )}
                    {showFavorites ? "Hide Favorites" : "Show Favorites"}
                  </button>
                </div>
                {/* Favorites */}
                {showFavorites && (
                  <section className="mb-6">
                    <h2 className="text-xl font-bold mb-3 text-primary">
                      Your Favorites
                    </h2>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
                      {favorites.map((book) => (
                        <BookCard
                          key={book.id}
                          book={book}
                          onClick={() => setExpandedBook(book)}
                          onFavoriteToggle={() => toggleFavorite(book)}
                          onReadToggle={() => toggleReadBook(book)}
                          isFavorite={true}
                          isRead={readBooks.some(
                            (readBook) => readBook.id === book.id
                          )}
                        />
                      ))}
                    </div>
                  </section>
                )}
                {/* Search Results */}
                {searchResults.length > 0 && (
                  <section className="mb-6">
                    <h2 className="text-xl font-bold mb-3 text-primary">
                      Search Results
                    </h2>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5">
                      {searchResults.map((book) => (
                        <BookCard
                          key={book.id}
                          book={book}
                          onClick={() => setExpandedBook(book)}
                          onFavoriteToggle={() => toggleFavorite(book)}
                          onReadToggle={() => toggleReadBook(book)}
                          isFavorite={favorites.some(
                            (fav) => fav.id === book.id
                          )}
                          isRead={readBooks.some(
                            (readBook) => readBook.id === book.id
                          )}
                        />
                      ))}
                    </div>
                  </section>
                )}
                {/* Recommended Books */}
                <section>
                  <h2 className="text-xl font-bold mb-3 text-primary">
                    Recommended Books
                  </h2>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5">
                    {recommendedBooks.map((book) => (
                      <BookCard
                        key={book.id}
                        book={book}
                        onClick={() => setExpandedBook(book)}
                        onFavoriteToggle={() => toggleFavorite(book)}
                        onReadToggle={() => toggleReadBook(book)}
                        isFavorite={favorites.some((fav) => fav.id === book.id)}
                        isRead={readBooks.some(
                          (readBook) => readBook.id === book.id
                        )}
                      />
                    ))}
                  </div>
                </section>
              </div>
              {/* Side Column */}
              <aside className="w-1/2 md:w-90 space-y-7">
                {/* Latest Book Updates */}
                <div
                  className="bg-gradient-to-br from-purple-950 via-purple-400 to-purple-950 text-primary p-4
rounded-lg shadow-md"
                >
                  <h2 className="text-xl font-bold mb-4 flex items-center text-white">
                    <Bell className="w-5 h-5 mr-2 text-white font-bold " />
                    Latest Updates
                  </h2>
                  <div className="space-y-3">
                    {latestUpdates.map((update) => (
                      <div
                        key={update.id}
                        className="p-3 bg-gray-100 rounded-lg transition-transform transform hover:scale-105 cursor-pointer"
                        // onClick={() => navigate(`/books/${update.id}`)}
                      >
                        <h3 className="font-bold text-sm">{update.title}</h3>
                        <p className="text-gray-600 text-xs">
                          By: {update.author}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Books Read Section */}
                <div
                  className="bg-gradient-to-br from-purple-950 via-purple-400 to-purple-950 text-primary p-4
rounded-lg shadow-md"
                >
                  <h2 className="text-xl font-bold mb-4 flex items-center text-white">
                    <BookOpen className="w-5 h-5 mr-2 text-white" />
                    Books I've Read
                  </h2>
                  <div className="text-center">
                    <p className="text-7xl font-bold text-primary mb-2 text-white">
                      {readBooks.length}
                    </p>
                    <p className="text-sm text-gray-600 ">Total Books Read</p>
                  </div>
                  {readBooks.length > 0 && (
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold mb-2">
                        Recently Read:
                      </h3>
                      <ul className="space-y-2">
                        {readBooks
                          .slice(-3)
                          .reverse()
                          .map((book) => (
                            <li key={book.id} className="text-sm truncate">
                              {book.volumeInfo.title}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                  {readBooks.length >= 10 && (
                    <div className="mt-4 bg-yellow-100 p-2 rounded-md flex items-center">
                      <Trophy className="w-5 h-5 text-yellow-500 mr-2" />
                      <p className="text-sm text-yellow-700">
                        Reading Champion!
                      </p>
                    </div>
                  )}
                </div>
                {/* Write Your Story Section */}
                <div
                  className="bg-gradient-to-br from-purple-950 via-purple-400 to-purple-950 text-primary p-4
rounded-lg shadow-md"
                >
                  <h2 className="text-xl font-bold mb-4 flex items-center text-white">
                    <PenTool className="w-5 h-5 mr-2 text-white" />
                    Publish Your Story
                  </h2>
                  <form onSubmit={handleStorySubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="story-title"
                        className="block text-sm font-medium text-white "
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id="story-title"
                        value={storyTitle}
                        onChange={(e) => setStoryTitle(e.target.value)}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring

focus:ring-primary focus:ring-opacity-50"
                        placeholder="Enter your story title"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="story-content"
                        className="block text-sm font-medium text-white"
                      >
                        Content
                      </label>
                      <textarea
                        id="story-content"
                        value={storyContent}
                        onChange={(e) => setStoryContent(e.target.value)}
                        required
                        rows={4}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring

focus:ring-primary focus:ring-opacity-50"
                        placeholder="Write your story here..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground px-4 text-white py-2 rounded-md
hover:bg-primary/90 transition duration-300 flex items-center justify-center"
                    >
                      <Send className="w-5 h-5 mr-2 text-white" />
                      Submit Story
                    </button>
                  </form>
                </div>
              </aside>
            </div>
          </div>
        </main>
      </animated.div>

      {/* Expanded Book Modal */}
      {expandedBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">
                {expandedBook.volumeInfo.title}
              </h2>
              <button
                onClick={() => setExpandedBook(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex mb-4">
              <img
                src={
                  expandedBook.volumeInfo.imageLinks?.thumbnail ||
                  "/placeholder.svg"
                }
                alt={expandedBook.volumeInfo.title}
                className="w-32 h-auto object-cover rounded mr-4"
              />
              <div>
                <p className="text-gray-600 mb-2">
                  {expandedBook.volumeInfo.authors?.join(", ")}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  {expandedBook.volumeInfo.publishedDate}
                </p>
                <p className="text-sm">{expandedBook.volumeInfo.description}</p>
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => {
                  toggleFavorite(expandedBook);
                  setExpandedBook(null);
                }}
                className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition
duration-300"
              >
                {favorites.some((fav) => fav.id === expandedBook.id)
                  ? "Remove from Favorites"
                  : "Add to Favorites"}
              </button>
              <button
                onClick={() => {
                  toggleReadBook(expandedBook);
                  setExpandedBook(null);
                }}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
              >
                {readBooks.some((readBook) => readBook.id === expandedBook.id)
                  ? "Mark as Unread"
                  : "Mark as Read"}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Footer */}
      <footer className="bg-purple-900 text-purple-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">BookNook</h3>
              <p>Connecting readers with their perfect books.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 BookNook. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
function BookCard({
  book,
  onClick,
  onFavoriteToggle,
  onReadToggle,
  isFavorite,
  isRead,
}) {
  return (
    <div
      className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform transform hover:scale-105
cursor-pointer relative"
      onClick={onClick}
    >
      <div className="aspect-w-2 aspect-h-3 bg-gray-200">
        {book.volumeInfo.imageLinks?.thumbnail ? (
          <img
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <Book className="w-6 h-6 text-gray-400" />
          </div>
        )}
      </div>
      <div className="p-1">
        <h3 className="font-bold text-gray-800 text-xs mb-0.5 line-clamp-1">
          {book.volumeInfo.title}
        </h3>
        {book.volumeInfo.authors && (
          <p className="text-gray-600 text-xs line-clamp-1">
            {book.volumeInfo.authors[0]}
          </p>
        )}
      </div>
      <div className="absolute top-1 right-1 flex space-x-1">
        <button
          className="p-1 bg-white rounded-full shadow-md"
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteToggle();
          }}
        >
          <Star
            className={`w-3 h-3 ${
              isFavorite ? "text-yellow-400 fill-current" : "text-gray-400"
            }`}
          />
        </button>
        <button
          className="p-1 bg-white rounded-full shadow-md"
          onClick={(e) => {
            e.stopPropagation();
            onReadToggle();
          }}
        >
          <BookOpen
            className={`w-3 h-3 ${isRead ? "text-green-500" : "text-gray-400"}`}
          />
        </button>
      </div>
    </div>
  );
}
