import { PageWrapper } from "../components/PageWrapper";
import { FaqSection } from "../components/FaqSection";
import { motion } from "motion/react";
import { useRef, useEffect } from "react";
import {
    Flame,
    Box,
    Microscope,
    ArrowRight,
    TrendingUp,
    ShieldCheck,
    CheckCircle2,
    Users,
    Zap,
    Scale,
    FileCheck,
    ChevronRight,
    Rocket,
    Brain,
    Coins,
    Gem,
    Lightbulb
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ManufacturingSubsidyPageContent() {
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
        { name: 'Subsidized', value: 66, color: '#f97316' },
        { name: 'Self', value: 34, color: 'rgba(255,255,255,0.1)' },
    ];

    const faqs = [
        {
            question: "製造業以外でも申請できますか？",
            answer: "はい、可能です。「ものづくり」という名前ですが、小売・サービス業など、革新的なサービス開発を行うあらゆる業種が対象となります。"
        },
        {
            question: "採択率を上げるポイントは？",
            answer: "「革新性」を示す事業計画書が鍵となります。競合他社にない優位性や、市場ニーズへの適合性を論理的にアピールする必要があります。"
        },
        {
            question: "補助金はいつもらえますか？",
            answer: "原則として「後払い」です。事業終了後に確定検査を受け、その後入金されます。つなぎ融資等の資金計画も併せてご相談可能です。"
        },
        {
            question: "加点項目について教えてください。",
            answer: "賃上げ計画の表明や、事業継続力強化計画の認定などが加点対象となります。これらの要件を満たすためのサポートも行っています。"
        }
    ];

    return (
        <PageWrapper>
            <div ref={containerRef} className="bg-[#0B1120] text-white font-sans selection:bg-orange-500/30">
                {/* Fixed Background */}
                <div className="fixed inset-0 bg-[#431407]/20 -z-40" />
                <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-30 pointer-events-none" />

                {/* Hero Section */}
                <section className="min-h-[70vh] flex flex-col justify-center items-center text-center mb-24 relative px-6">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 via-[#7c2d12]/10 to-[#0B1120] -z-10" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex gap-4 mb-8 flex-wrap justify-center"
                    >
                        <span className="bg-[#f97316] text-[#431407] px-4 py-1 rounded-full font-bold text-sm md:text-base flex items-center shadow-lg shadow-orange-500/20">
                            <Rocket className="w-4 h-4 mr-2" /> 革新的サービス開発
                        </span>
                        <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1 rounded-full font-bold text-sm md:text-base flex items-center">
                            最大数千万円支援
                        </span>
                    </motion.div>

                    <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-400 to-red-400">
                            次の「革新」へ、
                        </span>
                        <span className="text-white">
                            挑戦する資金を。
                        </span>
                    </h1>

                    <p className="hero-text text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        <span className="text-[#fdba74] font-bold">ものづくり補助金</span>は、企業の飛躍的な成長を支援します。<br className="hidden md:block" />
                        新製品・新サービスの開発に、国からの強力なバックアップを。
                    </p>

                    <motion.div
                        className="hero-text"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a
                            href="/contact"
                            className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl shadow-orange-500/30 transition-all flex items-center gap-2 group"
                        >
                            無料相談はこちら
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </section>

                {/* Features */}
                <section className="features-section mb-32 px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Innovation Support</h2>
                        <p className="text-gray-400">リスクある挑戦を後押し</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                icon: <Gem className="w-10 h-10" />,
                                title: "高額な設備投資が可能",
                                desc: "最大数千万円規模の補助により、通常では躊躇してしまうような高性能な機械やシステムを導入できます。"
                            },
                            {
                                icon: <Lightbulb className="w-10 h-10" />,
                                title: "新ビジネスの創出",
                                desc: "既存事業の枠を超えた、全く新しいサービスや製品の開発に必要な試作・開発費をカバーします。"
                            },
                            {
                                icon: <Scale className="w-10 h-10" />,
                                title: "補助率 最大2/3",
                                desc: "投資リスクを大幅に軽減。成長分野への大胆なピボットや、市場競争力の強化を財政面から支えます。"
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="feature-card bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group">
                                <div className="bg-[#7c2d12]/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-[#fdba74] group-hover:scale-110 transition-transform">
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
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">High Return</h2>
                                <p className="text-gray-300 mb-8 text-lg">
                                    採択に向けた事業計画の策定は、<br />
                                    自社の強みを再定義する機会にもなります。
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="stat-item bg-[#7c2d12] px-6 py-3 rounded-xl border border-white/10 flex items-center gap-3">
                                        <Coins className="text-[#fdba74]" />
                                        <span className="font-bold">最大数千万円 補助</span>
                                    </div>
                                    <div className="stat-item bg-[#7c2d12] px-6 py-3 rounded-xl border border-white/10 flex items-center gap-3">
                                        <TrendingUp className="text-[#fdba74]" />
                                        <span className="font-bold">採択実績多数</span>
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
                                                value="2/3"
                                                position="center"
                                                fill="#ffffff"
                                                style={{ fontSize: '3rem', fontWeight: 'bold', fontFamily: 'sans-serif' }}
                                            />
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className="absolute bottom-0 text-center w-full text-sm text-gray-400">
                                    補助率のイメージ（通常枠・2/3の場合）
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <FaqSection
                    customFaqs={faqs}
                    title="FAQ"
                    subtitle="ものづくり補助金に関するよくあるご質問"
                />

                {/* CTA */}
                <section className="text-center py-20 px-6">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#7c2d12] to-[#431407] border border-white/20 p-12 rounded-[3rem] relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[#fdba74] blur-[120px] opacity-10 pointer-events-none" />

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
                            そのアイデアを、<br />実現させましょう。
                        </h2>
                        <p className="text-gray-300 mb-10 max-w-2xl mx-auto relative z-10 text-lg">
                            事業計画書の作成から採択後の報告まで。<br />
                            複雑なプロセスをプロが伴走支援します。
                        </p>

                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-5 px-12 rounded-full text-xl shadow-2xl transition-all hover:scale-105 relative z-10"
                        >
                            事業計画の相談を予約する
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
