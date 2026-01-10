import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { useContext, useEffect } from "react";
import { dataContext } from "../context/UserContext";
import food_items from "../data/food";
import { useSelector } from "react-redux";

const Navbar = () => {
  let { input, setInput, setCategories, setShowCart } = useContext(dataContext);
  let itemsCount = useSelector((state) => state.cart);

  useEffect(() => {
    let new_list = food_items.filter(
      (item) =>
        item.food_name.includes(input) ||
        item.food_name.toLocaleLowerCase().includes(input)
    );
    setCategories(new_list);
  }, [input]);

  return (
    <div className="w-full h-24 flex justify-between items-center px-12 bg-emerald-100 backdrop-blur-lg shadow-md">
      <div className="w-14 h-12 ml-5 mt-1 bg-blue-50 flex flex-col justify-center items-center rounded-md shadow-xl">
        <div>
          <MdFastfood className="w-8 h-8  text-emerald-500 " />
        </div>
        <p className="text-[10px] text-green-600 font-semibold">ReactEat</p>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="w-[60%] h-[60%] mt-2 bg-white flex items-center px-5 gap-5 rounded-md shadow-xl"
      >
        <IoSearch className="text-green-500  w-8 h-8" />
        <input
          type="text"
          placeholder="Search Items...."
          className="w-full outline-none "
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>

      <div
        className="w-16 h-12 mr-5 mt-1 bg-blue-50 flex justify-center items-center rounded-md shadow-xl relative cursor-pointer"
        onClick={() => {
          setShowCart(true);
          console.log("clicked");
        }}
      >
        <span className=" absolute top-0 right-0 text-green-500 font-bold  text-[15px]">
          {itemsCount.length}
        </span>
        <FiShoppingBag className="w-7 h-7 text-green-500 " />
      </div>
    </div>
  );
};
export default Navbar;
