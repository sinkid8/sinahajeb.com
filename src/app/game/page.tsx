import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FiExternalLink } from "react-icons/fi";

export const metadata = {
  title: "Space Raid — Sina Hajeb",
  description: "Space Raid — a Unity WebGL game by Sina Hajeb. Play it on itch.io.",
};

export default function GamePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <p className="font-mono text-accent-light text-sm mb-4">unity · c# · webgl</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Space Raid</h1>
        <p className="text-text-muted text-lg max-w-xl mb-10 leading-relaxed">
          A modern reimagining of the classic Atari River Raid arcade game. Built in Unity with updated visuals, smooth controls, and improved game mechanics.
        </p>
        <a
          href="https://sinkid8.itch.io/space-raid"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-accent hover:bg-accent/90 text-white font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-1"
        >
          Play on itch.io
          <FiExternalLink size={18} />
        </a>
        <p className="text-text-muted/50 text-xs mt-6 font-mono">opens in a new tab</p>
      </div>
      <Footer />
    </main>
  );
}
