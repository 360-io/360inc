import { PageWrapper } from "../components/PageWrapper";
import { type Blog } from "@/lib/microcms";
import { motion } from "motion/react";

interface BlogDetailPageContentProps {
    blog: Blog;
}

export function BlogDetailPageContent({ blog }: BlogDetailPageContentProps) {
    return (
        <PageWrapper>
            <article className="max-w-4xl mx-auto">
                <header className="mb-12 text-center pt-20">
                    <div className="flex flex-col items-center gap-6 mb-8">
                        {/* Categories & Tags */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {blog.category.map((cat) => (
                                <span key={cat} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-500/20">
                                    {cat}
                                </span>
                            ))}
                            {blog.tags?.map((tag) => (
                                <span key={tag.id} className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-xs font-medium border border-white/10">
                                    #{tag.name}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-tight max-w-3xl">
                            {blog.title}
                        </h1>

                        <div className="inline-flex items-center gap-4 text-gray-400 glass-panel px-6 py-2 rounded-full border border-white/10 bg-black/20 text-sm">
                            <time dateTime={blog.publishedAt}>{new Date(blog.publishedAt).toLocaleDateString()}</time>
                            <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                            <span>{blog.author}</span>
                        </div>
                    </div>
                </header>

                <div className="aspect-[2/1] w-full rounded-[2rem] overflow-hidden mb-16 border border-white/10 shadow-2xl relative">
                    <img
                        src={blog.thumbnail.url}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-12">
                    {/* Main Content */}
                    <div className="prose prose-lg md:prose-xl prose-invert max-w-none glass-panel p-8 md:p-12 rounded-[2rem] bg-white/5 backdrop-blur-lg border border-white/10">
                        {/* Tech Blog Custom CSS for Code Blocks would go here or globally. 
                             For now, we rely on standard prose-pre styles. */}
                        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                    </div>

                    {/* Sidebar / TOC (Desktop Only) */}
                    {blog.toc_visible !== false && (
                        <aside className="hidden lg:block relative">
                            <div className="sticky top-32">
                                <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider text-gray-500">Table of Contents</h4>
                                {/* In a real app, we would parse headers from blog.content. 
                                    For now, we show a placeholder or we would need a TOC parser library. 
                                    Since we can't install libraries easily, I'll leave this structure ready for a parser. */}
                                <nav className="text-sm text-gray-400 border-l border-white/10 pl-4 space-y-2">
                                    <p className="italic text-xs opacity-50">Content navigation...</p>
                                </nav>
                            </div>
                        </aside>
                    )}
                </div>

                <div className="mt-20 border-t border-white/10 pt-10 text-center">
                    <a href="/blog" className="inline-flex items-center gap-2 text-white hover:text-blue-400 text-lg transition-colors px-8 py-4 rounded-full border border-white/10 hover:bg-white/5">
                        ← Back to Blog
                    </a>
                </div>
            </article>
        </PageWrapper>
    );
}
