import { PageWrapper } from "../components/PageWrapper";
import { motion } from "motion/react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Brain,
    Rocket,
    Coins,
    ArrowRight,
    TrendingUp,
    CheckCircle2,
    Users,
    Zap,
    Scale,
    FileCheck,
    Bot,
    ChevronDown
} from "lucide-react";
import { BackToTopButton } from "../components/BackToTopButton";
import { BackLinkButton } from "../components/BackLinkButton";

export function AxTransformationPageContent() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            // Hero Animation
            gsap.from(".hero-element", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });

            // Card Animations
            gsap.utils.toArray(".reveal-card").forEach((card: any) => {
                gsap.from(card, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    }
                });
            });

            // Roadmap Animation
            gsap.from(".roadmap-step", {
                x: -30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".roadmap-section",
                    start: "top 70%",
                }
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    const subsidyData = [
        {
            name: "IT導入補助金",
            target: "ソフトウェア・クラウド",
            amount: "最大450万円",
            rate: "1/2 〜 4/5",
            fit: "まずはここから",
            color: "from-blue-500 to-cyan-400",
            link: "/it-subsidy"
        },
        {
            name: "省力化補助金",
            target: "IoT機器・ロボット・券売機",
            amount: "特定機器による",
            rate: "1/2",
            fit: "ハードウェアも導入したい",
            color: "from-indigo-500 to-purple-400",
            link: "/labor-saving-subsidy"
        },
        {
            name: "ものづくり補助金",
            target: "革新的なサービス開発",
            amount: "最大1,000万円〜",
            rate: "1/2 〜 2/3",
            fit: "大規模なシステム開発",
            color: "from-orange-500 to-red-400",
            link: "/manufacturing-subsidy"
        }
    ];

    const roadmapSteps = [
        {
            icon: <FileCheck className="w-8 h-8" />,
            title: "DX/AX Diagnosis",
            subtitle: "現状分析 & 課題抽出",
            desc: "業務フローを可視化し、AIが介入すべきボトルネックを特定します。"
        },
        {
            icon: <Coins className="w-8 h-8" />,
            title: "Subsidy Application",
            subtitle: "資金調達 & 計画策定",
            desc: "最適な補助金を選定し、採択率を高める事業計画書を作成します。"
        },
        {
            icon: <Bot className="w-8 h-8" />,
            title: "AX Construction",
            subtitle: "AI実装 & ツール導入",
            desc: "ChatGPT連携や自動化ツールを組み込み、社長の分身となるシステムを構築。"
        },
        {
            icon: <Rocket className="w-8 h-8" />,
            title: "In-house Operation",
            subtitle: "運用内製化 & 自走",
            desc: "社内チームへの教育を行い、外部依存しない運用体制を確立します。"
        }
    ];

    return (
        <PageWrapper>
            <div ref={containerRef} className="bg-[#0B1120] text-white font-sans selection:bg-cyan-500/30">
                {/* Background Effects */}
                <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1e3a8a]/20 via-[#0B1120] to-[#0B1120] -z-10" />
                <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 -z-10 pointer-events-none" />
                <div className="fixed top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] -z-10" />
                <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] -z-10" />

                {/* Hero Section */}
                <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl -z-10 animate-pulse" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="hero-element mb-6"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-cyan-300 text-sm font-medium tracking-wider backdrop-blur-md">
                            Beyond DX, Welcome to AX
                        </span>
                    </motion.div>

                    <h1 className="hero-element text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.2]">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">作業を自動化するDXは、</span>
                        <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400">
                            もう古い。
                        </span>
                    </h1>

                    <p className="hero-element text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                        経営を加速させる<span className="text-white font-bold">AX（AI変革）</span>を、<br className="hidden md:inline" />
                        <span className="text-cyan-300 border-b border-cyan-300/30 pb-1">国策の補助金</span>で実現する。
                    </p>

                    <motion.div
                        className="hero-element flex flex-col sm:flex-row gap-4 justify-center items-center"
                        whileHover={{ scale: 1.02 }}
                    >
                        <a href="#consultation" className="group relative px-8 py-4 bg-white text-[#0B1120] rounded-full font-bold text-lg overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.5)]">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity" />
                            <span className="relative flex items-center gap-2">
                                無料相談を予約する
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                        <p className="text-sm text-gray-500 mt-4 sm:mt-0">
                            ※ 毎月5社限定
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500"
                    >
                        <ChevronDown className="w-6 h-6" />
                    </motion.div>
                </section>

                {/* Problem & Solution (The Gap) */}
                <section className="py-32 px-6 max-w-7xl mx-auto">
                    <div className="text-center mb-20 reveal-card">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">The Evolution</h2>
                        <p className="text-gray-400 text-lg">なぜ今、「DX」の次に「AX」が必要なのか</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-stretch">
                        {/* DX Card */}
                        <div className="reveal-card relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] blur-xl opacity-50 transition-opacity group-hover:opacity-70" />
                            <div className="relative h-full bg-[#111827] border border-gray-800 p-10 rounded-[2rem] flex flex-col">
                                <div className="mb-8">
                                    <span className="text-4xl font-bold text-gray-600 block mb-2">DX</span>
                                    <span className="text-gray-500 text-sm tracking-widest uppercase">Digital Transformation</span>
                                </div>
                                <ul className="space-y-4 mb-10 flex-grow text-gray-400">
                                    <li className="flex items-start gap-3">
                                        <TrendingUp className="w-6 h-6 text-gray-600 shrink-0" />
                                        <span>ツールの導入が目的化している</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Users className="w-6 h-6 text-gray-600 shrink-0" />
                                        <span>現場の作業は楽になるが、<br />経営判断は属人化したまま</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Scale className="w-6 h-6 text-gray-600 shrink-0" />
                                        <span>コスト削減止まりで、<br />売上アップに直結しにくい</span>
                                    </li>
                                </ul>
                                <div className="mt-auto pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
                                    Old Standard
                                </div>
                            </div>
                        </div>

                        {/* AX Card */}
                        <div className="reveal-card relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-[2.5rem] blur-xl opacity-40 transition-opacity group-hover:opacity-60" />
                            <div className="relative h-full bg-[#162033] border border-cyan-500/30 p-10 rounded-[2rem] flex flex-col overflow-hidden">
                                <div className="absolute top-0 right-0 p-32 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                                <div className="mb-8 relative z-10">
                                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 block mb-2">AX</span>
                                    <span className="text-cyan-400/60 text-sm tracking-widest uppercase">AI Transformation</span>
                                </div>
                                <ul className="space-y-4 mb-10 flex-grow text-gray-200 relative z-10">
                                    <li className="flex items-start gap-3">
                                        <Brain className="w-6 h-6 text-cyan-400 shrink-0" />
                                        <span>AIが「判断」を自動化・高度化</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Bot className="w-6 h-6 text-cyan-400 shrink-0" />
                                        <span>社長の分身（AI）が<br />24時間365日働き続ける</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Rocket className="w-6 h-6 text-cyan-400 shrink-0" />
                                        <span>新たな収益モデルを創出し、<br />企業価値を飛躍させる</span>
                                    </li>
                                </ul>
                                <div className="mt-auto pt-6 border-t border-white/10 text-center text-cyan-400 text-sm font-bold tracking-wider relative z-10">
                                    New Standard
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Subsidies - Financial Strategy */}
                <section className="py-32 bg-white/5 relative">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16 reveal-card">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Financial Strategy</h2>
                            <p className="text-xl text-gray-300">
                                実質負担を最大<span className="text-yellow-400 font-bold text-2xl mx-1">80%</span>カット。<br className="md:hidden" />国策を賢く活用する。
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-6">
                            {subsidyData.map((subsidy, idx) => (
                                <a key={idx} href={subsidy.link} className="reveal-card bg-[#0B1120] border border-white/10 rounded-3xl p-8 hover:border-white/20 hover:bg-white/5 transition-all group overflow-hidden relative block">
                                    <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${subsidy.color}`} />

                                    <div className="mb-6">
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">{subsidy.name}</h3>
                                        <p className="text-sm text-gray-400">{subsidy.target}</p>
                                    </div>

                                    <div className="mb-8 p-4 bg-white/5 rounded-2xl text-center group-hover:bg-white/10 transition-colors">
                                        <p className="text-xs text-gray-500 mb-1">補助額</p>
                                        <p className="text-2xl font-bold text-white mb-2">{subsidy.amount}</p>
                                        <div className="h-px w-full bg-white/10 my-2" />
                                        <p className="text-xs text-gray-500 mb-1">補助率</p>
                                        <p className="text-lg text-gray-300">{subsidy.rate}</p>
                                    </div>

                                    <div className="flex items-center gap-3 text-sm text-gray-400 justify-between">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle2 className={`w-5 h-5 bg-gradient-to-br ${subsidy.color} bg-clip-text text-transparent`} />
                                            <span>{subsidy.fit}</span>
                                        </div>
                                        <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gray-300" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Roadmap */}
                <section className="roadmap-section py-32 px-6 max-w-6xl mx-auto">
                    <div className="text-center mb-20 reveal-card">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Service Roadmap</h2>
                        <p className="text-gray-400">AX実現までの4ステップ</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 -z-10" />

                        {roadmapSteps.map((step, idx) => (
                            <div key={idx} className="roadmap-step relative pt-8 md:pt-12">
                                {/* Step Number Bubble */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 w-20 h-20 bg-[#0B1120] rounded-full border border-cyan-500/30 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                                    <div className="text-cyan-400">
                                        {step.icon}
                                    </div>
                                </div>
                                <div className="absolute top-6 left-1/2 md:left-[calc(50%+2.5rem)] -translate-x-1/2 md:-translate-x-0 bg-[#0B1120] text-gray-500 text-xs px-2 z-10 whitespace-nowrap">
                                    STEP 0{idx + 1}
                                </div>

                                <div className="text-center mt-6">
                                    <h3 className="text-lg font-bold mb-1 text-white">{step.title}</h3>
                                    <p className="text-xs text-cyan-400 mb-4 font-bold tracking-wider uppercase">{step.subtitle}</p>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section id="consultation" className="py-20 px-6">
                    <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#111827] to-[#0f172a] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden border border-white/10 shadow-2xl">
                        {/* Glow Effects */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent -z-10" />

                        <h2 className="reveal-card text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            AIはツールではなく、<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">最強の右腕である。</span>
                        </h2>

                        <p className="reveal-card text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
                            単なる効率化で終わらせない。<br />
                            あなたの会社の「核」となるAIシステムを、共に創り上げましょう。
                        </p>

                        <motion.div
                            className="reveal-card inline-block"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a
                                href="/contact"
                                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-5 px-12 rounded-full text-xl shadow-[0_10px_40px_-10px_rgba(6,182,212,0.5)] transition-all flex items-center justify-center gap-3"
                            >
                                <Zap className="w-6 h-6 fill-current" />
                                <span>【無料】AI活用・補助金診断</span>
                            </a>
                        </motion.div>

                        <p className="mt-8 text-sm text-gray-500">
                            ※ ご相談・見積もりは無料です。<br />
                            ※ 無理な営業は一切いたしません。
                        </p>
                    </div>
                </section>

                <BackToTopButton />
                <BackLinkButton href="/" label="HOME" />
            </div>
        </PageWrapper>
    );
}
