import logoImage from "@assets/no background wbite words i think_1763232140226.png";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img 
              src={logoImage} 
              alt="Amius" 
              className="h-[120px] mb-4"
              data-testid="img-logo-footer"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              AI-powered lead engagement that never sleeps, never misses, and always converts.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#problem" className="text-white/60 hover:text-white text-sm transition-colors">
                  The Problem
                </a>
              </li>
              <li>
                <a href="#solution" className="text-white/60 hover:text-white text-sm transition-colors">
                  The Solution
                </a>
              </li>
              <li>
                <a href="#results" className="text-white/60 hover:text-white text-sm transition-colors">
                  Results
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>hello@AmusMake.com</li>
              <li>1-800-AI-LEADS</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/40">
          <p>© 2025 Amius. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
