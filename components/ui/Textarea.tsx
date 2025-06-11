import React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id, ...props }, ref) => (
    <div className="mb-4">
      <textarea
        id={id}
        ref={ref}
        className="w-full py-4 px-3.5 text-base font-normal text-[#191724] border border-[#0000003b] rounded-lg focus:border-[#007da4] focus:outline-[#007da4] hover:border-[#191724] transition-colors duration-200"
        {...props}
      />
    </div>
  )
);

Textarea.displayName = "Textarea";

export default Textarea;
