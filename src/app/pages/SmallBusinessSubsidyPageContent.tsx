import { PageWrapper } from "../components/PageWrapper";
import { FaqSection } from "../components/FaqSection";
import { motion } from "motion/react";
import { useRef, useEffect } from "react";
import {
    Megaphone,
    Store,
    Laptop,
    ArrowRight,
    TrendingUp,
    ShieldCheck,
    CheckCircle2,
    Users,
    Activity,
    Factory,
    ChevronRight,
    Utensils,
    Building2,
    Leaf,
    ShoppingBag,
    Palette
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BackToTopButton } from "../components/BackToTopButton";
import { BackLinkButton } from "../components/BackLinkButton";

export function SmallBusinessSubsidyPageContent() {
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
        { name: 'Subsidized', value: 66, color: '#10b981' },
        { name: 'Self', value: 34, color: 'rgba(255,255,255,0.1)' },
    ];

    const faqs = [
        {
            question: "個人事業主でも申請できますか？",
            answer: "はい、可能です。従業員数（商業・サービス業は5人以下、その他は20人以下）の要件を満たせば、個人事業主の方でも申請いただけます。"
        },
        {
            question: "ウェブサイト制作以外にも使えますか？",
            answer: "はい、チラシ・パンフレットの作成、店舗の改装、展示会への出展費用など、販路開拓につながる幅広い経費が対象となります。"
        },
        {
            question: "申請書の書き方がわかりません。",
            answer: "当社のサポートチームが、採択実績豊富なノウハウを基に、ストーリー性のある響く事業計画書の作成を全面的にバックアップします。"
        },
        {
            question: "過去に不採択だった場合でも再申請できますか？",
            answer: "はい、可能です。前回の不採択理由を分析し、より説得力のある計画にブラッシュアップして再チャレンジを支援します。"
        }
    ];

    const useCases = [
        {
            title: "Web集客強化",
            icon: <Laptop className="w-12 h-12 text-[#10b981]" />,
            desc: "LP制作やSNS広告の実施。ターゲット層に直接アプローチし、新規顧客の獲得数を2倍以上に。",
            tags: ["ホームページ制作", "Web広告"]
        },
        {
            title: "店舗リニューアル",
            icon: <Store className="w-12 h-12 text-[#34d399]" />,
            desc: "老朽化した店舗の改装や、看板の刷新。入りやすい店構えに変えることで、来店客数を大幅アップ。",
            tags: ["店舗改装", "看板設置"]
        },
        {
            title: "新商品ブランディング",
            icon: <Palette className="w-12 h-12 text-[#6ee7b7]" />,
            desc: "パッケージデザインの刷新や、プロモーション動画の制作。商品の魅力を最大限に伝え、単価アップを実現。",
            tags: ["パッケージ開発", "PR動画"]
        }
    ];

    return (
        <PageWrapper>
            <div ref={containerRef} className="bg-[#0B1120] text-white font-sans selection:bg-emerald-500/30">
                {/* Fixed Background */}
                <div className="fixed inset-0 bg-[#064e3b]/20 -z-40" />
                <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-30 pointer-events-none" />

                {/* Hero Section */}
                <section className="min-h-[70vh] flex flex-col justify-center items-center text-center mb-24 relative px-6">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 via-[#065f46]/10 to-[#0B1120] -z-10" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex gap-4 mb-8 flex-wrap justify-center"
                    >
                        <span className="bg-[#10b981] text-[#064e3b] px-4 py-1 rounded-full font-bold text-sm md:text-base flex items-center shadow-lg shadow-emerald-500/20">
                            <Leaf className="w-4 h-4 mr-2" /> 販路開拓支援
                        </span>
                        <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1 rounded-full font-bold text-sm md:text-base flex items-center">
                            最大200万円補助
                        </span>
                    </motion.div>

                    <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-400">
                            小さな一歩が、
                        </span>
                        <span className="text-white">
                            大きな変化を生む。
                        </span>
                    </h1>

                    <p className="hero-text text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        <span className="text-[#6ee7b7] font-bold">小規模事業者持続化補助金</span>で、<br className="hidden md:block" />
                        あなたの「やりたい」を形にし、事業を次のステージへ。
                    </p>

                    <motion.div
                        className="hero-text"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a
                            href="/contact"
                            className="bg-[#059669] hover:bg-[#047857] text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl shadow-emerald-500/30 transition-all flex items-center gap-2 group"
                        >
                            無料相談はこちら
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </section>

                {/* Features */}
                <section className="features-section mb-32 px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Focus on Growth</h2>
                        <p className="text-gray-400">販路開拓の3つの柱</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                icon: <Megaphone className="w-10 h-10" />,
                                title: "認知度アップ",
                                desc: "Webサイトやチラシ、SNS広告など、新規顧客に知ってもらうための施策を幅広く支援します。"
                            },
                            {
                                icon: <ShoppingBag className="w-10 h-10" />,
                                title: "新商品の開発",
                                desc: "パッケージデザインや試作開発費も対象。市場のニーズに合わせた新商品開発をサポート。"
                            },
                            {
                                icon: <TrendingUp className="w-10 h-10" />,
                                title: "業務効率化",
                                desc: "インボイス対応ソフトの導入や、店舗のオペレーション改善に向けた設備投資にも活用可能です。"
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="feature-card bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group">
                                <div className="bg-[#064e3b]/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-[#6ee7b7] group-hover:scale-110 transition-transform">
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
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">High Impact</h2>
                                <p className="text-gray-300 mb-8 text-lg">
                                    採択後の効果報告までしっかりサポート。<br />
                                    初めての補助金活用でも安心です。
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="stat-item bg-[#064e3b] px-6 py-3 rounded-xl border border-white/10 flex items-center gap-3">
                                        <Leaf className="text-[#6ee7b7]" />
                                        <span className="font-bold">最大200万円 補助</span>
                                    </div>
                                    <div className="stat-item bg-[#064e3b] px-6 py-3 rounded-xl border border-white/10 flex items-center gap-3">
                                        <ShieldCheck className="text-[#6ee7b7]" />
                                        <span className="font-bold">申請サポート充実</span>
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

                {/* Specific Use Cases */}
                <section className="mb-32 px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Use Cases</h2>
                        <p className="text-gray-400">こんな取り組みに使えます</p>
                    </div>

                    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                        {useCases.map((item, idx) => (
                            <div key={idx} className="bg-[#022c22]/50 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 hover:border-emerald-500/50 transition-colors">
                                <div className="bg-white/10 p-4 rounded-2xl w-fit mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-300 mb-6 leading-relaxed min-h-[5rem]">
                                    {item.desc}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag, i) => (
                                        <span key={i} className="bg-[#10b981]/20 text-[#6ee7b7] px-3 py-1 rounded-full text-xs font-bold border border-[#10b981]/30">
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
                    subtitle="小規模事業者持続化補助金に関するよくあるご質問"
                />

                {/* CTA */}
                <section className="text-center py-20 px-6">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#064e3b] to-[#022c22] border border-white/20 p-12 rounded-[3rem] relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[#6ee7b7] blur-[120px] opacity-10 pointer-events-none" />

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
                            まずは「やりたいこと」<br />をお聞かせください。
                        </h2>
                        <p className="text-gray-300 mb-10 max-w-2xl mx-auto relative z-10 text-lg">
                            事業計画書の作成から申請まで、<br />
                            あなたの熱意を形にするお手伝いをします。
                        </p>

                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center bg-[#059669] hover:bg-[#047857] text-white font-bold py-5 px-12 rounded-full text-xl shadow-2xl transition-all hover:scale-105 relative z-10"
                        >
                            無料相談を予約する
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
