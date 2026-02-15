
import { motion } from "motion/react";
import { Check, X, Shield, Brain, Zap, Paintbrush, Coins, Lock, Activity, LayoutDashboard, Cloud, Upload } from "lucide-react";
import { cn } from "../../components/ui/utils";

const features = [
    {
        category: "回答精度(専門性)",
        competitor: "汎用的・ハルシネーションあり",
        us: "貴社専用プロンプト・根拠明示",
        icon: Brain,
    },
    {
        category: "データ鮮度(同期速度)",
        competitor: "手動アップロード",
        us: "社内DB/ストレージ自動同期",
        icon: Activity, // Or RefreshCw
    },
    {
        category: "セキュリティ(VPC/学習禁止)",
        competitor: "共有サーバー",
        us: "専用環境(VPC)・学習完全禁止",
        icon: Lock,
    },
    {
        category: "UI/UXカスタマイズ",
        competitor: "固定レイアウト",
        us: "フルカスタマイズ可",
        icon: LayoutDashboard,
    },
    {
        category: "コスト(人数課金 vs 固定)",
        competitor: "アカウント毎(従量)",
        us: "システム利用料(固定・使い放題)",
        icon: Coins,
    },
];

export function ComparisonTable() {
    return (
        <section className="py-24 px-4 bg-slate-950 text-slate-100 font-sans">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
                    >
                        Why SmartKnowledge RAG?
                    </motion.h2>
                    <p className="text-slate-400 text-lg">
                        一般的なSaaSと一線を画す、エンタープライズ品質
                    </p>
                </div>

                {/* Desktop View */}
                <div className="hidden md:grid grid-cols-3 gap-0 rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/50">
                    {/* Header Row */}
                    <div className="p-6 bg-slate-900/80 font-bold text-slate-400 flex items-center justify-center border-b border-r border-slate-800">
                        比較項目
                    </div>
                    <div className="p-6 bg-slate-900/80 font-bold text-slate-400 text-center border-b border-r border-slate-800">
                        一般的なSaaS型AI
                    </div>
                    <div className="relative p-6 bg-slate-900/90 font-bold text-cyan-400 text-center border-b border-slate-800 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10" />
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            <Shield className="w-5 h-5" />
                            SmartKnowledge RAG
                        </span>
                        {/* Top highlight line for the winner column */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />
                    </div>

                    {/* Data Rows */}
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="contents"
                        >
                            {/* Label */}
                            <div className="p-6 flex items-center gap-3 border-b border-r border-slate-800 bg-slate-900/30">
                                <feature.icon className="w-5 h-5 text-slate-500" />
                                <span className="font-medium text-slate-300">{feature.category}</span>
                            </div>

                            {/* Competitor */}
                            <div className="p-6 flex items-center justify-center text-center border-b border-r border-slate-800 text-slate-400 bg-slate-900/30 relative">
                                <span className="flex items-center gap-2">
                                    <X className="w-4 h-4 text-red-500/50" />
                                    {feature.competitor}
                                </span>
                            </div>

                            {/* Us (Winner) */}
                            <div className="relative p-6 flex items-center justify-center text-center border-b border-slate-800 text-white font-bold overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 transition-colors duration-500" />
                                {/* Winner Border Glow - side borders handled by grid gap or border-r/b, but let's add an inner glow */}
                                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(6,182,212,0.05)]" />

                                <span className="relative z-10 flex items-center gap-2 text-shadow-glow">
                                    <Check className="w-5 h-5 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                                    {feature.us}
                                </span>

                                {/* Side Borders for the Winner Column to make it pop out visually if we wanted, but grid lines are fine. 
                    Let's add a subtle vertical gradient border on left/right for the whole column effect? 
                    Actually, just the background tint and bold text is strong enough.
                */}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile View (Cards) */}
                <div className="md:hidden space-y-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden"
                        >
                            <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center gap-3">
                                <feature.icon className="w-5 h-5 text-cyan-500" />
                                <span className="font-bold text-slate-200">{feature.category}</span>
                            </div>

                            <div className="grid grid-cols-2 divide-x divide-slate-800">
                                <div className="p-4 flex flex-col items-center justify-center text-center gap-2 opacity-60">
                                    <span className="text-xs text-slate-500 uppercase tracking-wider">Others</span>
                                    <div className="flex flex-col items-center gap-1">
                                        <X className="w-4 h-4 text-red-500" />
                                        <span className="text-sm text-slate-400">{feature.competitor}</span>
                                    </div>
                                </div>
                                <div className="p-4 flex flex-col items-center justify-center text-center gap-2 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 relative">
                                    {/* Mobile Winner Glow */}
                                    <div className="absolute inset-0 shadow-[inset_0_0_10px_rgba(6,182,212,0.1)]" />
                                    <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider">Us</span>
                                    <div className="flex flex-col items-center gap-1">
                                        <Check className="w-4 h-4 text-cyan-400" />
                                        <span className="text-sm text-white font-bold">{feature.us}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-right">
                    <p className="text-xs text-slate-500">
                        ※2024年10月 自社調べ。カスタマイズプランの場合
                    </p>
                </div>
            </div>
        </section>
    );
}
