import React from "react";
import "./AddListing.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function AddListing() {
  const [companyInput, setCompanyInput] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [typeInput, setTypeInput] = useState("Full-Time");
  const [employeeInput, setEmployeeInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const companyHandler = (e) => {
    setCompanyInput(e.target.value);
  };
  const titleHandler = (e) => {
    setTitleInput(e.target.value);
  };
  const locationHandler = (e) => {
    setLocationInput(e.target.value);
  };
  const typeHandler = (e) => {
    setTypeInput(e.target.value);
  };
  const employeeHandler = (e) => {
    setEmployeeInput(e.target.value);
    if (employeeInput.length === 6) {
      setEmployeeInput(employeeInput.slice(0, 5));
    }
  };
  const descriptionHandler = (e) => {
    setDescriptionInput(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `https://disjointed-out.herokuapp.com/api/v1/listings`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          img: "",
          employees: employeeInput,
          company: companyInput,
          jobtype: typeInput,
          jobtitle: titleInput,
          description: descriptionInput,
          location: locationInput,
        }),
      }
    );
    const data = res.json();
    if (
      employeeInput === "" ||
      companyInput === "" ||
      typeInput === "" ||
      titleInput === "" ||
      descriptionInput === "" ||
      locationInput === ""
    ) {
      return console.error("error");
    }
    return data;
  };

  return (
    <main className="main-add-section">
      <form onSubmit={submitHandler}>
        <label htmlFor="company">Company Name:</label>
        <input
          type="text"
          name="company"
          maxLength="25"
          onChange={companyHandler}
        />

        <label htmlFor="title">Job Title:</label>
        <input
          type="text"
          name="title"
          maxLength="45"
          onChange={titleHandler}
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          name="location"
          maxLength="25"
          onChange={locationHandler}
        />

        <label htmlFor="type">Job Type:</label>
        <input type="text" name="type" maxLength="15" onChange={typeHandler} />

        <label htmlFor="employees">Employee Count:</label>
        <input
          value={employeeInput}
          type="number"
          name="employees"
          onChange={employeeHandler}
        />

        <label htmlFor="description">
          Job Description: {descriptionInput.length}/800
        </label>
        <textarea
          name="description"
          id="description"
          maxLength="800"
          onChange={descriptionHandler}
        ></textarea>

        <Link to="/" style={{ textDecoration: "none" }}>
          <button type="submit" id="confirm">
            Confirm
          </button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button id="cancel">Cancel</button>
        </Link>
      </form>
    </main>
  );
}

export default AddListing;
