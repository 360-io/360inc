import { PageWrapper } from "../components/PageWrapper";
import { FaqSection } from "../components/FaqSection";
import { motion } from "motion/react";
import { useRef, useEffect } from "react";
import {
    LayoutGrid,
    Timer,
    ArrowRight,
    TrendingUp,
    ShieldCheck,
    CheckCircle2,
    Users,
    Activity,
    Factory,
    ChevronRight,
    Store,
    Utensils,
    Building2,
    Hammer,
    Bot
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function LaborSavingSubsidyPageContent() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".hero-text", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });
            gsap.from(".feature-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".features-section",
                    start: "top 80%",
                }
            });
            gsap.from(".stat-item", {
                scale: 0.8,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".stats-section",
                    start: "top 75%",
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const data = [
        { name: 'Reduced', value: 75, color: '#a855f7' },
        { name: 'Remaining', value: 25, color: 'rgba(255,255,255,0.1)' },
    ];

    const faqs = [
        {
            question: "どのような機器が対象ですか？",
            answer: "カタログに登録された省力化製品（券売機、自動精算機、清掃ロボット、配膳ロボット、スチームコンベクションオーブンなど）が対象です。詳しくはご相談ください。"
        },
        {
            question: "採択率はどのくらいですか？",
            answer: "簡易申請枠など申請区分によりますが、要件を満たし適切な計画を立てれば採択の可能性は高まります。行政書士等の専門家と連携しサポートします。"
        },
        {
            question: "申請に必要な書類は？",
            answer: "決算書や履歴事項全部証明書、労働者名簿などが必要です。準備段階からトータルでサポートいたします。"
        },
        {
            question: "いつまでに申請すればいいですか？",
            answer: "公募期間は約2ヶ月ごとに設定されていますが、早めの準備をおすすめします。最新のスケジュールは無料相談にてご案内します。"
        }
    ];

    const useCases = [
        {
            title: "飲食業",
            icon: <Utensils className="w-12 h-12 text-[#a855f7]" />,
            desc: "配膳ロボットや自動券売機の導入で、ホールスタッフの負担を軽減。接客品質の向上と人件費削減を両立。",
            tags: ["配膳ロボット", "自動券売機"]
        },
        {
            title: "宿泊業",
            icon: <Building2 className="w-12 h-12 text-[#d8b4fe]" />,
            desc: "自動チェックイン機の導入で、フロント業務を効率化。深夜帯の人員配置を最適化し、労働環境を改善。",
            tags: ["自動チェックイン機", "清掃ロボット"]
        },
        {
            title: "製造・倉庫",
            icon: <Factory className="w-12 h-12 text-[#c084fc]" />,
            desc: "自動搬送ロボットや検品システムの導入。単純作業を機械に任せ、熟練工をコア業務へ集中させる。",
            tags: ["自動倉庫システム", "検品ロボット"]
        }
    ];

    return (
        <PageWrapper>
            <div ref={containerRef} className="bg-[#0B1120] text-white font-sans selection:bg-purple-500/30">
                {/* Fixed Background */}
                <div className="fixed inset-0 bg-[#2e1065]/20 -z-40" />
                <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-30 pointer-events-none" />

                {/* Hero Section */}
                <section className="min-h-[70vh] flex flex-col justify-center items-center text-center mb-24 relative px-6">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 via-[#4c1d95]/10 to-[#0B1120] -z-10" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex gap-4 mb-8 flex-wrap justify-center"
                    >
                        <span className="bg-[#a855f7] text-white px-4 py-1 rounded-full font-bold text-sm md:text-base flex items-center shadow-lg shadow-purple-500/20">
                            <Bot className="w-4 h-4 mr-2" /> 最新ロボット導入
                        </span>
                        <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1 rounded-full font-bold text-sm md:text-base flex items-center">
                            人手不足解消
                        </span>
                    </motion.div>

                    <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-400 to-indigo-400">
                            人手不足は、
                        </span>
                        <span className="text-white">
                            テクノロジーで解決する。
                        </span>
                    </h1>

                    <p className="hero-text text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        <span className="text-[#d8b4fe] font-bold">省力化補助金</span>を活用し、<br className="hidden md:block" />
                        IoT・ロボット等の導入で、付加価値の高い業務へシフトしませんか。
                    </p>

                    <motion.div
                        className="hero-text"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a
                            href="/contact"
                            className="bg-[#7e22ce] hover:bg-[#6b21a8] text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl shadow-purple-500/30 transition-all flex items-center gap-2 group"
                        >
                            無料相談はこちら
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </section>

                {/* Problems & Solution */}
                <section className="features-section mb-32 px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Automation?</h2>
                        <p className="text-gray-400">現場が抱える3つの課題を解決</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                icon: <Bot className="w-10 h-10" />,
                                title: "単純作業からの解放",
                                desc: "清掃や配膳などのルーチンワークをロボットに任せることで、スタッフはより創造的な業務に集中できます。"
                            },
                            {
                                icon: <TrendingUp className="w-10 h-10" />,
                                title: "生産性の大幅向上",
                                desc: "24時間稼働可能なシステムや、高速処理が可能な専用機を導入し、限られた人員で最大の成果を生み出します。"
                            },
                            {
                                icon: <Users className="w-10 h-10" />,
                                title: "採用難への対策",
                                desc: "人手が集まらない業務を自動化。採用コストを削減しつつ、安定したオペレーションを実現します。"
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="feature-card bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group">
                                <div className="bg-[#4c1d95]/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-[#d8b4fe] group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Stats */}
                <section className="stats-section mb-32 px-6">
                    <div className="max-w-6xl mx-auto bg-white/5 rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-white/10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">Impact of Automation</h2>
                                <p className="text-gray-300 mb-8 text-lg">
                                    省力化機器の導入により、<br />
                                    業務時間の削減と利益率の向上が期待できます。
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="stat-item bg-[#4c1d95] px-6 py-3 rounded-xl border border-white/10 flex items-center gap-3">
                                        <Timer className="text-[#d8b4fe]" />
                                        <span className="font-bold">業務時間 75% 削減</span>
                                    </div>
                                    <div className="stat-item bg-[#4c1d95] px-6 py-3 rounded-xl border border-white/10 flex items-center gap-3">
                                        <Activity className="text-[#d8b4fe]" />
                                        <span className="font-bold">生産性 3倍 UP</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative h-[300px] flex items-center justify-center">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={data}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={80}
                                            outerRadius={100}
                                            startAngle={90}
                                            endAngle={-270}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {data.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                                            ))}
                                            <Label
                                                value="-75%"
                                                position="center"
                                                fill="#ffffff"
                                                style={{ fontSize: '3rem', fontWeight: 'bold', fontFamily: 'sans-serif' }}
                                            />
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className="absolute bottom-0 text-center w-full text-sm text-gray-400">
                                    単純作業時間の削減効果（モデルケース）
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Specific Use Cases */}
                <section className="mb-32 px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Target Industries</h2>
                        <p className="text-gray-400">幅広い業種で活用されています</p>
                    </div>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                        {useCases.map((item, idx) => (
                            <div key={idx} className="bg-[#1e1b4b]/50 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 hover:border-purple-500/50 transition-colors">
                                <div className="bg-white/10 p-4 rounded-2xl w-fit mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-300 mb-6 leading-relaxed min-h-[5rem]">
                                    {item.desc}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag, i) => (
                                        <span key={i} className="bg-[#a855f7]/20 text-[#d8b4fe] px-3 py-1 rounded-full text-xs font-bold border border-[#a855f7]/30">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <FaqSection
                    customFaqs={faqs}
                    title="FAQ"
                    subtitle="省力化補助金に関するよくあるご質問"
                />

                {/* CTA */}
                <section className="text-center py-20 px-6">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#4c1d95] to-[#312e81] border border-white/20 p-12 rounded-[3rem] relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[#d8b4fe] blur-[120px] opacity-10 pointer-events-none" />

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
                            「どの製品が対象？」<br />まずはお調べします。
                        </h2>
                        <p className="text-gray-300 mb-10 max-w-2xl mx-auto relative z-10 text-lg">
                            カタログ型で申請しやすいのが特徴です。<br />
                            御社の課題に合った機器が対象か、無料で診断いたします。
                        </p>

                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-5 px-12 rounded-full text-xl shadow-2xl transition-all hover:scale-105 relative z-10"
                        >
                            対象製品・診断を予約する
                            <ChevronRight className="ml-2 w-6 h-6" />
                        </a>
                    </div>
                </section>

                <BackToTopButton />
                <BackLinkButton href="/ax-transformation" label="AXソリューション" />
            </div>
        </PageWrapper>
    );
}

import { BackToTopButton } from "../components/BackToTopButton";
import { BackLinkButton } from "../components/BackLinkButton";
