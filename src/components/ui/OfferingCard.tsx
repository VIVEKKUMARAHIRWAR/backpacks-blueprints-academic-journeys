import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";

interface OfferingCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  features?: string[];
}

const OfferingCard = ({ icon: Icon, title, description, href, features }: OfferingCardProps) => {
  return (
    <div className="card-academic group">
      <div className="space-y-4">
        <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="font-display text-xl font-medium">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        
        {features && features.length > 0 && (
          <ul className="space-y-2 pt-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        <Link 
          to={href}
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors pt-2 group/link"
        >
          Learn more 
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default OfferingCard;
