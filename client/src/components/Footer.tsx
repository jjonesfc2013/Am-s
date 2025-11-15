import { Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">AI</span>
              </div>
              <span className="font-display font-bold text-lg">LeadEngage</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transform your business with AI-powered lead engagement that never sleeps, never misses, and always converts.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-links-title">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-md inline-block" data-testid="link-footer-features">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-md inline-block" data-testid="link-footer-how-it-works">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-md inline-block" data-testid="link-footer-testimonials">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-md inline-block" data-testid="link-footer-contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-contact-title">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li data-testid="text-footer-email">hello@leadengage.ai</li>
              <li data-testid="text-footer-phone">1-800-AI-LEADS</li>
              <li data-testid="text-footer-address">San Francisco, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © 2025 LeadEngage. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground hover-elevate p-2 rounded-md" data-testid="link-linkedin">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground hover-elevate p-2 rounded-md" data-testid="link-twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-md" data-testid="link-privacy">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-md" data-testid="link-terms">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
