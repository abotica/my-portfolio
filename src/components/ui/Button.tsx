import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
};


function Button({ children, variant = "primary", onClick, className }: ButtonProps) {

  const buttonClass = twMerge(
    clsx(
      'px-8 py-3 cursor-pointer rounded-lg font-semibold transition focus:outline-none focus:ring-2 transition-colors font-medium',
      variant === 'primary' && 'bg-primary text-primary-content hover:bg-primary/90',
      variant === 'secondary' && 'border border-primary text-primary hover:bg-primary/10'
    ),
    className ?? ''
  );

  return (
    <button
      className={buttonClass}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;