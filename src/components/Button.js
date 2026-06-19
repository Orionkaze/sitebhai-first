import Link from "next/link";

export default function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  children,
  target,
  rel,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-head font-semibold rounded-md transition-all duration-200 cursor-pointer active:scale-97 select-none whitespace-nowrap gap-2";

  const variants = {
    primary: "bg-accent hover:bg-accent-dark text-white shadow-md shadow-accent/15",
    whatsapp: "bg-wa-green hover:bg-wa-dark text-white shadow-md shadow-wa-green/15",
    outline: "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white",
    "outline-white": "bg-transparent text-white border-2 border-white/50 hover:border-white hover:bg-white/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3.5 text-base",
    lg: "px-8 py-4.5 text-lg",
  };

  const finalClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a
          href={href}
          className={finalClassName}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={finalClassName} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={finalClassName} {...props}>
      {children}
    </button>
  );
}
