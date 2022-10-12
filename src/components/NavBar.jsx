import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const NavBar = () => {
  const [nav, SetNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu
            onClick={()=> SetNav(!nav)}
            size={25} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 font-bold mr-4">Delizia</h1>

        <div className="  hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px">
          <p className="bg-black text-white rounded-full p-1">Delivery</p>
          <p className=" p-1">Pickup</p>
        </div>
      </div>

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 focus:outline-none w-full"
          type="text"
          placeholder="Search foods"
        />
      </div>

      <button className="bg-black text-white hidden md:flex items-center py-1 px-2 rounded-xl">
        <BsFillCartFill className="mr-2" size={20} />
        Cart
      </button>
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => SetNav(!nav)}
          className="absolute right-4 top-4 cursor-pointer"
          size={30}
        />
        <h2 className="text-2xl p-4 font-bold">Delizia</h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery className="mr-3" size={25} />
              Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite className="mr-3" size={25} />
              Favorites
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp className="mr-3" size={25} />
              Help
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill className="mr-3" size={25} />
              Promotions
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends className="mr-3" size={25} />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
