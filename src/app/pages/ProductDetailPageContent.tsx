
import { PageWrapper } from "../components/PageWrapper";
import { type Product } from "@/lib/microcms";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AppDevWorkflowDiagram } from "../components/AppDevWorkflowDiagram";
import { WorkflowDiagram } from "../components/WorkflowDiagram";
import { MarketingFeatures } from "../components/MarketingFeatures";
import { EducationFeatures } from "../components/EducationFeatures";
import { FaqSection } from "../components/FaqSection";

const aiFaqs = [
    {
        question: "AI導入の具体的な進め方を教えてください。",
        answer: "まずは現状の課題をヒアリングし、AI活用の可能性を診断します（コンサルティング）。その後、小規模な検証（PoC）を行い、効果を確認した上で本開発・運用へと進みます。"
    },
    {
        question: "開発期間はどのくらいかかりますか？",
        answer: "プロジェクトの規模によりますが、PoC（概念実証）は1〜2ヶ月、本開発は3〜6ヶ月程度が一般的です。要件に合わせて柔軟なプランをご提案します。"
    },
    {
        question: "専門的な知識がなくても依頼できますか？",
        answer: "もちろんです。AIの専門知識は不要です。ビジネス課題をお話しいただければ、弊社エンジニアとコンサルタントが最適な技術選定と解決策をご提案いたします。"
    },
    {
        question: "既存システムとの連携は可能ですか？",
        answer: "はい、可能です。API連携やデータベース接続など、貴社の既存システム（基幹システム、CRMなど）とシームレスに連携するAIソリューションを構築します。"
    },
    {
        question: "運用後のサポート体制はどうなっていますか？",
        answer: "運用開始後も、精度のモニタリングや定期的なモデルの再学習（MLOps）を行い、継続的に品質を向上させます。トラブル時の保守サポートも万全です。"
    }
];

const xrFaqs = [
    {
        question: "VRゴーグルなどの機材も手配できますか？",
        answer: "はい、Meta QuestやvisionOSデバイスなど、コンテンツに最適なハードウェアの選定から調達、セットアップまで一括でサポートいたします。"
    },
    {
        question: "Webブラウザでも体験できますか？",
        answer: "はい、専用アプリ不要のWebAR/WebVR開発も得意としています。スマートフォンやPCのブラウザから手軽にアクセスできる没入体験を提供します。"
    },
    {
        question: "展示会での利用を考えていますが、設営もお願いできますか？",
        answer: "コンテンツ制作だけでなく、展示ブースの設計や当日のオペレーション支援まで、イベントの成功をトータルでバックアップいたします。"
    }
];


const appDevFaqs = [
    {
        question: "iOSとAndroidの両方に対応できますか？",
        answer: "はい、FlutterやReact Nativeを用いたクロスプラットフォーム開発により、両OSに効率的に対応可能です。もちろん、SwiftやKotlinを用いたネイティブ開発も承ります。"
    },
    {
        question: "アプリの審査代行はお願いできますか？",
        answer: "はい、App StoreおよびGoogle Playへの申請手続きから審査対応まで、すべて代行いたします。リジェクト時の改修サポートもお任せください。"
    },
    {
        question: "開発後の保守・運用もお願いできますか？",
        answer: "もちろんです。OSアップデートへの対応やバグ修正、機能追加など、アプリを長く安定して運用するための保守プランをご用意しております。"
    }
];

const webProductionFaqs = [
    {
        question: "制作期間はどのくらいですか？",
        answer: "LP（ランディングページ）であれば2週間〜1ヶ月、コーポレートサイトであれば2〜3ヶ月程度が目安です。お急ぎの場合は特急対応もご相談ください。"
    },
    {
        question: "スマートフォン対応（レスポンシブデザイン）は含まれますか？",
        answer: "はい、すべてのWebサイト制作において、スマートフォンやタブレットに最適化したレスポンシブデザインを標準対応としております。"
    },
    {
        question: "公開後の更新作業は自分たちで行えますか？",
        answer: "はい、WordPressやmicroCMSなどのCMS（コンテンツ管理システム）を導入することで、お知らせやブログなどを社内で簡単に更新できる仕組みを構築します。"
    }
];

