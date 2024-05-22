import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faSpinner);

const Loader = () => (
  <div className="flex justify-center items-center">
    <div className="loader">
      <FontAwesomeIcon icon={faSpinner} spin /> Loading...
    </div>
  </div>
);

export default Loader;
