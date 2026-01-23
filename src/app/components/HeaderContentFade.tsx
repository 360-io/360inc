import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface HeaderContentFadeProps {
    children: React.ReactNode;
    className?: string;
}

export function HeaderContentFade({ children, className = "" }: HeaderContentFadeProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateMask = () => {
            if (containerRef.current) {
                const scrollY = window.scrollY;
                // Move the mask down by the scroll amount to keep it "fixed" relative to the viewport
                // The gradient has a transparent top (0-88px) and black body.
                // We shift it so the transparent part stays at the top of the screen.
                const position = `0px ${scrollY}px`;
                containerRef.current.style.maskPosition = position;
                containerRef.current.style.webkitMaskPosition = position;
            }
        };

        // Update on every GSAP tick for smoothness
        gsap.ticker.add(updateMask);

        return () => {
            gsap.ticker.remove(updateMask);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={`relative z-10 ${className}`}
            style={{
                // Define the mask:
                // 0-88px: Transparent (under header)
                // 128px+: Black (visible)
                // We use a very large height (50000px) to ensure the "black" part covers long pages.
                maskImage: "linear-gradient(to bottom, transparent 0px, transparent 88px, black 128px, black 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0px, transparent 88px, black 128px, black 100%)",
                maskSize: "100% 50000px",
                WebkitMaskSize: "100% 50000px",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
            }}
        >
            {children}
        </div>
    );
}
