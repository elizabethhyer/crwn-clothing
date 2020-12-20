import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import * as sc from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => {
  return (
    <sc.CollectionPreviewContainer>
      <sc.TitleContainer>{title.toUpperCase()}</sc.TitleContainer>
      <sc.PreviewContainer>
        {items
          .filter((item, i) => i < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </sc.PreviewContainer>
    </sc.CollectionPreviewContainer>
  );
};

export default CollectionPreview;
