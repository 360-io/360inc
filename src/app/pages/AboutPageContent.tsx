
import { PageWrapper } from "../components/PageWrapper";
import { motion } from "motion/react";

export function AboutPageContent() {
    return (
        <PageWrapper>
            <div className="max-w-5xl mx-auto text-white">
                {/* Hero Area */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">About</h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        デジタルで”想う””寄り添う”を実現する。<br />
                        AIと人、技術と心が共鳴する未来へ。
                    </p>
                </motion.div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-12 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
                    >
                        <h3 className="text-3xl font-bold mb-6 text-blue-400">Mission</h3>
                        <p className="text-lg leading-relaxed text-gray-300">
                            テクノロジーを「冷たい仕組み」から「温かいパートナー」へ。
                            AIとデジタルの力で、一人ひとりの想いを理解し、
                            心に寄り添う本質的な価値を提供し続けます。
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
                    >
                        <h3 className="text-3xl font-bold mb-6 text-purple-400">Vision</h3>
                        <p className="text-lg leading-relaxed text-gray-300">
                            誰もが自分の「想い」を形にできる世界の実現。
                            デジタル技術が人と社会の間の壁を取り払い、
                            深い共感とつながりを生むインフラとなる未来を目指します。
                        </p>
                    </motion.div>
                </div>

                {/* CEO Message */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32 flex flex-col md:flex-row items-center gap-12"
                >
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold mb-8">Message</h2>
                        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                            <p>
                                私たちは創業以来、「デザイン」と「技術」の可能性を信じ、挑戦を続けてきました。
                                変化の激しい現代において、変わらないものは「人の心を動かす」ことへの情熱です。
                            </p>
                            <p>
                                私たちの作るプロダクトが、誰かの日常を少しでも明るくし、
                                ビジネスを前進させる力になれば、これ以上の喜びはありません。
                            </p>
                            <p className="font-bold text-white pt-4">
                                代表取締役 CEO<br />
                                三鬼 耕治
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 aspect-[3/4] bg-gray-800 rounded-2xl overflow-hidden relative">
                        {/* Placeholder for CEO Image */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent to-black/80">
                            <span className="text-white/20 font-bold text-6xl">CEO</span>
                        </div>
                    </div>
                </motion.section>

                {/* Company Profile Table */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-4xl font-bold mb-12 text-center">Company Profile</h2>
                    <div className="overflow-hidden rounded-2xl border border-white/10">
                        <table className="w-full text-left border-collapse">
                            <tbody className="divide-y divide-white/10">
                                <tr className="bg-white/5">
                                    <th className="py-6 px-8 font-medium w-1/3 text-gray-400">会社名</th>
                                    <td className="py-6 px-8">株式会社三六〇 (360Inc)</td>
                                </tr>
                                <tr>
                                    <th className="py-6 px-8 font-medium text-gray-400">設立</th>
                                    <td className="py-6 px-8">2017年3月</td>
                                </tr>
                                <tr className="bg-white/5">
                                    <th className="py-6 px-8 font-medium text-gray-400">所在地</th>
                                    <td className="py-6 px-8">〒633-0062 奈良県桜井市粟殿1029-6</td>
                                </tr>
                                <tr>
                                    <th className="py-6 px-8 font-medium text-gray-400">代表者</th>
                                    <td className="py-6 px-8">代表取締役 三鬼 耕治</td>
                                </tr>
                                <tr className="bg-white/5">
                                    <th className="py-6 px-8 font-medium text-gray-400">事業内容</th>
                                    <td className="py-6 px-8">
                                        AIインテグレーション / アプリケーション開発 <br />
                                        Webサイト制作 / コンテンツマーケティング
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </motion.section>
            </div>
        </PageWrapper>
    );
}
