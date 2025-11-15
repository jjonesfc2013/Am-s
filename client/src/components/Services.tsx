import { Card, CardContent } from "@/components/ui/card";
import { Clock, MessageCircle, Target } from "lucide-react";

const services = [
  {
    icon: Clock,
    title: "24/7 Engagement",
    description: "Your AI assistant never sleeps. Engage with leads instantly, any time of day or night, ensuring no opportunity slips away."
  },
  {
    icon: MessageCircle,
    title: "Human-Like Conversations",
    description: "Advanced natural language processing creates authentic dialogues that feel personal and build genuine connections with prospects."
  },
  {
    icon: Target,
    title: "Zero Missed Leads",
    description: "Automatically capture, qualify, and nurture every single lead while they're hot. Never lose another potential customer to slow response times."
  }
];

export default function Services() {
  return (
    <section className="py-20 lg:py-32" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-6" data-testid="text-services-title">
            Why Businesses Choose Us
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed" data-testid="text-services-subtitle">
            Transform how you engage with leads using intelligent automation that feels authentically human
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover-elevate" data-testid={`card-service-${index}`}>
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-xl" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-service-description-${index}`}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
