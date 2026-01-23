import React, { useRef } from "react";
import { motion } from "motion/react";
import { HeaderContentFade } from "./HeaderContentFade";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ThreeBackground } from "./ThreeBackground";
import { SmoothScroll } from "./SmoothScroll";

interface PageWrapperProps {
    children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
    return (
        <SmoothScroll>
            <div className="min-h-screen relative">
                <ThreeBackground className="fixed inset-0 -z-50" />
                <Header />

                <main className="relative z-10">
                    <HeaderContentFade>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="pt-32 pb-20 px-6"
                        >
                            {children}
                        </motion.div>
                    </HeaderContentFade>
                </main>

                <Footer />
            </div>
        </SmoothScroll>
    );
}
