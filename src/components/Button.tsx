import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = "px-6 py-4 rounded-2xl font-bold transition-colors flex items-center justify-center w-full";
  const variants = {
    primary: "bg-[#E91E63] text-white shadow-lg shadow-[#E91E63]/20",
    secondary: "bg-[#481B37] text-white",
  };
  
  return (
    <motion.button 
      whileTap={{ scale: 0.97 }}
      className={`${baseClasses} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </motion.button>
  );
};
