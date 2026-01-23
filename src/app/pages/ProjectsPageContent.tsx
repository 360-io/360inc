import { PageWrapper } from "../components/PageWrapper";
import { type Project } from "@/lib/microcms";
import { motion } from "motion/react";

interface ProjectsPageContentProps {
    projects: Project[];
}

export function ProjectsPageContent({ projects }: ProjectsPageContentProps) {
    return (
        <PageWrapper>
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-bold tracking-tighter mb-16 text-white"
                >
                    All Projects
                </motion.h1>

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
                                delay: index * 0.1,
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

                                <div className="absolute top-6 left-6 flex gap-2">
                                    {project.category?.map(cat => (
                                        <span key={cat} className="px-3 py-1 bg-black/30 backdrop-blur-md rounded-full text-xs font-medium border border-white/10 text-white">
                                            {cat}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <h2 className="text-2xl font-medium mb-2 text-white group-hover:text-blue-400 transition-colors">{project.title}</h2>
                            <p className="text-gray-400 line-clamp-2">{project.description}</p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </PageWrapper>
    );
}
