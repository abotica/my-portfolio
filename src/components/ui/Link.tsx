import NextLink from 'next/link';

type LinkProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  target?: "_blank" | "_self" | "_parent" | "_top";
  className?: string;
};

function Link({ children, href, variant = "primary", target, className }: LinkProps) {
  const baseStyle =
    "inline-block px-8 py-3 cursor-pointer rounded-lg font-semibold transition focus:outline-none focus:ring-2 transition-colors font-medium text-center";

  const variantStyle =
    variant === "primary"
      ? "bg-primary text-primary-content hover:bg-primary/90"
      : "border border-primary text-primary hover:bg-primary/10";

  // Check if it's an external link
  const isExternal = href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel');

  if (isExternal) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={`${baseStyle} ${variantStyle} ${className ?? ""}`}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink
      href={href}
      target={target}
      className={`${baseStyle} ${variantStyle} ${className ?? ""}`}
    >
      {children}
    </NextLink>
  );
}

export default Link;