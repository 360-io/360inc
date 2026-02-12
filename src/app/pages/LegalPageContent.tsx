import { PageWrapper } from "../components/PageWrapper";
import { motion } from "motion/react";

export function LegalPageContent() {
    return (
        <PageWrapper>
            <div className="max-w-4xl mx-auto py-32 px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-white text-center leading-tight"
                >
                    特定商取引法に基づく表記
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel p-8 md:p-12 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                    <dl className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 text-gray-300">
                        <div className="contents">
                            <dt className="font-bold text-white py-4 border-b border-white/10 md:border-none">販売業者</dt>
                            <dd className="py-4 border-b border-white/10">360Inc.</dd>
                        </div>
                        <div className="contents">
                            <dt className="font-bold text-white py-4 border-b border-white/10 md:border-none">運営統括責任者</dt>
                            <dd className="py-4 border-b border-white/10">EC統括責任者 山崎 奈緒美</dd>
                        </div>
                        <div className="contents">
                            <dt className="font-bold text-white py-4 border-b border-white/10 md:border-none">所在地</dt>
                            <dd className="py-4 border-b border-white/10">奈良県桜井市粟殿1029-6</dd>
                        </div>
                        <div className="contents">
                            <dt className="font-bold text-white py-4 border-b border-white/10 md:border-none">電話番号</dt>
                            <dd className="py-4 border-b border-white/10">0744-48-3603</dd>
                        </div>
                        <div className="contents">
                            <dt className="font-bold text-white py-4 border-b border-white/10 md:border-none">メールアドレス</dt>
                            <dd className="py-4 border-b border-white/10">info@360inc.co.jp</dd>
                        </div>
                        <div className="contents">
                            <dt className="font-bold text-white py-4 border-b border-white/10 md:border-none">販売価格</dt>
                            <dd className="py-4 border-b border-white/10">各製品・サービスページに記載</dd>
                        </div>
                        <div className="contents">
                            <dt className="font-bold text-white py-4 md:border-none">お支払い方法</dt>
                            <dd className="py-4">クレジットカード支払い、銀行振込</dd>
                        </div>
                    </dl>
                </motion.div>
            </div>
        </PageWrapper>
    );
}
