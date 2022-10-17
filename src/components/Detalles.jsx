import React, { useState, useEffect } from "react";
import Item from "./Item";

const Detalles = ({ products }) => {
  return (
    <main className="contenedor">
      <div className="content-grid">
        {products.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))}
      </div>
    </main>
  );
};

export default Detalles;
