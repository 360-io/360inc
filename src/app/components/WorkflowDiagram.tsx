import { motion } from "motion/react";
import { MessageCircleQuestion, Lightbulb, Settings, Repeat, Bot, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const steps = [
    {
        id: 1,
        title: "Strategy & \nConsulting",
        icon: MessageCircleQuestion,
        description: "経営・現場の課題を深くヒアリングし、AI導入の効果が最大化する領域を特定。ビジネスインパクトを生むための戦略を策定します。",
        color: "bg-gray-50",
        borderColor: "border-gray-200",
        textColor: "text-gray-800",
        iconColor: "text-gray-600",
        arrowColor: "text-gray-300"
    },
    {
        id: 2,
        title: "PoC \n(Proof of Concept)",
        icon: Lightbulb,
        description: "本開発の前に、実データを用いた小規模な検証を実施。AIの精度や実現可能性を早期に確認し、プロジェクトのリスクを最小化します。",
        subText: "Risk Reduction",
        color: "bg-blue-50/50",
        borderColor: "border-blue-200",
        textColor: "text-blue-900",
        iconColor: "text-blue-600",
        arrowColor: "text-blue-200",
        highlight: true
    },
    {
        id: 3,
        title: "System \nIntegration",
        icon: Settings,
        description: "検証結果に基づき、実運用に耐えうる堅牢なAIシステムを構築。現場のワークフローに馴染むUI/UXデザインも提供します。",
        color: "bg-gray-50",
        borderColor: "border-gray-200",
        textColor: "text-gray-800",
        iconColor: "text-gray-600",
        arrowColor: "text-gray-300"
    },
    {
        id: 4,
        title: "Operation & \nMLOps",
        icon: Repeat,
        description: "AIは導入して終わりではありません。継続的なモデルの再学習と精度チューニングを行い、ビジネス価値を永続的に高めます。",
        color: "bg-gray-50",
        borderColor: "border-gray-200",
        textColor: "text-gray-800",
        iconColor: "text-gray-600",
        arrowColor: "text-gray-300"
    }
];

export function WorkflowDiagram() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 2.5,
                delayChildren: 0.5
            }
        }
    };

    const cardVariants: any = {
        hidden: { opacity: 0 },
        show: (i: number) => {
            const xOffset = isMobile ? 0 : (i === 0 ? "150%" : i === 1 ? "50%" : i === 2 ? "-50%" : "-150%");
            const yOffset = isMobile ? (i === 0 ? "150%" : i === 1 ? "50%" : i === 2 ? "-50%" : "-150%") : 0;

            return {
                opacity: [0, 1, 1, 1],
                scale: [0.5, 1.3, 1.3, 1],
                x: [xOffset, xOffset, xOffset, 0],
                y: [yOffset, yOffset, yOffset, 0],
                zIndex: [50, 50, 50, 1],
                boxShadow: [
                    "0px 10px 30px rgba(0,0,0,0.1)",
                    "0px 20px 50px rgba(59,130,246,0.3)",
                    "0px 20px 50px rgba(59,130,246,0.3)",
                    "0px 4px 6px rgba(0,0,0,0.05)"
                ],
                transition: {
                    duration: 3.5,
                    times: [0, 0.1, 0.7, 1],
                    ease: "easeInOut"
                }
            };
        }
    };

    return (
        <section className="py-12 bg-white rounded-3xl my-8 text-black overflow-hidden relative">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-10 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-black tracking-tight mb-2"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                            AI Integration Service
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 font-medium tracking-wider text-sm md:text-base"
                    >
                        課題発見から実装・運用まで、ワンストップで支援する導入プロセス
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="relative"
                >
                    {/* Minimal Progress Bar */}
                    <div className="mb-12 relative px-4">
                        {/* Track */}
                        <div className="h-1 w-full bg-gray-100 rounded-full relative overflow-visible flex items-center">

                            {/* Progress Line - Carefully Keyframed to match cards */}
                            <motion.div
                                initial={{ width: "0%" }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{
                                    duration: 10.5, // 3.5 (Card 1 settle) + 2.5 (Card 2) + 2.5 + 2.0 (End)
                                    ease: "linear",
                                    delay: 0.5 // Start exactly when Card 1 starts appearing
                                }}
                                className="h-full bg-blue-500 relative"
                            >
                                {/* Moving Icon */}
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                                    <div className="relative">
                                        <div className="w-8 h-8 bg-white rounded-full border-2 border-blue-500 flex items-center justify-center shadow-sm z-10">
                                            <Bot className="text-blue-500" size={16} />
                                        </div>
                                        <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping"></div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                custom={index}
                                variants={cardVariants}
                                className="relative flex flex-col"
                                style={{ transformOrigin: "center center" }}
                            >
                                <div className={`h-full flex flex-col rounded-2xl border ${step.borderColor} ${step.color} p-6 relative z-10 bg-white shadow-sm`}>
                                    <div className="text-center mb-6">
                                        <h3 className={`font-bold text-lg md:text-base whitespace-pre-wrap leading-tight ${step.textColor}`}>
                                            <span className="text-xs font-bold tracking-widest opacity-50 block mb-2 uppercase text-gray-400">Step {step.id}</span>
                                            {step.title}
                                        </h3>
                                    </div>

                                    <div className="flex justify-center mb-6">
                                        <div className={`w-20 h-20 md:w-16 md:h-16 rounded-full bg-white border ${step.borderColor} flex items-center justify-center text-gray-500 shadow-sm transition-transform duration-500`}>
                                            <step.icon size={32} className={step.iconColor} />
                                        </div>
                                    </div>

                                    <div className="mt-auto">
                                        <p className={`text-sm md:text-xs leading-relaxed text-gray-600 font-medium`}>
                                            {step.description}
                                        </p>
                                        {step.highlight && (
                                            <div className="mt-4 md:mt-3 inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded border border-blue-100">
                                                重要
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Arrow between cards */}
                                {index < steps.length - 1 && (
                                    <>
                                        {/* Desktop Arrow - Perfectly Centered in Gap */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: (index + 1) * 2.5 + 2.0, duration: 0.8 }}
                                            className="hidden md:flex absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-0 justify-center items-center w-8 h-8"
                                        >
                                            <ArrowRight className="text-gray-300 transform scale-150" />
                                        </motion.div>

                                        {/* Mobile Arrow - Below card */}
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: (index + 1) * 2.5 + 2.0, duration: 0.8 }}
                                            className="flex md:hidden justify-center py-4 text-gray-300"
                                        >
                                            <div className="p-2 rounded-full bg-gray-50 border border-gray-100">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M12 5v14" />
                                                    <path d="M19 12l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </motion.div>
                                    </>
                                )}
                            </motion.div>
                        ))}
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
