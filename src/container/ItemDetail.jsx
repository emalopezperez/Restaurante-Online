import { useParams } from "react-router-dom";
import { Db } from "../db/Db";
import React, { useState, useEffect } from "react";
import Detalles from "../components/Detalles";

const ItemDetail = () => {
  const [products, setProduct] = useState([]);
  const { id } = useParams();

  const Fetch = (Db) => {

    return new Promise((resolve, reject) =>{

        setTimeout(() => {

            resolve(Db);

        },2000)
    })
}

  useEffect(() => {

    const result = Db.filter((element) => element.id == id);

    setProduct(result);
  }, [id]);

  return (
    <>
      <Detalles products={products} />
    </>
  );
};

export default ItemDetail;
