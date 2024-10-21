import React, { ButtonHTMLAttributes, ReactNode } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
const Button: React.FC<ButtonProps> = (props) => {
  const { children, className } = props;
  return <button {...props} className={className}>{children}</button>;
};
export default Button;
