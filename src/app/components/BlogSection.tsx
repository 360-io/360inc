import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { getBlogs, type Blog } from "@/lib/microcms";

export function BlogSection() {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        const loadData = async () => {
            // Fetch top 3 blogs
            const response = await getBlogs({ limit: 3 });
            setBlogs(response.contents);
        };
        loadData();
    }, []);

    return (
        <section className="py-32 px-6 text-white relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-between items-end mb-16"
                >
                    <div>
                        <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Blog</h2>
                        <p className="text-gray-400 text-xl">Thoughts on design, technology, and culture</p>
                    </div>
                    <a href="/blog" className="hidden md:inline-flex items-center gap-2 text-lg hover:text-gray-300 transition-colors">
                        Read Blog <span>→</span>
                    </a>
                </motion.div>

                <div className="space-y-8">
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
                            className="group block relative"
                        >
                            <div className="md:flex gap-8 p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/15 hover:bg-white/10 hover:border-white/30 transition-all duration-300">
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
                                    <h3 className="text-2xl md:text-3xl font-medium mb-4 group-hover:text-blue-400 transition-colors">{blog.title}</h3>
                                    <p className="text-gray-400 line-clamp-2 md:line-clamp-3 leading-relaxed">{blog.excerpt}</p>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="/blog" className="inline-flex items-center gap-2 text-lg hover:text-gray-300 transition-colors">
                        Read Blog <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
