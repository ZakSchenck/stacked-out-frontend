import React from "react";
import { useState } from "react";
import "../SingleJob/SingleJob.css";
import NothingHere from "../NothingHere/NothingHere";

function SingleJobDesktop({ jobId, nothingState }) {
  if (!nothingState) {
    return < NothingHere />
  }
  return (
    <section className="desktop-container">
      <section className="job-page">
        <h1>{jobId.jobtitle}</h1>
        <div className="job">
          <h1 className="company-logo" style={{ marginRight: "auto" }}>
            {jobId.company}
          </h1>
          <div className="job-info" style={{ marginRight: "auto" }}>
            <p>{jobId.company}</p>
            <p>{jobId.location}</p>
          </div>
        </div>
        <p>
          <span> &#x2624; </span> {jobId.jobtype}
        </p>
        <p>
          <span> &#x2656; </span> {jobId.employees} employees
        </p>
        <button className="apply">Apply</button>
        <hr></hr>
        <h2>Job Description</h2>
        <p>{jobId.description}</p>
      </section>
    </section>
  );
}

export default SingleJobDesktop;
