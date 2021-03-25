import {connect} from 'react-redux';
import {getCardsForSearchResult} from '../../redux/cardsRedux'
import SearchResults from './SearchResults';

const mapStateToProps = (state, props) => {
    const searchString = props.match.params.searchString;
    return {
    cards: getCardsForSearchResult(state, searchString)
    };
};

export default connect(mapStateToProps)(SearchResults);
