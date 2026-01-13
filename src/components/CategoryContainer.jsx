import { useState } from "react";

const CategoryContainer = ({ filter, Category }) => {
  let [bgColor, setBgcolor] = useState(false);
  return (
    <div className="flex justify-center ">
      <div className=" mt-0 mb-0 p-5 w-[90%] flex flex-wrap justify-center items-center  rounded-b-lg gap-7">
        {Category.map((item) => {
          return (
            <div
              key={item.name}
              className="w-16 h-12 md:w-16 md:h-15 rounded-md text-center  bg-cyan-50 flex flex-col items-center py-1 text-gray-500 shadow-xl hover:bg-green-300 cursor-pointer transition-all duration-200 "
              onClick={() => {
                filter(item.name);
                setBgcolor(true);
              }}
            >
              {item.icon}
              <span className="text-sm">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CategoryContainer;
