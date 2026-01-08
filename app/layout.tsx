import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: 'Online Learning Platform',

    description: 'The best platform for learn and practice.',
    keywords: [
        'practice exams',
        'study materials',
        "SSC exam preparation",
        "HSC model test",
        "Class 6 MCQ practice",
        "Class 7 exam",
        "Class 8 questions",
        "BCS preparation",
        "Bank job preparation",
        "Govt job preparation",
        "SSC HSC previous questions",
        "IELTS Preparation",
        "IELTS Mock Test"
    ],
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        title: 'Pocket Learning Companion',
        description: 'The best platform for learn and practice.',
        url: 'https://ezdu.net',
        siteName: 'ezdu',
        images: [
            {
                url: 'https://ezdu.net/logo.png',
                width: 1200,
                height: 630,
                alt: 'Learning Platform',
            },
        ],
        type: 'website',
    },
    twitter:{
        card: 'summary_large_image',
        title: 'Pocket Learning Companion',
        description: 'The best platform for learn and practice.',
        images: ['https://ezdu.net/logo.png'],
    },
    metadataBase: new URL('https://ezdu.net'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
