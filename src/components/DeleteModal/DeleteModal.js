import React from 'react';
import "./DeleteModal.css"

function DeleteModal({modalId, fetchJobs, setDeleteState}) {
  
  const confirmHandler = async () => {
    setDeleteState(false);
    const res = await fetch(`https://disjointed-out.herokuapp.com/api/v1/listings/${modalId}`, {
      method: "DELETE",
    });
    return fetchJobs();
  }

  const denyHandler = () => {
      setDeleteState(false)
  }

  return (
    <section className="modal-container">
        <h3 id="confirm-text">Are you sure you want to delete this item?</h3>
        <div className="confirm-btns">
            <button id="yes-btn" onClick={confirmHandler}>Yes</button>
            <button id="no-btn" onClick={denyHandler}>No</button>
        </div>
    </section>
  )
}

export default DeleteModal