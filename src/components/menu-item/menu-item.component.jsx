import React from "react";
import { withRouter } from "react-router-dom";
//withRouter is higher order component (a function that takes a component as an argument, and returns back to you a modified component.)
import * as sc from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <sc.MenuItemContainer
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <sc.BackgroundImageContainer
        className="background-image"
        imageUrl={imageUrl}
      />
      <sc.ContentContainer>
        <sc.ContentTitle>{title.toUpperCase()}</sc.ContentTitle>
        <sc.ContentSubtitle>SHOP NOW</sc.ContentSubtitle>
      </sc.ContentContainer>
    </sc.MenuItemContainer>
  );
};
export default withRouter(MenuItem); //now that we've sent the component into withRouter, we have access to history
