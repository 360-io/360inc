import { PageWrapper } from "../components/PageWrapper";
import { motion } from "motion/react";

export function SecurityPolicyPageContent() {
    return (
        <PageWrapper>
            <div className="max-w-4xl mx-auto py-32 px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold mb-16 text-white text-center"
                >
                    Security Policy
                    <span className="block text-lg md:text-xl font-normal mt-4 text-gray-400">情報セキュリティポリシー</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="prose prose-invert max-w-none text-gray-300 space-y-12"
                >
                    <p className="lead text-lg leading-relaxed">
                        株式会社360（以下、「当社」といいます）は、最先端のテクノロジーとクリエイティブを融合させたサービスを提供する企業として、お客様からお預かりする情報資産および当社の保有する情報資産を事故・災害・犯罪などの脅威から守り、お客様ならびに社会の信頼に応えるべく、以下の方針に基づき全社で情報セキュリティに取り組みます。
                    </p>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">1. 経営者の責任</h2>
                        <p>
                            当社は、経営者主導で組織的かつ継続的に情報セキュリティの改善・向上に努めます。経営層は、情報セキュリティが経営上の重要課題であることを認識し、必要な資源を配分します。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">2. 社内体制の整備</h2>
                        <p>
                            当社は、情報セキュリティの維持及び改善のために組織を設置し、情報セキュリティ対策を社内の正式な規則として定めます。また、CISO（最高情報セキュリティ責任者）を設置し、セキュリティインシデントの予防および緊急時の対応体制を確立します。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">3. 従業員の取組み</h2>
                        <p>
                            当社の従業員（正社員、契約社員、パート・アルバイト、業務委託先を含む）は、情報セキュリティのために必要とされる知識、技術を習得し、情報セキュリティへの取り組みを確かなものにします。定期的なセキュリティ教育を実施し、違反者に対しては就業規則に基づき厳正に対処します。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">4. 法令及び契約上の要求事項の遵守</h2>
                        <p>
                            当社は、情報セキュリティに関わる法令、規制、規範、契約上の義務を遵守します。特にお客様からお預かりする機密情報（秘密情報）については、契約に基づき厳重な管理を行います。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">5. 情報資産の管理と保護</h2>
                        <p className="mb-4">
                            当社は、保有する情報資産を機密性・完全性・可用性の観点から分類し、リスク評価を行った上で、適切な物理的・技術的・人的・組織的対策を講じます。
                        </p>
                        <ul className="list-disc pl-6 space-y-4">
                            <li>
                                <span className="font-bold text-white">アクセス制御:</span> 業務遂行上必要な者のみが情報にアクセスできるよう権限を最小化します。
                            </li>
                            <li>
                                <span className="font-bold text-white">AI・クラウドサービスの利用:</span> 生成AIやクラウドサービスを利用する際は、入力データの取扱いに関するガイドラインを策定し、情報漏洩を防止します。
                            </li>
                            <li>
                                <span className="font-bold text-white">脆弱性対策:</span> 開発・運用するWebサイトやシステムに対し、継続的な脆弱性診断や修正パッチの適用を行います。
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">6. 違反及び事故への対応</h2>
                        <p>
                            情報セキュリティに関わる法令違反、契約違反及び事故が発生した場合には適切に対処し、再発防止に努めます。万が一、インシデントが発生した際には、被害を最小限に留めるとともに、迅速な原因究明と情報の開示を行います。
                        </p>
                    </section>

                    <section className="border-t border-white/10 pt-12 mt-16 text-right text-sm text-gray-400">
                        <p>制定日: 2017年3月7日</p>
                        <p>最終改定日: 2026年1月26日</p>
                        <p className="mt-4 font-bold text-white">株式会社360</p>
                        <p>代表取締役 三鬼耕治</p>
                    </section>
                </motion.div>
            </div>
        </PageWrapper>
    );
}
