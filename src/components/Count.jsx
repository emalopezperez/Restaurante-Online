import React, { useState } from "react";
import { Link } from "react-router-dom";

function Count({ onAdd }) {
  const [numero, setNumero] = useState(1);

  const aumentar = () => {
    setNumero(numero + 1);
  };
  const disminuir = () => {
    setNumero(numero - 1);

    if (numero <= 1) {
      setNumero(1);
    }
  };

  const confirmar = () => {
    onAdd(numero);
  };

  return (
    <>
      <div className="flex  flex-row justify-evenly text-xl mt-20 ">
        <button className=" w-6 rounded bg-gray-300" onClick={disminuir}>
          -
        </button>
        <h3 className="">{numero}</h3>
        <button className="w-6 rounded bg-gray-600" onClick={aumentar}>
          +
        </button>
      </div>
      <div className="flex justify-center mt-10 ">
        <Link to="/category/Cart">
          <button
            className="py-1 text-white rounded px-2 bg-red-900"
            onClick={confirmar}>
          Confirmar</button>
        </Link>
      </div>
    </>
  );
}

export default Count;
