import React from "react";
import not_found from '../img/not_found.gif';

const NotFound = () => {
  return (
    <React.Fragment>
        <div className="not-found">
            <img height="1200" width="1200" src={not_found} alt="error" />
        </div>
    </React.Fragment>
  );
};

export default NotFound;