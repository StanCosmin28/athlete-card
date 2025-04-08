import React from "react";

export default function GlassmorphismWrapper({
  children,
  className = "",
  variant = "default",
  showDecoration = true,
}) {
  // Base glassmorphism styles shared by all variants
  const baseStyles = "backdrop-blur-lg relative overflow-hidden";

  // Different styling variants
  const variants = {
    default:
      "bg-gradient-to-br from-white/40 to-white/20 dark:from-slate-900/40 dark:to-slate-900/20 border border-white/30 dark:border-slate-700/50 shadow-xl shadow-blue-500/10 dark:shadow-blue-800/10 rounded-xl",
    subtle:
      "bg-white/20 dark:bg-slate-900/30 border border-white/30 dark:border-slate-700/50 shadow-lg shadow-blue-500/5 dark:shadow-blue-800/5 rounded-lg",
    vibrant:
      "bg-gradient-to-br from-white/50 to-white/30 dark:from-slate-800/40 dark:to-slate-900/30 border border-white/40 dark:border-slate-600/40 shadow-xl shadow-purple-500/10 dark:shadow-purple-800/10 rounded-2xl",
    accented:
      "bg-gradient-to-br from-white/30 via-blue-50/20 to-white/20 dark:from-slate-900/30 dark:via-blue-900/10 dark:to-slate-900/20 border border-white/30 dark:border-slate-700/40 shadow-lg shadow-blue-500/10 dark:shadow-blue-800/10 rounded-xl",
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {showDecoration && (
        <>
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
        </>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
