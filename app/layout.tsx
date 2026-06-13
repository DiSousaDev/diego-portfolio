import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
    title: "Diego Sousa | Java Backend Engineer",
    description:
        "Especialista em Java, Spring Boot, AWS, Azure e microsserviços.",

    keywords: [
        "Java",
        "Spring Boot",
        "AWS",
        "Azure",
        "Backend",
        "microsserviços"
    ]
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
        <Analytics />
      </body>
      </html>
  );
}
