import React from "react";
import Link from "next/link";

import { RiArrowRightLine } from "@remixicon/react";

const Feedback = () => {
    return (
        <section className="relative w-full dark:bg-black">
            <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
                <div className="relative w-full">
                    <div className="absolute -bottom-2.5 -left-2.5 z-40 mx-auto grid size-5 grid-cols-2 grid-rows-2 divide-x divide-y divide-neutral-500">
                        <div className=" " />
                        <div className="border-r-0" />
                        <div className="border-b-0" />
                        <div className=" " />
                    </div>
                    <div className="grid h-full w-full grid-cols-12 divide-x divide-y border border-t-0 dark:divide-neutral-900 dark:border-neutral-900">
                        <div className="col-span-12 border-r-0 bg-white px-10 py-8 text-center md:py-16 dark:bg-black">
                            <p className="text-3xl font-medium">
                                &quot;Cnippet&apos;s production components
                                reduced our development time by 40% and improved
                                our application performance by 35%. The best
                                React component library for modern web
                                applications.&quot;
                            </p>
                            <div className="mt-5 flex items-center justify-center gap-2">
                                <p className="text-gray-500">
                                    Sarah Lin, Frontend Engineering Lead at
                                    TechFlow Analytics
                                </p>
                                <Link
                                    href="/"
                                    className="group relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-neutral-900"
                                >
                                    <div className="absolute inset-0 w-full -translate-x-[100%] bg-black transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-white" />
                                    <RiArrowRightLine className="relative z-10 text-lg text-slate-950 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-12 border-b bg-white px-10 py-8 text-left md:col-span-6 md:border-b-0 md:py-16 dark:bg-black">
                            <p className="text-2xl font-medium">
                                &quot;Implementing Cnippet&apos;s accessible
                                components helped us achieve WCAG 2.1 Level AA
                                compliance in just 2 weeks, significantly
                                improving our user experience for all
                                customers.&quot;
                            </p>
                            <div className="mt-5 flex items-center justify-start gap-2">
                                <p className="text-gray-500">
                                    Michael Chen, Senior Developer at HealthTech
                                    Solutions
                                </p>
                                <Link
                                    href="/"
                                    className="group relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-neutral-900"
                                >
                                    <div className="absolute inset-0 w-full -translate-x-[100%] bg-black transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-white" />
                                    <RiArrowRightLine className="relative z-10 text-lg text-slate-950 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-12 border-b-0 bg-white px-10 py-8 text-left md:col-span-6 md:py-16 dark:bg-black">
                            <p className="text-xl font-medium">
                                &quot;From our startup MVP to our current
                                platform serving 1M+ users, Cnippet&apos;s
                                scalable components have been crucial to our
                                growth. The performance optimization is
                                outstanding.&quot;
                            </p>
                            <div className="mt-5 flex items-center justify-start gap-2">
                                <p className="text-gray-500">
                                    Emma Johnson, CTO at CloudForge Technologies
                                </p>
                                <Link
                                    href="/"
                                    className="group relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-neutral-900"
                                >
                                    <div className="absolute inset-0 w-full -translate-x-[100%] bg-black transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-white" />
                                    <RiArrowRightLine className="relative z-10 text-lg text-slate-950 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;
