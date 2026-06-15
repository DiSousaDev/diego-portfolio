import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Set your public site URL in an environment variable when deploying, e.g.
// NEXT_PUBLIC_SITE_URL=https://diego.dev.br
// Default to your real domain so Open Graph and metadata use correct URLs
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://diego.dev.br";

export const metadata: Metadata = {
    title: "Diego Sousa | Java Backend Engineer",
    description: "Especialista em Java, Spring Boot, AWS, Azure e microsserviços.",
    keywords: [
        "Diego",
        "Diego Sousa",
        "Diego dev",
        "Java",
        "Spring Boot",
        "AWS",
        "Azure",
        "Backend",
        "microsserviços"
    ],
    authors: [{ name: "Diego Sousa", url: SITE_URL }],
    openGraph: {
        title: "Diego Sousa | Java Backend Engineer",
        description: "Especialista em Java, Spring Boot, AWS, Azure e microsserviços.",
        url: SITE_URL,
        siteName: "Diego Sousa",
        images: [
            {
                url: `${SITE_URL}/logo-banco-pan-256.png`,
                alt: "Diego Sousa"
            }
        ],
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Diego Sousa | Java Backend Engineer",
        description: "Especialista em Java, Spring Boot, AWS, Azure e microsserviços."
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
        <body>
        {children}
        <Analytics/>
        <SpeedInsights/>
        </body>
        </html>
    );
}
