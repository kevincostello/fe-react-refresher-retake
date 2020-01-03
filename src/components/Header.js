import React from "react";

const Header = ({ loggedInUser }) => {
  return <h1>Welcome {loggedInUser.name}</h1>;
};

export default Header;
