import { PageWrapper } from "../components/PageWrapper";
import { motion } from "motion/react";
import { useState } from "react";

export function ContactPageContent() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    return (
        <PageWrapper>
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
                        Contact
                    </h1>
                    <p className="text-xl text-gray-400">
                        お仕事のご依頼、ご相談などお気軽にお問い合わせください。
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="glass-panel p-8 md:p-12 rounded-[2rem] bg-black/40 backdrop-blur-lg border border-white/10"
                >
                    <form
                        action="https://hyperform.jp/api/vZB1ih1O"
                        method="POST"
                        target="_blank"
                        className="space-y-8"
                    >
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                件名 <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <select
                                    name="subject"
                                    id="subject"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-white/20 transition-all cursor-pointer"
                                    defaultValue=""
                                >
                                    <option value="" disabled className="text-gray-500 bg-gray-900">お問い合わせ項目を選択してください</option>
                                    <option value="AX・DXについて" className="bg-gray-900">AX・DXについて</option>
                                    <option value="XRについて" className="bg-gray-900">XRについて</option>
                                    <option value="アプリケーション開発について" className="bg-gray-900">アプリケーション開発について</option>
                                    <option value="WEBサイトデザインについて" className="bg-gray-900">WEBサイトデザインについて</option>
                                    <option value="コンテンツ・SNSマーケティングについて" className="bg-gray-900">コンテンツ・SNSマーケティングについて</option>
                                    <option value="教育事業について" className="bg-gray-900">教育事業について</option>
                                    <option value="補助金活用・コンサルタントについて" className="bg-gray-900">補助金活用・コンサルタントについて</option>
                                    <option value="その他" className="bg-gray-900">その他</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-6 pointer-events-none text-gray-400">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                お名前 <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                                placeholder="山田 太郎"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                メールアドレス <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                                会社名
                            </label>
                            <input
                                type="text"
                                name="company"
                                id="company"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                                placeholder="株式会社〇〇"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                お問い合わせ内容 <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows={6}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none"
                                placeholder="お問い合わせ内容をご記入ください"
                            ></textarea>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full bg-white text-black font-bold py-5 rounded-full hover:bg-gray-200 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                            >
                                送信する
                            </button>

                        </div>
                    </form>
                </motion.div>
            </div>
        </PageWrapper>
    );
}
