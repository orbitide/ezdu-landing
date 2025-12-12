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
    title: 'Ezdu - Online Learning Platform',

    description: 'The best platform for online courses, tutorials, and practice exams.',

    // 3. ICONS
    // icons: {
    //     icon: '/favicon.ico',
    // },

    // 4. OPEN GRAPH (For social sharing - Facebook, Twitter, etc.)
    openGraph: {
        title: 'Ezdu - Online Learning Platform',
        description: 'The best platform for online courses, tutorials, and practice exams.',
        url: 'https://ezdu.net',
        siteName: 'Ezdu',
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
