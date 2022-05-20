import { useState } from "react";
import "./JobHeader.css";

function JobHeader({jobs}) {
    return (
        <section className="title-section">
            <h1>Web Developer jobs in the United States.</h1>
            <p>{jobs.length} Results</p>
        </section>
    );
}

export default JobHeader;