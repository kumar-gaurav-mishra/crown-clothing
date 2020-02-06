import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import firebase from 'firebase/app';
import {createStructuredSelector} from 'reselect';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {
  createUserProfileDocument,
  // addColllectionAndDocuments
} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUsers} from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';
// --------------------------
// import { selectShopCollectionForPreview } from './redux/shop/shop.selector';
class App extends React.Component {
  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = firebase.auth().onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
      // addColllectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})));
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/signin" component={SignInAndSignUp} />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}
App.propTypes = {
  setCurrentUser: PropTypes.func,
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUsers,
  // collectionsArray : selectShopCollectionForPreview
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
