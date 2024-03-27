
import PropTypes from 'prop-types';
import { IoLocationSharp, IoPersonSharp } from "react-icons/io5";
import { FaRegFile } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ListedCard = ({ book }) => {
    const { bookId, bookName, tags, category, author, image, rating, totalPages, publisher, yearOfPublishing } = book;
    return (
        <div className='mb-8'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt={`image of ${bookName}`} className='w-60' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">{bookName}</h2>
                    <p className='text-xl'>By: {author}</p>
                    <div className="flex flex-col md:flex-row items-start justify-start gap-5">
                        <div className="flex flex-col md:flex-row gap-5">
                            <span className="font-bold text-xl">Tag</span> {
                                tags.map((tag, ind) => <p style={{ transition: 'all .6s' }} className='text-xs rounded-3xl border px-2 border-[#23BE0A] text-[#23BE0A] cursor-pointer hover:bg-[#23BE0A] hover:text-white hover:text-sm hover:scale-105 flex items-center justify-center' key={ind}>#{tag}</p>)
                            }
                        </div>
                        <div>
                            <p className='flex justify-center items-center gap-3'><IoLocationSharp></IoLocationSharp> Year of Publishing: {yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-start justify-start gap-5">
                        <p className='flex justify-start items-center gap-3'><IoPersonSharp></IoPersonSharp> publisher:{publisher}</p>
                        <p className='flex justify-start items-center gap-3'><FaRegFile></FaRegFile> Pages:
                            {totalPages}</p>
                    </div>
                    <hr className='my-5' />
                    <div className="card-actions justify-start">
                        <span className="btn text-[#328EFF] bg-[#328EFF26] rounded-3xl">Category: {category}</span>
                        <span className="btn text-[#FFAC33] bg-[#FFAC3326] rounded-3xl">Rating: {rating}</span>
                        <Link to={`/bookDetails/${bookId}`} className="btn 
                        bg-[#23BE0A] rounded-3xl">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ListedCard.propTypes = {
    book: PropTypes.object
};

export default ListedCard;