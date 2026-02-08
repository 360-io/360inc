import { ArrowLeft } from "lucide-react";

interface BackLinkButtonProps {
    href: string;
    label?: string;
}

export function BackLinkButton({ href, label = "BACK" }: BackLinkButtonProps) {
    return (
        <a
            href={href}
            className="fixed bottom-8 left-8 z-50 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all group shadow-lg"
        >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold tracking-wider text-sm">{label}</span>
            <div className="absolute inset-0 bg-white/5 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
    );
}
