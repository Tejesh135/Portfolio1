export function Footer() {
  return (
    <footer className="w-full pt-16 pb-12 border-t border-white/5 bg-black text-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center justify-center gap-8">
        
        <h2 className="font-mono text-sm tracking-widest text-white uppercase">
          TEJESH POOLA
        </h2>
        
        <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-wider text-gray-500">
          <a href="mailto:poolatejesh2006@gmail.com" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
            Email
          </a>
          <span>&middot;</span>
          <a href="https://www.linkedin.com/in/poola-tejesh/" className="hover:text-[#0A66C2] transition-colors" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span>&middot;</span>
          <a href="https://github.com/Tejesh135" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        
        <div className="flex flex-col gap-1 font-mono text-[9px] uppercase tracking-widest text-gray-600">
          <p>
            Designed &amp; Engineered by Tejesh Poola
          </p>
          <p>
            &copy; {new Date().getFullYear()} All Rights Reserved &middot; Build v1.1.0
          </p>
        </div>
      </div>
    </footer>
  );
}
