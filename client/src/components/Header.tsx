import { Button } from "@/components/ui/button";
import logoImage from "@assets/no background wbite words i think_1763232140226.png";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-1 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={logoImage} 
            alt="Amius" 
            className="h-[120px]"
            data-testid="img-logo"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#problem" 
            className="text-sm font-medium text-white/90 hover:text-white transition-colors" 
            data-testid="link-problem"
          >
            The Problem
          </a>
          <a 
            href="#solution" 
            className="text-sm font-medium text-white/90 hover:text-white transition-colors" 
            data-testid="link-solution"
          >
            The Solution
          </a>
          <a 
            href="#results" 
            className="text-sm font-medium text-white/90 hover:text-white transition-colors" 
            data-testid="link-results"
          >
            Results
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            variant="default" 
            className="bg-[#E63946] hover:bg-[#D62828] text-white font-bold uppercase text-sm px-6" 
            data-testid="button-cta-header"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
