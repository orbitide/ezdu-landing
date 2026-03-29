'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight, MessageSquare, Clock } from 'lucide-react';

const contactInfo = [
    {
        icon: Mail,
        title: 'Email',
        value: 'support@ezdu.com',
        description: 'Reach out anytime for support or inquiries',
    },
    {
        icon: Phone,
        title: 'Phone',
        value: '+880 1234 567890',
        description: 'Call us during business hours',
    },
    {
        icon: MapPin,
        title: 'Location',
        value: 'Dhaka, Bangladesh',
        description: 'Visit us at our office',
    },
    {
        icon: Clock,
        title: 'Response Time',
        value: '24-48 Hours',
        description: 'We typically respond within a day',
    },
];

const faqs = [
    {
        question: 'How do I get started with EzDu?',
        answer: 'Simply download the EzDu app from the Play Store or App Store, create an account, and start practicing with AI-powered questions tailored to your curriculum.',
    },
    {
        question: 'Is EzDu free to use?',
        answer: 'EzDu offers both free and premium features. You can start with the free version and upgrade anytime for additional benefits.',
    },
    {
        question: 'How does the AI-powered question generation work?',
        answer: 'Our AI analyzes your curriculum and learning patterns to generate contextual, relevant questions that match your academic level and help you focus on weak areas.',
    },
    {
        question: 'Can I track my progress?',
        answer: 'Yes! EzDu provides detailed analytics and progress tracking so you can see improvements over time and identify areas that need more focus.',
    },
    {
        question: 'Which subjects and topics does EzDu cover?',
        answer: "We cover major subjects across different educational levels in Bangladesh, including Mathematics, Science, English, and more. We're constantly expanding our content.",
    },
    {
        question: 'Is my data safe on EzDu?',
        answer: 'Absolutely. We use industry-standard security measures to protect your personal information and learning data.',
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="min-h-screen surface-page overflow-hidden">
            <div
                className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
                aria-hidden
            >
                <div className="absolute top-1/2 left-1/2 h-[min(100vw,640px)] w-[min(100vw,640px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.04] blur-3xl" />
            </div>

            {/* Hero Section */}
            <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 z-10">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="badge-live inline-flex items-center gap-2.5 rounded-full border border-zinc-700 bg-zinc-900/60 px-4 py-2 mb-6"
                    >
                        <span className="live-dot" aria-hidden>
                            <span className="live-dot-inner" />
                        </span>
                        <span className="text-zinc-300 text-sm font-medium">Get in touch</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight"
                    >
                        Contact{' '}
                        <span className="text-emerald-400">us</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-zinc-400 max-w-2xl mx-auto"
                    >
                        Have questions or feedback? We&apos;d love to hear from you. Reach out to our team and we&apos;ll get back to you as soon as possible.
                    </motion.p>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-6 rounded-xl surface-raised surface-raised-hover text-center"
                                >
                                    <Icon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                                    <p className="text-emerald-400 font-medium mb-2">{info.value}</p>
                                    <p className="text-zinc-500 text-sm">{info.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-xl surface-raised"
                    >
                        <h2 className="text-3xl font-bold mb-8 text-white">
                            Send us a message
                        </h2>

                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 mx-auto mb-4 flex items-center justify-center">
                                    <Send className="w-8 h-8 text-emerald-400" />
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-2">Message Sent!</h3>
                                <p className="text-zinc-400">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-zinc-300 mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-100 placeholder-zinc-500 focus:border-emerald-600/50 focus:outline-none transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-zinc-300 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-100 placeholder-zinc-500 focus:border-emerald-600/50 focus:outline-none transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-300 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-100 placeholder-zinc-500 focus:border-emerald-600/50 focus:outline-none transition-colors"
                                        placeholder="What is this about?"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-300 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-100 placeholder-zinc-500 focus:border-emerald-600/50 focus:outline-none transition-colors resize-none"
                                        placeholder="Tell us what&apos;s on your mind..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-all border border-emerald-500/30 hover:border-emerald-500/60 hover:shadow-lg hover:shadow-emerald-500/20 group"
                                >
                                    Send Message
                                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faqs" className="relative py-16 px-4 sm:px-6 lg:px-8 z-10 scroll-mt-24">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-12 text-center text-white"
                    >
                        Frequently asked{' '}
                        <span className="text-emerald-400">questions</span>
                    </motion.h2>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="rounded-xl surface-raised surface-raised-hover overflow-hidden"
                            >
                                <button
                                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                    className="w-full p-6 flex items-start justify-between gap-4 text-left"
                                >
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-white flex items-center gap-3">
                                            <MessageSquare className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ArrowRight className="w-5 h-5 text-emerald-400" />
                                    </motion.div>
                                </button>

                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height: expandedFaq === index ? 'auto' : 0,
                                        opacity: expandedFaq === index ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 text-zinc-400 border-t border-zinc-800">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center p-12 rounded-xl surface-raised border-emerald-600/20"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">Still have questions?</h2>
                        <p className="text-lg text-zinc-400 mb-8">
                            Our support team is ready to help. Don&apos;t hesitate to reach out!
                        </p>
                        <a
                            href="mailto:support@ezdu.com"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-all border border-emerald-500/30 hover:border-emerald-500/60 hover:shadow-lg hover:shadow-emerald-500/20 group"
                        >
                            Email Support
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}