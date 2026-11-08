import { buildAvailabilityHref, callHref, phone } from "./contact.js";

const whatsappMessage = {
  intro: "Hi! I'd like to check availability at Casa do Rato.",
  date: "Preferred date",
  time: "Time",
  eventType: "Event type",
  guests: "Number of guests",
  extras: "Additional services (kids' package, cake, decoration, catering, other)",
};
const availabilityHref = buildAvailabilityHref(whatsappMessage);

export const translationMeta = {
  sourceLocale: "pt",
  sourceHash: "d0885c7aa3ccad6bc24afdf8b21b2721cac9117143119bcf63cbac883018e48c",
};

export const content = {
  site: {
    name: "Casa do Rato Eventos",
    shortName: "Casa do Rato",
    title: "Private Event Venue in Vila Nova de Gaia, Porto | Casa do Rato",
    description:
      "Private venue hire in Avintes, Gaia, for up to 50 guests. Birthdays, baby showers, workshops, and corporate events. Ask for availability on WhatsApp.",
    ogImage: "brand/logo-original.png",
    ogImageWidth: "1679",
    ogImageHeight: "1171",
    ogImageAlt: "Casa do Rato Eventos logo",
    business: {
      telephone: phone.e164,
      maximumAttendeeCapacity: 50,
      priceRange: "€€",
      address: {
        streetAddress: "Rua Cunha de Cima 17",
        addressLocality: "Avintes, Vila Nova de Gaia",
        addressRegion: "Porto",
        postalCode: "4430-681",
        addressCountry: "PT",
      },
      geo: {
        latitude: 41.0958703,
        longitude: -8.5569088,
      },
      areaServed: ["Avintes", "Vila Nova de Gaia", "Porto"],
      contactPoints: [
        {
          telephone: phone.e164,
          contactType: "bookings",
          availableLanguage: ["pt", "en"],
        },
      ],
      amenityFeatures: [
        "Private parking",
        "Plates, cutlery, and cups",
        "Refrigerator",
        "Microwave",
        "Coffee machine",
        "Private bathrooms",
        "Changing table on request",
      ],
      sameAs: ["https://share.google/4G4qyWvjWJs1PBRb8"],
    },
  },
  navigation: {
    ariaLabel: "Primary navigation",
    events: "Events",
    space: "Space",
    faq: "FAQ",
    location: "Location",
    contact: "Book",
    menuLabel: "Open menu",
    skipLabel: "Skip to content",
  },
  languageSwitcher: {
    ariaLabel: "Choose language",
  },
  hero: {
    title: {
      brand: "Casa do Rato",
      qualifier: "Private venue for parties and events in Vila Nova de Gaia",
    },
    eyebrow: "Shall we make memories together?",
    body: "A versatile and welcoming space, ideal for birthday parties, baby showers, friends and family gatherings, workshops, and corporate events in Avintes, Vila Nova de Gaia.",
    cta: "Book",
    ctaHref: availabilityHref,
    facts: ["Up to 50 guests", "A venue all to yourselves", "Private parking"],
    photos: [
      "photos/casa-do-rato-sala-decorada-vista-geral.webp",
      "photos/casa-do-rato-arco-baloes-tema-selva.webp",
      "photos/casa-do-rato-zona-sofas-rececao.webp",
    ],
  },
  events: {
    eyebrow: "Occasions",
    title: "Made for any occasion",
    detailsLabel: "Learn more",
    items: [
      {
        title: "Kids' birthday parties",
        description:
          "The ideal space to celebrate little ones, with entertainment and play for everyone.",
        photo: "photos/casa-do-rato-mesa-tematica-aniversario-bolo.webp",
        href: "events/birthdays/",
      },
      {
        title: "Adult birthdays",
        description:
          "The ideal space to celebrate life's most meaningful moments with the comfort and ease of feeling at home.",
        photo: "photos/casa-do-rato-buffet-evento-privado.webp",
        href: "events/birthdays/",
      },
      {
        title: "Baby showers",
        description: "A warm, easy-to-prepare space for baby showers and family celebrations.",
        photo: "photos/casa-do-rato-festa-baloes-mesa-principal.webp",
        href: "events/baby-showers/",
      },
      {
        title: "Friends & family gatherings",
        description: "A shared table, conversation, music — no rush.",
        photo: "photos/casa-do-rato-mesa-apoio-encontros-grupo.webp",
        href: "events/private-celebrations/",
      },
      {
        title: "Workshops & training",
        description: "An equipped room prepared for moments of learning and knowledge sharing.",
        photo: "photos/casa-do-rato-mesa-corrida-workshop.webp",
        href: "events/workshops/",
      },
      {
        title: "Corporate events",
        description: "Off-sites, launches, and team-buildings in a venue that's all yours.",
        photo: "photos/casa-do-rato-sala-principal-luz-natural.webp",
        href: "events/corporate-events/",
      },
    ],
  },
  occasionPages: {
    breadcrumbAriaLabel: "Breadcrumb",
    contactLabel: "Book",
    summaryLabel: "Ideal for",
    includedLabel: "What helps with planning",
    relatedTitle: "Other occasions",
    items: [
      {
        key: "birthdays",
        eventType: "Birthday",
        photos: [
          "photos/casa-do-rato-buffet-aniversario-baloes.webp",
          "photos/casa-do-rato-bolo-aniversario-tematico.webp",
          "photos/casa-do-rato-zona-infantil-escorrega.webp",
        ],
        slug: "birthdays",
        title: "Birthday Party Venue in Vila Nova de Gaia | Casa do Rato",
        description:
          "Celebrate kids' and adult birthdays in a private venue in Avintes, Vila Nova de Gaia, for up to 50 guests, with support for tables, decoration, and extras.",
        breadcrumbLabel: "Birthdays",
        hero: {
          eyebrow: "Birthdays in Gaia",
          title: "A private venue for small, personal birthday parties that are easy to prepare",
          body: "Casa do Rato hosts birthday parties in Avintes, Vila Nova de Gaia, with the privacy of a venue reserved just for you and the flexibility to adapt the room to your celebration.",
        },
        image: {
          src: "photos/casa-do-rato-arco-baloes-tema-selva.webp",
          alt: "Balloon arch with jungle animals above the main table, set up for a first birthday.",
        },
        summary: [
          "Kids' and adult birthdays",
          "Up to 50 guests",
          "Main table, support area, and room to gather",
        ],
        details: [
          {
            title: "Prepared for parties with tables and decoration",
            body: "The room can fit a main table, buffet area, and support areas for drinks, cake, sweets, and savory food, keeping the event organized and easy to follow.",
          },
          {
            title: "Options for children and adults",
            body: "The space works both for kids' birthdays with play and entertainment and for adult celebrations with a shared table, music, and time to talk.",
          },
          {
            title: "Simple booking by message",
            body: "Send the date, time, birthday type, and number of guests. We'll confirm availability, price, and extras to secure the booking.",
          },
        ],
      },
      {
        key: "baby-showers",
        eventType: "Baby shower",
        photos: [
          "photos/casa-do-rato-festa-baloes-mesa-principal.webp",
          "photos/casa-do-rato-estacao-bebidas-aparador.webp",
          "photos/casa-do-rato-zona-sofas-rececao.webp",
        ],
        slug: "baby-showers",
        title: "Baby Shower Venue in Gaia | Casa do Rato",
        description:
          "Host a baby shower in a welcoming venue in Avintes, Vila Nova de Gaia, with a table, support area, and decoration extras available on request.",
        breadcrumbLabel: "Baby showers",
        hero: {
          eyebrow: "Baby showers in Gaia",
          title: "A welcoming setting for baby showers and family celebrations",
          body: "For more intimate moments, Casa do Rato offers a private, bright, easy-to-decorate venue designed to welcome family and friends comfortably.",
        },
        image: {
          src: "photos/casa-do-rato-buffet-evento-privado.webp",
          alt: "Buffet table with savory food, sweets, balloons, and a floral arrangement for a family celebration.",
        },
        summary: [
          "Baby showers",
          "Family celebrations for up to 50 people",
          "Changing table on request",
        ],
        details: [
          {
            title: "Easy to personalize",
            body: "You can adapt the room layout, bring your own decoration, or ask for decoration support to create the right atmosphere for the celebration.",
          },
          {
            title: "Practical support for food and drinks",
            body: "The venue includes a refrigerator, microwave, coffee machine, plates, cutlery, cups, jugs, trays, and tablecloths.",
          },
          {
            title: "Well located for Gaia and Porto",
            body: "We're in Avintes, Vila Nova de Gaia, with quick access for guests coming from Gaia, Porto, and nearby areas.",
          },
        ],
      },
      {
        key: "private-gatherings",
        eventType: "Private celebration",
        photos: [
          "photos/casa-do-rato-mesa-corrida-workshop.webp",
          "photos/casa-do-rato-zona-sofas-rececao.webp",
          "photos/casa-do-rato-estacao-bebidas-aparador.webp",
        ],
        slug: "private-celebrations",
        title: "Private Celebration Venue in Gaia | Casa do Rato",
        description:
          "Welcome family and friends in a private venue in Avintes, Vila Nova de Gaia, for gatherings, surprise parties, lunches, and small celebrations.",
        breadcrumbLabel: "Private celebrations",
        hero: {
          eyebrow: "Private celebrations",
          title: "A venue just for you for family gatherings, friends, and surprise parties",
          body: "When you want to bring people together in a private setting, Casa do Rato combines a table, support area, sofas, and room to move for a relaxed gathering.",
        },
        image: {
          src: "photos/casa-do-rato-mesa-apoio-encontros-grupo.webp",
          alt: "Side table next to the sideboard prepared for private group gatherings.",
        },
        summary: [
          "Family and friends gatherings",
          "Surprise parties and small get-togethers",
          "Shared table, sofas, and support area",
        ],
        details: [
          {
            title: "Privacy without complication",
            body: "During the booking, the venue is reserved for your group, making it easier to talk, celebrate, and organize the gathering at your own pace.",
          },
          {
            title: "Flexible for different formats",
            body: "You can use the room for a long table, buffet, gathering area, or a simple combination of food, conversation, and music.",
          },
          {
            title: "Designed for small groups",
            body: "Capacity for up to 50 people keeps the atmosphere close and comfortable, without the impersonal feel of a large event venue.",
          },
        ],
      },
      {
        key: "workshops",
        eventType: "Workshop / training",
        photos: [
          "photos/casa-do-rato-area-apoio-cafe-frigorifico.webp",
          "photos/casa-do-rato-mesa-apoio-encontros-grupo.webp",
          "photos/casa-do-rato-sala-principal-luz-natural.webp",
        ],
        slug: "workshops",
        title: "Workshop and Training Room in Vila Nova de Gaia | Casa do Rato",
        description:
          "Host workshops, training sessions, and learning gatherings in a private room in Avintes, Vila Nova de Gaia, with a long table and support area.",
        breadcrumbLabel: "Workshops",
        hero: {
          eyebrow: "Workshops and training",
          title: "A private room in Gaia for workshops, training, and learning sessions",
          body: "Casa do Rato also works for small group work sessions, with a long table, natural light, and practical support for breaks, coffee, and materials.",
        },
        image: {
          src: "photos/casa-do-rato-mesa-corrida-workshop.webp",
          alt: "Long table set up for a workshop, training session, or group gathering.",
        },
        summary: [
          "Workshops and training",
          "Small group sessions",
          "Long table, coffee, and support area",
        ],
        details: [
          {
            title: "Simple setup for learning or creating",
            body: "The long table makes it easy to run activities with materials, group sharing, in-person training, and collaborative work.",
          },
          {
            title: "Breaks without leaving the venue",
            body: "The support area with refrigerator, microwave, and coffee machine lets you organize simple coffee breaks during the session.",
          },
          {
            title: "Practical location in Avintes",
            body: "The room is in Vila Nova de Gaia, with quick access from Gaia and Porto, plus private parking for extra convenience.",
          },
        ],
      },
      {
        key: "corporate-events",
        eventType: "Corporate event",
        photos: [
          "photos/casa-do-rato-mesa-corrida-workshop.webp",
          "photos/casa-do-rato-zona-sofas-rececao.webp",
          "photos/casa-do-rato-area-apoio-cafe-frigorifico.webp",
        ],
        slug: "corporate-events",
        title: "Small Corporate Event Venue in Gaia | Casa do Rato",
        description:
          "Book a private venue in Avintes, Vila Nova de Gaia, for small corporate events, off-sites, launches, team buildings, and team gatherings.",
        breadcrumbLabel: "Corporate events",
        hero: {
          eyebrow: "Corporate events in Gaia",
          title: "A private venue for off-sites, launches, and team gatherings",
          body: "For teams that need a reserved and comfortable setting, Casa do Rato offers a simple alternative to impersonal meeting rooms and busy restaurants.",
        },
        image: {
          src: "photos/casa-do-rato-sala-principal-luz-natural.webp",
          alt: "View of the main room with natural light, a table, and a lounge area in the back.",
        },
        summary: [
          "Off-sites and team buildings",
          "Launches and team gatherings",
          "Reserved setting for up to 50 people",
        ],
        details: [
          {
            title: "More private than a restaurant",
            body: "The booking gives the group privacy, helping keep conversations, presentations, and team moments in a controlled environment.",
          },
          {
            title: "Format adjusted to the goal",
            body: "You can organize a work session, informal gathering, small presentation, or team moment with catering and decoration.",
          },
          {
            title: "Easy to confirm",
            body: "Send us the date, time, number of people, and event goal. We'll reply with availability, pricing, and support options.",
          },
        ],
      },
    ],
  },
  space: {
    eyebrow: "The space",
    title: "Casa do Rato in detail",
    body: "See the space in use for parties, workshops, and private gatherings, and find answers to the most common questions.",
  },
  gallery: {
    openLabel: "Open photo",
    dialogLabel: "Expanded photo gallery",
    closeLabel: "Close gallery",
    previousLabel: "Previous photo",
    nextLabel: "Next photo",
    viewAllLabel: "See all photos",
    images: [
      {
        src: "photos/casa-do-rato-sala-decorada-vista-geral.webp",
        alt: "Main room decorated for a party, with the main table, lounge area, slide, and support kitchen.",
      },
      {
        src: "photos/casa-do-rato-mesa-corrida-workshop.webp",
        alt: "Long table set up in the room for meals, workshops, or group gatherings.",
      },
      {
        src: "photos/casa-do-rato-mesa-tematica-aniversario-bolo.webp",
        alt: "Themed birthday table with balloons, decorative curtain, and cake.",
      },
      {
        src: "photos/casa-do-rato-canto-infantil-mesas-coloridas.webp",
        alt: "Kids' corner with colorful tables, small stools, and a slide.",
      },
      {
        src: "photos/casa-do-rato-buffet-evento-privado.webp",
        alt: "Buffet table with savory food, sweets, and a floral arrangement for a private event.",
      },
      {
        src: "photos/casa-do-rato-arco-baloes-tema-selva.webp",
        alt: "Balloon arch with jungle animals above the main table, set up for a first birthday.",
      },
      {
        src: "photos/casa-do-rato-mesa-apoio-encontros-grupo.webp",
        alt: "Side table next to the sideboard, prepared for group gatherings.",
      },
      {
        src: "photos/casa-do-rato-festa-baloes-mesa-principal.webp",
        alt: "Room decorated with a balloon arch and main table for a celebration.",
      },
      {
        src: "photos/casa-do-rato-sala-principal-luz-natural.webp",
        alt: "View of the main room from the entrance, with natural light and a lounge area in the back.",
      },
      {
        src: "photos/casa-do-rato-sala-ampla-janela-canto-infantil.webp",
        alt: "Spacious room with a window, kids' corner with a colorful table, slide, and lounge area.",
      },
      {
        src: "photos/casa-do-rato-zona-sofas-rececao.webp",
        alt: "Sofa area with a small table prepared for a relaxed reception.",
      },
      {
        src: "photos/casa-do-rato-zona-infantil-escorrega.webp",
        alt: "Kids' area with a slide next to the sofa area.",
      },
      {
        src: "photos/casa-do-rato-buffet-aniversario-baloes.webp",
        alt: "Birthday buffet table with sweets and savory food beneath balloon decorations.",
      },
      {
        src: "photos/casa-do-rato-bolo-aniversario-tematico.webp",
        alt: "Themed birthday cake displayed on a glass cake stand.",
      },
      {
        src: "photos/casa-do-rato-estacao-bebidas-aparador.webp",
        alt: "Drinks station with a dispenser, glasses, and jugs on the sideboard.",
      },
      {
        src: "photos/casa-do-rato-mesa-apoio-loica-talheres.webp",
        alt: "Sideboard with plates, cups, and gold cutlery ready to serve guests.",
      },
      {
        src: "photos/casa-do-rato-area-apoio-cafe-frigorifico.webp",
        alt: "Support area with a refrigerator, microwave, coffee machine, and built-in storage.",
      },
      {
        src: "photos/casa-do-rato-balao-leao-placa-aniversario.webp",
        alt: "Lion balloon and welcome sign for a jungle-themed first birthday.",
      },
      {
        src: "photos/casa-do-rato-entrada-armarios-plantas.webp",
        alt: "Entrance area with white cabinets, plants, and decorative lighting.",
      },
      {
        src: "photos/casa-do-rato-aparador-decorativo-mural.webp",
        alt: "Decorative sideboard with a diffuser, framed sign, and graphic wall mural.",
      },
    ],
  },
  booking: {
    eyebrow: "How to book",
    title: "Book by message",
    steps: [
      {
        title: "Send your date",
        body: "Tell us your preferred date, time, event type, and number of guests.",
      },
      {
        title: "Confirm the details",
        body: "We'll confirm availability, price, extras, and the deposit amount to secure the booking.",
      },
      {
        title: "Enjoy your event",
        body: "On the day, the venue is yours for the booked period, with 20 minutes of tolerance for arrival and 20 minutes for departure.",
      },
    ],
  },
  reviews: {
    eyebrow: "Reviews",
    title: "What our guests say",
    rating: "5.0",
    ratingLabel: "Rated 5.0 out of 5 on Google",
    sourceLabel: "on Google",
    summaryLabel: "Average rating on Google",
    // Shown only on translated pages: quotes always stay in the original Portuguese.
    originalLanguageNote: "Reviews are quoted in their original Portuguese.",
    // Excerpts from Google reviews, attributed by the reviewer's name only.
    items: [
      {
        quote:
          "Adoramos o espaço. Fizemos um evento familiar e o espaço estava muito bem adaptado para os miúdos brincarem. Os responsáveis foram extremamente prestáveis e ajudaram-nos em várias partes do processo.",
        author: "Daniel Teixeira",
      },
      {
        quote:
          "Escolhi a Casa do Rato para uma festa de aniversário e tenho a dizer que estava tudo perfeito, desde o espaço à decoração, à comida. A equipa é muito simpática e atenciosa. Recomendo muito.",
        author: "Inês Lima",
      },
      {
        quote:
          "Muito confortável. Organizei uma formação para um grupo de 12 pessoas, foi o ideal. Muito prestáveis também.",
        author: "Madalena Santos",
      },
      {
        quote:
          "Espaço super acolhedor e com tudo o que é publicitado e ainda mais umas surpresas que fazem a diferença quando se está a celebrar um dia especial. Espero repetir a experiência.",
        author: "Adriana Pascoal",
      },
      {
        quote:
          "Superaram as minhas expectativas, não mudava nada, estava tudo perfeito. Com certeza que os próximos aniversários vão ser na Casa do Rato.",
        author: "Rosa Almeida",
      },
      {
        quote:
          "Excelente local, excelente localização, ótimo local para juntar a família. Agradecer também aos responsáveis pela simpatia e amabilidade. Recomendo.",
        author: "Gerson Magalhaes",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    ariaLabel: "Frequently asked questions",
    ctaTitle: "Still have a question?",
    ctaBody: "Send us your question on WhatsApp. We usually reply within an hour.",
    ctaLabel: "Ask",
    items: [
      {
        question: "Where is Casa do Rato?",
        answer:
          "Casa do Rato is at Rua Cunha de Cima 17, in Avintes, Vila Nova de Gaia, with quick access from Gaia and Porto.",
      },
      {
        question: "What is the venue's maximum capacity?",
        answer: "We host private events for up to 50 people.",
      },
      {
        question: "What type of events can I host?",
        answer:
          "The venue is suitable for kids' and adult birthdays, baby showers, family or friends gatherings, workshops, training sessions, and small corporate events.",
      },
      {
        question: "How much does it cost to rent Casa do Rato?",
        answer:
          "The price depends on the event duration and the extras you would like to include. Tell us the date, event type, and number of guests and we will send you a tailored quote.",
      },
      {
        question: "How many hours are included in the booking?",
        answer:
          "The choice is entirely yours. Tell us the duration you have in mind and we will adjust the booking to the type of event you want to organize.",
      },
      {
        question: "When is payment due?",
        answer:
          "The date is reserved after the deposit is paid. The remaining amount must be paid before entering the venue.",
      },
      {
        question: "What is included?",
        answer: "The rental includes:",
        answerItems: [
          "Meal and dessert plates",
          "Cutlery, cake knives, and cups",
          "2 large drink jugs",
          "Trays and tablecloths",
          "Refrigerator, microwave, and coffee machine",
          "Private bathrooms",
          "Private parking",
        ],
      },
      {
        question: "What extras can I add?",
        answer: "You can add:",
        answerItems: [
          "Kids' package, with a trampoline, slide, games and painting table, and ball tent",
          "Free changing table, on request",
          "Decoration service",
          "Catering service",
          "Custom cakes",
          "Kids' entertainment",
          "And much more: your requests are the limit",
        ],
      },
      {
        question: "How does the coffee machine work?",
        answer:
          "We provide cups, sugar, and spoons. Coffee capsules are the booker's responsibility and must be compatible with the Continente capsule machine.",
        link: {
          label: "See compatible capsules",
          href: "https://www.continente.pt/produto/capsulas-de-cafe-classico-int-10-pack-poupanca-continente-continente-7241223.html",
        },
      },
      {
        question: "Can I decorate or change the room layout?",
        answer:
          "Yes. During your booking, you can adapt the room layout and bring decorations, as long as everything is returned to its original place at the end.",
      },
      {
        question: "What do we need to do before leaving?",
        answer:
          "At the end, please restore the original layout, place used tableware on the trolley, remove any decorations you brought, and take your rubbish with you.",
      },
    ],
  },
  contact: {
    eyebrow: "Bookings",
    title: "Let's confirm your date",
    body: "Send us a message with your preferred date, time, event type, and guest count. We usually reply within an hour.",
    linksAriaLabel: "Contact links",
    fabLabel: "Book",
    whatsappMessage,
    links: [
      {
        type: "whatsapp",
        label: "Book",
        href: availabilityHref,
        ariaLabel: "Book on WhatsApp",
        variant: "primary",
      },
      {
        type: "phone",
        label: "Call",
        href: callHref,
        ariaLabel: `Call ${phone.display}`,
        variant: "secondary",
      },
      {
        type: "instagram",
        label: "Instagram",
        href: "https://instagram.com/casadorato.eventos",
        ariaLabel: "Follow on Instagram",
        variant: "secondary",
      },
    ],
  },
  location: {
    eyebrow: "Location",
    title: "Avintes, Vila Nova de Gaia",
    body: "Casa do Rato is in Avintes, Vila Nova de Gaia, with quick access from Gaia and Porto. See the location on the map and use the contacts below to reach us directly.",
    mapTitle: "Casa do Rato map",
    mapSrc:
      "https://www.google.com/maps?q=Casa%20do%20Rato%20Eventos%2C%20Vila%20Nova%20de%20Gaia%2C%20Porto&output=embed",
    addressLabel: "Address",
    addressLines: [
      "Casa do Rato Eventos",
      "R. Cunha de Cima 17",
      "4430-681 Avintes",
      "Vila Nova de Gaia, Porto",
    ],
    directionsLabel: "Open in Google Maps",
    directionsHref: "https://share.google/wthpJCybsH4YGAJo9",
    contactsLabel: "Contacts",
    contacts: [
      {
        label: "Google",
        value: "Google profile",
        href: "https://share.google/4G4qyWvjWJs1PBRb8",
      },
      {
        label: "WhatsApp",
        value: phone.display,
        href: availabilityHref,
      },
      {
        label: "Phone",
        value: phone.display,
        href: callHref,
      },
      {
        label: "Instagram",
        value: "@casadorato.eventos",
        href: "https://instagram.com/casadorato.eventos",
      },
    ],
  },
  notFound: {
    title: "Page not found | Casa do Rato",
    description: "The page you are looking for doesn't exist or has moved.",
    eyebrow: "Error 404",
    heading: "We couldn't find this page",
    body: "The page you are looking for doesn't exist or has moved. You can go back to the homepage or talk to us directly.",
    homeLabel: "Back to homepage",
  },
};
