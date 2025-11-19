type SectionProps = {
  children: React.ReactNode;
  title?: string;
  titleClassName?: string;
  variant?: "hero" | "content" | "full";
  id?: string;
  className?: string;
};

function Section({ children, title, titleClassName, variant = "content", id, className }: SectionProps) {
  const baseStyle = "w-full px-4 pt-16 scroll-mt-16 border-b border-base-content/10";

  const variantStyle =
    variant === "hero"
      ? "flex flex-col items-center overflow-clip min-h-[calc(100vh_-_64px)]"
      : variant === "content"
      ? "min-h-screen"
      : "min-h-screen"; // full variant - same as content for now

  const titleStyle = "text-base-content text-center pb-9";

  return (
    <section
      id={id}
      className={`${baseStyle} ${variantStyle} ${className ?? ""}`}
    >
      {title && variant !== "hero" && (
        <h1 className={`${titleStyle} ${titleClassName ?? ""}`}>
          {title}
        </h1>
      )}
      {children}
    </section>
  );
}

export default Section;
