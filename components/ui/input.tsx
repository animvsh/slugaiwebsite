// components/ui/input.tsx
import * as React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <input
      className="border border-gray-300 p-2 rounded-md w-full"
      {...props}
    />
  );
};

export { Input };
export default Input;
