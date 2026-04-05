import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://ezdu.net";
    const now = new Date();

    // helper
    const url = (
        path: string,
        priority: number,
        changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
    ) => ({
        url: `${baseUrl}${path}`,
        lastModified: now,
        changeFrequency,
        priority,
    });

    return [
        // ── Core ──────────────────────────────────────────
        url("/",               1.0, "weekly"),

        // ── Exam pages — highest value pages ─────────────
        url("/ssc",            0.9, "weekly"),
        url("/hsc",            0.9, "weekly"),
        url("/bcs",            0.9, "weekly"),
        url("/ielts",          0.9, "weekly"),
        url("/vocabulary",     0.85, "weekly"),

        // ── Supporting ────────────────────────────────────
        url("/blog",           0.6, "weekly"),
        url("/faq",            0.55, "monthly"),
        url("/about",          0.5, "yearly"),
        url("/career",         0.5, "monthly"),
        url("/contact",        0.4, "monthly"),

        // ── Legal — low priority ──────────────────────────
        url("/privacy-policy", 0.3, "yearly"),
        url("/terms",          0.3, "yearly"),
        url("/cookies",        0.3, "yearly"),
    ];
}