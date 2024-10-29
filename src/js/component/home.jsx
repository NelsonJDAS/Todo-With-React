import React, { useState, useRef } from "react";

//include images into your bundle
import Borde from "./Borde";
import Elemento from "./Elemento";
import { Toaster, toast } from "sonner";

//create your first component
const Home = () => {
  const [elemento, setElemento] = useState([]);
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  const AgregarElemento = (elem) => {
    setElemento((prevElemento) => [...prevElemento, elem]);
    inputRef.current.value = "";
    inputRef.current.placeholder = "Todo agregado";
    setInput("");
  };

  const handleElementoString = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <Toaster position="top-right" richColors />
      <Borde />
      <div
        className="text-center mt-3 d-flex flex-column container-fluid w-50"
        id="contenedor-main"
      >
        <h2>
          Todo.<span className="fw-bold text-warning">List</span>
        </h2>
        <div>
          <div className="row">
            <div className="col-10 p-0 text-center">
              <input
                type="text"
                className="form-control w-100 rounded-0 border-0 fw-bold"
                placeholder="Coloca tu tarea aqui!"
                onChange={handleElementoString}
                ref={inputRef}
              />
            </div>
            <div className="col-2 p-0">
              <button
                type="submit"
                className="btn btn-outline-primary w-100 rounded-0 border-0 fw-bold"
                onClick={() => {
                  const valor = input.replace(/ /g, "");
                  AgregarElemento(valor);
                  console.log(valor);
                  valor === undefined || valor === ""
                    ? toast.error("Valor introducido invalido")
                    : "";
                }}
              >
                Listo
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column w-100" id="lista">
          {elemento.map((elem) => {
            const todo =
              elem === undefined || elem === "" ? (
                ""
              ) : (
                <Elemento titulo={elem} />
              );
            return todo;
          })}
        </div>
      </div>
      <Borde />
    </>
  );
};

export default Home;
