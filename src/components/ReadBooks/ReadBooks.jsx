
import PropTypes from 'prop-types';
import ListedCard from '../ListedBooks/ListedCard/ListedCard';

const ReadBooks = ({book}) => {
    return (
        <div className=''>
            <ListedCard book={book}></ListedCard>
        </div>
    );
};

ReadBooks.propTypes = {
  book:PropTypes.object  
};

export default ReadBooks;