import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { KonamiListener } from "@/components/KonamiListener";
import { AIAssistantWidget } from "@/components/AIAssistantWidget";
import { RecruiterWidget } from "@/components/RecruiterWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tejesh | AI Engineer & Data Scientist",
  description: "I build intelligent AI systems, machine learning solutions, and scalable applications that solve real-world problems.",
  keywords: ["AI Engineer", "Data Scientist", "Machine Learning", "Python", "Next.js", "Portfolio"],
  authors: [{ name: "Tejesh" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tejesh.ai",
    title: "Tejesh | AI Engineer & Data Scientist",
    description: "I build intelligent AI systems, machine learning solutions, and scalable applications that solve real-world problems.",
    siteName: "Tejesh Portfolio",
    images: [{ url: "/Tejesh_photo.jpg", width: 800, height: 600, alt: "Tejesh - AI Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejesh | AI Engineer & Data Scientist",
    description: "I build intelligent AI systems, machine learning solutions, and scalable applications that solve real-world problems.",
    images: ["/Tejesh_photo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased overflow-x-hidden`}>
        <Navbar />
        <KonamiListener />
        {children}
        <AIAssistantWidget />
        <RecruiterWidget />
      </body>
    </html>
  );
}
