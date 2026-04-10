import Link from "next/link";

export default function Header() {
    return (
        <nav className="fixed top-4 w-[95%] left-1/2 -translate-x-1/2 rounded-lg z-50 flex justify-between items-center px-4 md:px-8 h-16 md:h-20 bg-zinc-950/40 backdrop-blur-xl bg-linear-to-b from-purple-500/10 to-transparent shadow-[0_8px_32px_0_rgba(157,94,235,0.1)]">
            <div className="text-lg md:text-2xl font-bold tracking-tighter text-purple-200 font-headline">API HUB</div>

            <div className="flex items-center gap-4">
                <Link href={"/docs"} className="hover:text-primary hover:underline">Docs</Link>
                <Link href={"/launch"} className="px-4 md:px-8 py-2 md:py-4 bg-primary rounded-lg text-on-primary font-bold rounded-DEFAULT hover:scale-105 transition-transform ethereal-glow">Launch</Link>

            </div>
        </nav>
    )
}