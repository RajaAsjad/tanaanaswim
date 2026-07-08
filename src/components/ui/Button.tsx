import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const variants = {
  primary:
    "bg-ocean text-white hover:bg-ocean-dark border border-ocean hover:border-ocean-dark",
  secondary:
    "bg-coral text-white hover:bg-coral-dark border border-coral hover:border-coral-dark",
  outline:
    "bg-transparent text-ocean border border-ocean hover:bg-ocean hover:text-white",
  ghost: "bg-transparent text-ocean hover:bg-sand border border-transparent",
};

const sizes = {
  sm: "px-4 py-2 text-xs tracking-widest",
  md: "px-6 py-3 text-sm tracking-widest",
  lg: "px-8 py-4 text-sm tracking-widest",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center font-medium uppercase transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
