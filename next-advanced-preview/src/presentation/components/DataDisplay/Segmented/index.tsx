import React, { useState } from "react";
import { SegmentedProps } from "./index.types";

export const Segmented = ({
  options,
  defaultValue,
  onChange,
}: SegmentedProps) => {
  const [selectedValue, setSelectedValue] = useState(
    defaultValue || options[0]
  );

  const handleClick = (value: string) => {
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="inline-flex p-1 space-x-1 bg-gray-200 rounded-sm">
      {options.map((option) => (
        <button
          key={option}
          className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors duration-200 cursor-pointer ${
            selectedValue === option
              ? "bg-white text-gray-900 shadow-sm border border-slate-800"
              : "text-gray-500 hover:bg-gray-100 "
          }`}
          onClick={() => handleClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
