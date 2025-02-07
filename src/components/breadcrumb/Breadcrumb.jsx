import React, { useState } from "react";
import { Link } from "react-router-dom";

function breadcrumb() {
  

  return (
    <div className="py-3 d-flex align-items-sm-center flex-sm-row flex-column">
    <div className="flex-grow-1">
      <h4 className="fs-18 fw-semibold m-0">Compile Schedule</h4>
    </div>
    <div className="text-end">
      <ol className="breadcrumb m-0 py-0">
        <li className="breadcrumb-item">
          <a href="javascript: void(0);">Dashboard</a>
        </li>
        <li className="breadcrumb-item">
          <a href="javascript: void(0);">Schedule Activities</a>
        </li>
        <li className="breadcrumb-item active">Compile Schedule</li>
      </ol>
    </div>
  </div>
  );
}

export default breadcrumb;
