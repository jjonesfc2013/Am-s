import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Shield } from "lucide-react";
import { useState } from "react";

export default function ContactDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demo request submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 lg:py-32" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Card>
          <CardContent className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div className="space-y-8">
                <div>
                  <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4" data-testid="text-contact-title">
                    See It In Action
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-contact-subtitle">
                    Schedule a personalized demo and discover how AI can transform your lead engagement
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Live Demo of Your Use Case</div>
                      <div className="text-sm text-muted-foreground">See how our AI handles conversations specific to your industry</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Custom Implementation Plan</div>
                      <div className="text-sm text-muted-foreground">Get a roadmap tailored to your business goals and systems</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">ROI Analysis</div>
                      <div className="text-sm text-muted-foreground">Calculate your potential conversion increase and revenue impact</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 pt-4 text-sm text-muted-foreground">
                  <Shield className="w-5 h-5" />
                  <span>SOC 2 Compliant | Enterprise-Grade Security</span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input 
                    name="name"
                    placeholder="Full Name" 
                    value={formData.name}
                    onChange={handleChange}
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
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <Input 
                    name="company"
                    placeholder="Company Name" 
                    value={formData.company}
                    onChange={handleChange}
                    data-testid="input-company"
                  />
                </div>
                <div>
                  <Input 
                    name="phone"
                    type="tel" 
                    placeholder="Phone Number" 
                    value={formData.phone}
                    onChange={handleChange}
                    data-testid="input-phone"
                  />
                </div>
                <div>
                  <Textarea 
                    name="message"
                    placeholder="Tell us about your lead engagement challenges..." 
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    data-testid="input-message"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" data-testid="button-submit">
                  Request Demo
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  We'll respond within 24 hours to schedule your demo
                </p>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
