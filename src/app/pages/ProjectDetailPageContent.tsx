import { PageWrapper } from "../components/PageWrapper";
import { type Project, type ProjectBlock } from "@/lib/microcms";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface ProjectDetailPageContentProps {
    project: Project;
}

// Block Components
const FullWidthImageBlock = ({ data }: { data: Extract<ProjectBlock, { fieldId: "FullWidthImage" }> }) => (
    <div className="w-full my-16 md:my-24">
        <ImageWithFallback
            src={data.src.url}
            alt={data.alt}
            className="w-full h-auto rounded-[2rem] border border-white/10"
        />
        {data.caption && (
            <p className="text-center text-gray-400 mt-4 text-sm md:text-base">{data.caption}</p>
        )}
    </div>
);

const SectionHeadingBlock = ({ data }: { data: Extract<ProjectBlock, { fieldId: "SectionHeading" }> }) => (
    <div className={`my-16 md:my-24 text-${data.alignment} max-w-4xl mx-auto px-6`}>
        {data.subtitle && (
            <span className="block text-blue-400 font-medium tracking-wider mb-4 uppercase text-sm">
                {data.subtitle}
            </span>
        )}
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{data.title}</h2>
    </div>
);

const ImageAndTextBlock = ({ data }: { data: Extract<ProjectBlock, { fieldId: "ImageAndText" }> }) => (
    <div className={`my-16 md:my-24 flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto px-6 ${data.direction === "image_right" ? "md:flex-row-reverse" : ""}`}>
        <div className="w-full md:w-1/2">
            <ImageWithFallback
                src={data.image.url}
                alt={data.title}
                className="w-full aspect-[4/3] object-cover rounded-2xl border border-white/10 shadow-2xl"
            />
        </div>
        <div className="w-full md:w-1/2 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">{data.title}</h3>
            <div
                className="prose prose-invert prose-lg text-gray-300"
                dangerouslySetInnerHTML={{ __html: data.description }}
            />
        </div>
    </div>
);

const FeatureGridBlock = ({ data }: { data: Extract<ProjectBlock, { fieldId: "FeatureGrid" }> }) => (
    <div className="my-16 md:my-24 max-w-7xl mx-auto px-6">
        {data.title && (
            <h3 className="text-2xl md:text-4xl font-bold text-white text-center mb-16">{data.title}</h3>
        )}
        <div className="grid md:grid-cols-3 gap-8">
            {data.items.map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                        <img src={item.icon.url} alt="" className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{item.text}</p>
                </div>
            ))}
        </div>
    </div>
);

const TechStackBlock = ({ data }: { data: Extract<ProjectBlock, { fieldId: "TechStack" }> }) => (
    <div className="my-16 md:my-24 max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-12 border-b border-white/10 pb-4 inline-block px-12">Technologies Used</h3>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {data.technologies.map((tech) => (
                <div key={tech.id} className="flex flex-col items-center gap-3 group">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-colors">
                        {tech.icon ? (
                            <img src={tech.icon.url} alt={tech.name} className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity" />
                        ) : (
                            <span className="text-xs text-gray-500">No Icon</span>
                        )}
                    </div>
                    <span className="text-sm text-gray-400 font-medium">{tech.name}</span>
                </div>
            ))}
        </div>
    </div>
);

const RichContentBlock = ({ data }: { data: Extract<ProjectBlock, { fieldId: "RichContent" }> }) => (
    <div className="my-16 md:my-24 max-w-4xl mx-auto px-6">
        <div
            className="prose prose-xl prose-invert max-w-none glass-panel p-8 md:p-12 rounded-[2rem] bg-black/20 backdrop-blur-sm border border-white/5"
            dangerouslySetInnerHTML={{ __html: data.body }}
        />
    </div>
);

export function ProjectDetailPageContent({ project }: ProjectDetailPageContentProps) {
    return (
        <PageWrapper>
            <article>
                {/* Hero Header */}
                <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 text-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        {/* Blurred background image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-30 blur-3xl scale-125"
                            style={{ backgroundImage: `url(${project.thumbnail.url})` }}
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>

                    <div className="relative z-10 max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex flex-wrap justify-center gap-3 mb-8">
                                {project.category?.map(cat => (
                                    <span key={cat} className="px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20 text-white">
                                        {cat}
                                    </span>
                                ))}
                            </div>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 md:mb-12">
                                {project.title}
                            </h1>
                        </motion.div>

                        {/* Metadata Grid */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/20 pt-12 text-left md:text-center"
                        >
                            <div>
                                <span className="block text-gray-500 text-sm mb-2 uppercase tracking-wider">Client</span>
                                <span className="text-white font-medium text-lg">{project.client || "Confidential"}</span>
                            </div>
                            <div>
                                <span className="block text-gray-500 text-sm mb-2 uppercase tracking-wider">Role</span>
                                <span className="text-white font-medium text-lg">{project.role || "Development"}</span>
                            </div>
                            <div>
                                <span className="block text-gray-500 text-sm mb-2 uppercase tracking-wider">Period</span>
                                <span className="text-white font-medium text-lg">{project.period || "Ongoing"}</span>
                            </div>
                            <div>
                                <span className="block text-gray-500 text-sm mb-2 uppercase tracking-wider">Link</span>
                                {project.url ? (
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-medium text-lg hover:underline decoration-blue-400/30 underline-offset-4">Visit Site ↗</a>
                                ) : (
                                    <span className="text-gray-600 font-medium text-lg">-</span>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </header>

                {/* Dynamic Content Blocks */}
                <div className="relative z-10 pb-32">
                    {/* Render blocks based on fieldId */}
                    {project.bodyContent && project.bodyContent.map((block, index) => {
                        switch (block.fieldId) {
                            case "FullWidthImage":
                                return <FullWidthImageBlock key={index} data={block} />;
                            case "SectionHeading":
                                return <SectionHeadingBlock key={index} data={block} />;
                            case "ImageAndText":
                                return <ImageAndTextBlock key={index} data={block} />;
                            case "FeatureGrid":
                                return <FeatureGridBlock key={index} data={block} />;
                            case "TechStack":
                                return <TechStackBlock key={index} data={block} />;
                            case "RichContent":
                                return <RichContentBlock key={index} data={block} />;
                            default:
                                return null;
                        }
                    })}

                    {/* Fallback for legacy content string if bodyContent is missing (backward compatibility) */}
                    {/* @ts-ignore */}
                    {!project.bodyContent && project.content && (
                        <div className="my-16 md:my-24 max-w-4xl mx-auto px-6">
                            <div
                                className="prose prose-xl prose-invert max-w-none glass-panel p-8 md:p-12 rounded-[2rem] bg-black/20 backdrop-blur-sm border border-white/5"
                                dangerouslySetInnerHTML={{ __html: project.content }}
                            />
                        </div>
                    )}
                </div>

                <div className="border-t border-white/10 py-20 text-center relative z-10 bg-black">
                    <a href="/projects" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform">
                        <span>← Back to Projects</span>
                    </a>
                </div>
            </article>
        </PageWrapper>
    );
}
