// components/ui/textarea.tsx
import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea: React.FC<TextareaProps> = ({ className, ...props }) => {
  return (
    <textarea
      className={`border border-gray-300 p-2 rounded-md w-full resize-none ${className}`}
      {...props}
    />
  );
};

export { Textarea };
export default Textarea;
