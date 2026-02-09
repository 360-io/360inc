import { PageWrapper } from "../components/PageWrapper";
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import {
    Search,
    Brain,
    ShieldCheck,
    Zap,
    Settings,
    MessageSquare,
    ArrowRight,
    Check,
    Bot,
    FileText,
    Calculator,
    ChevronRight,
    Lock,
    Cpu,
    Sparkles
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BackToTopButton } from "../components/BackToTopButton";
import { BackLinkButton } from "../components/BackLinkButton";

// --- Components ---

function LiveRagDemo() {
    const [messages, setMessages] = useState<Array<{ role: 'ai' | 'user', text: string, source?: string }>>([
        { role: 'ai', text: "こんにちは。RAG（検索拡張生成）について、どのようなことを知りたいですか？" }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const questions = ["導入費用は？", "セキュリティはどうなってる？", "他社との違いは？"];

    const handleAsk = (q: string) => {
        setMessages(prev => [...prev, { role: 'user', text: q }]);
        setIsTyping(true);

        // Mock Response Logic
        setTimeout(() => {
            let response = "";
            let source = "";

            if (q.includes("費用")) {
                response = "初期構築費は50万円〜、月額保守費は5万円〜となります。貴社のデータ量やカスタマイズ要件に応じて最適なお見積もりを作成いたします。";
                source = "Pricing_Plan_2024.pdf (p.3)";
            } else if (q.includes("セキュリティ")) {
                response = "Azure OpenAI Serviceを利用し、入力されたデータがAIの学習に使用されることはありません。また、貴社専用の閉域網環境での構築も可能です。";
                source = "Security_Whitepaper_v2.pdf (p.12)";
            } else if (q.includes("違い")) {
                response = "最大の違いは「回答の精度」です。独自のハイブリッド検索技術（キーワード検索 + ベクトル検索）により、社内用語や専門用語も正確に理解して回答します。";
                source = "Tech_Comparison_Chart.xlsx";
            } else {
                response = "申し訳ありません。その質問に対する情報はナレッジベースに見つかりませんでした。";
            }

            setMessages(prev => [...prev, { role: 'ai', text: response, source }]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="bg-[#112240] rounded-2xl border border-cyan-500/30 overflow-hidden shadow-2xl max-w-2xl mx-auto flex flex-col h-[500px]">
            <div className="bg-[#0A192F] p-4 border-b border-cyan-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-cyan-400 text-xs font-mono">AI Consultant Demo</div>
            </div>

            <div className="flex-1 p-6 overflow-y-auto space-y-4 custom-scrollbar">
                {messages.map((msg, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                    >
                        <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                            ? 'bg-cyan-600 text-white rounded-tr-none'
                            : 'bg-[#1e3a8a]/50 text-gray-200 rounded-tl-none border border-white/5'
                            }`}>
                            {msg.text}
                        </div>
                        {msg.source && (
                            <div className="mt-1 flex items-center gap-1 text-[10px] text-cyan-400/80 bg-cyan-950/30 px-2 py-1 rounded">
                                <FileText className="w-3 h-3" />
                                Source: {msg.source}
                            </div>
                        )}
                    </motion.div>
                ))}
                {isTyping && (
                    <div className="flex items-start">
                        <div className="bg-[#1e3a8a]/50 p-4 rounded-2xl rounded-tl-none border border-white/5">
                            <span className="flex gap-1">
                                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100" />
                                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200" />
                            </span>
                        </div>
                    </div>
                )}
            </div>

            <div className="p-4 bg-[#0A192F] border-t border-cyan-500/20">
                <p className="text-xs text-gray-500 mb-3 text-center">質問を選択してください（デモ用）</p>
                <div className="flex flex-wrap gap-2 justify-center">
                    {questions.map((q, i) => (
                        <button
                            key={i}
                            onClick={() => handleAsk(q)}
                            disabled={isTyping}
                            className="bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-xs px-3 py-2 rounded-full border border-cyan-500/30 transition-colors disabled:opacity-50"
                        >
                            {q}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

function RoiCalculator() {
    const [employees, setEmployees] = useState(50);
    // Logic: 5 searches/day * 10 mins saved = 50 mins/day. 
    // Annual: 50 * 240 days = 12,000 mins = 200 hours/year/person.
    // Total hours: employees * 200.
    const hoursSaved = employees * 200;
    const costSaved = (hoursSaved * 3000).toLocaleString(); // Assume 3000 JPY/hour

    return (
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Calculator className="w-6 h-6 text-cyan-400" />
                Cost Savings Calculator
            </h3>

            <div className="mb-12">
                <div className="flex justify-between mb-4">
                    <label className="text-gray-300">従業員数</label>
                    <span className="text-2xl font-bold text-white">{employees} <span className="text-sm font-normal text-gray-400">名</span></span>
                </div>
                <input
                    type="range"
                    min="1"
                    max="1000"
                    step="1"
                    value={employees}
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#0A192F] p-6 rounded-2xl border border-cyan-500/20 text-center">
                    <p className="text-sm text-gray-400 mb-2">年間削減時間</p>
                    <p className="text-4xl font-bold text-cyan-400">{hoursSaved.toLocaleString()} <span className="text-lg">時間</span></p>
                </div>
                <div className="bg-[#0A192F] p-6 rounded-2xl border border-cyan-500/20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-yellow-400/5" />
                    <p className="text-sm text-gray-400 mb-2">年間削減コスト想定</p>
                    <p className="text-3xl md:text-4xl font-bold text-yellow-400">¥{costSaved}</p>
                    <p className="text-[10px] text-gray-600 mt-2">※時給3,000円換算</p>
                </div>
            </div>
        </div>
    );
}

function FloatingCta() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3 }}
            className="fixed bottom-6 right-6 z-50 hidden md:block"
        >
            <a href="#contact" className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-[#0A192F] font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all hover:scale-105">
                <Bot className="w-6 h-6" />
                <span>デモを予約する</span>
            </a>
        </motion.div>
    );
}

// --- Main Page Content ---

export function RagServicePageContent() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from(".hero-element", {
                y: 30, opacity: 0, duration: 1, stagger: 0.1, ease: "power3.out"
            });
            gsap.utils.toArray(".reveal-section").forEach((section: any) => {
                gsap.from(section, {
                    y: 30, opacity: 0, duration: 0.8,
                    scrollTrigger: { trigger: section, start: "top 80%" }
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <PageWrapper>
            <div ref={containerRef} className="bg-[#0A192F] text-white font-sans selection:bg-cyan-500/30 min-h-screen relative overflow-hidden">
                <FloatingCta />

                {/* Backgrounds */}
                <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0A192F] to-[#0A192F] -z-10" />
                <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10 pointer-events-none" />

                <BackToTopButton />
                <BackLinkButton href="/ax-transformation" label="Back to AX" />

                {/* Hero */}
                <section className="min-h-screen pt-32 pb-20 px-6 relative flex flex-col items-center justify-center text-center">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] -z-10" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="hero-element inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8"
                    >
                        <Sparkles className="w-4 h-4" />
                        Mirai-RAG
                    </motion.div>

                    <h1 className="hero-element text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.2]">
                        「社内の知」を、<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">一瞬で、正確な答えに。</span>
                    </h1>

                    <p className="hero-element text-xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed">
                        独自開発のRAGシステムが、膨大な社内ドキュメントから「根拠のある回答」を生成。<br className="hidden md:inline" />
                        導入費用の最大2/3の補助を目指す、<span className="text-cyan-400 font-bold">IT導入補助金2026（申請予定）</span>準拠モデルです。
                    </p>

                    <div className="hero-element w-full px-4">
                        <LiveRagDemo />
                    </div>
                </section>

                {/* Trust & Features */}
                <section className="py-32 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 mb-32">
                            {[
                                {
                                    icon: <Settings className="w-10 h-10" />,
                                    title: "Hybrid Search Technology",
                                    subtitle: "超高精度な「ハイブリッド検索」",
                                    desc: "Dify基盤をフル活用し、キーワード検索とベクトル検索を組み合わせた高度なアルゴリズムを標準搭載。社内用語も正確に理解します。"
                                },
                                {
                                    icon: <FileText className="w-10 h-10" />,
                                    title: "Reference Visualizer",
                                    subtitle: "圧倒的な回答の信頼性",
                                    desc: "回答の根拠となった社内資料のページを即座に表示。AIの「言い間違い」を見逃さず、業務での利用リスクを最小化します。"
                                },
                                {
                                    icon: <ShieldCheck className="w-10 h-10" />,
                                    title: "Enterprise Security",
                                    subtitle: "エンタープライズ級の保護",
                                    desc: "AWS国内リージョンとAmazon Bedrockを採用。入力データがAIの学習に利用されることは一切ありません。"
                                },
                                {
                                    icon: <Zap className="w-10 h-10" />,
                                    title: "Productivity Boost",
                                    subtitle: "生産性向上要件への準拠",
                                    desc: "IT導入補助金の「労働生産性の向上」要件をクリアする機能設計。審査加点となる機能も標準搭載しています。"
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="reveal-section bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors flex flex-col items-start gap-4 group">
                                    <div className="text-cyan-400 group-hover:scale-110 transition-transform">{item.icon}</div>
                                    <div>
                                        <p className="text-cyan-400 text-sm font-bold tracking-wider uppercase mb-1">{item.title}</p>
                                        <h3 className="text-xl font-bold mb-3">{item.subtitle}</h3>
                                        <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ROI Calculator */}
                        <div className="reveal-section max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-5xl font-bold mb-4">See the Impact</h2>
                                <p className="text-gray-400">検索時間が減れば、創造する時間が増える。</p>
                            </div>
                            <RoiCalculator />
                        </div>

                        {/* Pricing Plans */}
                        <div className="reveal-section mt-32 max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold mb-4">Pricing Plan</h2>
                                <p className="text-gray-400">IT導入補助金の対象ツール認定を見据えた価格構成</p>
                            </div>

                            <div className="bg-[#0f172a] border border-cyan-500 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.1)]">
                                <div className="bg-cyan-500 p-4 text-center">
                                    <span className="text-[#0f172a] font-bold tracking-widest uppercase">Standard / High Performance</span>
                                </div>
                                <div className="p-8 md:p-12">
                                    <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-8">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-2">スタンダードプラン</h3>
                                            <p className="text-gray-400 text-sm">要件定義・データ整備から伴走対応</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm text-gray-500 mb-1">実質負担額（初年度・補助金適用時目安）</div>
                                            <div className="text-4xl md:text-5xl font-bold text-cyan-400">
                                                ¥350,000<span className="text-xl text-white">〜</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8 border-t border-white/10 pt-8">
                                        <div>
                                            <p className="text-sm text-gray-400 mb-2">初期導入費用</p>
                                            <p className="text-2xl font-bold text-white mb-4">¥450,000</p>
                                            <ul className="text-sm text-gray-400 space-y-2">
                                                <li className="flex gap-2"><Check className="w-4 h-4 text-cyan-500" /> ヒアリング・要件定義</li>
                                                <li className="flex gap-2"><Check className="w-4 h-4 text-cyan-500" /> データクレンジング</li>
                                                <li className="flex gap-2"><Check className="w-4 h-4 text-cyan-500" /> プロトタイプ構築</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 mb-2">月額利用料</p>
                                            <p className="text-2xl font-bold text-white mb-4">¥50,000</p>
                                            <ul className="text-sm text-gray-400 space-y-2">
                                                <li className="flex gap-2"><Check className="w-4 h-4 text-cyan-500" /> Dify Cloud維持費</li>
                                                <li className="flex gap-2"><Check className="w-4 h-4 text-cyan-500" /> LLM API利用料(上限あり)</li>
                                                <li className="flex gap-2"><Check className="w-4 h-4 text-cyan-500" /> 保守サポート</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-8 border-t border-white/10 text-center">
                                        <a href="/contact" className="inline-block w-full md:w-auto px-12 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-full transition-colors shadow-lg shadow-cyan-500/20">
                                            導入・補助金について相談する
                                        </a>
                                        <p className="text-xs text-gray-500 mt-4">※ 補助金申請には、本ツールのIT導入補助金事務局への登録完了が必要です。</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Workflow */}
                        <div className="reveal-section mt-32 max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold mb-4">Implementation Steps</h2>
                                <p className="text-gray-400">導入までの流れ</p>
                            </div>
                            <div className="grid md:grid-cols-4 gap-6">
                                {[
                                    { step: "01", title: "ヒアリング", desc: "活用データ(PDF/Word等)を確認し、要件を整理します。" },
                                    { step: "02", title: "プロトタイプ", desc: "貴社データで精度をテスト。最短3日で実機確認が可能。" },
                                    { step: "03", title: "導入計画", desc: "労働生産性向上のための数値目標設定と、導入計画の策定を支援。" },
                                    { step: "04", title: "構築・運用", desc: "本番環境構築と、社内展開・活用トレーニングを実施。" }
                                ].map((step, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl relative">
                                        <div className="text-4xl font-black text-white/10 absolute top-4 right-4">{step.step}</div>
                                        <h3 className="text-lg font-bold text-cyan-400 mb-2">{step.title}</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tech Specs */}
                        <div className="reveal-section mt-32 max-w-4xl mx-auto text-center border-t border-white/10 pt-16">
                            <h3 className="text-xl font-bold mb-8 text-gray-300">Technical Specifications</h3>
                            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-gray-500 font-mono">
                                <span className="px-4 py-2 bg-white/5 rounded border border-white/10">Base: Dify v0.x</span>
                                <span className="px-4 py-2 bg-white/5 rounded border border-white/10">LLM: Claude 3.5 Sonnet / GPT-4o</span>
                                <span className="px-4 py-2 bg-white/5 rounded border border-white/10">Vector DB: Weaviate / Pinecone</span>
                                <span className="px-4 py-2 bg-white/5 rounded border border-white/10">Infra: AWS Japan Region</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="contact" className="py-32 px-6 bg-[#050C18] relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

                    <div className="max-w-4xl mx-auto text-center reveal-section">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">
                            Ready to transform your<br />
                            <span className="text-cyan-400">Corporate Knowledge?</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                            まずはデモで、その精度を体感してください。<br />
                            貴社のデータを使ったPoC（概念実証）も可能です。
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="/contact" className="px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-[#0A192F] font-bold text-lg rounded-full shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all hover:scale-105 flex items-center gap-2">
                                <Bot className="w-5 h-5" />
                                IT導入補助金の対象か診断する
                            </a>
                            <p className="text-sm text-gray-500 mt-4 sm:mt-0 sm:ml-4 text-left">
                                運営会社: 360 Inc.<br />
                                古都奈良から全世界へITの未来を
                            </p>
                        </div>
                    </div>
                </section>
            </div >
        </PageWrapper >
    );
}
