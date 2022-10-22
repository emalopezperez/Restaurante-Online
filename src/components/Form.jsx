import React, { useState, useContext } from "react";
import { context } from "../context/MyProvider";

const Form = () => {
  const { cartList, ObtenerTotalPrecio, setCartList } = useContext(context);

  const [informacionFinal, setInfomracionFinal] = useState([]);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");

  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState(false);

  const validacion = (e) => {
    e.preventDefault();

    if ([nombre, apellido, correo].includes("")) {
      console.log("error");
    } else {
      setError(false);

      const order = {
        compra: cartList,
        nombre,
        apellido,
        correo,
        gastoTotal: ObtenerTotalPrecio(),
        fecha: new Date(),
      };
      setInfomracionFinal([...informacionFinal, order]);

      setNombre("");
      setApellido("");
      setCorreo("");
    }
  };

  if (!mensaje) {
    return (
      <div className="content mt-8 ">
        <div className="Informacion-Cart">
          <h2 className="text-gray-800  text-lg lg:text-2xl mb-8 text-center">
            Para concretar con la compra le pedimos que Ingrese sus datos:
          </h2>
        </div>

        <form
          onSubmit={validacion}
          className="shadow-md rounded-lg py-3 px-5 bg-gray-50 mb-8"
        >
          {error && (
            <h1 className="text-black">Todos los campos son obligatorios!</h1>
          )}
          <div className="mb-6">
            <label
              htmlFor="Nombre"
              className="block text-black text-left font-bold"
            >
              {" "}
              Ingrese su Nombre
            </label>
            <input
              id="Nombre"
              type="text"
              placeholder="Escribe tu Nombre"
              className="border-3 w-full p-2 mt-2 placeholder:border-t-gray-300 rounded-md text-black"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="Apellido"
              className="block text-black font-bold text-left"
            >
              {" "}
              Ingrese su Apellido
            </label>
            <input
              id="Apellido"
              type="text"
              placeholder="Escribe su Apellido"
              className="border-3 w-full p-2 mt-2 placeholder:border-t-gray-600 rounded-md text-black"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="correo" className="text-black font-bold text-left">
              {" "}
              Ingrese su correo
            </label>
            <input
              id="correo"
              type="text"
              placeholder="Ingrese su Correo"
              className="border-3 w-full p-2 mt-2 placeholder:border-t-gray-800 rounded-md text-black"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>

          <input
            type="submit"
            className=" w-full p-3 text-black cursor-pointer rounded-md "
            value="Enviar"
          />
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <p>j</p>
      </div>
    );
  }
};

export default Form;
