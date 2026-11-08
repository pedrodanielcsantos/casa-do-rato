const icons = {
  whatsapp: "icons/whatsapp.svg",
  instagram: "icons/instagram.svg",
  phone: "icons/phone.svg",
};

// Only web links open in a new tab; phone links hand off to the phone app.
const isWebLink = (href) => /^https?:/.test(href);

function assetPath(path, assetBase) {
  return `${assetBase}${path.replace(/^\//, "")}`;
}

export default function ContactLinks({ links = [], ariaLabel = "Contact links", assetBase = "/" }) {
  if (!links.length) {
    return null;
  }

  return (
    <nav className="contact-links" aria-label={ariaLabel}>
      {links.map((link) => {
        const icon = icons[link.type];
        const className = ["contact-link", link.variant === "primary" ? "contact-link-primary" : ""]
          .filter(Boolean)
          .join(" ");

        const newTab = isWebLink(link.href);

        return (
          <a
            aria-label={link.ariaLabel}
            className={className}
            href={link.href}
            key={link.label}
            rel={newTab ? "noopener noreferrer" : undefined}
            target={newTab ? "_blank" : undefined}
          >
            {icon && (
              <span
                aria-hidden="true"
                className="contact-link-icon"
                style={{ "--icon-url": `url("${assetPath(icon, assetBase)}")` }}
              />
            )}
            <span>{link.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
