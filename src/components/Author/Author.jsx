
import PropTypes from 'prop-types';

const Author = ({ author }) => {
    const { name, image, birthDate, deathDate, lifeInfo } = author;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className='h-96'><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                      {name}
                        <div className="badge badge-secondary">Writer</div>
                    </h2>
                    <p>{lifeInfo}</p>
                    <div className="card-actions flex  justify-end">
                        <div className="badge badge-outline">Birth date : {birthDate}</div>
                        <div className="badge badge-outline">Death date :{deathDate||"Not death"}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Author.propTypes = {
    author: PropTypes.object
};

export default Author;