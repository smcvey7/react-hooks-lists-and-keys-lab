import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"].map(link => <a key = {link} href={"#" + link}>{link}</a>);


  return <nav>{links}</nav>;
}

export default NavBar;
