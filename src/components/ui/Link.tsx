import NextLink from 'next/link';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

type LinkProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ternary" | "quaternary";
  target?: "_blank" | "_self" | "_parent" | "_top";
  className?: string;
  title?: string;
};

function Link({ children, href, variant = "primary", target, className, title }: LinkProps) {

  const linkStyle = twMerge(
    clsx(
      'inline-block px-8 py-3 cursor-pointer rounded-lg font-semibold transition focus:outline-none focus:ring-2 transition-colors font-medium text-center',
      variant === 'primary' && "bg-primary text-primary-content hover:bg-primary/90",
      variant === 'secondary' && "border border-primary text-primary hover:bg-primary/10",
      variant === 'ternary' && "text-base-content/70 hover:text-base-content p-0",
      variant === 'quaternary' && "p-2 hover:bg-base-200 rounded-lg transition-colors border border-base-content/10 hover:border-primary"
    ),
    className ?? ''
  )

  // Check if it's an external link
  const isExternal = href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel');

  if (isExternal) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={linkStyle}
        title={title}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink
      href={href}
      target={target}
      className={linkStyle}
    >
      {children}
    </NextLink>
  );
}

export default Link;