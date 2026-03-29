export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-text-muted text-sm font-mono">
          sina<span className="text-white">.</span>dev
        </p>
        <p className="text-text-muted text-xs">
          Built with Next.js · Deployed on Vercel
        </p>
        <p className="text-text-muted text-xs">
          © {new Date().getFullYear()} Sina Hajeb
        </p>
      </div>
    </footer>
  );
}
