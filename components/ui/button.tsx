// components/ui/button.tsx
import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary";
}

const Button: React.FC<ButtonProps> = ({ children, variant = "default", ...props }) => {
  const buttonStyles = `px-4 py-2 rounded-md ${
    variant === "primary" ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
  }`;

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

export { Button };
export default Button;
