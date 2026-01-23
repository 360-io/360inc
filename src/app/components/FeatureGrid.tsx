import { motion } from "motion/react";
import { Sparkles, Target, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "革新的なデザイン",
    description: "美しさと機能性を兼ね備えた、次世代のデザイン哲学",
    gradient: "from-yellow-400 to-orange-500",
    delay: 0
  },
  {
    icon: Zap,
    title: "高速パフォーマンス",
    description: "最先端の技術により、圧倒的なスピードを実現",
    gradient: "from-blue-400 to-cyan-500",
    delay: 0.1
  },
  {
    icon: Target,
    title: "精密な品質",
    description: "細部まで妥協しない、徹底したクオリティコントロール",
    gradient: "from-pink-400 to-rose-500",
    delay: 0.2
  },
  {
    icon: Users,
    title: "ユーザー第一",
    description: "すべての人にとって直感的で使いやすい体験を提供",
    gradient: "from-purple-400 to-indigo-500",
    delay: 0.3
  }
];

export function FeatureGrid() {
  return (
    <section className="py-32 px-6 text-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            私たちの強み
          </h2>
          <p className="text-xl text-gray-500 font-light tracking-widest">OUR STRENGTHS</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              whileHover={{ y: -10 }}
              className="group relative h-[400px] flex flex-col justify-end p-8 rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5"
            >
              {/* Background Gradient Blob */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${feature.gradient} opacity-10 blur-[80px] group-hover:opacity-20 transition-opacity duration-500`} />

              {/* Icon */}
              <div className="absolute top-8 left-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shadow-lg`}>
                  <feature.icon size={32} strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-4 group-hover:border-white/30 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}