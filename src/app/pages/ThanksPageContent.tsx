import { PageWrapper } from "../components/PageWrapper";
import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

export function ThanksPageContent() {
    return (
        <PageWrapper>
            <div className="min-h-[80vh] flex items-center justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl w-full text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                        className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg backdrop-blur-md border border-white/20"
                    >
                        <CheckCircle className="text-blue-400 w-12 h-12" />
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                        Thank You
                    </h1>

                    <p className="text-xl text-gray-400 mb-12 leading-relaxed font-light">
                        お問い合わせありがとうございます。<br />
                        内容を確認次第、担当者よりご連絡させていただきます。
                    </p>

                    <motion.a
                        href="/"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-10 py-4 bg-white text-black rounded-full font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                    >
                        ホームに戻る
                    </motion.a>
                </motion.div>
            </div>
        </PageWrapper>
    );
}
