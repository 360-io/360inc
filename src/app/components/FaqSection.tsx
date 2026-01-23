import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const generalFaqs: FAQItem[] = [
    {
        question: "どのような業種に対応していますか？",
        answer: "全業種に対応可能です。製造業、小売、医療、IT、自治体など、幅広い分野での導入実績がございます。"
    },
    {
        question: "対応エリアを教えてください。",
        answer: "全国対応可能です。オンラインミーティングを活用し、遠方のお客様ともスムーズにプロジェクトを進行しています。"
    },
    {
        question: "予算に合わせた提案は可能ですか？",
        answer: "はい、可能です。ご予算や課題の優先順位に合わせて、最適なフェーズ分けやスモールスタートのプランをご提案いたします。"
    },
    {
        question: "契約形態について教えてください。",
        answer: "準委任契約、請負契約など、プロジェクトの性質に合わせて柔軟に対応いたします。"
    },
    {
        question: "セキュリティ対策は万全ですか？",
        answer: "はい、情報セキュリティマネジメントシステム（ISMS）に準拠した厳格な管理体制のもと、お客様のデータを安全に取り扱います。"
    }
];

interface FaqSectionProps {
    customFaqs?: FAQItem[];
    title?: string;
    subtitle?: string;
}

export function FaqSection({ customFaqs, title = "FAQ", subtitle = "よくあるご質問" }: FaqSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const displayFaqs = customFaqs || generalFaqs;

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-32 px-6 relative z-10 text-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-sans font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 font-medium tracking-wider text-sm md:text-base"
                    >
                        {subtitle}
                    </motion.p>
                </div>

                <div className="bg-black/[0.44] backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl space-y-4 border border-white/5">
                    {displayFaqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border-b border-white/10 last:border-0"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                            >
                                <span className="text-lg md:text-xl font-medium pr-8 group-hover:text-blue-400 transition-colors">
                                    {faq.question}
                                </span>
                                <span className="flex-shrink-0 text-gray-500 group-hover:text-blue-400 transition-colors">
                                    {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-8 text-gray-400 leading-relaxed font-light">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
