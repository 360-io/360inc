import { motion } from "motion/react";
import { BookOpen, Globe, Brain, Code, Trophy, Users, GraduationCap, Microscope, Zap } from "lucide-react";

export function EducationFeatures() {
    return (
        <div className="py-12 space-y-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <div className="inline-block p-4 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                    <GraduationCap size={40} className="text-blue-400" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6">
                    Future-Ready Skills
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    予測不可能な未来を生き抜くために必要な、本質的な「知る力」と「創る力」を育みます。
                </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
                <FeatureCard
                    icon={Code}
                    title="Programming"
                    description="論理的思考力を養う、実践的なプログラミング教育。基礎からアプリ開発まで段階的に学びます。"
                    color="from-blue-500 to-cyan-500"
                    delay={0}
                />
                <FeatureCard
                    icon={Globe}
                    title="Global Challenge"
                    description="国際ロボット大会「RoboRAVE」への参加をサポート。世界中の仲間と競い合い、グローバルな視座を獲得します。"
                    color="from-purple-500 to-pink-500"
                    delay={0.2}
                />
                <FeatureCard
                    icon={Brain}
                    title="AI Literacy"
                    description="AIを「使う」側になるためのリテラシー教育。最新ツールの活用法と倫理観をバランスよく習得します。"
                    color="from-amber-500 to-orange-500"
                    delay={0.4}
                />
            </div>

            {/* Detailed Feature Section - RoboRAVE */}
            <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0a192f] to-black border border-blue-500/20 p-8 md:p-12 mt-20"
            >
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092921461-eab62e97a78?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />

                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-bold mb-6">
                            <Trophy size={16} />
                            <span>Global Competition Support</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            RoboRAVE:<br />世界への挑戦券
                        </h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            RoboRAVE（ロボレーブ）は、アメリカ発祥の国際ロボット競技会。私たちは、この大会への挑戦を通じて、
                            技術力だけでなく、チームワークや問題解決能力、そして英語でのコミュニケーション能力を育むサポートを行っています。
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <Stat label="参加国数" value="25+" />
                            <Stat label="年間参加者" value="10k+" />
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                            <img
                                src="https://images.unsplash.com/photo-1596496050844-36105e630e74?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
                                alt="Robotics Competition"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Detailed Feature Section - WRO */}
            <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#052e16] to-black border border-green-500/20 p-8 md:p-12 mb-20"
            >
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-600/20 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />

                <div className="relative z-10 flex flex-col md:flex-row-reverse gap-12 items-center">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-bold mb-6">
                            <Microscope size={16} />
                            <span>Advanced Engineering</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            WRO:<br />自律型ロボットの最高峰
                        </h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            WRO (World Robot Olympiad) は、世界90カ国以上が参加するロボットコンテスト。
                            高度なプログラミング技術とメカニックデザインが求められるこの大会への挑戦を通じて、
                            エンジニアリングの真髄を学びます。
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <Stat label="参加国数" value="90+" />
                            <Stat label="年間参加者" value="28k+" />
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                            <img
                                src="https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
                                alt="WRO Competition"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-green-900/20 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                    </div>
                </div>
            </motion.section >

            {/* Detailed Feature Section - Ene-1 */}
            <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#2a1a00] to-black border border-orange-500/20 p-8 md:p-12 mb-20"
            >
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />

                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-bold mb-6">
                            <Zap size={16} />
                            <span>EV Energy Management</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Suzuka Ene-1 Challenge:<br />エネルギーマネジメントへの挑戦
                        </h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            鈴鹿サーキット国際レーシングコースを舞台に、充電式単3電池40本で走るEVカートレース。
                            限られたエネルギーでいかに速く、長く走るか。実践的なモノづくりとエネルギーマネジメントを学びます。
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <Stat label="開催地" value="Suzuka" />
                            <Stat label="動力源" value="AA Battery" />
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                            <img
                                src="https://images.unsplash.com/photo-1532906619279-a79716768a35?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3"
                                alt="Ene-1 Challenge"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-orange-900/20 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                    </div>
                </div>
            </motion.section >
        </div >
    );
}

function FeatureCard({ icon: Icon, title, description, color, delay }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
        >
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <p className="text-gray-400 leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
}

function Stat({ label, value }: { label: string, value: string }) {
    return (
        <div className="border-l-2 border-blue-500 pl-4">
            <div className="text-3xl font-bold text-white mb-1">{value}</div>
            <div className="text-sm text-gray-400">{label}</div>
        </div>
    );
}
