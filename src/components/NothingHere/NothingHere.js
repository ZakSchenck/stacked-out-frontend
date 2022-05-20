import React from 'react'
import cartoon from "./cartooncomputer.png";
import "./NothingHere.css"
import Loading from '../Loading/Loading';
import { useState } from "react"

function NothingHere() {
  return (
    <section className="nothing-section">
        <h2>Nothing here yet :/</h2>
        <h2>Click a job to view!</h2>
        <img src={cartoon} />
    </section>
  )
}

export default NothingHere