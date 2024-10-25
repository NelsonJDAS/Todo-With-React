import React from "react";

const Input = () => {
  return (
    <div className="row">
      <div className="col-10 p-0 text-center">
        <input
          type="text"
          className="form-control w-100 rounded-0 border-0 fw-bold"
          placeholder="Coloca tu tarea aqui!"
        />
      </div>
      <div className="col-2 p-0">
        <button
          type="button"
          className="btn btn-outline-primary w-100 rounded-0 border-0 fw-bold"
        >
          Listo
        </button>
      </div>
    </div>
  );
};

export default Input;
