import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@assets/generated_images/AI_chat_interface_dashboard_a411192f.png";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="w-fit" data-testid="badge-trust">
              Trusted by 500+ businesses
            </Badge>
            
            <h1 className="font-display font-bold text-5xl lg:text-7xl tracking-tight leading-tight" data-testid="text-hero-title">
              Engage Every Lead Like a Real Human
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl" data-testid="text-hero-subtitle">
              Transform your business with AI-powered systems that never sleep, never miss a conversation, and convert leads 24/7 with human-like engagement.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" data-testid="button-get-started">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" data-testid="button-watch-demo">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">No credit card required</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Setup in minutes</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-xl blur-3xl -z-10" />
            <img 
              src={heroImage} 
              alt="AI chat interface showing natural conversation flow with leads" 
              className="rounded-xl shadow-2xl w-full"
              data-testid="img-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
