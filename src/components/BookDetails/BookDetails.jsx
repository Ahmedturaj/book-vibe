import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
const BookDetails = () => {
    const books = useLoaderData()
    const { id } = useParams()
    const book = books.find(book => book.bookId === parseInt(id));
    const { bookName, tags, category, author, image, rating, review, totalPages, publisher, yearOfPublishing } = book;
    const isBookAddedToRead = localStorage.getItem(`book_${id}_read`);
    const isBookAddedToWishList = localStorage.getItem(`book_${id}_wishlist`);
    const [addedToRead, setAddedToRead] = useState(isBookAddedToRead);
    const [addedToWishlist, setAddedToWishlist] = useState(isBookAddedToWishList);

    const handleRead = () => {
     if (!addedToRead) {
            localStorage.setItem(`book_${id}_read`, JSON.stringify(book));
            toast.success("Success! Book added to Read list.");
            setAddedToRead(true);
        } else {
            toast.warning("Oops! This book is already in your Read list.");
        }
    };
    

    const handleWishList = () => {
        if (!addedToRead && !addedToWishlist) {
            setAddedToWishlist(true);
            localStorage.setItem(`book_${id}_wishlist`, JSON.stringify(book));
            toast.success("Success! Book added to Wishlist.", "success");
        } else if (addedToRead) {
            toast.warning("Oops! You have already added this book to Read list.", "warning");
        } else {
            toast.warning("Oops! This book is already in your Wishlist.", "warning");
        }
    };
    return (
        <div className="mt-14 rounded-md">
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className="flex flex-col md:flex-row gap-x-6 md:items-center justify-center">
                <div className="flex-shrink-0">
                    <img src={image} className="w-80 md:w-96 rounded-lg shadow-2xl" alt={bookName} />
                </div>
                <div className="mt-6 md:mt-0">
                    <h1 className="text-4xl font-bold">{bookName}</h1>
                    <p className="py-2">By: {author}</p>
                    <hr className="my-2" />
                    <p>{category}</p>
                    <hr className="my-2" />
                    <p className="mb-6">{review}</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="font-bold text-xl">Tag</span>
                        {tags.map((tag, ind) => (
                            <p style={{transition:'all .6s'}}
                                key={ind}
                                className="text-base rounded-full border px-2 border-[#23BE0A] text-[#23BE0A] cursor-pointer hover:bg-[#23BE0A] hover:text-white hover:text-xl hover:scale-105 flex items-center justify-center"
                            >
                                #{tag}
                            </p>
                        ))}
                    </div>
                    <hr className="my-2" />
                    <div className="w-full md:w-4/6">
                        <div className="flex justify-between items-center mb-2">
                            <p>Number of Pages :</p>
                            <p className="font-bold">{totalPages}</p>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <p>Publisher :</p>
                            <p className="font-bold">{publisher}</p>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <p>Year Of Publishing :</p>
                            <p className="font-bold">{yearOfPublishing}</p>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <p>Rating :</p>
                            <p className="font-bold">{rating}</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between mt-6 w-full md:w-4/6">
                        <button
                            onClick={handleRead}
                            className="btn btn-outline w-full md:w-auto"
                        >
                            Read
                        </button>
                        <button
                            onClick={handleWishList}
                            className="btn bg-[#50B1C9] w-full md:w-auto mt-2 md:mt-0"
                        >
                            WishList
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ToastContainer />
</div>

    );
};

export default BookDetails;