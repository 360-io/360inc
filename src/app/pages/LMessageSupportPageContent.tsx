import { PageWrapper } from "../components/PageWrapper";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect } from "react";
import {
    MessageCircle,
    Zap,
    Users,
    CalendarCheck,
    BarChart3,
    Smartphone,
    ArrowRight,
    Globe,
    Database,
    ShoppingBag,
    CheckCircle2,
    Headphones,
    Building2,
    TrendingUp
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BackToTopButton } from "../components/BackToTopButton";
import { BackLinkButton } from "../components/BackLinkButton";

function ScrollRotatingBadge() {
    const { scrollY } = useScroll();
    const rotate = useTransform(scrollY, [0, 1000], [0, 360]);

    return (
        <div className="fixed top-[88px] right-4 md:right-8 z-[100] flex items-center justify-center w-40 h-40 md:w-52 md:h-52 rounded-full bg-white/95 backdrop-blur shadow-[0_4px_30px_rgba(255,255,255,0.4)] border-4 border-double border-[#08BF5A]/50 pointer-events-none">
            {/* Rotating Text Ring */}
            <motion.div
                style={{ rotate }}
                className="absolute inset-0 w-full h-full p-2"
            >
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                    <path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" id="circlePath" fill="none" />
                    <text className="text-[11px] font-bold uppercase tracking-[0.05em] fill-gray-900 font-sans">
                        <textPath href="#circlePath" startOffset="0%">
                            OFFICIAL PARTNER • AUTHORIZED DISTRIBUTOR •
                        </textPath>
                    </text>
                </svg>
            </motion.div>

            {/* Center Logos - Static */}
            <div className="relative flex flex-col items-center justify-center gap-1 z-10 pointer-events-auto bg-white rounded-full w-28 h-28 md:w-36 md:h-36 shadow-sm">
                <img
                    src="https://lme.jp/img/common/logo.png"
                    alt="L Message"
                    className="w-20 md:w-28 h-auto object-contain"
                />
            </div>
        </div>
    )
}

