import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

export function MenuBar() {
  const [opaqueSetting, setOpaque] = useState(["0"]);

  function handleScroll(evt) {
    console.log(evt);
    if (opaqueSetting === "0") {
      setOpaque("50");
    }
  }

  return (
    <div>
      <nav>
        <div
          className="menuBar"
        >



        </div>
      </nav>

    </div>
  );
}

/**
 * CONTAINER
 */

export default connect()(MenuBar);
