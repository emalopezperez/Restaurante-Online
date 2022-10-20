import { createContext, useState } from "react";

export const context = createContext();

const MyProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const [search, setSearch] = useState("");

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const verificarProductoExistente = (id) => {
    return cartList.some((producto) => producto.id === id);
  };

  const agregarProducto = (porductsDetail, cantidad) => {
    const nuevoProducto = {
      ...porductsDetail,
      cantidad,
    };
    if (verificarProductoExistente(nuevoProducto.id)) {
      const findProducto = cartList.find(
        (produ) => produ.id === nuevoProducto.id
      );
      const productoIndexOf = cartList.indexOf(findProducto);
      const arrayAux = [...cartList];
      arrayAux[productoIndexOf].cantidad += cantidad;
      setCartList(arrayAux);
    } else {
      setCartList([...cartList, nuevoProducto]);
    }
  };
  const obtenerCantidad = () => {
    return cartList.reduce((acc, x) => (acc += x.cantidad), 0);
  };

  const eliminarProductos = (id) => {
    return setCartList(cartList.filter((producto) => producto.id !== id));
  };

  const ObtenerTotalPrecio = () => {
    return cartList.reduce((acc, x) => (acc += x.price * x.cantidad), 0);
  };

  const vaciarCart = () => {
    setCartList([]);
  };

  return (
    <context.Provider
      value={{
        obtenerCantidad,
        agregarProducto,
        verificarProductoExistente,
        cartList,
        eliminarProductos,
        ObtenerTotalPrecio,
        vaciarCart,
        search,
        searcher,
        setSearch,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default MyProvider;
