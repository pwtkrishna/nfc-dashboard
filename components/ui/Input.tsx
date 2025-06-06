import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
}

const Input: React.FC<InputProps> = ({ label, id, ...props }) => (
  <div className="mb-4">
    {label && (
      <label htmlFor={id} className="block mb-1 font-medium text-gray-700">
        {label}
      </label>
    )}
    <input
      id={id}
      className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  </div>
);

export default Input;
