import { RxCross2 } from "react-icons/rx";
import Cart from "../components/CartItem";
import { useContext } from "react";
import { dataContext } from "../context/userContext";
import { useSelector } from "react-redux";
const CartSidebar = () => {
  let { showCart, setShowCart } = useContext(dataContext);

  let cartItems = useSelector((state) => state.cart);
  let subTotal = cartItems.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);
  let deliveryFee = 20;
  let taxes = (subTotal * 0.5) / 100;
  let Total = Math.floor(subTotal + taxes + deliveryFee);

  return (
    <>
      <div
        className={` w-full md:w-[35vw] h-screen fixed top-0 right-0 overflow-auto bg-white shadow-xl p-6
         transform transition-transform duration-300 ease-in-out ${
           showCart ? "translate-x-0" : "translate-x-full"
         }`}
      >
        {/* CART HEADER  */}
        <header className="w-full flex items-center justify-between ">
          <span className="text-green-400 text-[20px] font-semibold">
            Order Items
          </span>
          <span className="">
            <RxCross2
              className="h-8 w-8 text-green-400 cursor-pointer"
              onClick={() => setShowCart(false)}
            />
          </span>
        </header>

        {/* map method to pass cartItem details to cart component  */}
        {cartItems.length > 0 ? (
          <>
            <div>
              {cartItems.map((item) => (
                <Cart
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                  qty={item.qty}
                />
              ))}
            </div>

            {/* Cart Total  Bill Price Details */}

            <div className="w-full border-t-2 border-b-2 border-gray-400 mt-7 ">
              <div className=" w-full flex flex-row  justify-between items-center">
                <span className="text-lg text-gray-600 font-semibold">
                  Sub Total
                </span>
                <span className="text-lg  text-green-400 font-semibold">
                  ₹ {subTotal}
                </span>
              </div>
              <div className=" w-full flex flex-row  justify-between items-center">
                <span className="text-lg text-gray-600 font-semibold">
                  deliveryFee
                </span>
                <span className="text-lg text-green-400 font-semibold">
                  ₹ {deliveryFee}
                </span>
              </div>
              <div className=" w-full flex flex-row  justify-between items-center">
                <span className="text-lg text-gray-600 font-semibold">
                  taxes
                </span>
                <span className="text-lg text-green-400 font-semibold">
                  ₹ {taxes}
                </span>
              </div>
            </div>
            <div className=" w-full flex flex-row  justify-between items-center mt-3 p-3">
              <span className="text-lg text-gray-600 font-semibold">Total</span>
              <span className="text-lg text-green-400 font-semibold">
                ₹ {Total}
              </span>
            </div>
            <button className=" bg-green-400  w-full text-[20px] font-semibold rounded-md mt-4 text-white hover:bg-emerald-600   ">
              Place Holder
            </button>
          </>
        ) : (
          <div className="w-full  text-center items-center pt-20">
            <p className=" text-[20px]  font-semibold">
              Sorry! No Orders Yet , Do Order Something...{" "}
            </p>
          </div>
        )}
      </div>
    </>
  );
};
export default CartSidebar;
