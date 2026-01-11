import { useState } from "react";

const categories = [
  "All",
  "breakfast",
  "soups",
  "pasta",
  "special",
  "pizza",
  "burger",
  "veg",
  "non_veg",
];

const DropdownCategory = ({ onSelect, filter, category }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select Category");

  const handleSelect = (category) => {
    setSelected(category);
    setOpen(false);
    onSelect(category);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-emerald-500 text-white px-4 py-2 rounded-md shadow hover:bg-emerald-600 flex items-center gap-2"
      >
        {selected}
        <span>▼</span>
      </button>

      {/* Dropdown */}
      {open && (
        <ul className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
          {categories.map((cat) => (
            <li
              key={cat}
              // onClick={() => handleSelect(cat)}
              onClick={() => filter(category.name)}
              className="px-4 py-2 hover:bg-emerald-100 cursor-pointer"
            >
              {cat}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownCategory;
