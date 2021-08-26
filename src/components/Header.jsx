import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header() {
  return (
    <header>
    <div>
    <h1>
        <HighlightIcon />
        Notes Keeper
      </h1>
      <button>Login</button>
    </div>

    </header>
  );
}

export default Header;
