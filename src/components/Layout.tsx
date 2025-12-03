import type { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-sectionBg py-10">
            <div className="mx-auto max-w-6xl rounded-4xl bg-white px-8 pb-16 pt-8 shadow-soft md:px-12">
                {children}
            </div>
        </div>
    );
}
