import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function AboutSection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

    return (
        <section ref={ref} className="py-32 px-6 relative z-10" id="about">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    style={{ y }}
                    className="grid md:grid-cols-2 gap-8 md:gap-16 items-center"
                >
                    {/* Text Content */}
                    <div className="bg-black/[0.66] backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl relative z-20">
                        <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tight mb-8 text-white">
                            Who We Are
                        </h2>
                        <div className="space-y-6 text-base md:text-lg text-white font-medium leading-relaxed">
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
                                    href="/about/"
                                    className="inline-flex items-center gap-2 text-white font-bold border-b border-white/30 pb-1 hover:border-white transition-colors group"
                                >
                                    私たちについてもっと知る
                                    <span className="text-sm transition-transform group-hover:translate-x-1">→</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Visual Content - Circle */}
                    <div className="relative flex justify-center items-center">
                        <div className="aspect-square w-full max-w-[500px] rounded-full overflow-hidden border border-white/10 relative group bg-black/20 backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 animate-pulse group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 flex items-center justify-center text-[8rem] md:text-[10rem] font-black text-white/5 select-none pointer-events-none group-hover:text-white/10 transition-colors duration-500 tracking-tighter">
                                360
                            </div>
                            {/* Grid pattern overlay for texture */}
                            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
