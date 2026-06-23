import gitauraImg from '../assets/gitaura_portfolio.webp';
import weatherImg from '../assets/weather_portfolio.webp';
import furnitureImg from '../assets/furniture_portfolio.webp';
import boutiqueImg from '../assets/boutique_portfolio.webp';
import restaurantImg from '../assets/restaurant_portfolio.webp';
import budgetImg from '../assets/budget_portfolio.webp';
import teamjamsImg from '../assets/teamjams_portfolio.webp';

export const projectsData = [
  {
    id: "git-aura",
    name: "GitAura",
    tagline: "GitHub Profile Analyzer & Developer Analytics Dashboard",
    description: "An advanced Git analytics dashboard helping developers analyze and display repository metrics, language breakdowns, and profile contributions with interactive charts.",
    problem: "Developers frequently struggle to showcase their actual code contributions, repository impact, and language competencies in a clean, visual format that recruiters and clients can quickly understand.",
    solution: "GitAura pulls live data directly from the GitHub API and renders beautiful, digestible charts detailing contribution distribution, repository star ratios, language statistics, and public activity summaries in a single modern screen.",
    tools: ["React", "Vite", "GitHub API", "ChartJS / Recharts", "Tailwind CSS", "Framer Motion"],
    features: [
      "Real-time GitHub profile search and statistical scraping",
      "Interactive language distribution charts",
      "Repository popularity index based on stars, forks, and sizes",
      "Visual contribution history graphs matching Github themes",
      "Starred repository explorer with direct source code references"
    ],
    liveLink: "https://a-git-aura.vercel.app/",
    colorTheme: "from-indigo-600 to-blue-500",
    image: gitauraImg
  },
  {
    id: "weather-app",
    name: "Weather App",
    tagline: "Real-time Weather Dashboard & Forecast Client",
    description: "A lightning-fast, ad-free weather application rendering accurate current conditions and micro-weather forecasts with a gorgeous adaptive glassmorphic user interface.",
    problem: "Typical consumer weather apps are laden with intrusive ads, slow load times, and cluttered layouts, failing to present key scientific data like UV index, visibility, and pressure gradients in an instantly readable way.",
    solution: "We designed a streamlined, clean dashboard powered by OpenWeatherMap APIs that dynamically adjusts its visual gradients, illustrations, and background effects to reflect the live weather state of the queried location.",
    tools: ["React", "Vite", "OpenWeatherMap API", "Geocoding API", "Tailwind CSS", "Recharts"],
    features: [
      "Instant city search with automatic browser geolocalizing",
      "5-day forecast with interactive hourly temperature graphs",
      "Detailed metrics display: UV index, pressure, visibility, and wind vectors",
      "Adaptive UI theme matching sunny, rainy, snowy, or stormy conditions",
      "Recent search history saved for immediate repeat check-ins"
    ],
    liveLink: "https://weather-app-aadi.vercel.app/",
    colorTheme: "from-blue-600 to-cyan-500",
    image: weatherImg
  },
  {
    id: "luxury-furniture",
    name: "Luxury Furniture Website",
    tagline: "Premium High-End Furniture Ecommerce & Showcase Concept",
    description: "A premium design-led digital boutique presenting premium home decor and furniture with scroll-driven animations, high-fidelity grids, and modern checkout flows.",
    problem: "High-end product brands rely heavily on tactile experiences. Standard, cookie-cutter Shopify templates fail to convey the elite quality, material details, and premium brand value of physical showrooms.",
    solution: "A bespoke concept site featuring large-image layouts, custom layout shifting, scroll-triggered text animations, and an interactive zoom selector to mirror the luxury experience digitally.",
    tools: ["React", "Framer Motion", "Vanilla CSS", "Google Fonts", "Intersection Observer"],
    features: [
      "Immersive hero layout with premium typography and large-scale photography",
      "Parallax scroll effects on product collections",
      "Custom product details sheet showing fabric swatches, dimensions, and materials",
      "Smooth cart slide-out panel with automatic tax and shipping estimators",
      "Responsive lookbook grids styling premium interior inspiration"
    ],
    liveLink: "https://the-new-furniture.vercel.app/",
    colorTheme: "from-zinc-800 to-amber-700",
    image: furnitureImg
  },
  {
    id: "boutique-website",
    name: "Boutique Website",
    tagline: "Local Boutique Fashion Brand Identity & Booking Interface",
    description: "A customized web interface showcasing curated fashion collections and managing custom tailoring consultations for a boutique apparel shop.",
    problem: "Local boutique stores struggle to showcase their custom apparel catalogs to a digital-first audience, missing out on local bookings and premium client styling consults.",
    solution: "An elegant, visual-focused catalog and scheduler that positions the boutique as a bespoke atelier, encouraging direct appointments and WhatsApp queries.",
    tools: ["React", "Tailwind CSS", "Lucide Icons", "Framer Motion", "Google Fonts"],
    features: [
      "Visual catalog with dynamic filters for categories (Ethnic, Modern, Accessories)",
      "Curated style-book highlighting custom bridal and event coordinates",
      "WhatsApp click-to-chat integration for prompt bespoke ordering",
      "Interactive consultation form mapping sizing and timeline expectations",
      "Responsive customer testimonial slider building local credibility"
    ],
    liveLink: "https://anjali-boutiques.vercel.app/",
    colorTheme: "from-fuchsia-600 to-rose-500",
    image: boutiqueImg
  },
  {
    id: "restaurant-website",
    name: "Restaurant Website",
    tagline: "High-Converting Restaurant Showcase & Digital Menu Client",
    description: "A modern, mobile-optimized restaurant website featuring a beautiful interactive digital menu, reservation request engine, and localized SEO.",
    problem: "Many restaurants rely on heavy, non-responsive PDF menus that frustrate mobile users, resulting in lost walk-ins and poor positioning on search engines.",
    solution: "We engineered a clean, lightweight, mobile-first website that prioritizes immediate booking and offers a fully accessible, rich-text menu with dietary badges.",
    tools: ["React", "Vite", "Tailwind CSS", "Lucide Icons", "Google Maps API"],
    features: [
      "Mobile-first, interactive dietary-filtered menu (Veg, Vegan, Gluten-Free)",
      "Simple, modal-based table booking request with auto-filled date selection",
      "Opening hours panel with instant visual indicator (Open Now / Closed)",
      "Embedded local map showing driving directions",
      "Signature dishes slider showcasing chef testimonials and ingredient origins"
    ],
    liveLink: "https://the-restaurant-project.vercel.app/",
    colorTheme: "from-orange-600 to-amber-500",
    image: restaurantImg
  },
  {
    id: "trip-budget-calculator",
    name: "Trip Budget Calculator",
    tagline: "Travel Expense Tracker & Cost Splitter Application",
    description: "A highly practical budget utility allowing travelers to log expenses, convert currencies, map costs by category, and split bills among group members.",
    problem: "Managing shared budgets, foreign conversion rates, and split payments on complex spreadsheets while traveling is stressful and prone to manual entry mistakes.",
    solution: "A mobile-optimized, fast single-page app that stores records locally and computes live currency estimates, category summaries, and individual debt resolutions.",
    tools: ["React", "Tailwind CSS", "Lucide Icons", "Local Storage API", "Recharts"],
    features: [
      "Instant expense logging with custom categorization",
      "Real-time currency estimation and conversion buffers",
      "Clean visual breakdown of expenditures via category pie-charts",
      "Group split feature computing 'who owes whom' with mathematical simplicity",
      "Local storage persistence allowing offline logging and retrieval"
    ],
    liveLink: "https://asambhav-trip.vercel.app/",
    colorTheme: "from-teal-600 to-emerald-500",
    image: budgetImg
  },
  {
    id: "teamjams",
    name: "TeamJams",
    tagline: "Civic Engagement Platform & Local Action Hub",
    description: "A community dashboard for coordinating local volunteer projects, sharing updates, collecting feedback, and locating civic initiatives on an interactive map.",
    problem: "Local community organizations and civic groups lack a single, accessible platform to coordinate volunteers, update campaigns, and receive neighborhood reports.",
    solution: "An open, transparent community center showcasing localized campaigns, tracking volunteer hours, and encouraging citizens to report civic needs.",
    tools: ["React", "Vite", "Tailwind CSS", "Lucide Icons", "Framer Motion"],
    features: [
      "Interactive coordinate mapping showing active community hotspots",
      "Real-time campaign progress bars tracking donor and volunteer goals",
      "Community reports form allowing residents to submit safety or cleanup tasks",
      "Volunteer scheduling sheet with automatic calendar notification hooks",
      "Resource repository containing meeting notes and policy templates"
    ],
    liveLink: "https://teamjams.vercel.app/",
    colorTheme: "from-purple-600 to-indigo-500",
    image: teamjamsImg
  }
];
