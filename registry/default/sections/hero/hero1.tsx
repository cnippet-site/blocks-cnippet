"use client";

import { useState } from "react";
import Image from "next/image";
import { RiInfinityLine, RiSparkling2Fill, RiStarFill } from "@remixicon/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export default function HeroSection() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Email submitted:", email);
    };

    return (
        <section className="min-h-screen bg-[#f5f3f0] px-4 py-20 md:px-8 lg:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col items-center justify-center gap-10 text-center">
                    <div className="space-y-5">
                        <h1 className="font-lite mx-auto max-w-2xl text-4xl font-normal text-gray-900 md:text-5xl lg:text-[5rem]">
                            Your mindset shapes{" "}
                            <span className="font-normal text-emerald-700 italic">
                                everything.
                            </span>
                        </h1>

                        <p className="font-kumb mx-auto max-w-2xl text-xl leading-relaxed text-gray-600">
                            A calm and steady mind is the foundation of every
                            meaningful change — start within, and watch life
                            shift around you.
                        </p>

                        <Button
                            type="submit"
                            className="h-12 rounded-full bg-emerald-700 px-6 text-lg text-white hover:bg-emerald-800"
                        >
                            Join us — today
                        </Button>
                    </div>

                    <div className="relative w-full">
                        <div className="relative">
                            <Image
                                src="https://res.cloudinary.com/dphulm0s9/image/upload/v1741613286/h6.jpg"
                                alt="Woman in meditation pose against blue sky"
                                width={1920}
                                height={1080}
                                className="h-[600px] w-full rounded-3xl object-cover"
                            />

                            <Card className="font-kumb absolute bottom-20 left-20 w-60 border-0 bg-white/50 shadow-lg backdrop-blur-sm">
                                <CardContent className="p-4">
                                    <div className="text-2xl font-medium text-gray-900">
                                        100+
                                    </div>
                                    <p className="mt-2 text-sm text-gray-700">
                                        Yoga classes and on-demand replay
                                        sessions cater to all levels.
                                    </p>
                                </CardContent>
                            </Card>

                            <RiSparkling2Fill className="absolute bottom-44 left-62 size-16 text-yellow-400" />
                            <RiStarFill className="absolute top-16 right-24 z-50 size-10 text-blue-500" />

                            <Card className="font-kumb absolute top-20 right-20 w-60 border-0 bg-white/80 shadow-lg backdrop-blur-sm">
                                <CardContent className="p-4">
                                    <div className="text-2xl font-bold text-gray-900">
                                        1.98*
                                    </div>
                                    <p className="text-sm text-gray-700">
                                        Take a breath. Start with a free
                                        class—no credit card, no pressure, just
                                        peace.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
