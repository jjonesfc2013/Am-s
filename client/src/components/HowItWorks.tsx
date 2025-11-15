import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Connect Your Systems",
    description: "Integrate with your website, CRM, and communication channels in minutes. Our setup wizard guides you through every step."
  },
  {
    number: "02",
    title: "Train Your AI",
    description: "Customize your AI assistant's personality, knowledge base, and conversation flow to match your brand and business needs."
  },
  {
    number: "03",
    title: "Watch It Work",
    description: "Your AI starts engaging leads immediately, learning and improving with every conversation while you focus on closing deals."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-32" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-6" data-testid="text-how-it-works-title">
            Get Started in Three Simple Steps
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed" data-testid="text-how-it-works-subtitle">
            From setup to engagement in less than an hour
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-0.5 bg-border -z-10" />
          
          {steps.map((step, index) => (
            <Card key={index} className="relative hover-elevate" data-testid={`card-step-${index}`}>
              <CardContent className="p-8 space-y-4">
                <div className="text-6xl font-display font-bold text-primary/20" data-testid={`text-step-number-${index}`}>
                  {step.number}
                </div>
                <h3 className="font-display font-semibold text-xl" data-testid={`text-step-title-${index}`}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-step-description-${index}`}>
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
