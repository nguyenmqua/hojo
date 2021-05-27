import React from "react";
import { Navbar } from "reactstrap";

import moment from "moment";

const Navigation = () => {
  return (
    <div>
      <Navbar className="navbar" expand="md">
        <img className="logo" src="./images/hojologo.png" />
      </Navbar>
      <div className="time">{moment().format("llll")}</div>
    </div>
  );
};
export default Navigation;
