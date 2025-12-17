'use client';


import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { Tabs } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Pricing = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, {once: true});
    const [activeTab, setActiveTab] = useState('Monthly');

    const plans = {
        free: {
            name: 'Free',
            price: '৳0',
            description: 'Perfect for getting started',
            features: [
                '100 questions per day',
                'Basic explanations',
                'Daily tests',
                'Community support',
                'Basic progress tracking'
            ],
            popular: false,
            period: activeTab === 'Monthly' ? '/month' : '/year',
        },
        premium: {
            name: 'Premium',
            price: activeTab === 'Monthly' ? '৳9.99' : '৳79.99',
            period: activeTab === 'Monthly' ? '/month' : '/year',
            description: 'Unlock your full potential',
            features: [
                'Unlimited questions',
                'AI-powered explanations',
                'All test types',
                'Priority support',
                'Advanced analytics',
                'Offline mode',
                'Ad-free experience',
                'Early access to new features'
            ],
            popular: true
        }
    };

    return (
        <section id="pricing" className="py-20">
            <div className="container mx-auto px-4" ref={ref}>
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Simple, Transparent
                        <span
                            className="block leading-[1.4]  bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Pricing
            </span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Choose the plan that works best for you
                    </p>

                    <div className="flex justify-center mb-12">
                        <Tabs tabs={['Monthly', 'Yearly']} activeTab={activeTab} setActiveTab={setActiveTab}/>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {Object.entries(plans).map(([key, plan], index) => (
                        <motion.div
                            key={key}
                            initial={{opacity: 0, y: 30}}
                            animate={isInView ? {opacity: 1, y: 0} : {}}
                            transition={{delay: index * 0.2}}
                        >
                            <Card
                                className={`h-full ${plan.popular ? 'border-emerald-500 shadow-lg shadow-emerald-500/20' : ''} relative`}>
                                {plan.popular && (
                                    <div
                                        className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                        Most Popular
                                    </div>
                                )}

                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                    <p className="text-gray-400 mb-4">{plan.description}</p>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-5xl font-bold text-white">{plan.price}</span>
                                        {plan.period && <span className="text-gray-400">{plan.period}</span>}
                                    </div>
                                    {activeTab === 'Yearly' && plan.period && (
                                        <p className="text-emerald-400 text-sm mt-2">Save 33%</p>
                                    )}
                                </div>

                                <div className="space-y-3 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <Check className="text-emerald-400 flex-shrink-0 mt-1" size={20}/>
                                            <span className="text-gray-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button variant={plan.popular ? 'default' : 'outline'}
                                        className="w-full justify-center">
                                    {plan.popular ? 'Get Premium' : 'Start Free'}
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};