'use client'
import { useState } from 'react'
import { Book, BookOpen, Bookmark, Star, Award, Edit2, Save, X } from 'lucide-react'
export default function BookLoverProfile() {
const [isEditing, setIsEditing] = useState(false)
const [userInfo, setUserInfo] = useState({
name: '',
location: '',
bio: '',
favoriteGenres: [''],
currentlyReading: '',
booksReadThisYear: '',
readingGoal: '',
favoriteQuote: '',
topAuthors: [''],
bookshelfSize: '',
favoriteBookstores: [''],
readingChallenges: [''],
})
const [bookList, setBookList] = useState([
{ id: 1, title: '', author: '', rating: 5 },
{ id: 2, title: '', author: '', rating: 5 },

])
const toggleEdit = () => setIsEditing(!isEditing)
const handleInputChange = (e) => {
const { name, value } = e.target
setUserInfo(prev => ({ ...prev, [name]: value }))
}
const handleArrayInputChange = (e) => {
const values = e.target.value.split(',').map(item => item.trim())
setUserInfo(prev => ({ ...prev, [field]: values }))
}
const addBook = () => {
const newBook = {
id: bookList.length + 1,
title: 'New Trainer',
author: 'Author Name',
rating: 0
}
setBookList([...bookList, newBook])
}
const updateBookRating = (id, newRating) => {
setBookList(bookList.map(book =>
book.id === id ? { ...book, rating: newRating } : book
));
};

return (
<div className="min-h-screen bg-amber-50 py-8">
<div className="container mx-auto px-4">
<div className="bg-white rounded-lg shadow-xl overflow-hidden">
<div className="relative h-48 bg-gradient-to-r from-amber-400 to-amber-600">
<div className="absolute bottom-0 left-0 w-full p-6 bg-black bg-opacity-50 text-white">
<h1 className="text-3xl font-bold">
{isEditing ? (
<input
type="text"
name="name"
value={userInfo.name}
onChange={handleInputChange}
className="bg-transparent border-b w-full"
/>
) : userInfo.name}
</h1>
<p className="text-amber-200">
{isEditing ? (
<input
type="text"
name="location"
value={userInfo.location}
onChange={handleInputChange}
className="bg-transparent border-b"
/>
) : userInfo.location}
</p>
</div>
</div>
<div className="p-6">
<div className="flex justify-end mb-4">
<button
onClick={toggleEdit}
className="flex items-center px-4 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600
transition-colors"
>
{isEditing ? (
<>
<Save className="w-4 h-4 mr-2" />
Save Profile
</>
) : (
<>
<Edit2 className="w-4 h-4 mr-2" />
Edit Profile
</>
)}
</button>
</div>
<section className="mb-8">
<h2 className="text-2xl font-semibold mb-2 flex items-center">
<Book className="w-6 h-6 mr-2 text-amber-500" />
About Me
</h2>

{isEditing ? (
<textarea
name="bio"
value={userInfo.bio}
onChange={handleInputChange}
className="w-full p-2 border rounded"
rows={4}
/>
) : (
<p className="text-gray-700">{userInfo.bio}</p>
)}
</section>
<section className="mb-8">
<h2 className="text-2xl font-semibold mb-2 flex items-center">
<BookOpen className="w-6 h-6 mr-2 text-amber-500" />
Reading Preferences
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<h3 className="font-semibold mb-1">Favorite Genres:</h3>
{isEditing ? (
<input
type="text"
value={userInfo.favoriteGenres.join(', ')}
onChange={(e) => handleArrayInputChange(e, 'favoriteGenres')}
className="w-full p-2 border rounded"
/>
) : (
<ul className="list-disc list-inside">
{userInfo.favoriteGenres.map((genre, index) => (
<li key={index}>{genre}</li>
))}
</ul>
)}
</div>
<div>
<h3 className="font-semibold mb-1">Top Authors:</h3>
{isEditing ? (
<input
type="text"
value={userInfo.topAuthors.join(', ')}
onChange={(e) => handleArrayInputChange(e, 'topAuthors')}
className="w-full p-2 border rounded"
/>
) : (
<ul className="list-disc list-inside">
{userInfo.topAuthors.map((author, index) => (
<li key={index}>{author}</li>
))}
</ul>
)}
</div>
</div>
</section>
<section className="mb-8">
<h2 className="text-2xl font-semibold mb-2 flex items-center">
<Bookmark className="w-6 h-6 mr-2 text-amber-500" />

Reading Activity
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div>
<h3 className="font-semibold mb-1">Currently Reading:</h3>
{isEditing ? (
<input
type="text"
name="currentlyReading"
value={userInfo.currentlyReading}
onChange={handleInputChange}
className="w-full p-2 border rounded"
/>
) : (
<p>{userInfo.currentlyReading}</p>
)}
</div>
<div>
<h3 className="font-semibold mb-1">Books Read This Year:</h3>
{isEditing ? (
<input
type="number"
name="booksReadThisYear"
value={userInfo.booksReadThisYear}
onChange={handleInputChange}
className="w-full p-2 border rounded"
/>
) : (
<p>{userInfo.booksReadThisYear}</p>
)}
</div>
<div>
<h3 className="font-semibold mb-1">Reading Goal:</h3>
{isEditing ? (
<input
type="number"
name="readingGoal"
value={userInfo.readingGoal}
onChange={handleInputChange}
className="w-full p-2 border rounded"
/>
) : (
<p>{userInfo.readingGoal} books</p>
)}
</div>
</div>
</section>
<section className="mb-8">
<h2 className="text-2xl font-semibold mb-2 flex items-center">
<Star className="w-6 h-6 mr-2 text-amber-500" />
Favorite Quote
</h2>
{isEditing ? (
<textarea
name="favoriteQuote"
value={userInfo.favoriteQuote}
onChange={handleInputChange}
className="w-full p-2 border rounded"

rows={3}
/>
) : (
<blockquote className="italic border-l-4 border-amber-500 pl-4 py-2 text-gray-700">
{userInfo.favoriteQuote}
</blockquote>
)}
</section>
<section className="mb-8">
<h2 className="text-2xl font-semibold mb-2 flex items-center">
<Award className="w-6 h-6 mr-2 text-amber-500" />
Reading Challenges
</h2>
{isEditing ? (
<textarea
value={userInfo.readingChallenges.join('\n')}
onChange={(e) => setUserInfo(prev => ({ ...prev, readingChallenges: e.target.value.split('\n') }))}
className="w-full p-2 border rounded"
rows={4}
/>
) : (
<ul className="list-disc list-inside">
{userInfo.readingChallenges.map((challenge, index) => (
<li key={index}>{challenge}</li>
))}
</ul>
)}
</section>
<section className="mb-8">
<h2 className="text-2xl font-semibold mb-2 flex items-center">
<Book className="w-6 h-6 mr-2 text-amber-500" />
My Bookshelf
</h2>
<div className="mb-4">
<button
onClick={addBook}
className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
>
Add Book
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full border-collapse">
<thead>
<tr className="bg-amber-100">
<th className="border p-2 text-left">Title</th>
<th className="border p-2 text-left">Author</th>
<th className="border p-2 text-left">Rating</th>
</tr>
</thead>
<tbody>
{bookList.map(book => (
<tr key={book.id} className="hover:bg-amber-50">
<td className="border p-2">
{isEditing ? (
<input
type="text"

value={book.title}
onChange={(e) => setBookList(bookList.map(b => b.id === book.id ? { ...b, title: e.target.value } : b))}
className="w-full p-1 border rounded"
/>
) : book.title}
</td>
<td className="border p-2">
{isEditing ? (
<input
type="text"
value={book.author}
onChange={(e) => setBookList(bookList.map(b => b.id === book.id ? { ...b, author: e.target.value } : b))}
className="w-full p-1 border rounded"
/>
) : book.author}
</td>
<td className="border p-2">
<div className="flex items-center">
{[1, 2, 3, 4, 5].map((star) => (
<button
key={star}
onClick={() => updateBookRating(book.id, star)}
className={`w-6 h-6 ${star <= book.rating ? 'text-yellow-400' : 'text-gray-300'} ${isEditing ? '' :

'pointer-events-none'}`}
>
★
</button>
))}
</div>
</td>
</tr>
))}
</tbody>
</table>
</div>
</section>
</div>
</div>
</div>
</div>
)
}