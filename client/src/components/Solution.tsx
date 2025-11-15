import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Zap, Brain, Clock, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Instant Response",
    description: "Engage every lead the moment they show interest—24/7, no delays"
  },
  {
    icon: Brain,
    title: "Human-Like Conversations",
    description: "Natural dialogue that builds trust and moves prospects forward"
  },
  {
    icon: Clock,
    title: "Never Sleep, Never Miss",
    description: "Your AI works around the clock so you never lose another opportunity"
  },
  {
    icon: TrendingUp,
    title: "Increase Conversions",
    description: "Turn more leads into customers with perfect timing and messaging"
  }
];

export default function Solution() {
  return (
    <section className="py-20 lg:py-32 bg-background" id="solution">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#E63946] flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <h2 
            className="font-black text-4xl lg:text-6xl mb-6 uppercase tracking-tight" 
            data-testid="text-solution-title"
          >
            The Solution: AI That Engages Like Your Best Salesperson
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed" data-testid="text-solution-subtitle">
            Never lose another lead to slow response times
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="border-2" data-testid={`card-benefit-${index}`}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-lg bg-[#E63946] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl mb-2" data-testid={`text-benefit-title-${index}`}>
                        {benefit.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed" data-testid={`text-benefit-description-${index}`}>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <p className="text-2xl lg:text-3xl font-bold mb-8">
            When your message is clear and your response is instant, leads convert
          </p>
        </div>
      </div>
    </section>
  );
}
