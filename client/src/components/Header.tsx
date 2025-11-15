import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">AI</span>
          </div>
          <span className="font-display font-bold text-lg">LeadEngage</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-features">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-how-it-works">
            How It Works
          </a>
          <a href="#testimonials" className="text-sm font-medium text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-testimonials">
            Testimonials
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-menu">
            <Menu className="w-5 h-5" />
          </Button>
          <Button variant="default" className="hidden md:inline-flex" data-testid="button-demo">
            Get Demo
          </Button>
        </div>
      </div>
    </header>
  );
}
