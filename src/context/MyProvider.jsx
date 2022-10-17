import { createContext, useState } from "react";

export const context = createContext();

const MyProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

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

  return (
    <context.Provider
      value={{
        obtenerCantidad,
        agregarProducto,
        verificarProductoExistente,
        cartList,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default MyProvider;
