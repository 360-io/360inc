import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

// Particle component for the "Reverse Big Bang" effect
const ParticleImplosion = () => {
  // Generate random particles - Increased count significantly
  const particles = Array.from({ length: 80 }, (_, i) => {
    // Random angle and distance for more natural dispersion
    const angle = Math.random() * Math.PI * 2;
    const distance = 800 + Math.random() * 800; // Start far away
    return {
      id: i,
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      size: Math.random() * 4 + 1, // Varied sizes
      delay: Math.random() * 0.8, // Staggered start
      duration: 2.0 + Math.random() * 1.5, // Varied speeds
    };
  });

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: p.x, y: p.y, opacity: 0, scale: 0 }}
          animate={{
            x: 0,
            y: 0,
            opacity: [0, 1, 1, 0],
            scale: [0, 1.5, 0.5, 0]
          }}
          transition={{
            duration: p.duration,
            ease: [0.16, 1, 0.3, 1], // Custom Ease Out Expo-ish for dramatic convergence
            delay: p.delay,
          }}
          className="absolute rounded-full bg-blue-100 blur-[1px]"
          style={{ width: p.size, height: p.size }}
        />
      ))}
      {/* Central flash */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 2, 0], opacity: [0, 1, 0] }}
        transition={{ delay: 2.2, duration: 0.5, ease: "easeOut" }}
        className="absolute w-40 h-40 bg-white rounded-full blur-2xl"
      />
    </div>
  );
};

export function Hero({ title, subtitle, imageUrl }: HeroProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  // Check if we are in the special "So" mode
  const isSoMode = title === "想";

  useEffect(() => {
    // Original GSAP animation fallback for non-"So" titles
    if (!isSoMode && titleRef.current && subtitleRef.current) {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 100,
          rotationX: 90,
          transformPerspective: 1000
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.5,
          delay: 0.3,
          ease: "power4.out"
        }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.8,
          ease: "power3.out"
        }
      );
    }
  }, [isSoMode]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Font Import for "Tensho" style approximation (Yuji Syuku) */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Yuji+Syuku&display=swap');`}
      </style>

      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </motion.div>

      {isSoMode && <ParticleImplosion />}

      <motion.div
        className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto"
        style={{ opacity }}
      >
        <div className="mb-8 relative">
          {isSoMode ? (
            <motion.h1
              initial={{ opacity: 0, scale: 3, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ delay: 2.3, duration: 1.2, ease: "circOut" }}
              className="text-[12rem] md:text-[16rem] tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-500 leading-none"
              style={{ fontFamily: "'Yuji Syuku', serif" }}
            >
              {title}
            </motion.h1>
          ) : (
            <h1
              ref={titleRef}
              className="text-6xl md:text-8xl lg:text-9xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400 leading-[1.1]"
            >
              {title}
            </h1>
          )}
        </div>

        {isSoMode ? (
          <div className="text-lg md:text-3xl lg:text-4xl text-white/90 font-light tracking-tight leading-relaxed">
            {subtitle.split('\n').map((line, lineIndex) => (
              <div key={lineIndex} className="block overflow-hidden mb-4">
                {line.split('').map((char, charIndex) => (
                  <motion.span
                    key={`${lineIndex}-${charIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 3.5 + (lineIndex * 1.5) + (charIndex * 0.05),
                      ease: "easeOut"
                    }}
                    className="inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <p
            ref={subtitleRef}
            className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-light tracking-tight"
          >
            {subtitle}
          </p>
        )}


      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: isSoMode ? 4.5 : 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}