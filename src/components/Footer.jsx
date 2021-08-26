import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Bella Su</p>
    </footer>
  );
}

export default Footer;
