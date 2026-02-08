import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        // Lenis is handling the scroll, but native smooth scroll often conflicts or works.
        // However, if we want 'inertial' feeling and Lenis is active, window.scrollTo with smooth might not be enough if Lenis is hijacking 'wheel' but not programmatic scroll without its own method.
        // But since SmoothScroll.ts initializes Lenis on window, lets try standard smooth first.
        // A trick to use Lenis if available globally? No standard way without context.
        // We will use standard smooth behavior which usually works fine with Lenis.
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 p-3 md:p-4 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/30 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                    aria-label="Back to top"
                >
                    <ArrowUp className="w-6 h-6" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
