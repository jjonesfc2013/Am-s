import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import femaleExec from "@assets/generated_images/Female_executive_testimonial_photo_d17ea178.png";
import maleCeo from "@assets/generated_images/Male_CEO_testimonial_photo_c908e6df.png";

const testimonials = [
  {
    quote: "We went from losing 60% of our leads to converting 85%. The AI responds faster than any human ever could.",
    author: "Sarah Chen",
    role: "VP of Sales, TechFlow Solutions",
    avatar: femaleExec
  },
  {
    quote: "This paid for itself in the first week. We're now capturing leads we would have lost to competitors.",
    author: "Michael Rodriguez",
    role: "CEO, CloudScale Inc",
    avatar: maleCeo
  }
];

export default function SocialProof() {
  return (
    <section className="py-20 lg:py-32 bg-background" id="results">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-black text-4xl lg:text-5xl mb-12 uppercase" data-testid="text-social-proof-title">
            Trusted By Businesses That Refuse To Miss Leads
          </h2>
          
          <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
            <div className="text-center" data-testid="stat-leads">
              <div className="text-5xl lg:text-6xl font-black mb-2">200k+</div>
              <div className="text-lg text-muted-foreground font-semibold">Leads Engaged</div>
            </div>
            <div className="text-center" data-testid="stat-response">
              <div className="text-5xl lg:text-6xl font-black mb-2">98%</div>
              <div className="text-lg text-muted-foreground font-semibold">Instant Response Rate</div>
            </div>
            <div className="text-center" data-testid="stat-conversion">
              <div className="text-5xl lg:text-6xl font-black mb-2">50%</div>
              <div className="text-lg text-muted-foreground font-semibold">Average Conversion Increase</div>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2" data-testid={`card-testimonial-${index}`}>
              <CardContent className="p-8 space-y-6">
                <Quote className="w-12 h-12 text-[#E63946]/30" />
                <p className="text-xl font-medium leading-relaxed" data-testid={`text-testimonial-quote-${index}`}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <Avatar className="w-14 h-14">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-lg" data-testid={`text-testimonial-author-${index}`}>
                      {testimonial.author}
                    </div>
                    <div className="text-muted-foreground" data-testid={`text-testimonial-role-${index}`}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
