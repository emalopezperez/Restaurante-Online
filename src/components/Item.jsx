import { useState, useContext } from "react";
import { context } from "../context/MyProvider";
import Count from "./Count";

const Item = ({ producto }) => {
  const [estadoBtn, setEstadoBtn] = useState(true);

  const { agregarProducto, verificarProductoExistente } = useContext(context);

  const onAdd = (numero) => {
    producto.cantidad = numero;
    const { cantidad } = producto;
    const { id } = producto;

    setEstadoBtn(false);
    agregarProducto(producto, cantidad);
    verificarProductoExistente(id);
  };

  return (
    <section>
      <div className="relative px-4 py-8 mx-auto  max-w-screen-xl">
        <div className="grid gap-8 lg:items-start lg:grid-cols-4 ">
          <div className="lg:col-span-3">
            <div className="relative mt-4">
              <img
                src={producto.image}
                alt={producto.image}
                className="w-full rounded-xl h-72 lg:h-[540px] object-cover"
              />

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/75 text-white px-3 py-1.5 inline-flex items-center">
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>

                <span className="text-xs ml-1.5">Hover to zoom</span>
              </div>
            </div>
          </div>

          <div className="lg:top-0 lg:sticky text-black">
            <form className="space-y-4 lg:pt-8 border-black">
              <div>
                <span className="text-xs text-stone-400">
                  Nuevo | 2 vendidos
                </span>
              </div>
              <div>
                <div className="text-2xl  lg:text-3xl text-center text-black">
                  <h2 key={producto.name}>{producto.name}</h2>
                </div>
              </div>

              <div className=" felx justify-center p-2 bg-gray-100  border-black">
                <p className="text-sm">
                  <span className="block text-xs border-zinc-800 text-teal-700">
                    Envío gratis a todo el país
                  </span>
                </p>
              </div>

              <div className=" felx justify-center p-2 bg-gray-100  border-black">
                <p className="text-sm">
                  <span className="block text-xs border-zinc-800 text-black">
                    Color: <span className="text-stone-400">Negro</span>
                  </span>
                </p>
                <p className="text-sm">
                  <span className="block text-xs border-zinc-800 text-black">
                    Stock: <span className="text-stone-400">disponible</span>
                  </span>
                </p>
              </div>
              <div>
                <p className="text-2xl mb-18">
                  <p key={producto.price}>$ {producto.price}</p>
                </p>
              </div>
            </form>
            <div className=" ">
              {estadoBtn ? (
                <Count onAdd={onAdd} />
              ) : (
                <Link to={"/category/Cart"}>
                  <button className="flex bg-red-900 rounded-full px-12 text-lg text-white mt-6 ">
                    {" "}
                    Carrito
                  </button>
                </Link>
              )}
            </div>
          </div>

          <div className="lg:col-span-3 text-black">
            <div className="prose max-w-none">
              <p></p>
              <p>
                Ligero y compacto, luce una nueva apariencia elegante que se
                adapta perfectamente a su estilo de vida . Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Modi eveniet ipsam mollitia
                nesciunt illo! Suscipit, corrupti! Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Animi accusamus sint excepturi
                facilis accusantium laborum fuga sit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Item;
