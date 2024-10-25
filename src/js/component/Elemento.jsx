import React from "react";

const Elemento = () => {
  return (
    <div
      className="row text-center pt-2 border-bottom border-dark"
      id="elemento"
    >
      <div className="col-1">
        <div className="d-flex">
          <span className="fa-solid fa-circle mx-2 mt-3 pw- text-warning fw-bold"></span>
        </div>
      </div>
      <div className="col-9">
        <h2 className="mt-1 fw-bold">-----------------------------</h2>
      </div>
      <div className="col-2 d-flex">
        <button className="btn">
          <i className="fa-regular fa-trash-can text-danger p-2 rounded-2 border border-danger"></i>
        </button>
        <button className="btn">
          <i class="fa-solid fa-check text-success p-2 rounded-2 border border-success"></i>
        </button>
      </div>
    </div>
  );
};

export default Elemento;
