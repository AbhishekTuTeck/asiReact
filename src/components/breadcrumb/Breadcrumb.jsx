import React, { useState } from "react";
import { Link } from "react-router-dom";

function breadcrumb({ title }) {
  

  return (
    <div className="py-3 d-flex align-items-sm-center flex-sm-row flex-column">
      <div className="flex-grow-1">
        <h4 className="fs-18 fw-semibold m-0">{title}</h4>
      </div>
      <div className="text-end">
        <ol className="breadcrumb m-0 py-0">
          <li className="breadcrumb-item">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/schedule-activities">Schedule Activities</Link>
          </li>
          <li className="breadcrumb-item active">{title}</li>
        </ol>
      </div>
    </div>
  );
}

export default breadcrumb;
