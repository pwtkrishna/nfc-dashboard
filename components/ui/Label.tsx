import React from "react";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

const Label: React.FC<LabelProps> = ({ children, ...props }) => (
  <label className="block mb-1 font-medium text-gray-700" {...props}>
    {children}
  </label>
);

export default Label;
