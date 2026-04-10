import Header from "@/components/reusable/Header";
import Link from "next/link";

export default function LandingPage() {
    return (
        <div className="bg-background text-on-surface font-body selection:bg-primary/30 min-h-screen">

            <Header />
            <main className="pt-32 md:pt-20">
                {/* Hero Section */}
                <section className="relative min-h-[750px] flex flex-col items-center justify-center px-6 overflow-hidden">
                    {/* Decorative Glows */}
                    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-1/4 -right-20 w-120 h-120 bg-tertiary/10 rounded-full blur-[160px]"></div>
                    <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-primary/20 text-primary-fixed text-sm font-medium">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                V1.0 Now on Beta Testing
                            </div>
                            <h1 className="text-6xl md:text-7xl font-extrabold font-headline leading-[1.1] tracking-tight text-on-surface">
                                Naija API <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-tertiary">Hub.</span>
                            </h1>
                            <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
                                The definitive gateway to Nigeria's digital infrastructure. Connect to payment rails, identity verification, logistics and more via a single, unified mesh.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className="px-8 py-4 bg-primary text-on-primary font-bold rounded-DEFAULT hover:scale-105 transition-transform ethereal-glow rounded-lg">
                                    Start Building Now
                                </button>
                                <button className="px-8 py-4 glass-panel text-primary font-bold rounded-DEFAULT hover:bg-white/10 transition-all rounded-lg hover:scale-105 hover:ethereal-glow">
                                    View Documentation
                                </button>
                            </div>
                        </div>
                        {/* Floating Code Card */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <div className="glass-panel rounded-lg p-1 relative border border-white/10 overflow-hidden">
                                <div className="bg-surface-container-lowest/80 p-6 rounded-lg font-mono text-sm space-y-4">
                                    <div className="flex gap-2 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-zinc-500">01</span>
                                        <span className="text-primary-fixed">const</span> <span className="text-tertiary-fixed">hub</span> = <span className="text-primary-fixed">require</span>(<span className="text-on-secondary-container">'@naija/hub-sdk'</span>);
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-zinc-500">02</span>
                                        <span className="text-zinc-400">// Initialize secure connection</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-zinc-500">03</span>
                                        <span className="text-primary-fixed">await</span> <span className="text-tertiary-fixed">hub</span>.<span className="text-secondary">connect</span>(&#123;
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-zinc-500">04</span>
                                        <span className="ml-4 text-on-surface-variant">apiKey: process.env.HUB_KEY,</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-zinc-500">05</span>
                                        <span className="ml-4 text-on-surface-variant">region: <span className="text-on-secondary-container">'ng-lagos-1'</span></span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-zinc-500">06</span>
                                        &#125;);
                                    </div>
                                </div>
                            </div>
                            {/* Stats Floating Card */}
                            <div className="absolute -bottom-10 -right-4 md:-right-10 glass-panel p-6 rounded-lg ethereal-glow border border-white/10">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-primary/20 rounded-full">
                                        <span className="material-symbols-outlined text-primary" data-icon="bolt">bolt</span>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold font-headline text-white">45ms</div>
                                        <div className="text-xs text-on-surface-variant uppercase tracking-widest">Average Latency</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Features Bento Grid */}
                <section className="py-32 px-8 max-w-7xl mx-auto">
                    <div className="mb-20 text-center space-y-4">
                        <h2 className="text-4xl font-bold font-headline">Engineered for Reliability</h2>
                        <p className="text-on-surface-variant max-w-2xl mx-auto">Built on a polymorphic cloud infrastructure that scales with Nigeria's growing digital economy.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Large Feature */}
                        <div className="md:col-span-2 glass-panel rounded-lg p-8 h-[400px] flex flex-col justify-between group overflow-hidden relative">
                            <div className="relative z-10 space-y-4">
                                <span className="material-symbols-outlined text-primary text-4xl" data-icon="shield_lock">shield_lock</span>
                                <h3 className="text-3xl font-bold font-headline">Enterprise Security</h3>
                                <p className="text-on-surface-variant max-w-md">Military-grade encryption for every data packet. We ensure that sensitive financial and identity data never touches public internet unencrypted.</p>
                            </div>
                            <div className="absolute bottom-0 right-0 w-2/3 h-2/3 opacity-20 group-hover:opacity-40 transition-opacity">
                                <img alt="Circuit pattern" className="w-full h-full object-cover" data-alt="Close up of a high-tech glowing computer circuit board with neon purple and blue energy flows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABoQyC45vF7KW77mjivyYyfOSOs_ISfvOBPJ2rDOUYXt9Dv6YD68ZpZG54KUvlqeBqp5Tpxy74drBQ19dK84yvhHpCQG2H9rIaPzZjpHfrDciUhwup2DJwixfwy4hGB_rKDfHA4Ai-hhs2SL7R1m6Tg8o3GEi1lGHwAoe1UymN8gK5kS6CKB0Spj_bRUhYfaHNAV5JsMdRP-VkDPje_r9FydvsUnEVyS7RBIB3-WEX89llprsjjIVGofOEHGWl1D91sc5tEQmbe1l5" />
                            </div>
                        </div>
                        {/* Small Feature 1 */}
                        <div className="surface-container-high rounded-lg p-8 space-y-6 flex flex-col justify-center">
                            <span className="material-symbols-outlined text-tertiary text-4xl" data-icon="hub">hub</span>
                            <h3 className="text-xl font-bold font-headline">99.99% Uptime</h3>
                            <p className="text-on-surface-variant text-sm">Triple-redundant clusters across three geographical zones in Nigeria for zero downtime.</p>
                        </div>
                        {/* Small Feature 2 */}
                        <div className="surface-container-high rounded-lg p-8 space-y-6 flex flex-col justify-center">
                            <span className="material-symbols-outlined text-secondary text-4xl" data-icon="analytics">analytics</span>
                            <h3 className="text-xl font-bold font-headline">Real-time Insights</h3>
                            <p className="text-on-surface-variant text-sm">Monitor your API traffic with granular detail using our built-in analytics dashboard.</p>
                        </div>
                        {/* Medium Feature */}
                        <div className="md:col-span-2 glass-panel rounded-lg p-8 h-[300px] flex items-center gap-12 overflow-hidden">
                            <div className="w-1/2 space-y-4">
                                <h3 className="text-3xl font-bold font-headline">Developer First</h3>
                                <p className="text-on-surface-variant">SDKs available in Node.js, Python, PHP, and Go. Get up and running in under 5 minutes.</p>
                                <a className="text-primary flex items-center gap-2 font-bold hover:gap-4 transition-all" href="#">
                                    Explore SDKs <span className="material-symbols-outlined">arrow_forward</span>
                                </a>
                            </div>
                            <div className="w-1/2 h-full rounded-lg overflow-hidden border border-white/5">
                                <img alt="Code on laptop" className="w-full h-full object-cover opacity-60" data-alt="Modern workspace with a laptop screen showing clean software code and purple ambient lighting reflecting on the surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA18XpIwU4HCA3pZ-KfXNlRrxLYWgoI59JTQfSnywClcBPmJx3hTbrMkKDXG2RJVrIN7UASm6sMk9gknO9TiQGRa8rVSiPpy8mZ3-ahUa2qENLFmJpfeaSMCv9AoDR16BUEezeIX3INXdceb-qXtdvxZcTkqoURyrL6F2tv6I7udlMHCo-CXeSKn74mEKEMmdQsGIw1N4aa0qn4FmaqLp68LFZOK__hh_xonRp-_wnx_SJtmqxhsT3IAXcr0z6kWYLy_P1lBmKePEgg" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Stats Section */}
                <section className="py-24 bg-surface-container-low relative">
                    <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12">
                        <div className="text-center space-y-2">
                            <div className="text-5xl font-black font-headline text-primary">500M+</div>
                            <div className="text-on-surface-variant text-sm uppercase tracking-widest">Monthly Requests</div>
                        </div>
                        <div className="text-center space-y-2">
                            <div className="text-5xl font-black font-headline text-primary">12K+</div>
                            <div className="text-on-surface-variant text-sm uppercase tracking-widest">Active Developers</div>
                        </div>
                        <div className="text-center space-y-2">
                            <div className="text-5xl font-black font-headline text-primary">24/7</div>
                            <div className="text-on-surface-variant text-sm uppercase tracking-widest">Expert Support</div>
                        </div>
                        <div className="text-center space-y-2">
                            <div className="text-5xl font-black font-headline text-primary">150+</div>
                            <div className="text-on-surface-variant text-sm uppercase tracking-widest">Integrated Banks</div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
