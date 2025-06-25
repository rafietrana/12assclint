import { useState, useEffect, useRef } from "react";
import { IoChevronDown } from "react-icons/io5";

const Select = ({ items, onChange }) => {
  const [isActive, setIsActive] = useState(false);
  const [content, setContent] = useState("Select");

  // Ref for the dropdown to handle clicks outside
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSelect = (value) => {
    setContent(value);
    onChange(value);
    setIsActive(false);
  };

  return (
    <div
      ref={dropdownRef}
      className="relative w-full dropdown"
    >
      <button
        type="button" // important to prevent form submission
        className="bg-[#fff] border dark:border-slate-700 dark:bg-slate-900 border-gray-200 rounded-md mt-1 justify-between px-3 py-2 flex items-center gap-8 cursor-pointer w-full"
        onClick={() => setIsActive(!isActive)}
      >
        <p
          className={`${
            content === "Select Option"
              ? "text-gray-400 dark:text-slate-500"
              : "dark:text-[#abc2d3]"
          }`}
        >
          {content}
        </p>
        <IoChevronDown
          className={`${
            isActive ? "rotate-[180deg]" : "rotate-0"
          } transition-all duration-300 dark:text-slate-500 text-gray-600 text-[1.2rem]`}
        />
      </button>
      {isActive && (
        <div
          className="w-full absolute top-12 dark:bg-slate-800 left-0 right-0 z-40 bg-[#fff] rounded-xl flex flex-col overflow-hidden py-1"
          style={{ boxShadow: "0 15px 40px -15px rgba(0, 0, 0, 0.2)" }}
        >
          {items?.map((option, index) => (
            <div
              key={index}
              className="py-2 px-4 text-left text-gray-800 dark:text-[#abc2d3] dark:hover:bg-slate-900/50 hover:bg-gray-50 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
