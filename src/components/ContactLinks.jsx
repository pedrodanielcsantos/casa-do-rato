import lucide from "lucide-react";

const { Instagram, MapPin, MessageCircle } = lucide;

const icons = {
  whatsapp: MessageCircle,
  google: MapPin,
  instagram: Instagram,
};

export default function ContactLinks({ links = [], ariaLabel = "Contact links" }) {
  if (!links.length) {
    return null;
  }

  return (
    <div className="contact-links" aria-label={ariaLabel}>
      {links.map((link) => {
        const Icon = icons[link.type] ?? MessageCircle;

        return (
          <a className="contact-link" href={link.href} key={link.label}>
            <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
            <span>{link.label}</span>
          </a>
        );
      })}
    </div>
  );
}
