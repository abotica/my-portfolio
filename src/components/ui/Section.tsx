import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type SectionProps = {
  children: React.ReactNode;
  title?: string;
  titleClassName?: string;
  variant?: "hero" | "content" | "full";
  id?: string;
  className?: string;
};

function Section({ children, title, titleClassName, variant = "content", id, className }: SectionProps) {

  const sectionStyle = twMerge(
    clsx(
      'w-full px-4 pt-16 scroll-mt-16 border-b border-base-content/10',
      variant == "hero" && "pt-32 flex flex-col items-center overflow-clip min-h-[calc(100vh_-_64px)]",
      variant == "content" && "min-h-screen py-16",
      variant == "full" && "min-h-screen" // full variant - same as content for now
    ),
    className ?? ''
  );

  const titleStyle = twMerge("text-base-content text-center pb-9", titleClassName ?? "" );

  return (
    <section
      id={id}
      className={sectionStyle}
    >
      {title && variant !== "hero" && (
        <h1 className={titleStyle}>
          {title}
        </h1>
      )}
      {children}
    </section>
  );
}

export default Section;
