import { PageWrapper } from "../components/PageWrapper";
import { motion } from "motion/react";

export function NotFoundPageContent() {
    return (
        <PageWrapper>
            <div className="min-h-[80vh] flex items-center justify-center px-6 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        transition={{ duration: 2 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/30 rounded-full blur-[100px]"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl w-full text-center relative z-10"
                >
                    <h1 className="text-[120px] md:text-[200px] font-black tracking-tighter text-white/5 leading-none select-none">
                        404
                    </h1>

                    <div className="-mt-10 md:-mt-20 mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Page Not Found
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            お探しのページが見つかりませんでした。<br />
                            削除されたか、URLが間違っている可能性があります。
                        </p>
                    </div>

                    <motion.a
                        href="/"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-10 py-4 border border-white/30 text-white rounded-full font-medium tracking-wide transition-all hover:bg-white hover:text-black hover:border-transparent"
                    >
                        トップページへ戻る
                    </motion.a>
                </motion.div>
            </div>
        </PageWrapper>
    );
}
