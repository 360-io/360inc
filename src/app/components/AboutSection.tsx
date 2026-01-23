import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function AboutSection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

    return (
        <section ref={ref} className="py-32 px-6 relative z-10" id="about">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    style={{ opacity, y }}
                    className="grid md:grid-cols-2 gap-16 items-center"
                >
                    <div>
                        <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                            Who We Are
                        </h2>
                        <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
                            <p>
                                デジタルで”想う””寄り添う”を実現する。
                                私たちは、AIとデジタルの力を融合させ、人の心に響く未来のスタンダードを創造します。
                            </p>
                            <p>
                                テクノロジーは単なる効率化の手段ではありません。
                                相手を深く理解し、寄り添うための架け橋として、
                                社会に温かみのある新しい価値を提供し続けます。
                            </p>
                            <div className="pt-8">
                                <a
                                    href="/about"
                                    className="inline-flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors"
                                >
                                    私たちについてもっと知る <span className="text-sm">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-full overflow-hidden border border-white/10 relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 animate-pulse"></div>
                            <div className="absolute inset-0 flex items-center justify-center text-8xl font-black text-white/5 select-none pointer-events-none">
                                360
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
