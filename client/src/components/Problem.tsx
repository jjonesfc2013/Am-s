import { X } from "lucide-react";

const problems = [
  "Leads go cold while you're busy",
  "You're losing deals to faster competitors",
  "Response times are killing your conversion rate",
  "Your team can't keep up with inquiries",
  "Nights and weekends = missed opportunities",
  "Every lost lead is money left on the table"
];

export default function Problem() {
  return (
    <section className="py-20 lg:py-32 bg-[#1a1a1a]" id="problem">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#E63946] flex items-center justify-center">
              <X className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <h2 
            className="font-black text-4xl lg:text-6xl mb-6 text-white uppercase tracking-tight" 
            data-testid="text-problem-title"
          >
            Slow Responses Don't Just Lose Leads—They Kill Your Business
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/80 leading-relaxed" data-testid="text-problem-subtitle">
            Every minute you wait to respond, your competitor is closing the deal
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="flex items-start gap-3 text-white/90"
              data-testid={`problem-item-${index}`}
            >
              <X className="w-6 h-6 text-[#E63946] flex-shrink-0 mt-1" />
              <p className="text-lg font-medium">{problem}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-3xl lg:text-4xl font-black text-white uppercase" data-testid="text-problem-cta">
            The Answer To Confusion Is Always NO
          </p>
          <p className="text-xl text-white/70 mt-4">
            If leads don't get instant clarity, they move on
          </p>
        </div>
      </div>
    </section>
  );
}
