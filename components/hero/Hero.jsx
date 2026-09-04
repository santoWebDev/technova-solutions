import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden border-b border-black/10">
            <div className="container grid min-h-[calc(100vh-80px)] items-center gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr]">

                <div>
                    <div className="mb-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                        <span className="h-2 w-2 rounded-full bg-blue-600" />
                        Digital systems studio
                    </div>

                    <h1 className="max-w-5xl text-6xl font-black leading-[0.95] tracking-[-0.06em] md:text-8xl">
                        Digital
                        <br />
                        systems,
                        <br />
                        <span className="text-blue-600">built to move.</span>
                    </h1>

                    <p className="mt-8 max-w-xl text-lg leading-8 text-gray-500 md:text-xl">
                        TechNova Solutions helps ambitious businesses turn complex
                        challenges into simple, scalable digital experiences.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-3 rounded-full bg-[#0b1220] px-7 py-4 font-semibold text-white transition hover:bg-blue-600"
                        >
                            <span>Get Started</span>

                            <ArrowRight
                                size={24}
                                strokeWidth={2}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </a>

                        <a
                            href="#services"
                            className="inline-flex items-center rounded-full border border-black/15 px-7 py-4 font-semibold transition hover:border-black"
                        >
                            Explore capabilities
                        </a>
                    </div>
                </div>

                <div className="relative">
                    <div className="relative aspect-square rounded-[2rem] bg-[#0b1220] p-6 text-white shadow-2xl">

                        <div className="flex items-center justify-between border-b border-white/10 pb-5">
                            <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                                Capability map
                            </span>

                            <span className="flex items-center gap-2 text-xs text-green-400">
                                <span className="h-2 w-2 rounded-full bg-green-400" />
                                Systems online
                            </span>
                        </div>

                        <div className="relative flex h-[80%] items-center justify-center">
                            <div className="absolute h-40 w-40 rounded-full border border-blue-500/40" />
                            <div className="absolute h-64 w-64 rounded-full border border-white/10" />
                            <div className="absolute h-80 w-80 rounded-full border border-white/5" />

                            <div className="z-10 flex h-28 w-28 items-center justify-center rounded-full bg-blue-600 text-center text-sm font-bold">
                                TECH
                                <br />
                                NOVA
                            </div>

                            <div className="absolute left-4 top-12 text-xs text-white/60">
                                WEB
                            </div>

                            <div className="absolute right-4 top-24 text-xs text-white/60">
                                CLOUD
                            </div>

                            <div className="absolute bottom-20 left-10 text-xs text-white/60">
                                AI
                            </div>

                            <div className="absolute bottom-10 right-10 text-xs text-white/60">
                                MOBILE
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}