import { PageWrapper } from "../components/PageWrapper";
import { type Blog } from "@/lib/microcms";
import { motion } from "motion/react";

interface BlogPageContentProps {
    blogs: Blog[];
}

export function BlogPageContent({ blogs }: BlogPageContentProps) {
    return (
        <PageWrapper>
            <div className="max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-bold tracking-tighter mb-16 text-white"
                >
                    Blog
                </motion.h1>

                <div className="space-y-12">
                    {blogs.map((blog, index) => (
                        <motion.a
                            key={blog.id}
                            href={`/blog/${blog.id}`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            animate={{ y: [0, -12, 0] }}
                            // @ts-ignore
                            transition={{
                                duration: 0.8,
                                delay: index * 0.1,
                                y: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.2
                                }
                            }}
                            className="group block"
                        >
                            <article className="md:flex gap-8 p-6 rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/15 hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                                <div className="md:w-1/3 aspect-video md:aspect-auto rounded-2xl overflow-hidden mb-6 md:mb-0">
                                    <img
                                        src={blog.thumbnail.url}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="md:w-2/3 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                        <time dateTime={blog.publishedAt}>{new Date(blog.publishedAt).toLocaleDateString()}</time>
                                        <span>by {blog.author}</span>
                                    </div>
                                    <h2 className="text-3xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{blog.title}</h2>
                                    <p className="text-gray-400 text-lg leading-relaxed line-clamp-3">{blog.excerpt}</p>
                                </div>
                            </article>
                        </motion.a>
                    ))}
                </div>
            </div>
        </PageWrapper>
    );
}
