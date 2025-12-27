import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next"

export default function MainLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <>

            <Navbar/>
            <main className="min-h-screen">
                {children}
            </main>
            <Footer />

            <Analytics/>
        </>
    );
}