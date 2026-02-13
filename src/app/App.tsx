import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { ProductSection } from "@/app/components/ProductSection";
import { FeatureGrid } from "@/app/components/FeatureGrid";
import { Footer } from "@/app/components/Footer";
import { ThreeBackground } from "@/app/components/ThreeBackground";
import { ProjectSection } from "@/app/components/ProjectSection";
import { BlogSection } from "@/app/components/BlogSection";
import { motion } from "motion/react";
import { SmoothScroll } from "@/app/components/SmoothScroll";
import { HeaderContentFade } from "@/app/components/HeaderContentFade";


import { AboutSection } from "@/app/components/AboutSection";
import { ErrorBoundary } from "@/app/components/ErrorBoundary";
import { FaqSection } from "@/app/components/FaqSection";


export default function App() {
  return (
    <ErrorBoundary>
      <SmoothScroll>
        <div className="min-h-screen relative">
          <ThreeBackground className="fixed inset-0 -z-50" />
          <Header />

          <main className="relative z-10">
            <HeaderContentFade>
              <Hero
                title="想"
                subtitle={`人を想い　世界を想い　宇宙を想う\n360はデジタルで　”想”　を実現します`}
                imageUrl="https://images.unsplash.com/photo-1683701251422-912fe98f2b5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2ODcyNDg1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              />

              <div className="py-16 md:py-32 px-6 text-center relative z-10">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-5xl md:text-7xl font-sans font-bold tracking-tight mb-4 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 inline-block"
                >
                  Solutions
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="text-xl md:text-2xl text-gray-400 font-normal tracking-wide"
                >
                  デジタルで”想う””寄り添う”を実現する
                </motion.p>
              </div>

              <ProductSection
                title="AI Integration Service"
                description="人の思考に寄り添うAIが、ビジネスの新たな可能性を拓きます。単なる自動化ではなく、想いをカタチにするパートナーとして、持続可能な未来を共創します。"
                imageUrl="/images/360inc_ai01.jpg"
                linkUrl="/products/product-1"
              />

              <ProductSection
                title="XR Development"
                description="現実と想像の境界を溶かす、没入型のデジタル体験を。360度の視界で「想い」を伝え、時間や場所を超えた新しい「つながり」を創造します。"
                imageUrl="/images/360inc_xr00.jpg"
                reversed
                linkUrl="/products/xr-development"
              />

              <ProductSection
                title="Application Development"
                description="使う人の心を動かす、温かみのあるデジタル体験を。手に取るすべての人に寄り添い、想いが伝わるアプリケーションを開発します。"
                imageUrl="/images/app-dev-new.png"
                linkUrl="/products/product-2"
              />



              <ProductSection
                title="Website Production"
                description="世界へ届けたい「想い」を、美しいデジタル表現で。ブランドが持つ物語を大切に紡ぎ、世界中の人々と深く繋がるWebサイトを構築します。"
                imageUrl="/images/webdesign001.jpg"
                reversed
                linkUrl="/products/web-production"
              />

              <ProductSection
                title="Content Marketing"
                description="共感を呼び、人と人の絆を深めるコンテンツを。データを超えた「想い」の共有を通じて、永く愛されるファンコミュニティを育みます。"
                imageUrl="/images/360inc_content02.jpg"
                linkUrl="/products/content-marketing"
              />

              <ProductSection
                title="Digital Education"
                description="未来の地球を想う、次世代のリーダーたちへ。テクノロジーと共に生きる力を育み、子供たちの無限の「想い」を明日へと繋ぎます。"
                imageUrl="/images/digital-education.svg"
                videoUrl="/videos/edtec01.mp4"
                reversed
                linkUrl="/products/digital-education"
              />


              <AboutSection />

              <FeatureGrid />

              <ProjectSection />

              <BlogSection />

              <FaqSection />

              <section className="py-32 px-6 text-white relative overflow-hidden">
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 opacity-30"
                  animate={{
                    background: [
                      "radial-gradient(circle at 0% 0%, #3b82f6 0%, transparent 50%)",
                      "radial-gradient(circle at 100% 100%, #8b5cf6 0%, transparent 50%)",
                      "radial-gradient(circle at 0% 100%, #ec4899 0%, transparent 50%)",
                      "radial-gradient(circle at 100% 0%, #3b82f6 0%, transparent 50%)",
                      "radial-gradient(circle at 0% 0%, #3b82f6 0%, transparent 50%)",
                    ]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                  <motion.h2
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tighter"
                  >
                    あなたのビジネスを<br />次のレベルへ
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-2xl md:text-3xl text-white/80 mb-12 font-light"
                  >
                    今すぐ始めて、可能性を広げましょう
                  </motion.p>
                  <motion.a
                    href="/contact"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,255,255,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative bg-white text-black px-12 py-5 rounded-full text-xl overflow-hidden inline-block"
                  >
                    <span className="relative z-10">お問い合わせ</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.a>
                </div>
              </section>

              <Footer />
            </HeaderContentFade>
          </main>
        </div>
      </SmoothScroll>
    </ErrorBoundary>
  );
}