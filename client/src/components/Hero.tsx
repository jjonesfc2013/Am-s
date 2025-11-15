import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/AI_chat_interface_dashboard_a411192f.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#1a1a1a] overflow-hidden">
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 z-0" />
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <h1 
              className="font-black text-5xl lg:text-7xl tracking-tight leading-[1.1] text-white uppercase" 
              data-testid="text-hero-title"
            >
              Never Miss A Lead Again
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-xl font-normal" data-testid="text-hero-subtitle">
              AI-powered systems that engage your leads like a real human—24/7, instantly, and without ever dropping the ball.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-[#E63946] hover:bg-[#D62828] text-white font-bold uppercase px-8 py-6 text-base" 
                data-testid="button-get-started"
              >
                Get Your Free Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-black font-bold uppercase px-8 py-6 text-base" 
                data-testid="button-free-training"
              >
                Free Training
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-[#E63946]/20 rounded-full blur-3xl" />
            <div className="relative rounded-full overflow-hidden border-4 border-white/20">
              <img 
                src={heroImage} 
                alt="AI chat interface engaging with leads in real-time" 
                className="w-full aspect-square object-cover"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Three action cards below hero */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <button 
              className="bg-white rounded-lg p-6 text-left hover:shadow-xl transition-shadow group"
              data-testid="card-action-0"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">▶</span>
                </div>
                <span className="font-bold text-base uppercase">Listen to Demo</span>
              </div>
            </button>
            
            <button 
              className="bg-white rounded-lg p-6 text-left hover:shadow-xl transition-shadow group"
              data-testid="card-action-1"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📅</span>
                </div>
                <span className="font-bold text-base uppercase">Schedule A Call</span>
              </div>
            </button>
            
            <button 
              className="bg-white rounded-lg p-6 text-left hover:shadow-xl transition-shadow group"
              data-testid="card-action-2"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">👥</span>
                </div>
                <span className="font-bold text-base uppercase">Team Training</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
