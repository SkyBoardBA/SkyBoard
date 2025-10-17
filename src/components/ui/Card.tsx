import React from "react";
export const Card: React.FC<React.PropsWithChildren<{className?: string; title?: string;}>> = ({ children, className, title }) => (
  <div className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${className||""}`}>
    {title && <div className="px-4 py-3 border-b text-sm font-semibold">{title}</div>}
    <div className="p-4">{children}</div>
  </div>
);