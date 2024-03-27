
import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Book = ({ book }) => {
    const { bookId, bookName, tags, category, author, image, rating } = book
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card w-full md:w-96 bg-base-100 shadow-xl cursor-pointer">
                <figure className="px-5 md:px-10 pt-5 md:pt-10 pb-3 bg-[#F3F3F3]">
                    <img style={{ transition: 'all .8s' }} src={image} alt={`picture of ${bookName}`} className="rounded-xl w-full md:w-60 hover:scale-105 h-60 md:h-auto" />
                </figure>
                <div className="card-body px-5 md:px-10">
                    <div className="flex flex-wrap gap-2 md:gap-5">
                        {tags.map((tag, ind) => (
                            <p style={{ transition: 'all .8s' }} className='text-xs md:text-sm rounded-3xl border px-2 border-[#23BE0A] text-[#23BE0A] cursor-pointer hover:bg-[#23BE0A] hover:text-white hover:text-sm hover:scale-105' key={ind}>{tag}</p>
                        ))}
                    </div>
                    <h2 style={{ transition: 'all .5s' }} className="card-title text-base md:text-lg hover:text-gray-400">{bookName}</h2>
                    <p className="text-xs md:text-sm">By: {author}</p>
                    <hr className='my-3 md:my-5' />
                    <div className="card-actions w-full">
                        <div className='flex justify-between items-center'>
                            <p className='text-xs md:text-sm'>{category}</p>
                            <p className='flex gap-1 items-center text-xs md:text-sm'><CiStar />{rating}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object
};

export default Book;