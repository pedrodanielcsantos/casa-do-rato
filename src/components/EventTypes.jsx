import lucide from "lucide-react";

const { Briefcase, Cake, Gift, Presentation, Sparkles, Users } = lucide;

const icons = {
  cake: Cake,
  gift: Gift,
  presentation: Presentation,
  briefcase: Briefcase,
  sparkles: Sparkles,
  users: Users,
};

export default function EventTypes({ detailsLabel, items = [] }) {
  return (
    <div className="event-grid">
      {items.map((item) => {
        const Icon = icons[item.icon] ?? Sparkles;

        return (
          <article className="event-card" key={item.title}>
            <Icon aria-hidden="true" size={22} strokeWidth={1.7} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.href && (item.linkLabel || detailsLabel) ? (
              <a className="event-card-link" href={item.href}>
                {item.linkLabel || detailsLabel}
              </a>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
