import { CgLayoutGridSmall } from "react-icons/cg";
import { MdBreakfastDining } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { GiNoodles } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import { PiHamburgerFill } from "react-icons/pi";
import { MdFoodBank } from "react-icons/md";
const Category = [
  {
    id: 1,
    name: "All",
    icon: (
      <CgLayoutGridSmall className="w-20 h-20  flex flex-col text-center text-green-600" />
    ),
  },
  {
    id: 2,
    name: "breakfast",
    icon: <MdBreakfastDining className="w-18 h-18  text-green-600" />,
  },
  {
    id: 3,
    name: "soups",
    icon: <LuSoup className="w-20 h-20  text-green-600" />,
  },
  {
    id: 4,
    name: "pasta",
    icon: <GiNoodles className="w-20 h-20  text-green-600" />,
  },
  {
    id: 5,
    name: "special",
    icon: <MdFoodBank className="w-20 h-20  text-green-600" />,
  },
  {
    id: 6,
    name: "pizza",
    icon: <GiFullPizza className="w-20 h-20  text-green-600" />,
  },
  {
    id: 7,
    name: "burger",
    icon: <PiHamburgerFill className="w-20 h-20  text-green-600" />,
  },
  {
    id: 8,
    name: "veg",
    icon: <PiHamburgerFill className="w-20 h-20  text-green-600" />,
  },
  {
    id: 9,
    name: "non_veg",
    icon: <PiHamburgerFill className="w-20 h-20  text-green-600" />,
  },
];

export default Category;
