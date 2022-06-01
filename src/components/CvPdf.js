import React, { Component } from "react";
import Pdf from "../components/assets/pdf/my-cv.pdf";

class Download extends Component {
  render() {
    return (
      <div>
        <a href={Pdf} target="_blank">
          Download My CV
        </a>
      </div>
    );
  }
}

export default Download;
