"use client";

import { useState } from "react";

export default function LoginPage() {
  const [role, setRole] = useState<"consumer" | "provider">("consumer");
  return (
    <div className="bg-background text-on-surface font-body overflow-hidden min-h-screen">

      {/* Main Layout Container */}
      <main className="flex min-h-screen w-full">
        {/* Left Side: Branding & Abstract Visuals */}
        <section className="hidden lg:flex flex-1 relative items-center justify-center overflow-hidden bg-surface-container-lowest">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-tertiary/15 rounded-full blur-[100px]"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 mix-blend-overlay"></div>
          </div>
          {/* Content Canvas */}
          <div className="relative z-10 flex flex-col items-center text-center px-12">
            {/* Large Glassmorphic Logo Container */}
            <div className="glass-panel ghost-border rounded-xl p-12 mb-12 ethereal-glow">
              <div className="flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-8xl text-primary" data-icon="cloud_done" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_done</span>
              </div>
              <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-primary-fixed mb-4">Naija API Hub</h1>
              <p className="text-on-surface-variant font-medium max-w-sm mx-auto leading-relaxed">
                The definitive ecosystem for Nigerian developers. Seamlessly scale with localized financial and data infrastructure.
              </p>
            </div>
            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 max-w-lg">
              <div className="glass-pill-active py-2 px-6 rounded-full ghost-border text-sm text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-lg" data-icon="terminal">terminal</span> Ultra Low Latency
              </div>
              <div className="glass-pill-active py-2 px-6 rounded-full ghost-border text-sm text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-lg" data-icon="security">security</span> Bank-Grade Encryption
              </div>
              <div className="glass-pill-active py-2 px-6 rounded-full ghost-border text-sm text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-lg" data-icon="bolt">bolt</span> 99.9% Nigeria Uptime
              </div>
            </div>
          </div>
          {/* Abstract Visual Mesh Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen">
            <img className="w-full h-full object-cover" data-alt="Abstract flowing 3D crystalline shapes in deep purple and soft lavender colors with cinematic lighting and refractive glass textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDucBFaInNXkICR5dmonYHCEnod3kecdRbM1EPu42lgJsJLaMCrACqi37Fx3vR26VGBZuVMLXB2NfpcUHD7KVB0-4VbIF_nHCf-lHboEOU91KueBoW7G7PRgtqsFKhsWDC-c9gsS5APx-o9cXLTo0luoidPLi-MaCxuByU13RPdCQB8yGWTo6oJyAAHctLNcis_87XsLVBlp6cnVq4Evw7WcqmgWtDeWD97gHaPYolZIni2ImJ57C186XHD-4zJjQMu-e0UC8SbcB21" />
          </div>
        </section>
        {/* Right Side: Login Form */}
        <section className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-surface">
          <div className="w-full max-w-md space-y-10">
            {/* Form Header */}
            <div className="text-left">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface mb-2">Welcome Back</h2>
              <p className="text-on-surface-variant">Sign in to your account to manage your keys</p>
            </div>
            {/* Role Selection Toggle */}
            <div className="glass-panel p-1.5 rounded-full ghost-border flex items-center w-full relative">
              {/* Sliding Pill Background */}
              <div className="absolute top-1.5 bottom-1.5 left-1.5 right-1.5 pointer-events-none">
                <div
                  className="w-1/2 h-full bg-primary rounded-full shadow-lg transition-transform duration-300 ease-out"
                  style={{ transform: role === 'consumer' ? 'translateX(0)' : 'translateX(100%)' }}
                />
              </div>
              <button
                onClick={() => setRole("consumer")}
                className={`relative z-10 flex-1 py-2.5 px-4 rounded-full text-sm transition-colors duration-300 cursor-pointer ${role === 'consumer' ? 'font-semibold text-on-primary' : 'font-medium text-on-surface-variant hover:text-primary'}`}>
                Consumer
              </button>
              <button
                onClick={() => setRole("provider")}
                className={`relative z-10 flex-1 py-2.5 px-4 rounded-full text-sm transition-colors duration-300 cursor-pointer ${role === 'provider' ? 'font-semibold text-on-primary' : 'font-medium text-on-surface-variant hover:text-primary'}`}>
                Provider
              </button>
            </div>
            {/* Login Form */}
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-on-surface-variant ml-1" htmlFor="email">Work Email</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
                    <span className="material-symbols-outlined text-xl" data-icon="mail">mail</span>
                  </div>
                  <input className="block w-full pl-11 pr-4 py-4 bg-surface-container-lowest border-0 rounded-lg text-on-surface ring-1 ring-white/10 focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-outline" id="email" name="email" placeholder="name@company.ng" type="email" />
                </div>
              </div>
              <button className="w-full py-4 px-6 bg-primary text-on-primary font-bold rounded-DEFAULT hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-[0_8px_24px_-8px_rgba(217,185,255,0.4)] rounded-lg cursor-pointer" type="submit">
                Continue with Magic Link
                <span className="material-symbols-outlined text-xl" data-icon="arrow_forward">arrow_forward</span>
              </button>
            </form>
            {/* Footer Text */}
            <div className="pt-8 text-center border-t border-white/5">
              <p className="text-sm text-on-surface-variant">
                New to Naija API Hub?
                <a className="text-primary font-semibold hover:underline decoration-primary/30 underline-offset-4" href="#">Create an account</a>
              </p>
            </div>
            {/* Legal/Trust Links */}
            <div className="flex items-center justify-center gap-6 pt-4 text-xs text-outline font-medium">
              <a className="hover:text-on-surface transition-colors" href="#">Privacy Policy</a>
              <div className="w-1 h-1 bg-outline rounded-full"></div>
              <a className="hover:text-on-surface transition-colors" href="#">Developer Terms</a>
              <div className="w-1 h-1 bg-outline rounded-full"></div>
              <a className="hover:text-on-surface transition-colors" href="#">Support</a>
            </div>
          </div>
        </section>
      </main>
      {/* Global Decoration - Polymorphic Glows */}
      <div className="fixed top-[-20%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-tertiary/5 rounded-full blur-[100px] pointer-events-none"></div>

    </div>
  );
}
