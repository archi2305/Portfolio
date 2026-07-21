import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Portfolio Foundation",
    template: "%s | Portfolio Foundation",
  },
  description: "Professional portfolio built with Next.js, Tailwind CSS, shadcn/ui and Framer Motion.",
  openGraph: {
    title: "Portfolio Foundation",
    description: "Professional portfolio built with Next.js, Tailwind CSS, shadcn/ui and Framer Motion.",
    url: "https://example.com",
    siteName: "Portfolio Foundation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Foundation",
    description: "Professional portfolio built with Next.js, Tailwind CSS, shadcn/ui and Framer Motion.",
    creator: "@username",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
