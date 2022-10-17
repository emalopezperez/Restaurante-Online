import { useParams } from "react-router-dom";
import { Db } from "../db/Db";
import React, { useState, useEffect } from "react";
import Detalles from "../components/Detalles";
import { Fetch } from "./Fetch";

const ItemDetail = () => {
  const [products, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    Fetch(Db).then((dato) => setProduct(dato));

    const result = products.filter((element) => element.id == id);

    setProduct(result);
  }, [id]);

  return (
    <>
      <Detalles products={products} />
    </>
  );
};

export default ItemDetail;
