import { motion } from "motion/react";
import { Youtube, MessageCircle, Play, Users, BarChart3, MessageSquare, Smartphone, Zap } from "lucide-react";

export function MarketingFeatures() {
    return (
        <div className="py-12 space-y-16">
            {/* YouTube Marketing Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 p-8 md:p-12"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 mb-6">
                            <Youtube size={20} />
                            <span className="font-bold text-sm tracking-widest uppercase">YouTube Marketing</span>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            動画で魅せる。<br />ファンを作る。
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            多くのユーザーが動画で情報を検索する時代。YouTubeを活用したブランディングや集客は、ビジネスの成長に不可欠です。
                            企画・撮影・編集からチャンネル運用、広告配信までトータルでサポートします。
                        </p>

                        <div className="space-y-6">
                            <FeatureItem
                                icon={Play}
                                title="企画・制作"
                                description="ターゲットに刺さる企画立案と、高品質な動画制作。"
                                color="text-red-400"
                            />
                            <FeatureItem
                                icon={Users}
                                title="チャンネル運用"
                                description="登録者数を増やし、ファンエンゲージメントを高める運用代行。"
                                color="text-red-400"
                            />
                            <FeatureItem
                                icon={BarChart3}
                                title="広告運用・分析"
                                description="TrueView広告などの運用と、アナリティクスに基づいた改善提案。"
                                color="text-red-400"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/50 relative group">
                            {/* Abstract visual for YouTube */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-red-900/40 via-transparent to-transparent opacity-60" />
                            <img
                                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3"
                                alt="YouTube Marketing"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                                    <Play fill="white" className="text-white ml-2" size={32} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Instagram Marketing Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 p-8 md:p-12"
            >
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500/20 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2" />

                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-500 mb-6">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                            <span className="font-bold text-sm tracking-widest uppercase">Instagram Marketing</span>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            世界観を創り、<br />ファンを魅了する。
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            ビジュアルコミュニケーションの最前線であるInstagram。
                            ブランドの世界観（トンマナ）を統一したフィード運用や、
                            発見タブでの露出を狙ったリール動画制作で、認知と好意度を飛躍的に高めます。
                        </p>

                        <div className="space-y-6">
                            <FeatureItem
                                icon={Users}
                                title="アカウント運用代行"
                                description="企画・撮影・投稿・CS対応までワンストップで実施。"
                                color="text-pink-400"
                            />
                            <FeatureItem
                                icon={Play}
                                title="リール動画制作"
                                description="短尺動画トレンドに合わせた、拡散力の高い縦型動画制作。"
                                color="text-pink-400"
                            />
                            <FeatureItem
                                icon={Users}
                                title="インフルエンサーPR"
                                description="ブランドにマッチしたインフルエンサーの選定とディレクション。"
                                color="text-pink-400"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/50 relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-transparent to-orange-500/30 opacity-60" />
                            <img
                                src="https://images.unsplash.com/photo-1611162618071-eead1eaacd4c?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3"
                                alt="Instagram Marketing"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="grid grid-cols-2 gap-4 w-3/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-95 group-hover:scale-100">
                                    {/* Mock UI Elements */}
                                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 aspect-square"></div>
                                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 aspect-square"></div>
                                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 aspect-square"></div>
                                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 aspect-square"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* LINE Marketing Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 p-8 md:p-12"
            >
                <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/20 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />

                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    {/* Image Side (Left on Desktop for variation) */}
                    <div className="relative order-2 md:order-1">
                        <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/50 relative group">
                            <div className="absolute inset-0 bg-gradient-to-bl from-green-900/40 via-transparent to-transparent opacity-60" />
                            <img
                                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3"
                                alt="LINE Marketing"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                                        <MessageSquare fill="white" className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">公式アカウント開設</p>
                                        <p className="text-green-400 text-xs">国内最大級のリーチ力</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 mb-6">
                            <MessageCircle size={20} />
                            <span className="font-bold text-sm tracking-widest uppercase">LINE Marketing</span>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            一番身近な場所で、<br />顧客とつながる。
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            国内月間利用者数9,600万人を超えるLINEは、生活インフラそのもの。
                            メルマガに代わる拡張ツール（LMessage）導入や、チャットボットによる自動接客で、
                            顧客との強固な信頼関係（エンゲージメント）を構築します。
                        </p>

                        <div className="space-y-6">
                            <FeatureItem
                                icon={Smartphone}
                                title="LMessage（エルメ）導入"
                                description="顧客属性に合わせたセグメント配信で、成約率を最大化。"
                                color="text-green-400"
                            />
                            <FeatureItem
                                icon={Zap}
                                title="リッチメニュー制作"
                                description="視覚的に訴求するメニューデザインで、クリック率を向上。"
                                color="text-green-400"
                            />
                            <FeatureItem
                                icon={MessageSquare}
                                title="自動応答・チャットボット"
                                description="24時間365日の自動対応で、機会損失を防ぎ顧客満足度UP。"
                                color="text-green-400"
                            />
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}

function FeatureItem({ icon: Icon, title, description, color }: { icon: any, title: string, description: string, color: string }) {
    return (
        <div className="flex gap-4 items-start group">
            <div className={`mt-1 p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors ${color}`}>
                <Icon size={20} />
            </div>
            <div>
                <h4 className="text-white font-bold text-lg mb-1">{title}</h4>
                <p className="text-gray-500 text-sm">{description}</p>
            </div>
        </div>
    );
}
