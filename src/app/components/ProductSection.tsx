import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useRef } from "react";

interface ProductSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  reversed?: boolean;
  linkUrl?: string;
  videoUrl?: string;
}

export function ProductSection({ title, description, imageUrl, reversed = false, linkUrl, videoUrl }: ProductSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={ref} className="py-16 md:py-32 px-6 overflow-hidden" id="products">
      <div className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center ${reversed ? 'md:grid-flow-dense' : ''}`}>
        <motion.div
          initial={{ opacity: 0, x: reversed ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={reversed ? 'md:col-start-2' : ''}
        >
          <motion.h2
            className="text-5xl md:text-7xl mb-4 md:mb-8 font-sans font-bold tracking-tight leading-[1.05]"
            whileInView={{ backgroundPosition: ["0%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            style={{
              backgroundImage: "linear-gradient(90deg, #fff 0%, #888 25%, #fff 50%, #888 75%, #fff 100%)",
              backgroundSize: "200% 100%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            {title}
          </motion.h2>
          <p className="text-2xl md:text-3xl text-gray-400 leading-relaxed font-light">
            {description}
          </p>
          <motion.a
            href={linkUrl}
            whileHover={{ x: 10 }}
            className="mt-8 inline-flex items-center gap-2 text-lg group cursor-pointer"
          >
            <span>もっと見る</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>

        <motion.div
          style={{ y }}
          className={reversed ? 'md:col-start-1 md:row-start-1' : ''}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: reversed ? -20 : 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05, rotateY: reversed ? -5 : 5 }}
            style={{
              transformStyle: "preserve-3d",
              perspective: 1000
            }}
          >
            {videoUrl ? (
              <video
                src={videoUrl}
                className="w-full h-[300px] md:h-[600px] object-cover rounded-3xl shadow-2xl"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <ImageWithFallback
                src={imageUrl}
                alt={title}
                className="w-full h-[300px] md:h-[600px] object-cover rounded-3xl shadow-2xl"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}