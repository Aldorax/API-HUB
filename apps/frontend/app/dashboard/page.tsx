export default function DashboardPage() {
  return (
    <div className="bg-background text-on-surface min-h-screen">

      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/40 backdrop-blur-xl bg-gradient-to-b from-purple-500/10 to-transparent shadow-[0_8px_32px_0_rgba(157,94,235,0.1)] flex justify-between items-center px-8 h-20 w-full">
        <div className="flex items-center gap-12">
          <span className="text-2xl font-bold tracking-tighter text-purple-200 Manrope display tracking-tight">API HUB</span>
          <div className="hidden md:flex gap-8 items-center">
            <a className="text-zinc-400 hover:text-purple-300 transition-colors" href="#">Marketplace</a>
            <a className="text-zinc-400 hover:text-purple-300 transition-colors" href="#">Documentation</a>
            <a className="text-zinc-400 hover:text-purple-300 transition-colors" href="#">Support</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center bg-white/5 rounded-full px-4 py-2 border-none">
            <span className="material-symbols-outlined text-zinc-400 text-sm" data-icon="search">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm text-zinc-300 w-48" placeholder="Search resources..." type="text" />
          </div>
          <button className="material-symbols-outlined text-purple-300 hover:bg-white/5 transition-all duration-300 p-2 rounded-full" data-icon="notifications">notifications</button>
          <button className="material-symbols-outlined text-purple-300 hover:bg-white/5 transition-all duration-300 p-2 rounded-full" data-icon="settings">settings</button>
          <div className="h-10 w-10 rounded-full overflow-hidden border border-purple-500/30">
            <img alt="User profile photo" className="w-full h-full object-cover" data-alt="Close up professional headshot of a developer in a modern office with warm ambient lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUlTsI-y721jyqBUcCMOlEtGI7yBQGKCU3yhs9vpwb3sAh4P_QoFQsO7kLxT3WhRsWk-Zlhsj329yBjQzNS78B57DyP3xXvy4JTWJ1FvWS-_SpfdlbTY9dgY1SywX4MshMywrFuMWNE0yCSZbaAq_7tWj_4Kz5yzhBIk9lhrXoDRlQQxkyqi8m3avp-4t3rtDBRz0IGyK1Aggv4neOslTRVF0VILvNa_Q7s3G5Khht_nNDoClHgIMmZT7MKWQavs6aZX0-ReqIiLf_" />
          </div>
        </div>
      </nav>
      {/* SideNavBar */}
      <aside className="h-screen w-64 fixed left-0 top-0 pt-24 bg-zinc-950/60 backdrop-blur-2xl border-r border-white/5 flex flex-col gap-4 p-6 z-40">
        <div className="flex items-center gap-3 px-2 mb-6">
          <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-purple-300 text-lg" data-icon="hub">hub</span>
          </div>
          <div>
            <p className="text-xl font-black text-purple-100 Inter body-lg font-medium">Subscription</p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Pro Plan</p>
          </div>
        </div>
        <nav className="flex flex-col gap-1">
          <a className="bg-purple-500/20 text-purple-100 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center gap-3 px-4 py-3 hover:translate-x-1 transition-transform duration-300" href="#">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span className="text-sm">Dashboard</span>
          </a>
          <a className="text-zinc-500 hover:bg-white/5 rounded-full flex items-center gap-3 px-4 py-3 hover:translate-x-1 transition-transform duration-300" href="#">
            <span className="material-symbols-outlined" data-icon="api">api</span>
            <span className="text-sm">My APIs</span>
          </a>
          <a className="text-zinc-500 hover:bg-white/5 rounded-full flex items-center gap-3 px-4 py-3 hover:translate-x-1 transition-transform duration-300" href="#">
            <span className="material-symbols-outlined" data-icon="insights">insights</span>
            <span className="text-sm">Analytics</span>
          </a>
          <a className="text-zinc-500 hover:bg-white/5 rounded-full flex items-center gap-3 px-4 py-3 hover:translate-x-1 transition-transform duration-300" href="#">
            <span className="material-symbols-outlined" data-icon="payments">payments</span>
            <span className="text-sm">Billing</span>
          </a>
        </nav>
        <div className="mt-auto">
          <p className="text-xs text-purple-200 mb-2 text-center">Enterprise Ready?</p>
          <div className="glass-panel p-4 rounded-xl mb-6 bg-purple-500/5">
            <button className="w-full py-2 bg-primary text-on-primary rounded-lg text-xs font-bold">Upgrade to Enterprise</button>
          </div>
          <a className="text-zinc-500 hover:bg-white/5 rounded-full flex items-center gap-3 px-4 py-3 hover:translate-x-1 transition-transform duration-300" href="#">
            <span className="material-symbols-outlined" data-icon="logout">logout</span>
            <span className="text-sm">Logout</span>
          </a>
        </div>
      </aside>
      {/* Main Canvas */}
      <main className="ml-64 pt-28 px-10 pb-20">
        <header className="mb-12">
          <h1 className="display-lg text-purple-200">Welcome back, Aldini</h1>
          <p className="text-on-surface-variant text-lg">Your API ecosystem is performing 12% above baseline today.</p>
        </header>
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Main Usage Graph (Large) */}
          <div className="col-span-12 lg:col-span-8 glass-panel rounded-lg p-8 relative overflow-hidden h-[400px]">
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div>
                <h3 className="headline-md text-primary">API Traffic Overview</h3>
                <p className="text-on-surface-variant">Real-time throughput across all active nodes</p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-200 text-xs font-medium">Daily</span>
                <span className="px-3 py-1 rounded-full bg-white/5 text-zinc-500 text-xs font-medium">Weekly</span>
              </div>
            </div>
            {/* Lavender Gradient Fill Placeholder (Visual representation of graph) */}
            <div className="absolute bottom-0 left-0 w-full h-2/3 opacity-30">
              <svg className="w-full h-full preserve-3d" viewBox="0 0 1000 300">
                <path d="M0,300 L0,150 C150,100 250,250 400,180 C550,110 700,50 850,120 C950,160 1000,100 1000,100 L1000,300 Z" fill="url(#lavenderGradient)"></path>
                <defs>
                  <linearGradient id="lavenderGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#d9b9ff" stopOpacity="1"></stop>
                    <stop offset="100%" stopColor="#131313" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute bottom-12 left-8 right-8 flex justify-between text-[10px] text-zinc-600 uppercase tracking-widest border-t border-white/5 pt-4">
              <span>00:00</span><span>04:00</span><span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span><span>23:59</span>
            </div>
          </div>
          {/* Spending Widget */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 glass-panel rounded-lg p-8 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary" data-icon="account_balance_wallet">account_balance_wallet</span>
              </div>
              <span className="text-xs text-on-surface-variant font-medium">Current Month</span>
            </div>
            <div>
              <p className="text-sm text-on-surface-variant mb-1">Total Spending</p>
              <div className="flex items-baseline gap-2">
                <h2 className="text-4xl font-black text-on-surface">₦42,850<span className="text-primary text-sm font-bold">.00</span></h2>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/5">
              <div className="flex justify-between text-xs mb-2">
                <span className="text-on-surface-variant">Usage Limit</span>
                <span className="text-on-surface">85%</span>
              </div>
              <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[85%] rounded-full shadow-[0_0_8px_#d9b9ff]"></div>
              </div>
            </div>
          </div>
          {/* Active Subscriptions */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 glass-panel rounded-lg p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-headline font-bold text-lg">Active Subs</h3>
              <span className="material-symbols-outlined text-zinc-500 cursor-pointer" data-icon="more_vert">more_vert</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-purple-300" data-icon="language">language</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">VerifyMe API</p>
                    <p className="text-[10px] text-zinc-500">Identity / Premium</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-primary">Active</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-purple-300" data-icon="account_balance">account_balance</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Mono Connect</p>
                    <p className="text-[10px] text-zinc-500">Finance / Standard</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-primary">Active</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-purple-300" data-icon="local_shipping">local_shipping</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">Kwik Delivery</p>
                    <p className="text-[10px] text-zinc-500">Logistics / Basic</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-error">Warning</span>
              </div>
            </div>
          </div>
          {/* API Calls Mini Widget */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 glass-panel rounded-lg p-8 flex flex-col justify-center text-center">
            <p className="text-on-surface-variant text-sm mb-2">Total API Calls</p>
            <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 to-white">1.2M+</h3>
            <p className="text-xs text-primary mt-4 font-medium flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-sm" data-icon="trending_up">trending_up</span>
              24% increase from last week
            </p>
          </div>
          {/* Quick Actions / Feature Card */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 rounded-lg relative overflow-hidden group">
            <img alt="Abstract blockchain art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Futuristic digital art with glowing purple network nodes and interconnected lines on a dark obsidian background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSXX66blGQFCTWfyNhL8XVC2bYzbtJF8t-yMKyGfVvks2gPFgQkKFGKLNu9bMDTXwIcb_rnFNKuS5UY02E4Xi8L4DGB0T7_n1o40FIJ8IPGWCNjG1XPCKbz79hzIO-OAsZEb7ceojS4SOxbIGMEqEvG5negVphDKGjJXY-pwiH3Akp717uYET0Gu0iY0blUS03_4xNc5YLFqELET0nwP88Do5FIIg5dyjOCnPTLwKOytp0mbsoV8MBdQLHHy8UBPZElwevV8JY0Wry" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent p-8 flex flex-col justify-end">
              <h3 className="headline-md text-white mb-2">New Web3 Gateway</h3>
              <p className="text-zinc-300 text-sm mb-6">Integrate local payment nodes with on-chain settlement.</p>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full py-3 px-6 text-sm font-bold hover:bg-white/20 transition-all">Explore Documentation</button>
            </div>
          </div>
        </div>
        {/* System Health Section (Asymmetric) */}
        <section className="mt-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="headline-md">Node Health</h2>
            <div className="flex-grow h-px bg-white/5"></div>
            <button className="text-xs text-primary font-bold uppercase tracking-widest hover:underline">View All Systems</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-surface-container-low p-5 rounded-lg flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
              <div>
                <p className="text-sm font-bold">Lagos-South Node</p>
                <p className="text-[10px] text-on-surface-variant">Latency: 12ms</p>
              </div>
            </div>
            <div className="bg-surface-container-low p-5 rounded-lg flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
              <div>
                <p className="text-sm font-bold">Abuja-Central Node</p>
                <p className="text-[10px] text-on-surface-variant">Latency: 18ms</p>
              </div>
            </div>
            <div className="bg-surface-container-low p-5 rounded-lg flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
              <div>
                <p className="text-sm font-bold">PH-East Node</p>
                <p className="text-[10px] text-on-surface-variant">Latency: 15ms</p>
              </div>
            </div>
            <div className="bg-surface-container-low p-5 rounded-lg flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]"></div>
              <div>
                <p className="text-sm font-bold">Global-West Edge</p>
                <p className="text-[10px] text-on-surface-variant">Latency: 145ms</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Contextual FAB (Only for main screens) */}
      <button className="fixed bottom-10 right-10 h-16 w-16 bg-primary rounded-full shadow-[0_8px_32px_rgba(217,185,255,0.4)] flex items-center justify-center group active:scale-95 duration-200">
        <span className="material-symbols-outlined text-on-primary text-3xl transition-transform group-hover:rotate-90" data-icon="add">add</span>
      </button>

    </div>
  );
}
