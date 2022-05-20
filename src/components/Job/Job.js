import { useEffect, useState } from "react";
import "./Job.css";
import JobHeader from "../JobHeader/JobHeader";
import Header from "../Header/Header";
import SingleJobDesktop from "../SingleJobDesktop/SingleJobDesktop";
import DeleteModal from "../DeleteModal/DeleteModal";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
const url = "https://disjointed-out.herokuapp.com/api/v1/listings";

function Job() {
  const [jobs, setJobs] = useState([]);
  const [fullJobList, setFullJobList] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [jobId, setJobId] = useState([]);
  const [modalId, setModalId] = useState("");
  const [deleteState, setDeleteState] = useState(false);
  const [loadState, setLoadState] = useState(false);
  const [nothingState, setNothingState] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const fetchJobs = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setJobs(data);
      setFullJobList(data);
      setLoadState(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (!loadState) {
    return <Loading />;
  }

  return (
    <div>
      <Header fullJobList={fullJobList} setJobs={setJobs} />
      <div className="main-job-container">
        <div>
          <JobHeader jobs={jobs} />
          <section className="job-section">
            {jobs.map((job, index) => {
              const { id, company, location, employees, jobtitle } = job;
              return (
                <>
                  <Link
                    to={width <= 960 ? `listing/${job.id}` : `/`}
                    style={{ textDecoration: "none" }}
                  >
                    <article
                      className="job-listing"
                      tabIndex="1"
                      key={id}
                      onClick={() => {
                        const arr = fullJobList.find((job) => job.id === id);
                        setJobId(arr);
                        setNothingState(true);
                      }}
                    >
                      <h1 className="company-logo">{company}</h1>
                      <div className="description">
                        <h2 className="jobtitle">{jobtitle}</h2>
                        <h2 className="company-name">{company}</h2>
                        <h2>{location}</h2>
                        <h2>&#x2656; {employees} employees</h2>
                      </div>
                      <Link to="/">
                        <div
                          id="trashcan"
                          onClick={() => {
                            setDeleteState(true);
                            setModalId(job.id);
                          }}
                        >
                          &#128465;
                        </div>
                      </Link>
                    </article>
                  </Link>
                  <h1></h1>
                </>
              );
            })}
          </section>
        </div>
        {width >= 1100 && (
          <SingleJobDesktop nothingState={nothingState} jobId={jobId} />
        )}
      </div>
      {deleteState && (
        <DeleteModal
          modalId={modalId}
          fetchJobs={fetchJobs}
          setDeleteState={setDeleteState}
        />
      )}
      {deleteState && (
        <div id="dark-background" onClick={() => setDeleteState(false)}></div>
      )}
    </div>
  );
}

export default Job;
