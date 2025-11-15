import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 lg:py-32 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="font-black text-4xl lg:text-6xl mb-6 text-white uppercase tracking-tight" 
            data-testid="text-cta-title"
          >
            Stop Losing Leads Today
          </h2>
          <p className="text-xl lg:text-2xl text-white/80" data-testid="text-cta-subtitle">
            Get your free demo and see how AI can transform your business
          </p>
        </div>
        
        <Card className="p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 text-base"
                  data-testid="input-name"
                />
              </div>
              <div>
                <Input 
                  name="email"
                  type="email" 
                  placeholder="Work Email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 text-base"
                  data-testid="input-email"
                />
              </div>
            </div>
            
            <div>
              <Input 
                name="company"
                placeholder="Company Name" 
                value={formData.company}
                onChange={handleChange}
                className="h-12 text-base"
                data-testid="input-company"
              />
            </div>
            
            <div>
              <Textarea 
                name="message"
                placeholder="Tell us about your biggest lead challenge..." 
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="text-base resize-none"
                data-testid="input-message"
              />
            </div>
            
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-[#E63946] hover:bg-[#D62828] text-white font-bold uppercase py-6 text-lg" 
              data-testid="button-submit"
            >
              Get My Free Demo
            </Button>
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-2">
              <Shield className="w-4 h-4" />
              <span>No credit card required • 15-minute setup</span>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
