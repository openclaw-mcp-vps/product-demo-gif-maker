export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For SaaS Marketers &amp; Indie Hackers
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Turn Screen Recordings into{" "}
          <span className="text-[#58a6ff]">Optimized Product GIFs</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Upload a screen recording. GifDrop auto-crops, compresses, and lets you add captions — ready-to-share product demos in seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start for $12/mo
          </a>
          <a
            href="#faq"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#30363d]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
            <span className="ml-2 text-xs text-[#8b949e]">demo.gif — GifDrop</span>
          </div>
          <div className="flex flex-col items-center justify-center py-16 gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#0d1117] border border-[#30363d] flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#58a6ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 16 12 12 8 16"/>
                <line x1="12" y1="12" x2="12" y2="21"/>
                <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
              </svg>
            </div>
            <p className="text-[#8b949e] text-sm">Drop your .mp4 or .mov here</p>
            <div className="flex gap-2 text-xs text-[#58a6ff]">
              <span className="bg-[#0d1117] border border-[#30363d] px-2 py-1 rounded">Auto-crop</span>
              <span className="bg-[#0d1117] border border-[#30363d] px-2 py-1 rounded">Compress</span>
              <span className="bg-[#0d1117] border border-[#30363d] px-2 py-1 rounded">Caption</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-8">One plan. Everything included.</p>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="inline-block bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">Pro</div>
          <div className="text-5xl font-extrabold text-white mb-1">$12<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Cancel anytime</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited GIF exports",
              "FFmpeg-powered compression",
              "Smart auto-crop",
              "Caption editor",
              "Cloud storage for 30 days",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#58a6ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What video formats are supported?",
              a: "GifDrop accepts .mp4, .mov, and .webm files up to 500 MB. FFmpeg handles the heavy lifting server-side."
            },
            {
              q: "How does the caption editor work?",
              a: "After processing, a React-based editor lets you add, position, and style text overlays before exporting your final GIF."
            },
            {
              q: "Where are my GIFs stored?",
              a: "Processed GIFs are stored in cloud storage for 30 days. Download them anytime before they expire."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} GifDrop. All rights reserved.
      </footer>
    </main>
  );
}
