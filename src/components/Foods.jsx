import { useState } from "react";
import { Db } from "../db/Db";

const Foods = () => {
  const [foods, setFoods] = useState(Db);

  const filterCategory = (category) => {
    setFoods(
      Db.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (price) => {
    setFoods(
      Db.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12 mb-3">
      <h1 className="text-black font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      <div className="flex flex-col lg:flex-row justify-between">
        <div className="m-3">
          <p className="font-bold text-gray-700">Filter Type</p>

          <div className="flex justify-between flex-wrap">
            <button onClick={()=>setFoods(Db)} className="m-1 rounded-md px-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white">
              All
            </button>
            <button onClick={()=>filterCategory('burger') } className="m-1 rounded-md px-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white">
              Burgers
            </button>
            <button onClick={()=>filterCategory('pizza')} className="m-1 rounded-md px-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white">
              Pizza
            </button>
            <button onClick={()=>filterCategory('salad')} className="m-1 rounded-md px-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white">
              Salads
            </button>
            <button onClick={()=>filterCategory('chicken')} className="m-1 rounded-md px-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white">
              Chicken
            </button>
          </div>
        </div>

        <div className="m-3">
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="felx justify-between max-w-[390px] w-full">
            <button onClick={()=>filterPrice('$')} className="m-1 rounded-md px-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white">
              $
            </button>
            <button onClick={()=>filterPrice('$$')} className="m-1 rounded-md px-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white">
              $$
            </button>
            <button  onClick={()=>filterPrice('$$$')} className="m-1 rounded-md px-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white">
              $$$
            </button>
            <button onClick={()=>filterPrice('$$$$')} className="m-1 rounded-md px-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white">
              $$$$
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
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
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
