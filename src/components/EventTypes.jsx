export default function EventTypes({ detailsLabel, items = [] }) {
  return (
    <div className="event-grid">
      {items.map((item) => (
        <article className="event-card" key={item.title}>
          {/* The title next to it describes the card, so the photo is decorative here.
              The gallery holds the descriptive alt text for each photo. */}
          <img
            alt=""
            className="event-card-media"
            decoding="async"
            height={item.photo.height}
            loading="lazy"
            sizes={item.photo.sizes}
            src={item.photo.src}
            srcSet={item.photo.srcset}
            width={item.photo.width}
          />
          <div className="event-card-body">
            <h3>
              {/* CSS stretches this link over the whole card. Using the title as the
                  link text tells search engines and screen readers where it goes. */}
              <a className="event-card-link" href={item.href}>
                {item.title}
              </a>
            </h3>
            <p>{item.description}</p>
            <span aria-hidden="true" className="event-card-more">
              {item.linkLabel || detailsLabel}
              <span className="event-card-arrow">→</span>
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
