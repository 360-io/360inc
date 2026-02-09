import { PageWrapper } from "../components/PageWrapper";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect } from "react";
import {
    BedDouble,
    Network,
    Globe,
    TrendingUp,
    Users,
    Smartphone,
    CreditCard,
    Headphones,
    ArrowRight,
    CheckCircle2,
    Building2,
    CalendarCheck,
    BarChart3,
    Zap
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BackToTopButton } from "../components/BackToTopButton";
import { BackLinkButton } from "../components/BackLinkButton";

function ScrollRotatingBadge() {
    const { scrollY } = useScroll();
    const rotate = useTransform(scrollY, [0, 1000], [0, 360]);

    return (
        <div className="fixed top-[88px] right-4 md:right-8 z-[100] flex items-center justify-center w-40 h-40 md:w-52 md:h-52 rounded-full bg-white/95 backdrop-blur shadow-[0_4px_30px_rgba(255,255,255,0.4)] border-4 border-double border-yellow-400/50 pointer-events-none">
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
                    src="https://www.neppan.com/themes/neppan/images/common/logo.svg"
                    alt="Neppan"
                    className="w-16 md:w-24 h-auto object-contain mb-1"
                />
                <img
                    src="https://www.489ban.net/wp_cms/wp-content/themes/489ban_ver2/img/services/489ban/logo_01.png"
                    alt="489ban"
                    className="w-14 md:w-20 h-auto object-contain"
                />
            </div>
        </div>
    )
}

