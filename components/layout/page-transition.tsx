"use client"
import { motion } from "framer-motion"

interface PageTransitionProps {
    children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
    // Transition Option 8: Stagger Children (for complex pages)
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{
                    duration: 0.2,
                    delay: 0.1,
                    ease: [0.68, -0.55, 0.265, 0.68],
                    type: "spring",
                    stiffness: 100
                }}
            >
                {children}
            </motion.div>
            {/* </motion.div>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{
                    duration: 0.4,
                    delay: 0.1,
                    ease: "easeOut"
                }}
            >
                {children}
            </motion.div> */}
        </motion.div>
    )
}
