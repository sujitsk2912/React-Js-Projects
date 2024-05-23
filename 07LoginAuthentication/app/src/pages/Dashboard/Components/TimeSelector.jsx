import { useState } from "react";

const TimeSelector = () => {
  const [selected, setSelected] = useState("1D");

  const handleClick = (value) => {
    setSelected(value);
  };

  return (
    <div className="font-sans flex items-center justify-end text-xs font-semibold text-gray-500">
      <div className="flex space-x-2 bg-gray-200 rounded-lg px-2 py-1">
        {["1H", "1D", "1W", "1M"].map((time) => (
          <button
            key={time}
            className={`flex-1 py-2 px-3 rounded-md transition-all duration-300 ${
              selected === time ? "bg-white text-black" : ""
            }`}
            onClick={() => handleClick(time)}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSelector;
