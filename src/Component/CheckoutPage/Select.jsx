 

const Select = ({ items, onChange }) => {
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 placeholder-gray-400
                 focus:outline-none focus:ring-2 focus:ring-[#0FABCA]
                 dark:bg-white dark:text-gray-900 dark:placeholder-gray-400"
    >
      <option value="">Select an option</option>
      {items.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Select;
