import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import * as sc from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <sc.CollectionItemContainer>
      <sc.BackgroundImage className="image" imageUrl={imageUrl} />
      <sc.CollectionFooterContainer>
        <sc.NameContainer>{name}</sc.NameContainer>
        <sc.PriceContainer>{price}</sc.PriceContainer>
      </sc.CollectionFooterContainer>
      <sc.AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </sc.AddButton>
    </sc.CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
