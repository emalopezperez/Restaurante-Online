import { Link } from "react-router-dom";

const InformacionFinal = ({ informacionFinal }) => {
  return (
    <div className="">
      <div className="flex justify-center mt-20 mb-10">
        <p className="text-black text-2xl italic">Orden de compra:</p>
      </div>
      <div className="flex justify-center flex-col ">
        {informacionFinal.map((producto, index) => (
          <div
            key={index}
            className="grid text-center sm:grid-cols-3 lg:grid-cols-4 gap-1 m-10 mb-20 p-3 bg-zinc-400 "
          >
            <div className="text-white m-1 ">
              <div>Nombre: </div>
              {producto.nombre}
            </div>
            <div className="text-white m-1 p-2">
              <div>Apellido: </div> {producto.apellido}
            </div>
            <div className="text-white m-1 ">
              <div>Direccion: </div> {producto.direccion}
            </div>

            <div className="text-white m-1 ">
              <div>Total:</div> <span>$</span>
              {producto.gastoTotal}
            </div>
          </div>
        ))}
        <div className="flex justify-center flex-col text-center">
          <p className="text-red-900 text-2xl italic">
            Gracias por confiar en nosotros, lo esperamos pronto!
          </p>
          <Link to={"/"}>
            <button className="justify-center bg-cyan-900 rounded-full p-1 mb-3 m-10 font-bold px-7 text-white">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InformacionFinal;
