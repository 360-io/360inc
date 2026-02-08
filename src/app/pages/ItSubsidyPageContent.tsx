import { PageWrapper } from "../components/PageWrapper";
import { FaqSection } from "../components/FaqSection";
import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import {
    CheckCircle2,
    TrendingUp,
    ShieldCheck,
    ArrowRight,
    Receipt,
    MessageSquare,
    Instagram,
    FileText,
    Target,
    Building2,
    ChevronRight
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ItSubsidyPageContent() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeTab, setActiveTab] = useState<"accounting" | "line" | "instagram">("accounting");

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            // Hero Animation
            gsap.from(".hero-text", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });

            // Feature Cards
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

            // Social Proof
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

    const tools = {
        accounting: {
            title: "会計・インボイス制度対応",
            icon: <Receipt className="w-12 h-12 text-[#fbbf24]" />,
            desc: "「マネーフォワード」や「freee」などの導入で、面倒な経理業務を自動化。インボイス制度にも完全対応し、業務時間を最大80%削減します。",
            tags: ["インボイス対応", "経理自動化", "ペーパーレス"]
        },
        line: {
            title: "LINE公式アカウント構築",
            icon: <MessageSquare className="w-12 h-12 text-[#06c755]" />, // LINE Green
            desc: "「L Message（エルクリ）」を活用した自動応答システム。顧客対応の自動化と、セグメント配信による成約率向上を実現します。",
            tags: ["自動応答", "CRM連携", "リピート率UP"]
        },
        instagram: {
            title: "Instagram集客自動化",
            icon: <Instagram className="w-12 h-12 text-[#E1306C]" />, // Insta gradient approximation
            desc: "「エルグラム」によるDM自動返信・抽選キャンペーンの実施。フォロワー増加から来店・購入までの導線を自動化します。",
            tags: ["DM自動化", "キャンペーン管理", "ファン化促進"]
        }
    };

    const data = [
        { name: 'Satisfied', value: 69.3, color: '#fbbf24' },
        { name: 'Other', value: 30.7, color: 'rgba(255,255,255,0.1)' },
    ];

    const faqs = [
        {
            question: "本当に採択されますか？",
            answer: "当社のプロフェッショナルが申請書の作成から提出までを徹底サポートします。過去の採択実績に基づいたノウハウで、高確率での採択を目指しますが、審査があるため100%の保証はできません。しかし、不採択の場合でも再申請のサポートを行っています。"
        },
        {
            question: "ITツールに詳しくなくても大丈夫ですか？",
            answer: "はい、大丈夫です。導入前の選定から、導入後の操作説明・運用サポートまで一貫して行いますので、ITに詳しくない方でも安心してご利用いただけます。"
        },
        {
            question: "着手金は必要ですか？",
            answer: "基本的に完全成功報酬型プランをご用意しています。申請段階でのリスクを最小限に抑え、採択・交付決定後にお支払いをいただく形です。（※一部プランを除く）"
        },
        {
            question: "どのような業種でも申請できますか？",
            answer: "はい、飲食、建設、医療、小売、サービス業など、幅広い業種で申請可能です。御社の事業内容に合わせた最適なツールと活用計画をご提案します。"
        }
    ];

    return (
        <PageWrapper>
            <div ref={containerRef} className="text-white relative font-sans">
                {/* Fixed Background Override */}
                <div className="fixed inset-0 bg-[#1e3a8a]/66 -z-40" />
                <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-30 pointer-events-none" />

                {/* Hero Section */}
                <section className="min-h-[70vh] flex flex-col justify-center items-center text-center mb-24 relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 to-[#1e3a8a] -z-10" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex gap-4 mb-8 flex-wrap justify-center"
                    >
                        <span className="bg-[#fbbf24] text-[#1e3a8a] px-4 py-1 rounded-full font-bold text-sm md:text-base flex items-center shadow-lg shadow-orange-500/20">
                            <CheckCircle2 className="w-4 h-4 mr-2" /> 完全成功報酬
                        </span>
                        <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1 rounded-full font-bold text-sm md:text-base flex items-center">
                            最大450万円補助
                        </span>
                    </motion.div>

                    <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
                        手出しを抑えて、<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#fbbf24]">
                            攻めのDXを。
                        </span>
                    </h1>

                    <p className="hero-text text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        煩雑な申請手続きはプロにお任せ。<br className="hidden md:block" />
                        あなたのビジネスを加速させる、最適なITツール導入を支援します。
                    </p>

                    <motion.div
                        className="hero-text"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a
                            href="/contact"
                            className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl shadow-orange-500/30 transition-all flex items-center gap-2 group"
                        >
                            無料相談はこちら
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </section>

                {/* Service Features */}
                <section className="features-section mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Us?</h2>
                        <p className="text-gray-400">選ばれる3つの理由</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FileText className="w-10 h-10" />,
                                title: "申請から導入まで伴走",
                                desc: "複雑な書類作成や手続きを徹底サポート。プロに丸投げできる安心感で、本業に集中していただけます。"
                            },
                            {
                                icon: <TrendingUp className="w-10 h-10" />,
                                title: "SNS×自動化で売上UP",
                                desc: "単なるツール導入（L Message等）だけでなく、集客から成約までの導線設計を含めた「売れる仕組み」を構築します。"
                            },
                            {
                                icon: <Building2 className="w-10 h-10" />,
                                title: "あらゆる業種に対応",
                                desc: "飲食、建設、医療など、各業界特有の課題を理解した上で、最適な補助金活用プランをご提案します。"
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="feature-card bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                                <div className="bg-[#1e3a8a]/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-[#fbbf24]">
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

                {/* Trusted Performance */}
                <section className="stats-section mb-32 bg-white/5 rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Trusted Performance</h2>
                            <p className="text-gray-300 mb-8 text-lg">
                                多くの経営者様にご満足いただいています。<br />
                                初めての補助金申請でも、安心してお任せください。
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="stat-item bg-[#1e3a8a] px-6 py-3 rounded-xl border border-white/10 flex items-center gap-3">
                                    <ShieldCheck className="text-[#fbbf24]" />
                                    <span className="font-bold">IT導入支援事業者 認定</span>
                                </div>
                                <div className="stat-item bg-[#1e3a8a] px-6 py-3 rounded-xl border border-white/10 flex items-center gap-3">
                                    <Target className="text-[#fbbf24]" />
                                    <span className="font-bold">採択率 80%+</span>
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
                                            value="69.3%"
                                            position="center"
                                            fill="#ffffff"
                                            style={{ fontSize: '3rem', fontWeight: 'bold', fontFamily: 'sans-serif' }}
                                        />
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute bottom-0 text-center w-full text-sm text-gray-400">
                                顧客満足度 (当社アンケート調べ)
                            </div>
                        </div>
                    </div>
                </section>

                {/* Specific Tool Cards */}
                <section className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Recommended Tools</h2>
                        <p className="text-gray-400">補助金で導入できる代表的なツール</p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="flex justify-center mb-12 gap-2 md:gap-4">
                            {(['accounting', 'line', 'instagram'] as const).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all ${activeTab === tab
                                        ? "bg-white text-[#1e3a8a]"
                                        : "bg-white/10 text-gray-400 hover:bg-white/20"
                                        }`}
                                >
                                    {tab === 'accounting' && "会計・インボイス"}
                                    {tab === 'line' && "LINE自動化"}
                                    {tab === 'instagram' && "Instagram集客"}
                                </button>
                            ))}
                        </div>

                        <div className="bg-gradient-to-br from-white/10 to-transparent p-1 rounded-[2rem] border border-white/20">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-[#1e3a8a]/40 backdrop-blur-xl rounded-[1.9rem] p-8 md:p-12"
                            >
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="bg-white p-6 rounded-2xl shrink-0 shadow-lg shadow-black/20">
                                        {tools[activeTab].icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-4">{tools[activeTab].title}</h3>
                                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                            {tools[activeTab].desc}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {tools[activeTab].tags.map((tag, i) => (
                                                <span key={i} className="bg-[#fbbf24]/20 text-[#fbbf24] px-3 py-1 rounded-full text-sm font-medium border border-[#fbbf24]/30">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* FAQ Reuse */}
                <FaqSection
                    customFaqs={faqs}
                    title="FAQ"
                    subtitle="IT導入補助金に関するよくあるご質問"
                />

                {/* Bottom CTA */}
                <section className="text-center py-20">
                    <div className="bg-gradient-to-r from-[#1e3a8a] to-blue-900 border border-white/20 p-12 rounded-[3rem] relative overflow-hidden">
                        <div className="absolute inset-0 bg-[#fbbf24] blur-[100px] opacity-10 pointer-events-none" />

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
                            まずは無料相談から
                        </h2>
                        <p className="text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
                            「自社で使える？」 「いくら戻ってくる？」 <br />
                            そんな疑問にお答えします。無理な勧誘は一切ありません。
                        </p>

                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-5 px-12 rounded-full text-xl shadow-2xl transition-all hover:scale-105 relative z-10"
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

import { BackToTopButton } from "../components/BackToTopButton";
import { BackLinkButton } from "../components/BackLinkButton";
