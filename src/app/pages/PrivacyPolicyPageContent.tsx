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

                    <section className="space-y-8">
                        <h2 className="text-2xl font-bold text-white mb-6">5. クッキー（Cookie）等の利用について</h2>

                        <p>
                            株式会社360（以下「当社」といいます）は、お客様のウェブサイト利用体験の向上、アクセス状況の分析、およびマーケティング活動の最適化を目的として、クッキー（Cookie）および類似の技術（以下「クッキー等」といいます）を使用しています。
                        </p>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">5-1. クッキー（Cookie）とは</h3>
                            <p>
                                クッキーとは、お客様がウェブサイトにアクセスした際に、ブラウザを通じてお客様のコンピュータやスマートフォン等の端末に保存される小さなテキストファイルのことです。これにより、次回訪問時にお客様のブラウザを識別し、ウェブサイトの利便性を高めることができます。なお、クッキー自体にお客様の氏名、住所、電話番号などの個人を直接特定する情報は含まれません。
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">5-2. クッキー等の利用目的</h3>
                            <p className="mb-4">当社では、以下の目的でクッキー等を利用しています。</p>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-bold text-white mb-1">(1) 不可欠なクッキー（Essential Cookies）</h4>
                                    <p>ウェブサイトの基本機能（ページ間の移動、セキュリティの確保など）を提供するために必要不可欠なものです。このクッキーが無効化されると、サイトの一部が正しく機能しない可能性があります。</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">(2) パフォーマンス・分析用クッキー（Analytics Cookies）</h4>
                                    <p>訪問者数やトラフィックソースをカウントし、ウェブサイトのパフォーマンスを測定・改善するために使用します。お客様がどのページを最もよく利用されているかなどを把握するために役立てられます。</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">(3) マーケティング・広告用クッキー（Marketing Cookies）</h4>
                                    <p>お客様の興味・関心に合わせて、当社または当社の提携先が適切な広告を配信するために使用される場合があります。</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">5-3. 外部送信規律に基づく情報提供（利用ツール一覧）</h3>
                            <p className="mb-4">
                                当社は、アクセス解析や広告配信のために、以下の第三者ツールへお客様の利用者情報を送信しています。電気通信事業法に基づく外部送信規律に係る公表事項は以下の通りです。
                            </p>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm border-collapse border border-white/20">
                                    <thead className="bg-white/10">
                                        <tr>
                                            <th className="p-3 border border-white/20 font-bold text-white whitespace-nowrap">ツール名</th>
                                            <th className="p-3 border border-white/20 font-bold text-white whitespace-nowrap">提供会社</th>
                                            <th className="p-3 border border-white/20 font-bold text-white whitespace-nowrap">利用目的</th>
                                            <th className="p-3 border border-white/20 font-bold text-white min-w-[200px]">送信される情報</th>
                                            <th className="p-3 border border-white/20 font-bold text-white whitespace-nowrap">オプトアウト・詳細</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10">
                                        <tr>
                                            <td className="p-3 border border-white/20 font-bold text-white">Google Analytics 4 (GA4)</td>
                                            <td className="p-3 border border-white/20">Google LLC</td>
                                            <td className="p-3 border border-white/20">アクセス解析<br />サイト改善</td>
                                            <td className="p-3 border border-white/20">
                                                <ul className="list-disc pl-4 space-y-1">
                                                    <li>閲覧ページのURL</li>
                                                    <li>リファラ（直前のリンク元）</li>
                                                    <li>IPアドレス</li>
                                                    <li>ブラウザ/OS情報</li>
                                                    <li>Cookie ID</li>
                                                </ul>
                                            </td>
                                            <td className="p-3 border border-white/20">
                                                <div className="flex flex-col gap-1">
                                                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Googleプライバシーポリシー</a>
                                                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">オプトアウト設定</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 border border-white/20 font-bold text-white">Google Tag Manager</td>
                                            <td className="p-3 border border-white/20">Google LLC</td>
                                            <td className="p-3 border border-white/20">タグ管理<br />（機能制御）</td>
                                            <td className="p-3 border border-white/20">
                                                <ul className="list-disc pl-4 space-y-1">
                                                    <li>タグの発火状況</li>
                                                    <li>サイトの利用状況</li>
                                                    <li className="text-xs text-gray-400">※個人情報の送信はありません</li>
                                                </ul>
                                            </td>
                                            <td className="p-3 border border-white/20">
                                                <a href="https://marketingplatform.google.com/about/analytics/tag-manager/use-policy/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Google利用規約</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 border border-white/20 font-bold text-white">Google 広告</td>
                                            <td className="p-3 border border-white/20">Google LLC</td>
                                            <td className="p-3 border border-white/20">広告配信<br />効果測定</td>
                                            <td className="p-3 border border-white/20">
                                                <ul className="list-disc pl-4 space-y-1">
                                                    <li>Cookie ID</li>
                                                    <li>広告識別子</li>
                                                    <li>行動履歴</li>
                                                </ul>
                                            </td>
                                            <td className="p-3 border border-white/20">
                                                <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Google広告設定</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">5-4. クッキーの設定・無効化（オプトアウト）について</h3>

                            <div className="mb-8">
                                <h4 className="font-bold text-white mb-2">(1) 同意管理ツールでの設定変更</h4>
                                <p className="mb-2">
                                    当サイトでは、クッキーの利用に関する同意管理ツール（CMP）を導入しています。お客様は、以下のリンクから、いつでもクッキーの利用に関する同意・拒否の状態を変更することができます。
                                </p>
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (confirm('Cookieの同意設定をリセットし、ページを再読み込みしますか？')) {
                                            try {
                                                localStorage.removeItem('site_consent_status');
                                                window.location.reload();
                                            } catch (err) {
                                                console.error(err);
                                                alert('設定のリセットに失敗しました。ブラウザの設定からCookieを削除してください。');
                                            }
                                        }
                                    }}
                                    className="inline-block text-blue-400 hover:text-blue-300 font-bold underline cursor-pointer"
                                >
                                    Cookie設定を変更する（同意状態のリセット）
                                </a>
                            </div>

                            <div>
                                <h4 className="font-bold text-white mb-2">(2) ブラウザの設定変更</h4>
                                <p className="mb-4">
                                    お客様ご自身でブラウザの設定を変更することにより、クッキーの受け入れを拒否することも可能です。主要なブラウザの設定方法は以下をご参照ください。
                                </p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li><a href="https://support.apple.com/ja-jp/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Apple Safari</a></li>
                                    <li><a href="https://support.google.com/chrome/answer/95647?hl=ja" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Google Chrome</a></li>
                                    <li><a href="https://support.microsoft.com/ja-jp/microsoft-edge/microsoft-edge-%E3%81%A7-cookie-%E3%82%92%E5%89%8A%E9%99%A4%E3%81%99%E3%82%8B-63947406-40ac-c2b9-2592-3630d6348663" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Microsoft Edge</a></li>
                                    <li><a href="https://support.mozilla.org/ja/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Mozilla Firefox</a></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </motion.div>
            </div>
        </PageWrapper>
    );
}
