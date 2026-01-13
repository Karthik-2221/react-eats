import Category from "../components/Category";
import CardsContainer from "../components/CardsContainer";
import Navbar from "../components/Navbar";
import food_items from "../data/food";
import { useContext } from "react";
import { dataContext } from "../context/UserContext";
import CategoryContainer from "../components/CategoryContainer";
import CartSidebar from "../components/CartSidebar";
const HomePage = () => {
  let { categories, setCategories, input } = useContext(dataContext);

  function filter(cat_type) {
    if (cat_type == "All") {
      setCategories(food_items);
    } else if (cat_type === "veg") {
      const new_list = food_items.filter((item) => item.food_type === "veg");
      setCategories(new_list);
    } else if (cat_type === "non_veg") {
      const new_list = food_items.filter(
        (item) => item.food_type === "non_veg"
      );
      setCategories(new_list);
    } else {
      let new_list = food_items.filter(
        (item) => item.food_category === cat_type
      );
      setCategories(new_list);
    }
  }

  return (
    <div>
      <Navbar></Navbar>

      {/* category section */}
      {!input ? (
        <CategoryContainer Category={Category} filter={filter} />
      ) : null}

      {/* food items cards list  */}
      {categories.length > 0 ? (
        <div className=" flex flex-wrap justify-center items-center gap-3 m-5 ">
          <CardsContainer foods_list={categories}></CardsContainer>
        </div>
      ) : (
        <div className=" w-full text-center p-20">
          <h2 className="text-[25px] font-bold ">Sorry! No Dishes Found.</h2>
        </div>
      )}
      {/*cart side bar shows addded aitems list */}
      <CartSidebar />
    </div>
  );
};
export default HomePage;
