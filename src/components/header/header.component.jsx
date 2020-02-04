import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createStructuredSelector} from 'reselect';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv} from './header.styles';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import firebase from 'firebase/app';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUsers} from '../../redux/user/user.selectors';

const Header = ({currentUser, hidden}) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/contact">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => firebase.auth().signOut()}>
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionLink to="/signin">
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

// PropTypes Velidation
Header.propTypes = {
  currentUser: PropTypes.object,
  hidden: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUsers,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
