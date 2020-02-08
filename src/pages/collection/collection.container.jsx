import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsLoaded} from '../../redux/shop/shop.selector';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import Collection from './collection.component';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectCollectionsLoaded(state),
});

const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(Collection);

export default CollectionContainer;
