
import PropTypes from 'prop-types';
import ListedCard from '../ListedBooks/ListedCard/ListedCard';

const WishListBooks =({book}) => {
    return (
        <div>
            <ListedCard book={book}></ListedCard>
        </div>
    );
};

WishListBooks.propTypes = {
    book:PropTypes.object
};

export default WishListBooks;