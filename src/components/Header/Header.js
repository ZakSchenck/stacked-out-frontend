import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import pfp from "./zak-img.png";

function Header({ setJobs, jobs, fullJobList }) {
  const [input, setInput] = useState("");
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const filteredArray = fullJobList.filter((job) =>
      job.jobtitle.toLowerCase().includes(input.toLowerCase())
    );
    setJobs(filteredArray);
  }, [input]);

  return (
    <header>
      <div className="header">
        <h1 className="logo">
          Stacked<span>out</span>
        </h1>
        {width > 650 && (
          <input
            style={{ margin: "0 auto 0 20px" }}
            type="text"
            placeholder="Search job titles"
            onChange={inputHandler}
          />
        )}
        <Link style={{textDecoration: "none"}} to="/add-listing">
        {width <= 800 ? (
          <h2>&#43;</h2>
        ) : (
          <button>&#43; Add Listing</button>
        )}
        </Link>
        <img src={pfp} />
      </div>
      {width <= 650 && (
        <input
          type="text"
          placeholder="Search job titles"
          onChange={inputHandler}
        />
      )}
    </header>
  );
}

export default Header;
