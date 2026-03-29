import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { EdtechModules } from "@/components/modules";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
    return (
        <div className="min-h-screen surface-page">


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
