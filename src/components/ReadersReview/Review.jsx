
import PropTypes from 'prop-types';

const Review = ({ review }) => {
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className='h-96'><img src={review.picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{review.reader}
                        <div className="badge badge-secondary">Reader</div>
                    </h2>
                    <h2 className="card-title">Book Name: {review.name}
                    </h2>
                    <p>{review.mainPoint}</p>
                </div>
            </div>
        </div>
    );
};

Review.propTypes = {
    review: PropTypes.object
};

export default Review;