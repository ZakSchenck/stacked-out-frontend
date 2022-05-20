import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Job from "../Job/Job";
import "./SingleJob.css";
const url = "https://disjointed-out.herokuapp.com/api/v1/listings";

function SingleJob() {
  const [single, setSingle] = useState([]);
  const { jobid } = useParams();
  const [jobLoadState, setJobLoadState] = useState(true)

  const fetchJobs = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      const job = data.find((job) => job.id === parseInt(jobid));
      setSingle(job);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>

      <section className="job-page">
        <div className="header">
          <h1 className="stackedout">
            Stacked<span>out</span>
          </h1>
        </div>
        <h1>{single.jobtitle}</h1>
        <div className="job">
          <h1 className="company-logo">{single.company}</h1>
          <div className="job-info">
            <p>{single.company}</p>
            <p>{single.location}</p>
          </div>
        </div>
        <p>
          <span> &#x2624; </span> {single.jobtype}
        </p>
        <p>
          <span> &#x2656; </span> {single.employees} employees
        </p>
        <button className="apply">Apply</button>
        <hr></hr>
        <h2>Job Description</h2>
        <p>{single.description}</p>
        <Link to="/">
          <button>Back</button>
        </Link>
      </section>
    </>
  );
}

export default SingleJob;
