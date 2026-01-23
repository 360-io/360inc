import { PageWrapper } from "../components/PageWrapper";
import { motion } from "motion/react";

export function PrivacyPolicyPageContent() {
    return (
        <PageWrapper>
            <div className="max-w-4xl mx-auto py-32 px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold mb-16 text-white text-center"
                >
                    Privacy Policy
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="prose prose-invert max-w-none text-gray-300 space-y-12"
                >
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">1. 個人情報の収集について</h2>
                        <p>
                            当社は、お問い合わせフォームやサービス利用登録などを通じて、お客様の個人情報（氏名、メールアドレス、電話番号など）を収集する場合があります。収集した情報は、サービスの提供やお問い合わせへの対応のために利用いたします。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">2. 利用目的</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>サービスの提供および運営のため</li>
                            <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                            <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">3. 第三者への提供</h2>
                        <p>
                            当社は、法令に基づく場合を除き、あらかじめお客様の同意を得ることなく第三者に個人情報を提供することはありません。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">4. プライバシーポリシーの変更</h2>
                        <p>
                            本ポリシーの内容は、必要に応じて変更することがあります。変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
                        </p>
                    </section>
                </motion.div>
            </div>
        </PageWrapper>
    );
}
