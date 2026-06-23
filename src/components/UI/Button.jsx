import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  type = 'button',
  className = '',
  ...props
}) => {
  const baseStyle = "relative inline-flex items-center justify-center font-bold transition-all duration-300 rounded-full px-6 py-3.5 text-sm tracking-wide focus:outline-none cursor-pointer overflow-hidden font-display";

  const variants = {
    primary: "btn-glow text-white",
    secondary: "border border-white/12 bg-white/4 text-white/70 hover:bg-white/8 hover:border-white/20 hover:text-white backdrop-blur-sm hover:-translate-y-0.5",
    accent: "bg-[#FF5500] text-white shadow-[0_4px_20px_rgba(255,85,0,0.3)] hover:shadow-[0_6px_30px_rgba(255,85,0,0.5)] hover:-translate-y-0.5",
    outline: "border border-[#FF5500]/40 bg-transparent text-[#FF5500] hover:bg-[#FF5500]/10 hover:border-[#FF5500]",
    text: "text-zinc-400 hover:text-white px-2 py-1 bg-transparent hover:translate-x-1"
  };

  const combinedClasses = `${baseStyle} ${variants[variant]} ${className}`;

  if (to) return <Link to={to} className={combinedClasses} onClick={onClick} {...props}>{children}</Link>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses} onClick={onClick} {...props}>{children}</a>;
  return <button type={type} className={combinedClasses} onClick={onClick} {...props}>{children}</button>;
};

export default Button;
