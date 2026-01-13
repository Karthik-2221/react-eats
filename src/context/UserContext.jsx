import { createContext, useState } from "react";
import food_items from "../data/food";
export const dataContext = createContext();

const UserContext = ({ children }) => {
  let [input, setInput] = useState("");
  let [categories, setCategories] = useState(food_items);
  let [showCart, setShowCart] = useState(false);
  let [displayCatSecton, setDisplayCatSection]=useState(false)
  let data = {
    input,
    setInput,
    categories,
    setCategories,
    showCart,
    setShowCart,
  };

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};
export default UserContext;
