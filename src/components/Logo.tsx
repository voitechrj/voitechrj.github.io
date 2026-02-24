import { motion } from "motion/react";

export default function Logo() {
  return (
    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 shadow-lg bg-black flex items-center justify-center">
      <img 
        src="https://lh3.googleusercontent.com/a-/ALV-UjXUy8NEVsFAXz6tx492M1-0Hc5cMmLC4hdp1jLLkFn_wKLFkhW4=w90-h90-p-rp-mo-br100" 
        alt="voitechrj Logo" 
        className="w-full h-full object-cover"
      />
    </div>
  );
}
