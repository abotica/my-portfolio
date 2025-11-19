type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
};

function Button({ children, variant = "primary", onClick, className }: ButtonProps) {
  const baseStyle =
    "px-8 py-3 cursor-pointer rounded-lg font-semibold transition focus:outline-none focus:ring-2 transition-colors font-medium";

  const variantStyle =
    variant === "primary"
      ? "bg-primary text-primary-content hover:bg-primary/90"
      : "border border-primary text-primary hover:bg-primary/10";

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${className ?? ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;