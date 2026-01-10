import { GiChickenOven } from "react-icons/gi";
import { LuLeafyGreen } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { AddItem } from "../store/cartSlice";
const Card = ({ name, image, id, price, type }) => {
  let dispatch = useDispatch();

  return (
    <div className="w-45 h-70 bg-white p-2 rounded-md flex flex-col gap-2 m-2">
      <div className="w-full h-40 overflow-hidden ">
        <img src={image} alt="" className=" object-cover rounded-md" />
      </div>
      <div className="text-2xl font-bold ">{name}</div>
      <div className="w-full flex justify-between">
        <div className="text-m text-green-500 font-bold">Rs {price}/-</div>
        <div className="flex justify-center  items-center gap-1">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span className=" text-green-400 text-m font-bold">{type}</span>
        </div>
      </div>
      <div className="p-1">
        <button
          className=" bg-green-400 s w-full  text-white hover:bg-emerald-600   "
          onClick={() =>
            dispatch(
              AddItem({
                id: id,
                name: name,
                price: price,
                image: image,
                qty: 1,
              })
            )
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default Card;
