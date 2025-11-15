import nlpImage from "@assets/generated_images/Natural_language_processing_feature_7292f980.png";
import analyticsImage from "@assets/generated_images/AI_analytics_dashboard_feature_f712d3ae.png";
import responseImage from "@assets/generated_images/Instant_response_system_feature_0445d10f.png";
import crmImage from "@assets/generated_images/CRM_integration_feature_51635db4.png";

const features = [
  {
    title: "Natural Language Processing",
    description: "Our advanced AI understands context, intent, and nuance just like a human would. It adapts its responses based on the conversation flow, creating authentic interactions that build trust.",
    image: nlpImage,
    imageAlt: "Natural language processing interface showing AI understanding customer intent"
  },
  {
    title: "Intelligent Lead Qualification",
    description: "Automatically identify high-value prospects by analyzing conversation patterns, engagement levels, and expressed needs. Route qualified leads to your sales team at the perfect moment.",
    image: analyticsImage,
    imageAlt: "Analytics dashboard displaying lead qualification metrics and scores"
  },
  {
    title: "Instant Response System",
    description: "Respond to inquiries in milliseconds, not hours. Your AI assistant engages prospects the moment they show interest, capitalizing on peak buying intent.",
    image: responseImage,
    imageAlt: "Real-time notification system showing instant lead responses"
  },
  {
    title: "Seamless CRM Integration",
    description: "Connect with your existing tools effortlessly. Sync conversations, update lead status, and maintain a complete history across all your business systems.",
    image: crmImage,
    imageAlt: "CRM integration dashboard showing synchronized lead data"
  }
];

export default function Features() {
  return (
    <section className="py-20 lg:py-32 bg-card/50" id="features">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-6" data-testid="text-features-title">
            Powerful Features That Drive Results
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed" data-testid="text-features-subtitle">
            Everything you need to engage, qualify, and convert leads automatically
          </p>
        </div>
        
        <div className="space-y-24 lg:space-y-32">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h3 className="font-display font-bold text-2xl lg:text-3xl" data-testid={`text-feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid={`text-feature-description-${index}`}>
                  {feature.description}
                </p>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img 
                  src={feature.image} 
                  alt={feature.imageAlt}
                  className="rounded-xl shadow-lg w-full"
                  data-testid={`img-feature-${index}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