export function LMessageSupportPageContent() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            // Hero Reveal
            gsap.from(".hero-text", {
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "power3.out",
                delay: 0.2
            });

            // Section Headers
            gsap.utils.toArray<HTMLElement>(".section-header").forEach((header) => {
                gsap.from(header, {
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: header,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                });
            });

            // Feature Cards
            gsap.utils.toArray<HTMLElement>(".feature-card").forEach((card, i) => {
                gsap.from(card, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                    }
                });
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <>
            {/* --- FIXED SCROLL BADGE (Outside container to prevent transform issues) --- */}
            <ScrollRotatingBadge />

            <PageWrapper>
                <div ref={containerRef} className="bg-[#0B1120]/80 text-white font-sans selection:bg-green-500 selection:text-white relative min-h-screen backdrop-blur-sm">
                    {/* Solid Dark Base for Depth */}
                    <div className="fixed inset-0 bg-[#020617] -z-50" />

                    {/* Floating Cloud/Smoke Effects - Green Theme */}
                    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse" />
                        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse" style={{ animationDelay: "2s" }} />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
                    </div>


                    {/* Hero Section */}
                    <section className="min-h-screen flex flex-col justify-start pt-32 md:pt-48 items-center text-center px-6 relative">

                        <div className="max-w-5xl mx-auto z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="hero-text mb-8 flex items-center justify-center gap-3"
                            >
                                <span className="px-4 py-2 rounded-full border border-white/20 text-xs font-bold text-green-400 uppercase tracking-[0.2em] bg-white/5 backdrop-blur-md shadow-[0_0_15px_rgba(74,222,128,0.3)]">
                                    Authorized Distributor
                                </span>
                            </motion.div>

                            <h1 className="hero-text text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[1.05] text-white drop-shadow-2xl">
                                Marketing,<br />
                                <span className="text-white/60 font-light">Automated.</span>
                            </h1>

                            <p className="hero-text text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light drop-shadow-lg">
                                LINE公式アカウントを「最強の自動化ツール」へ。<br className="hidden md:inline" />
                                集客・販促・顧客管理を、これひとつで。
                            </p>

                            <motion.div
                                className="hero-text flex flex-col sm:flex-row gap-4 justify-center items-center"
                                whileHover={{ scale: 1.02 }}
                            >
                                <a href="#contact" className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-green-50 transition-colors flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                                    無料相談・デモ依頼
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </motion.div>
                        </div>
                    </section>

                    {/* The Problem / Context - Floating White Cards */}
                    <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
                        <div className="grid md:grid-cols-2 gap-16 items-start">
                            <div className="section-header md:sticky md:top-32">
                                <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-white drop-shadow-xl">
                                    Manual Operations <br />
                                    <span className="text-gray-400">limit your potential.</span>
                                </h2>
                                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                    個別返信、手動でのタグ付け、画一的な一斉配信... <br />
                                    アナログな運用では、LINEの真価を発揮できません。
                                </p>
                                <div className="h-1 w-20 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]" />
                            </div>

                            <div className="grid gap-8">
                                {/* Floating Card 1 */}
                                <div className="bg-white/95 backdrop-blur-xl text-gray-900 p-10 rounded-[2.5rem] feature-card shadow-2xl shadow-green-900/30 transform transition-transform hover:-translate-y-2 relative overflow-hidden group border border-white/50">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-100/50 rounded-bl-[100px] -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform" />
                                    <MessageCircle className="w-12 h-12 text-green-600 mb-6" />
                                    <h3 className="font-bold text-2xl mb-3">Resource Drain</h3>
                                    <p className="text-gray-600 leading-relaxed font-medium">問い合わせ対応や予約受付に追われ、本来のコア業務に集中できない。<br />「自動化」で、その時間を生み出します。</p>
                                </div>

                                {/* Floating Card 2 */}
                                <div className="bg-white/95 backdrop-blur-xl text-gray-900 p-10 rounded-[2.5rem] feature-card shadow-2xl shadow-emerald-900/30 transform transition-transform hover:-translate-y-2 relative overflow-hidden group border border-white/50">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/50 rounded-bl-[100px] -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform" />
                                    <Database className="w-12 h-12 text-emerald-600 mb-6" />
                                    <h3 className="font-bold text-2xl mb-3">Data Silos</h3>
                                    <p className="text-gray-600 leading-relaxed font-medium">顧客情報が分散し、誰にどんなアプローチをすべきか分からない。<br />詳細な属性管理で、成約率を最大化します。</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Partner: L Message */}
                    <section className="py-32 relative z-10">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="text-center mb-24 section-header">
                                <span className="text-[#08BF5A] font-bold tracking-[0.2em] uppercase text-sm mb-4 block animate-pulse">All-in-One Solution</span>
                                <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white drop-shadow-2xl">L Message</h2>
                                <p className="text-xl text-gray-300">LINE公式アカウント拡張ツール「エルメ」</p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    {
                                        icon: <Zap className="w-8 h-8" />,
                                        title: "Step Automation",
                                        desc: "友だち登録からの経過日数や行動に合わせてメッセージを自動配信。教育から販売までを完全自動化。",
                                        accent: "text-green-600",
                                        bg: "bg-green-50"
                                    },
                                    {
                                        icon: <CalendarCheck className="w-8 h-8" />,
                                        title: "Smart Reservation",
                                        desc: "LINEトーク画面内で予約が完結。Googleカレンダー連携やリマインド配信も自動化し、キャンセルを防止。",
                                        accent: "text-green-600",
                                        bg: "bg-green-50"
                                    },
                                    {
                                        icon: <ShoppingBag className="w-8 h-8" />,
                                        title: "Commerce & Pay",
                                        desc: "物販・デジタルコンテンツ販売もLINE上で。商品管理から決済まで一気通貫で行えます。",
                                        accent: "text-green-600",
                                        bg: "bg-green-50"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/95 text-gray-900 p-8 rounded-[2rem] shadow-lg hover:shadow-2xl hover:shadow-green-500/20 transition-all feature-card group border border-white/50">
                                        <div className={`${item.bg} w-16 h-16 rounded-2xl flex items-center justify-center ${item.accent} mb-8 group-hover:scale-110 transition-transform shadow-inner`}>
                                            {item.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Why Us / Value Proposition */}
                    <section className="py-32 relative z-10 text-center">
                        <div className="max-w-6xl mx-auto px-6">
                            <div className="section-header mb-20">
                                <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Added Value</span>
                                <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-white drop-shadow-xl">
                                    More Than Tools.
                                </h2>
                                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                    ただツールを導入するだけではありません。<br />
                                    「正規代理店」としての安心感と、成果を出すための「構築力」を。
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8 text-left">
                                {[
                                    {
                                        icon: <Headphones className="w-10 h-10" />,
                                        title: "Implementation",
                                        desc: "初期設定からタグ付け、シナリオ構築までをフルサポート。既存のアカウント診断も可能です。"
                                    },
                                    {
                                        icon: <Building2 className="w-10 h-10" />,
                                        title: "Creative",
                                        desc: "クリック率を高めるリッチメニューのデザイン制作や、反応率の良いメッセージ作成を代行します。"
                                    },
                                    {
                                        icon: <TrendingUp className="w-10 h-10" />,
                                        title: "Strategy",
                                        desc: "ビジネスゴールに合わせた導線設計。データ分析に基づいたPDCAサイクルによる改善提案。"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-10 border border-white/10 rounded-[2.5rem] bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors feature-card group">
                                        <div className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform origin-left">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                                        <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section id="contact" className="py-32 px-6 relative z-10">
                        <div className="max-w-5xl mx-auto text-center">
                            <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500" />
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                                <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-white relative z-10">
                                    Ready to Automate?
                                </h2>
                                <p className="text-xl text-gray-400 mb-12 relative z-10 max-w-2xl mx-auto">
                                    貴社のLINE公式アカウントを、24時間働くセールスパーソンに。<br />
                                    まずは貴社の課題をお聞かせください。
                                </p>

                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-12 py-6 bg-white text-black text-xl font-bold rounded-full hover:bg-green-50 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)] relative z-10"
                                >
                                    無料相談・見積もり依頼
                                    <ArrowRight className="ml-3 w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </section>

                    <BackToTopButton />
                    <BackLinkButton href="/" label="Home" />
                </div>
            </PageWrapper>
        </>
    );
}
