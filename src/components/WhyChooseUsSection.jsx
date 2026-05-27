import { CheckCircle2, ShieldCheck, Truck, TrendingDown, Handshake, Heart } from 'lucide-react';
import './WhyChooseUsSection.css';

const WhyChooseUsSection = () => {
  const reasons = [
    { icon: ShieldCheck, title: 'Quality Products', desc: 'Premium grade oils sourced and distributed with strict quality checks.' },
    { icon: CheckCircle2, title: 'Trusted Supplier', desc: 'A verified and dependable wholesale partner in the region.' },
    { icon: Truck, title: 'Reliable Network', desc: 'Efficient distribution network ensuring timely delivery always.' },
    { icon: TrendingDown, title: 'Competitive Pricing', desc: 'Best market rates for bulk orders without compromising quality.' },
    { icon: Handshake, title: 'Long-Term Ties', desc: 'We value relationships and build lasting business partnerships.' },
    { icon: Heart, title: 'Customer Satisfaction', desc: 'Our priority is meeting and exceeding client expectations.' },
  ];

  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        
        <div className="grid grid-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="reason-card card">
                <div className="reason-icon-wrapper">
                  <Icon size={32} className="reason-icon" />
                </div>
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-desc">{reason.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
