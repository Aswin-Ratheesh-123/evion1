export interface NavLink {
  label: string;
  href: string;
  badge?: string;
  description?: string;
}

export interface NavDropdown {
  label: string;
  items: NavLink[];
}

export const navLinks: (NavLink | NavDropdown)[] = [
  {
    label: 'Charging Network',
    href: '/charging-network',
  },
  {
    label: 'Solutions',
    items: [
      {
        label: 'Solutions Overview',
        href: '/solutions',
        description: 'Explore our comprehensive energy charging ecosystem',
      },
      {
        label: 'Home Charging',
        href: '/solutions/home',
        description: 'EVION Home One smart residential charger with solar sync',
      },
      {
        label: 'Business & Office',
        href: '/solutions/business',
        description: 'Turn workplace parking into an attractive corporate amenity',
      },
      {
        label: 'Commercial & Retail',
        href: '/solutions/commercial',
        description: 'High-speed destination charging for shopping centers & hotels',
      },
      {
        label: 'Fleet Depots',
        href: '/solutions/fleet',
        description: 'Depot load orchestration and telemetry for commercial fleets',
      },
    ],
  },
  {
    label: 'Technology',
    href: '/technology',
  },
  {
    label: 'Locations',
    href: '/locations',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'FAQ',
    href: '/faq',
  },
];

export const footerLinks = {
  charging: [
    { label: 'Find a Charger', href: '/charging-network' },
    { label: 'Charging Network', href: '/charging-network' },
    { label: 'Locations Directory', href: '/locations' },
    { label: 'EV Compatibility', href: '/faq#compatibility' },
    { label: 'Tariff & Speeds', href: '/charging-network' },
  ],
  solutions: [
    { label: 'Home Charging', href: '/solutions/home' },
    { label: 'Business & Workplace', href: '/solutions/business' },
    { label: 'Commercial Real Estate', href: '/solutions/commercial' },
    { label: 'Fleet Electrification', href: '/solutions/fleet' },
    { label: 'ROI Calculator', href: '/#calculator' },
  ],
  company: [
    { label: 'About EVION', href: '/about' },
    { label: 'Our Technology', href: '/technology' },
    { label: 'Partner With Us', href: '/contact' },
    { label: 'Contact Team', href: '/contact' },
    { label: 'News & Press', href: '/about#news' },
  ],
  resources: [
    { label: 'FAQ Knowledge Base', href: '/faq' },
    { label: 'System Status', href: '/locations' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};
