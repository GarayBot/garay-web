interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "text-xl",
  md: "text-3xl",
  lg: "text-4xl",
};

export function Logo({ className = "", size = "md" }: LogoProps) {
  return (
    <span
      className={`font-[var(--font-poppins)] font-semibold tracking-tight ${sizes[size]} ${className}`}
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      <span className="text-white">garay</span>
      <span className="text-[#4a64eb]">.</span>
    </span>
  );
}
