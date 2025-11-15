import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import femaleExec from "@assets/generated_images/Female_executive_testimonial_photo_d17ea178.png";
import maleCeo from "@assets/generated_images/Male_CEO_testimonial_photo_c908e6df.png";
import youngEntrepreneur from "@assets/generated_images/Young_entrepreneur_testimonial_photo_db72f987.png";
import femaleOwner from "@assets/generated_images/Female_business_owner_photo_2604ecd5.png";

const testimonials = [
  {
    quote: "We increased our lead conversion rate by 45% in just three months. The AI engages prospects instantly and the conversations feel completely natural.",
    author: "Sarah Chen",
    role: "VP of Sales",
    company: "TechFlow Solutions",
    avatar: femaleExec
  },
  {
    quote: "Never thought AI could handle complex B2B conversations, but this system proved me wrong. It qualifies leads better than our junior sales team.",
    author: "Michael Rodriguez",
    role: "CEO",
    company: "CloudScale Inc",
    avatar: maleCeo
  },
  {
    quote: "The 24/7 engagement changed everything for our international business. We're capturing leads from every timezone without hiring night shifts.",
    author: "David Park",
    role: "Founder",
    company: "GrowthLabs",
    avatar: youngEntrepreneur
  },
  {
    quote: "ROI was immediate. Within the first week, we recovered leads that would have been lost to slow response times. Game changer for our business.",
    author: "Jennifer Williams",
    role: "Director of Marketing",
    company: "Innovate Digital",
    avatar: femaleOwner
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-card/50" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-6" data-testid="text-testimonials-title">
            Trusted by Industry Leaders
          </h2>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12 pt-8 text-sm font-semibold text-muted-foreground">
            <div className="text-center" data-testid="stat-leads">
              <div className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-1">10M+</div>
              <div>Leads Engaged</div>
            </div>
            <div className="text-center" data-testid="stat-response">
              <div className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-1">98%</div>
              <div>Response Rate</div>
            </div>
            <div className="text-center" data-testid="stat-conversion">
              <div className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-1">45%</div>
              <div>Avg. Conversion Increase</div>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-testimonial-${index}`}>
              <CardContent className="p-8 space-y-6">
                <Quote className="w-10 h-10 text-primary/30" />
                <p className="text-lg leading-relaxed" data-testid={`text-testimonial-quote-${index}`}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold" data-testid={`text-testimonial-author-${index}`}>
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground" data-testid={`text-testimonial-role-${index}`}>
                      {testimonial.role}, {testimonial.company}
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