const contentMarketingFaqs = [
    {
        question: "どのようなコンテンツを作成できますか？",
        answer: "記事コンテンツ（SEO記事、取材記事）、SNS投稿用画像・動画、ホワイトペーパー、導入事例など、目的に合わせた多様なコンテンツ制作が可能です。"
    },
    {
        question: "効果測定はどのように行いますか？",
        answer: "毎月レポートを作成し、PV数、CVR、エンゲージメント率などの数値を分析します。定例会にて結果を共有し、次月の改善施策をご提案します。"
    },
    {
        question: "社内にリソースがないのですが、丸投げでも大丈夫ですか？",
        answer: "はい、企画立案から制作、投稿、分析まで、一貫して代行可能です。お客様には確認作業のみをお願いする体制を構築できます。"
    }
];

const digitalEducationFaqs = [
    {
        question: "どのような年代が対象ですか？",
        answer: "小学生から社会人まで、幅広い年代に対応したプログラムをご用意しています。学校教育機関向けのカリキュラム導入支援も行っております。"
    },
    {
        question: "オンラインでの受講は可能ですか？",
        answer: "はい、オンライン完結型の講座や、eラーニング教材の提供も行っています。対面とのハイブリッド開催もご相談ください。"
    },
    {
        question: "企業研修としてカスタマイズできますか？",
        answer: "可能です。貴社の業務内容や課題に合わせて、DX人材育成やAIリテラシー研修など、オリジナルの研修カリキュラムを作成いたします。"
    }
];

interface Props {
    product: Product | null;
}

export function ProductDetailPageContent({ product }: Props) {
    if (!product) {
        return <div className="text-white text-center py-32">Product not found</div>;
    }

    return (
        <PageWrapper>
            <article className="max-w-4xl mx-auto text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">{product.title}</h1>
                    <p className="text-xl text-gray-400 leading-relaxed font-light">{product.description}</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-16"
                >
                    {product.videoUrl ? (
                        <video
                            src={product.videoUrl}
                            className="w-full aspect-video object-cover rounded-3xl shadow-2xl"
                            autoPlay
                            muted
                            playsInline
                        />
                    ) : (
                        <ImageWithFallback
                            src={product.imageUrl}
                            alt={product.title}
                            className="w-full aspect-video object-cover rounded-3xl shadow-2xl"
                        />
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="prose prose-invert prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: product.content }}
                />

                {/* Conditionally Render Content and Specific FAQs */}
                {product.id === "product-1" && (
                    <>
                        <WorkflowDiagram />
                        <FaqSection customFaqs={aiFaqs} title="AI Solutions FAQ" />
                    </>
                )}
                {product.id === "xr-development" && (
                    <FaqSection customFaqs={xrFaqs} title="XR Solutions FAQ" />
                )}
                {product.id === "product-2" && (
                    <>
                        <AppDevWorkflowDiagram />
                        <FaqSection customFaqs={appDevFaqs} title="App Dev FAQ" />
                    </>
                )}
                {product.id === "web-production" && (
                    <FaqSection customFaqs={webProductionFaqs} title="Web Production FAQ" />
                )}
                {product.id === "content-marketing" && (
                    <>
                        <MarketingFeatures />
                        <FaqSection customFaqs={contentMarketingFaqs} title="Marketing FAQ" />
                    </>
                )}
                {product.id === "digital-education" && (
                    <>
                        <EducationFeatures />
                        <FaqSection customFaqs={digitalEducationFaqs} title="Education FAQ" />
                    </>
                )}

                <div className="mt-20 border-t border-white/10 pt-10 text-center">
                    <a href="/#products" className="inline-block px-8 py-3 rounded-full border border-white/30 hover:bg-white hover:text-black transition-all">
                        ホームに戻る
                    </a>
                </div>
            </article>
        </PageWrapper>
    );
}
