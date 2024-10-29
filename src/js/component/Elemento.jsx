import React, { useState } from "react";

const Elemento = (props) => {
  const [ocultarelemento, setOcultarelemento] = useState(true);
  const [marcarlisto, setMarcarlisto] = useState(false);

  return (
    <div
      className={
        ocultarelemento
          ? "row text-center pt-2 border-bottom border-dark"
          : "row text-center pt-2 border-bottom border-dark d-none"
      }
    >
      <div className="col-1">
        <div className="d-flex">
          <span
            className={
              marcarlisto
                ? "fa-solid fa-circle mx-2 mt-3 pw- text-success fw-bold"
                : "fa-solid fa-circle mx-2 mt-3 pw- text-warning fw-bold"
            }
          ></span>
        </div>
      </div>
      <div className={marcarlisto ? "opacity-50 col-9" : "col-9"}>
        <h2 className="mt-1 fw-bold">{props.titulo}</h2>
      </div>
      <div className="col-2 d-flex">
        <button
          className="btn"
          onClick={() => {
            setOcultarelemento(false);
          }}
        >
          <i className="fa-regular fa-trash-can text-danger p-2 rounded-2 border border-danger"></i>
        </button>
        <button
          className="btn"
          onClick={() => {
            setMarcarlisto(marcarlisto ? false : true);
          }}
        >
          <i
            class={
              marcarlisto
                ? "fa-solid fa-xmark text-warning p-2 rounded-2 border border-warning"
                : "fa-solid fa-check text-success p-2 rounded-2 border border-success"
            }
          ></i>
        </button>
      </div>
    </div>
  );
};

export default Elemento;
