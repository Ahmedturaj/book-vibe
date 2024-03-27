import { useState, useEffect } from 'react';
import ReadBooks from '../ReadBooks/ReadBooks';
import WishListBooks from '../WishListBooks/WishListBooks';

const ListedBooks = () => {
    const [selectedTab, setSelectedTab] = useState('read');
    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);
    const [sortBy, setSortBy] = useState('rating');
    useEffect(() => {
        const readBooks = [];
        const wishlistBooks = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.includes('_read')) {
                readBooks.push(JSON.parse(localStorage.getItem(key)));
            } else if (key.includes('_wishlist')) {
                wishlistBooks.push(JSON.parse(localStorage.getItem(key)));
            }
        }
        setReadBooks(readBooks);
        setWishlistBooks(wishlistBooks);
    }, []);

    const handleSort = (sortBy) => {
        setSortBy(sortBy);
        if (sortBy === 'rating') {
            setReadBooks([...readBooks.sort((a, b) => b.rating - a.rating)]);
            setWishlistBooks([...wishlistBooks.sort((a, b) => b.rating - a.rating)]);
        } else if (sortBy === 'totalPages') {
            setReadBooks([...readBooks.sort((a, b) => b.totalPages - a.totalPages)]);
            setWishlistBooks([...wishlistBooks.sort((a, b) => b.totalPages - a.totalPages)]);
        } else if (sortBy === 'yearOfPublishing') {
            setReadBooks([...readBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)]);
            setWishlistBooks([...wishlistBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)]);
        }
    };

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <div>
            <div className="border bg-[#1313130D] my-14 p-7 rounded-2xl">
                <h2 className="text-center font-bold text-3xl">Books</h2>
            </div>
            <div className="flex items-center justify-center">
                <details className="dropdown mt-8
            mb-28 text-center">
                    <summary className="m-1 btn bg-[#23BE0A] hover:bg-[#23BE0A]">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><button onClick={() => handleSort('rating')}>Rating</button></li>
                        <li><button onClick={() => handleSort('totalPages')}>Number of Pages</button></li>
                        <li><button onClick={() => handleSort('yearOfPublishing')}>Published Year</button></li>
                    </ul>
                </details>
            </div>
            <div className="flex justify-start  mb-4">
                <button className={`px-1 text-xl ${selectedTab === 'read' ? 'font-bold border-t-2 border-r-2 border-l-2 border-black' : 'border-black border-b-2'}`} onClick={() => handleTabChange('read')}>
                    Read
                </button>
                <button className={`w-full flex items-start justify-start pl-2 text-xl ${selectedTab === 'wishlist' ? 'font-bold border-t-2 border-l-2 border-black' : 'border border-t-0 border-r-0 border-black border-b-2 w-full'}`} onClick={() => handleTabChange('wishlist')}>
                    Wishlist
                </button>
            </div>
            <div>
                {selectedTab === 'read' && (
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Read Books</h2>
                        <ul>
                            {readBooks.map((book) => (
                                <ReadBooks key={book.bookId} book={book} />
                            ))}
                        </ul>
                    </div>
                )}
                {selectedTab === 'wishlist' && (
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Wishlist Books</h2>
                        <ul>
                            {wishlistBooks.map((book) => (
                                <WishListBooks key={book.bookId} book={book} />
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListedBooks;
