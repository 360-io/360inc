import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 text-white mix-blend-difference"
      >
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative border-b border-white/[0.66]">
          {/* Left: Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex flex-col gap-1.5 p-2 hover:opacity-70 transition-opacity"
            aria-label="Menu"
          >
            <span className="w-8 h-0.5 bg-white block" />
            <span className="w-8 h-0.5 bg-white block" />
            <span className="w-8 h-0.5 bg-white block" />
          </button>

          {/* Center: LIG Logo */}
          {/* Center: LIG Logo */}
          <a
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <img src="/images/360inc_logo.png" alt="360Inc." className="h-[55px] md:h-[77px] w-auto object-contain" />
          </a>

          {/* Right: Blog & Contact */}
          <div className="flex items-center gap-4 md:gap-8 text-xs md:text-sm font-bold tracking-wider">
            <a href="/blog" className="hover:text-gray-300 transition-colors">Blog</a>
            <a href="/contact" className="hover:text-gray-300 transition-colors">Contact</a>
          </div>
        </nav>
      </motion.header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/98 backdrop-blur-3xl flex flex-col justify-center items-center text-white"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 left-8 p-4 hover:opacity-70 transition-opacity"
              aria-label="Close Menu"
            >
              <span className="text-5xl font-thin tracking-tighter">×</span>
            </button>

            <motion.nav
              className="flex flex-col gap-10 text-center"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.1
                  }
                }
              }}
            >
              {[
                { label: "Home", href: "/" },
                { label: "Solution +", href: "/#products" },
                { label: "Project", href: "/projects" },
                { label: "About Us", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" }
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-6xl md:text-8xl font-sans font-bold tracking-tight text-white transition-all duration-300 relative group overflow-hidden"
                  variants={{
                    hidden: { y: 40, opacity: 0 },
                    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}