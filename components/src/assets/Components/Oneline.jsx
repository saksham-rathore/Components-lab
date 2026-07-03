import React from 'react'
import { motion } from 'motion/react'

const Oneline = () => {
    const transition = {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
    };
    return (
        <div>
            <svg width="1033" height="9" viewBox="0 0 1033 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="beam" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
                {/* Gray background line */}
                <line x1="0.00804069" y1="6.16554" x2="1032.01" y2="2.00006" stroke="#D8D8D8" strokeWidth="4" fill="none" />
                
                {/* Animated beam */}
                <motion.line 
                    x1="0.00804069" 
                    y1="6.16554" 
                    x2="1032.01" 
                    y2="2.00006" 
                    stroke="url(#beam)" 
                    strokeWidth="4" 
                    fill="none"
                    strokeLinecap="round"
                    pathLength={1}
                    strokeDasharray="0.12 1"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -1 }}
                    transition={{
                        ...transition,
                        delay: 1.3,
                    }}
                    style={{
                        filter: "drop-shadow(0 0 8px #8B5CF6)",
                    }}
                />
            </svg>
        </div>
    )
}

export default Oneline