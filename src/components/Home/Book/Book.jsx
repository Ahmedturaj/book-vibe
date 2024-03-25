
import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";
const Book = ({ book }) => {
    const {bookName,tags,category,author,image,rating}=book
    return (
        <div className="card w-96 bg-base-100 shadow-xl cursor-pointer">
            <figure className="px-10 pt-10 pb-3 bg-[#F3F3F3]">
                <img style={{transition:'all .8s'}} src={image} alt={`picture of ${bookName}`} className="rounded-xl w-60 hover:scale-105 h-60" />
            </figure>
            <div className="card-body">
                <div className="flex gap-5">
                    {
                        tags.map((tag, ind)=><p  style={{transition:'all .8s'}}className='text-xs rounded-3xl border px-2 border-[#23BE0A] text-[#23BE0A] cursor-pointer hover:bg-[#23BE0A] hover:text-white hover:text-sm hover:scale-105' key={ind}>{tag}</p>)
                    }
                </div>
                <h2 style={{transition:'all .5s'}}  className="card-title hover:text-gray-400">{bookName}</h2>
                <p>By: {author}</p>
                <hr  className='my-5'/>
                <div className="card-actions w-full">
                   <div className='flex justify-between items-stretch w-full'>
                    <p className='text-sm'>{category}</p>
                    <p className='flex gap-2 justify-center items-center'><CiStar/>{rating}</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object
};

export default Book;