import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Borde from "./Borde";
import Elemento from "./Elemento";
import Input from "./Input";

//create your first component
const Home = () => {
  return (
    <>
      <Borde />
      <div
        className="text-center mt-3 d-flex flex-column container-fluid w-50"
        id="contenedor-main"
      >
        <h2>
          Todo.<span className="fw-bold text-warning">List</span>
        </h2>
        <div>
          <Input />
        </div>
        <div className="d-flex flex-column w-100" id="lista">
          <Elemento />
          <Elemento />
          <Elemento />
          <Elemento />
          <Elemento />
        </div>
      </div>
      <Borde />
    </>
  );
};

export default Home;
