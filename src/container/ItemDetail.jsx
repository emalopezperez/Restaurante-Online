import { useParams } from "react-router-dom";
import { Db } from "../db/Db";
import { useState, useEffect } from "react";
import Detalles from "../components/Detalles";
import Fetch from "../components/Fetch";

const ItemDetail = () => {
  const [products, setProduct] = useState([]);
  const { id } = useParams();

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
