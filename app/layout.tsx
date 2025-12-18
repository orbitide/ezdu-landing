import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

    description: 'The best platform for online courses, tutorials, and practice.',
    keywords: [
        'online learning',
        'courses',
        'tutorials',
        'practice exams',
        'education',
        'e-learning',
        'study materials',
    ],
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        title: 'Online Learning Platform',
        description: 'The best platform for online courses, tutorials, and practice exams.',
        url: 'https://ezdu.net',
        siteName: 'ezdu',
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
