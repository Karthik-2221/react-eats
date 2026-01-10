const CategoryContainer = ({ filter, Category }) => {
  return (
    <>
      <div className=" mt-15  w-full flex flex-wrap justify-center items-center  gap-5">
        {Category.map((item) => {
          return (
            <div
              key={item.name}
              className="w-25 h-25 rounded-md text-center  bg-cyan-50 flex flex-col items-center py-1 text-gray-500 shadow-xl hover:bg-green-300 cursor-pointer transition-all duration-200 "
              onClick={() => filter(item.name)}
            >
              {item.icon}
              <span className="text-sm">{item.name}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default CategoryContainer;
