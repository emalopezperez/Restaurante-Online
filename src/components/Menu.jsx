
import { Link } from "react-router-dom";

const Menu = ({ item, index }) => {
  return (
    <div
      key={index}
      className="border shadow-lg hover:scale-105 duration-300 cursor-pointer"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-[200px] object-cover rounded-lg rounded-t-lg"
      />
      <div className="flex justify-between px-2 py-4">
        <p className="font-bold">{item.name}</p>
        <p>
          <span className="bg-orange-500 text-white p-1 rounded-full">
            $ {item.price}
          </span>
        </p>
      </div>
      <div className="flex justify-center">
        <Link to={`/detalles/${item.id}`}>
          <button
            type="button"
            className=" bg-red-900 flex justify-center gap-2  lg:px-2 lg:py-1 text-white rounded-md shadow-md w-full text-center mt-3 mb-3 font-bold"
          >
            Ver mas
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
