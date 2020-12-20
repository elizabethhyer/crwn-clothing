import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import * as sc from "./headers.styles";

const Header = ({ currentUser, hidden }) => {
  return (
    <sc.HeaderContainer>
      <sc.LogoContainer to="/">
        <Logo className="logo" />
      </sc.LogoContainer>
      <sc.OptionsContainer>
        <sc.OptionLink to="/shop">SHOP</sc.OptionLink>
        <sc.OptionLink to="/shop">CONTACT</sc.OptionLink>
        {currentUser ? (
          <sc.OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </sc.OptionLink>
        ) : (
          <sc.OptionLink to="/signin">SIGN IN</sc.OptionLink>
        )}
        <CartIcon />
      </sc.OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </sc.HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
}); //instead of passing in top level state and passing in state individually each time, we can use createStructuredSelector call, pointing properties we want to the relevant selector, and then createStructuredSelector will automatically pass top level state that we get in with mapStateToProps into each selector

export default connect(mapStateToProps)(Header);
