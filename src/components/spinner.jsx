//No need for Spinner Component File
// -------------------------------------------------------
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";

function Spin(prop) {
  const [isHidden, setIsHidden] = useState("hidden");
  return (
    <Spinner
      className="m-2"
      animation="grow"
      variant="dark"
      style={{ visibility: isHidden }}
    />
  );
}

export default Spin;
