import { MdDelete } from "react-icons/md";
import { decrement, increment, RemoveItem } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Cart = ({ name, id, price, image, qty }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex  items-center gap-4 bg-white p-4 rounded-xl m-2 w-full max-w-md shadow-lg">
      {/* Image */}

      <img
        src={image}
        alt="Chicken Soup"
        className="w-24 h-20 object-cover rounded-lg"
      />

      {/* Content */}
      <div className="flex-1 flex-col justify-around items-center  ">
        {/* Food Name */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800"> {name}</h3>
        </div>

        {/* Quantity Controller */}
        <div className=" w-[70%]  h-10 flex  justify-center items-center border border-green-400  ">
          <button
            className="px-3 py-1 text-green-500  text-lg font-bold hover:bg-green-100 "
            onClick={() => {
              qty > 1 ? dispatch(decrement(id)) : 1;
            }}
          >
            −
          </button>
          <span className="px-4 py-1.5 bg-gray-100 text-gray-800 font-medium ">
            {qty}
          </span>
          <button
            className="px-3 py-1 text-green-500 text-lg font-bold hover:bg-green-100 "
            onClick={() => dispatch(increment(id))}
          >
            +
          </button>
        </div>
      </div>
      <div>
        <div className=" flex flex-col  justify-around  items-end gap-6">
          <span className=" text-green-400 text-[20px]">{price}/-</span>
          <MdDelete
            className="text-red-600 w-6 h-6"
            onClick={() => dispatch(RemoveItem(id))}
          />
        </div>
      </div>
    </div>
  );
};
export default Cart;
