import { motion } from "motion/react";
import { ClipboardList, PencilRuler, Code2, Bug, Rocket, Wrench, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const steps = [
    {
        id: 1,
        title: "企画・要件定義",
        subtitle: "Planning",
        icon: ClipboardList,
        description: "お客様の課題をヒアリングし、解決すべき問題を明確化。機能要件や仕様を決定します。",
        color: "bg-blue-50",
        borderColor: "border-blue-200",
        textColor: "text-blue-900",
        iconColor: "text-blue-600",
        headerColor: "bg-blue-600"
    },
    {
        id: 2,
        title: "設計",
        subtitle: "Design",
        icon: PencilRuler,
        description: "UI/UXデザインやシステム設計を行い、開発の指針となる設計図を作成します。",
        color: "bg-green-50",
        borderColor: "border-green-200",
        textColor: "text-green-900",
        iconColor: "text-green-600",
        headerColor: "bg-green-600"
    },
    {
        id: 3,
        title: "開発・実装",
        subtitle: "Development",
        icon: Code2,
        description: "フロントエンドからバックエンドまで、設計に基づき高品質なコードで実装します。",
        color: "bg-yellow-50",
        borderColor: "border-yellow-200",
        textColor: "text-yellow-900",
        iconColor: "text-yellow-600",
        headerColor: "bg-yellow-500"
    },
    {
        id: 4,
        title: "テスト",
        subtitle: "Testing",
        icon: Bug,
        description: "単体テスト・結合テストを行い、バグや不具合がないか徹底的にチェックします。",
        color: "bg-orange-50",
        borderColor: "border-orange-200",
        textColor: "text-orange-900",
        iconColor: "text-orange-600",
        headerColor: "bg-orange-500"
    },
    {
        id: 5,
        title: "リリース・公開",
        subtitle: "Release",
        icon: Rocket,
        description: "本番環境へのデプロイを行い、サービスを公開。安全なリリース手順を遵守します。",
        color: "bg-red-50",
        borderColor: "border-red-200",
        textColor: "text-red-900",
        iconColor: "text-red-600",
        headerColor: "bg-red-500"
    },
    {
        id: 6,
        title: "運用・保守",
        subtitle: "Operation",
        icon: Wrench,
        description: "リリース後のシステム監視や定期メンテナンス、機能改善を行い、安定稼働を支えます。",
        color: "bg-purple-50",
        borderColor: "border-purple-200",
        textColor: "text-purple-900",
        iconColor: "text-purple-600",
        headerColor: "bg-purple-600"
    }
];

export function AppDevWorkflowDiagram() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024); // Breakpoint for 6 columns
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="py-16 bg-white rounded-3xl my-8 text-black overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-black tracking-tight mb-2"
                    >
                        Application Development Workflow
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-500 font-medium tracking-wider text-sm md:text-base"
                    >
                        高品質なアプリケーションを構築するための6つのステップ
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            variants={cardVariants}
                            className="relative flex flex-col h-full"
                        >
                            <div className={`flex flex-col h-full rounded-2xl border ${step.borderColor} ${step.color} overflow-hidden shadow-sm hover:shadow-md transition-shadow`}>
                                {/* Header */}
                                <div className={`${step.headerColor} py-4 px-4 text-white text-center`}>
                                    <span className="text-xs font-bold tracking-widest opacity-90 block mb-1">Step {step.id}</span>
                                    <h3 className="font-bold text-lg whitespace-nowrap">{step.title}</h3>
                                </div>

                                <div className="p-5 flex-1 flex flex-col items-center text-center">
                                    <div className={`w-12 h-12 rounded-full bg-white border ${step.borderColor} flex items-center justify-center mb-4 shadow-sm`}>
                                        <step.icon size={20} className={step.iconColor} />
                                    </div>

                                    <p className="text-xs text-gray-600 leading-relaxed font-medium">
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            {/* Arrow between cards (Desktop - 3 Column Layout) */}
                            {/* Show arrow if NOT the last item AND NOT the last item in a row (multiples of 3 minus 1) */}
                            {index < steps.length - 1 && (index + 1) % 3 !== 0 && (
                                <div className="hidden lg:flex absolute top-1/2 -right-6 translate-x-1/2 -translate-y-1/2 z-10">
                                    <ArrowRight className="text-gray-300 w-6 h-6" />
                                </div>
                            )}
                            {/* Arrow between cards (Mobile/Tablet - Vertical) */}
                            {index < steps.length - 1 && (
                                <div className="lg:hidden flex justify-center py-2 text-gray-300">
                                    <ArrowRight className="text-gray-300 w-5 h-5 rotate-90" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Project Progress Arrow at Bottom */}
                <motion.div
                    initial={{ opacity: 0, width: "0%" }}
                    whileInView={{ opacity: 1, width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="mt-12 h-12 bg-gray-100 rounded-full relative items-center hidden lg:flex overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-yellow-500 to-purple-500 opacity-20"></div>
                    <span className="absolute left-6 text-sm font-bold text-gray-500">プロジェクト進行</span>
                    <div className="absolute right-6">
                        <ArrowRight className="text-gray-400" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
