import { motion } from "motion/react";

export default function Logo() {
  return (
    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 shadow-lg bg-black flex items-center justify-center">
      <img 
        src="voitechrj-logo.png" 
        alt="voitechrj Logo" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
