import { useState, useEffect } from "react";
import ReadBooks from "../ReadBooks/ReadBooks";
import WishListBooks from "../WishListBooks/WishListBooks";

const ListedBooks = () => {
    const [selectedTab, setSelectedTab] = useState("read");
    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);

    useEffect(() => {
        const readBooks = [];
        const wishlistBooks = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            console.log(key);
            if (key.includes("_read")) {
                readBooks.push(JSON.parse(localStorage.getItem(key)));
            }
            else if (key.includes("_wishlist")) {
                wishlistBooks.push(JSON.parse(localStorage.getItem(key)));
            }
        }
        setReadBooks(readBooks);
        setWishlistBooks(wishlistBooks);
    }, []);


    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    const handleSort = (sortBy) => {
        if (sortBy === "rating") {
            setReadBooks([...readBooks.sort((a, b) => b.rating - a.rating)]);
            setWishlistBooks([...wishlistBooks.sort((a, b) => b.rating - a.rating)]);
        } else if (sortBy === "totalPages") {
            setReadBooks([...readBooks.sort((a, b) => a.totalPages - b.totalPages)]);
            setWishlistBooks([...wishlistBooks.sort((a, b) => a.totalPages - b.totalPages)]);
        } else if (sortBy === "yearOfPublishing") {
            setReadBooks([...readBooks.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing)]);
            setWishlistBooks([...wishlistBooks.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing)]);
        }
    };

    return (
        <div>
            <div className="border bg-[#1313130D] my-14 p-7 rounded-2xl">
                <h2 className="text-center font-bold text-3xl">Books</h2>
            </div>
            <div className="flex justify-center mb-4">
                <select onChange={(e) => handleSort(e.target.value)} className="p-2 border border-gray-300 rounded-md bg-[#23BE0A] text-white">
                    <option value="rating">Rating</option>
                    <option value="totalPages">Number of Pages</option>
                    <option value="yearOfPublishing">Published Year</option>
                </select>
            </div>
            <div className="flex justify-start  mb-4">
                <button className={`px-1 text-xl ${selectedTab === "read" ? "font-bold border-t-2 border-r-2 border-l-2 border-black" : "border-black border-b-2"}`} onClick={() => handleTabChange("read")}>Read</button>
                <button className={`w-full flex items-start justify-start pl-2 text-xl ${selectedTab === "wishlist" ? "font-bold border-t-2 border-l-2 border-black" : "border border-t-0 border-r-0 border-black border-b-2 w-full"}`} onClick={() => handleTabChange("wishlist")}>Wishlist</button>
            </div>
            <div>
                {selectedTab === "read" && (
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Read Books</h2>
                        <ul>
                            {readBooks.map(book => <ReadBooks key={book.bookId} book={book}></ReadBooks>)}
                        </ul>
                    </div>
                )}
                {selectedTab === "wishlist" && (
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Wishlist Books</h2>
                        <ul>
                            {wishlistBooks.map(book => <WishListBooks key={book.bookId} book={book}></WishListBooks>)}
                        </ul>
                    </div>
                )}
            </div>
        </div>
       
    );
};

export default ListedBooks;
