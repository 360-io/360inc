import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { getProjects, type Project } from "@/lib/microcms";

export function ProjectSection() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const loadData = async () => {
            // Fetch top 3 projects
            const response = await getProjects({ limit: 3 });
            setProjects(response.contents);
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
                        <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Project</h2>
                        <p className="text-gray-400 text-xl">Creating digital impact across industries</p>
                    </div>
                    <a href="/projects" className="hidden md:inline-flex items-center gap-2 text-lg hover:text-gray-300 transition-colors">
                        View All Projects <span>→</span>
                    </a>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.a
                            key={project.id}
                            href={`/projects/${project.id}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            animate={{ y: [0, -12, 0] }}
                            // @ts-ignore
                            transition={{
                                duration: 0.8,
                                delay: index * 0.2,
                                y: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.2
                                }
                            }}
                            whileHover={{ scale: 1.02, y: -15 }}
                            className="group block"
                        >
                            <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 bg-white/5 backdrop-blur-md border border-white/15 transition-all duration-300">
                                <img
                                    src={project.thumbnail.url}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

                                {/* Float tag */}
                                <div className="absolute top-6 left-6 flex gap-2">
                                    {project.category?.map(cat => (
                                        <span key={cat} className="px-3 py-1 bg-black/30 backdrop-blur-md rounded-full text-xs font-medium border border-white/10">
                                            {cat}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <h3 className="text-2xl font-medium mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                            <p className="text-gray-400 line-clamp-2">{project.description}</p>
                        </motion.a>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="/projects" className="inline-flex items-center gap-2 text-lg hover:text-gray-300 transition-colors">
                        View All Projects <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
