import { clsx } from "clsx";
import React from "react";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "ghost" | "outline" };
export const Button: React.FC<Props> = ({ className, variant="default", ...rest }) => {
  const base = "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition";
  const styles = { default: "bg-brand text-white hover:opacity-90 shadow", ghost: "bg-transparent hover:bg-slate-100", outline: "border border-slate-300 hover:bg-slate-50" }[variant];
  return <button className={clsx(base, styles, className)} {...rest} />;
};