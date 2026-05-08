import lucide from "lucide-react";

const { Cake, Gift, Sparkles, Users } = lucide;

const icons = {
  cake: Cake,
  gift: Gift,
  sparkles: Sparkles,
  users: Users,
};

export default function EventTypes({ items = [] }) {
  return (
    <div className="event-grid">
      {items.map((item) => {
        const Icon = icons[item.icon] ?? Sparkles;

        return (
          <article className="event-card" key={item.title}>
            <Icon aria-hidden="true" size={22} strokeWidth={1.7} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        );
      })}
    </div>
  );
}
