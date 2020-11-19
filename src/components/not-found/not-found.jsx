import React from "react";
import browserHistory from "../../common/browser-history";

const NotFound = () => (
  <div>
    <h1>404 Page Not Found</h1>
    <button onClick={() => browserHistory.go(-2)}>Back</button>
  </div>
);

export default NotFound;
