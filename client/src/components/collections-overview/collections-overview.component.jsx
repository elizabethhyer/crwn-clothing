import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import * as sc from "./collections-overview.styles";

const CollectionsOverview = ({ collections }) => {
  return (
    <sc.CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </sc.CollectionsOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
//Using match.path will allow us to build our routes off of the shop page, even if we don't know where our shop page is currently. (a console.log of match here will show us that match === shop page) - our shop page only cares that whatever comes next will be placed after wherever it's currently placed on the path.
