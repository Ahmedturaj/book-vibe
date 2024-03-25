import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const loader = async () => {
            const res = await fetch('books.json');
            const data = await res.json();
            setBooks(data);
        }
        loader();
    }, [])
    return (
        <div>
            <h2 className="text-center font-extrabold text-3xl">Books</h2>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;