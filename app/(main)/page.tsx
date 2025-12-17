import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { EdtechModules } from "@/components/modules";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonals";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-neutral-950 to-black text-gray-100">


            <Hero/>
            <Features />
            <EdtechModules />
            <Pricing />
            <Testimonials />
            {/*<Blog />*/}
            {/*<Contact />*/}

        </div>
    );
}
