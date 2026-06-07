import "./globals.css";

export const metadata = {
    title: "Diego Sousa | Java Backend Engineer",
    description:
        "Especialista em Java, Spring Boot, AWS, Azure e Microsserviços.",

    keywords: [
        "Java",
        "Spring Boot",
        "AWS",
        "Azure",
        "Backend",
        "Microsserviços"
    ]
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="pt-BR">
      <body>{children}</body>
      </html>
  );
}