export function HospitalitySupportPageContent() {
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
                    delay: i * 0.1, // Stagger effect based on index if possible, but logic complex here. Simple scrollTrigger is fine.
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
                <div ref={containerRef} className="bg-[#0B1120]/80 text-white font-sans selection:bg-cyan-500 selection:text-white relative min-h-screen backdrop-blur-sm">
                    {/* Solid Dark Base for Depth */}
                    <div className="fixed inset-0 bg-[#020617] -z-50" />

                    {/* Floating Cloud/Smoke Effects */}
                    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse" />
                        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse" style={{ animationDelay: "2s" }} />
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
                                <span className="px-4 py-2 rounded-full border border-white/20 text-xs font-bold text-cyan-300 uppercase tracking-[0.2em] bg-white/5 backdrop-blur-md shadow-[0_0_15px_rgba(6_182_212_0.3)]">
                                    Authorized Distributor
                                </span>
                            </motion.div>

                            <h1 className="hero-text text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[1.05] text-white drop-shadow-2xl">
                                Hospitality,<br />
                                <span className="text-white/60 font-light">Floating.</span>
                            </h1>

                            <p className="hero-text text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light drop-shadow-lg">
                                複雑な予約管理から解放され、<br className="hidden md:inline" />
                                雲の上のような身軽さと、自由な経営を。
                            </p>

                            <motion.div
                                className="hero-text flex flex-col sm:flex-row gap-4 justify-center items-center"
                                whileHover={{ scale: 1.02 }}
                            >
                                <a href="#contact" className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-cyan-50 transition-colors flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                                    無料相談を予約する
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </motion.div>
                        </div>
                    </section>

                    {/* The Problem / Solution Context - Floating White Cards */}
                    <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
                        <div className="grid md:grid-cols-2 gap-16 items-start">
                            <div className="section-header md:sticky md:top-32">
                                <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-white drop-shadow-xl">
                                    Managing OTAs <br />
                                    <span className="text-gray-400">shouldn't be a burden.</span>
                                </h2>
                                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                    楽天、じゃらん、Booking.com... <br />
                                    複数の予約サイト（OTA）管理に追われ、本来のおもてなしに集中できていない宿泊施設様へ。
                                </p>
                                <div className="h-1 w-20 bg-cyan-500 rounded-full shadow-[0_0_10px_#06b6d4]" />
                            </div>

                            <div className="grid gap-8">
                                {/* Floating "Cloud" Card 1 */}
                                <div className="bg-white/95 backdrop-blur-xl text-gray-900 p-10 rounded-[2.5rem] feature-card shadow-2xl shadow-blue-900/30 transform transition-transform hover:-translate-y-2 relative overflow-hidden group border border-white/50">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-bl-[100px] -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform" />
                                    <Network className="w-12 h-12 text-blue-600 mb-6" />
                                    <h3 className="font-bold text-2xl mb-3">Overbooking</h3>
                                    <p className="text-gray-600 leading-relaxed font-medium">手動管理によるダブルブッキングのリスクをゼロに。24時間365日、システムがあなたに代わって在庫を調整します。</p>
                                </div>

                                {/* Floating "Cloud" Card 2 */}
                                <div className="bg-white/95 backdrop-blur-xl text-gray-900 p-10 rounded-[2.5rem] feature-card shadow-2xl shadow-purple-900/30 transform transition-transform hover:-translate-y-2 relative overflow-hidden group border border-white/50">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/50 rounded-bl-[100px] -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform" />
                                    <CreditCard className="w-12 h-12 text-purple-600 mb-6" />
                                    <h3 className="font-bold text-2xl mb-3">High Commission</h3>
                                    <p className="text-gray-600 leading-relaxed font-medium">OTA手数料を抑え、利益率の高い直販を増やす。顧客データを資産化し、リピーター戦略へ繋げます。</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Partner 1: Neppan */}
                    <section className="py-32 relative z-10">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="text-center mb-24 section-header">
                                <span className="text-orange-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 block animate-pulse">Site Controller</span>
                                <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white drop-shadow-2xl">ねっぱん！＋＋</h2>
                                <p className="text-xl text-gray-300">クラウド型サイトコントローラー</p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    {
                                        icon: <Zap className="w-8 h-8" />,
                                        title: "Real-time Sync",
                                        desc: "主要OTA（楽天、じゃらん、Expedia等）と在庫・料金をリアルタイムに同期。最後の1室まで売り切る力。",
                                        accent: "text-orange-500",
                                        bg: "bg-orange-50"
                                    },
                                    {
                                        icon: <BarChart3 className="w-8 h-8" />,
                                        title: "Revenue Mgmt",
                                        desc: "競合施設の料金自動調査や、稼働率に応じた料金調整機能。勘に頼らない、データドリブンな経営。",
                                        accent: "text-orange-500",
                                        bg: "bg-orange-50"
                                    },
                                    {
                                        icon: <Globe className="w-8 h-8" />,
                                        title: "Cloud Native",
                                        desc: "専用サーバー不要。インターネットがあれば、どこでも、どんな端末からでも管理画面にアクセス可能。",
                                        accent: "text-orange-500",
                                        bg: "bg-orange-50"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/95 text-gray-900 p-8 rounded-[2rem] shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all feature-card group border border-white/50">
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

                    {/* Partner 2: 489ban */}
                    <section className="py-32 relative z-10">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="text-center mb-24 section-header">
                                <span className="text-cyan-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 block animate-pulse">Booking Engine</span>
                                <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white drop-shadow-2xl">予約番</h2>
                                <p className="text-xl text-gray-300">直販予約システム</p>
                            </div>

                            {/* Floating "Cloud" Container */}
                            <div className="bg-white/95 text-gray-900 rounded-[3rem] p-8 md:p-16 shadow-[0_0_50px_rgba(255,255,255,0.15)] feature-card relative overflow-hidden border border-white/50">
                                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-cyan-100 to-transparent opacity-50 rounded-bl-full -mr-20 -mt-20 pointer-events-none" />

                                <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                                    <div>
                                        <h3 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">
                                            Zero Commission.<br />
                                            <span className="text-blue-600">Pure Profit.</span>
                                        </h3>
                                        <div className="space-y-8">
                                            {[
                                                { title: "手数料0円の定額制", desc: "予約数に関わらず月額固定。売れば売るほど利益率が向上します。" },
                                                { title: "スマホ最適化 & 高CVR", desc: "直感的なUIで離脱を防ぎます。インバウンド対応（多言語・海外決済）も万全。" },
                                                { title: "顧客データを自社の資産に", desc: "OTA経由では取得しづらい顧客情報を蓄積し、リピーター戦略へ活用。" }
                                            ].map((item, i) => (
                                                <div key={i} className="flex gap-4">
                                                    <div className="bg-blue-600 w-1 rounded-full h-auto mt-1 mb-1 shadow-lg shadow-blue-500/50" />
                                                    <div>
                                                        <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                                                        <p className="text-gray-600 font-medium">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-gray-100 rounded-[2.5rem] p-8 md:p-12 flex items-center justify-center relative group min-h-[400px] shadow-inner">
                                        {/* Abstract Phone Visual */}
                                        <div className="relative w-full max-w-sm aspect-[9/16] bg-black rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden transform transition-transform group-hover:scale-105 duration-500">
                                            <div className="absolute top-0 w-full h-full bg-white flex flex-col">
                                                {/* Header */}
                                                <div className="bg-blue-600 p-6 pt-12 flex justify-between items-center text-white">
                                                    <div className="font-bold text-lg">My Ryokan</div>
                                                    <Globe className="w-5 h-5" />
                                                </div>
                                                {/* Content */}
                                                <div className="p-6 flex-1 space-y-4">
                                                    <div className="h-40 bg-gray-200 rounded-2xl animate-pulse" />
                                                    <div className="h-6 bg-gray-100 rounded w-2/3" />
                                                    <div className="h-4 bg-gray-50 rounded w-full" />
                                                    <div className="h-4 bg-gray-50 rounded w-full" />
                                                    <div className="mt-8 p-4 bg-orange-50 rounded-xl border border-orange-100">
                                                        <div className="flex justify-between items-center">
                                                            <span className="font-bold text-orange-600">Special Offer</span>
                                                            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">HOT</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Button */}
                                                <div className="p-6 border-t border-gray-100">
                                                    <div className="w-full bg-black text-white py-4 rounded-xl text-center font-bold">Book Now</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Why Us / Value Proposition */}
                    <section className="py-32 relative z-10 text-center">
                        <div className="max-w-6xl mx-auto px-6">
                            <div className="section-header mb-20">
                                <span className="text-purple-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Added Value</span>
                                <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-white drop-shadow-xl">
                                    More Than Tools.
                                </h2>
                                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                    ただツールを導入するだけではありません。<br />
                                    「正規代理店」としての安心感と、「クリエイティブ」による差別化を。
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8 text-left">
                                {[
                                    {
                                        icon: <Headphones className="w-10 h-10" />,
                                        title: "Implementation",
                                        desc: "初期設定から稼働までをフルサポート。既存システムからの移行もスムーズに行います。"
                                    },
                                    {
                                        icon: <Building2 className="w-10 h-10" />,
                                        title: "Creative",
                                        desc: "予約番の入力を代行。施設の魅力を最大限に伝える写真選定やコピーライティングを行います。"
                                    },
                                    {
                                        icon: <TrendingUp className="w-10 h-10" />,
                                        title: "Marketing",
                                        desc: "直販比率を上げるためのWebサイト改善や広告運用まで、一気通貫で支援します。"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-10 border border-white/10 rounded-[2.5rem] bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors feature-card group">
                                        <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform origin-left">
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
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500" />
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                                <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-white relative z-10">
                                    Ready to Transform?
                                </h2>
                                <p className="text-xl text-gray-400 mb-12 relative z-10 max-w-2xl mx-auto">
                                    貴施設の課題に合わせ、最適な導入プランをご提案します。<br />
                                    まずは現状のお悩みをお聞かせください。
                                </p>

                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-12 py-6 bg-white text-black text-xl font-bold rounded-full hover:bg-cyan-50 transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)] relative z-10"
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
