import {
  Zap, Droplets, Flame, Wind, Waves, Search, Camera, ShieldCheck, Trash2,
  Thermometer, Droplet, Wrench, ShowerHead, Leaf, Sun, Gauge, Bath, ChefHat,
  type LucideIcon,
} from 'lucide-react';

export const COMPANY = {
  name: 'Terrano Plumbing & Remodeling',
  shortName: 'Terrano',
  phone: '(561) 477-3197',
  phoneRaw: '5614773197',
  address: '11444 Clear Creek Pl, Boca Raton, FL 33428',
  emergencyHours: '24/7 Emergency Service',
  license: 'CFC053956',
  serviceAreas: [
    'Boca Raton', 'Delray Beach', 'Boynton Beach', 'Deerfield Beach',
    'Coral Springs', 'Pompano Beach', 'Parkland', 'Fort Lauderdale',
  ],
  facebookUrl: 'https://www.facebook.com/TerranoPlumbing',
};

export const TRUST_LINE = 'Family Owned • Licensed & Insured • 24/7 Emergency Service';
export const GREEN_DISTINCTION = "South Florida's First Licensed Green Plumber";

/* ---------------- Services ---------------- */

export type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ServiceGroup = {
  id: 'plumbing' | 'remodeling';
  label: string;
  blurb: string;
  services: ServiceItem[];
};

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: 'plumbing',
    label: 'Plumbing',
    blurb: 'Full-service residential and commercial plumbing — from emergency repairs to water heaters and green-energy solutions.',
    services: [
      { icon: Zap, title: 'Emergency Plumbing', description: 'Available 24/7 for burst pipes, flooding, and urgent plumbing failures across South Florida.' },
      { icon: Search, title: 'Leak Detection', description: 'Specialized equipment pinpoints hidden leaks behind walls, under slabs, and underground with minimal disruption.' },
      { icon: Droplets, title: 'Leak & Drip Repair', description: 'Repair of leaking pipes, fittings, and fixtures to stop water waste and prevent damage.' },
      { icon: Wind, title: 'Sewer & Drain Cleaning', description: 'Clearing of clogged and slow drains and sewer lines using professional cleaning equipment.' },
      { icon: Camera, title: 'Video Line Inspection', description: 'Camera inspection of pipes and sewer lines to locate blockages, cracks, and root intrusion.' },
      { icon: ShieldCheck, title: 'Backflow Repair', description: 'Testing, repair, and maintenance of backflow prevention devices to protect your water supply.' },
      { icon: Trash2, title: 'Garbage Disposal Repair & Installation', description: 'Repair and replacement of garbage disposals, including new unit installation.' },
      { icon: Thermometer, title: 'Infrared Imaging', description: 'Thermal imaging to detect hidden moisture, temperature loss, and plumbing issues behind surfaces.' },
      { icon: Flame, title: 'Water Heater Installation & Repair', description: 'Installation, repair, and replacement of traditional tank water heaters — gas and electric.' },
      { icon: Flame, title: 'Tankless Water Heaters', description: 'Sales, installation, and service of energy-efficient tankless water heater systems.' },
      { icon: Thermometer, title: 'Hybrid Water Heaters', description: 'Installation and service of hybrid heat-pump water heaters for improved efficiency.' },
      { icon: Droplet, title: 'Instant Hot Water Systems', description: 'Installation and repair of instant hot water dispensers for kitchens and bar areas.' },
      { icon: Wrench, title: 'Toilet Repair & Replacement', description: 'Repair of running or leaking toilets and full toilet replacement and installation.' },
      { icon: Waves, title: 'Water Line Repair & Replacement', description: 'Repair and replacement of damaged or corroded water supply lines to the home.' },
      { icon: ShowerHead, title: 'Shower Pan Installation & Replacement', description: 'Installation and replacement of shower pans with proper waterproofing and drainage.' },
      { icon: Leaf, title: 'Green Energy Plumbing Services', description: 'Sustainable plumbing solutions that reduce water and energy consumption — "Go Green, Save Some Green."' },
      { icon: Sun, title: 'Solar Sales & Service', description: 'Sales and service of solar water heating systems for energy-efficient hot water.' },
      { icon: Gauge, title: 'Water Audits', description: 'Assessment of water usage and plumbing systems to identify efficiency improvements.' },
    ],
  },
  {
    id: 'remodeling',
    label: 'Remodeling',
    blurb: 'Complete design-build renovations — from demolition to final painting — handled by a single trusted team.',
    services: [
      { icon: Bath, title: 'Bathroom Remodeling', description: 'Complete bathroom renovations including demolition, plumbing, design, custom cabinetry, and finish work.' },
      { icon: ChefHat, title: 'Kitchen Remodeling', description: 'Full kitchen renovations from layout and cabinetry to plumbing, electrical coordination, and final finishes.' },
    ],
  },
];

/* ---------------- Testimonials ---------------- */
// Sourced from Terrano Plumbing & Remodeling's original website customer testimonials.

export type Testimonial = {
  name: string;
  location: string;
  text: string;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Keith Emery',
    location: 'Boca Raton, FL',
    initials: 'KE',
    text: 'This is the second total renovation Terrano has performed for us in less than a year — first a guest bathroom, now the master. First-class work qualified to be featured in any magazine. Nothing short of a true showpiece. I would highly recommend this company to anyone.',
  },
  {
    name: 'John Kane',
    location: 'Boynton Beach, FL',
    initials: 'JK',
    text: 'Way beyond expectations. Ross was very professional and timely. I own four rental properties and this was the first time I hired him — he will be the only one from here on out. Prices were very fair and his work was outstanding.',
  },
  {
    name: 'Kenneth Nathan',
    location: 'Boca Raton, FL',
    initials: 'KN',
    text: 'From the moment I left the initial voicemail, Ross was in contact with me on the entire project from start to finish. He thoroughly explained all the work, provided a detailed work order, and completed the job on time as promised. Would definitely hire again.',
  },
  {
    name: 'Sig Bokalders',
    location: 'Boynton Beach, FL',
    initials: 'SB',
    text: 'Terrano provides excellent quality service — always prompt, professional, and thorough. I was particularly impressed with how fast they arrived the morning our water heater broke. They were here within two hours. If you want the job done right the first time, they are the best.',
  },
  {
    name: 'Lorrie Culligan',
    location: 'Boca Raton, FL',
    initials: 'LC',
    text: 'Terrano is prompt, professional, and knowledgeable. They handle the job and follow through where others dropped the ball. They think outside the box and go above and beyond. The biggest thing is I trust them — that is huge down here in South Florida.',
  },
  {
    name: 'Barbara Williams',
    location: 'Pompano Beach, FL',
    initials: 'BW',
    text: 'The very best experience I have ever had with a contractor in my home. Every person on the staff was knowledgeable and efficient, respectful of my home and family. Everyone showed up as expected. The workmanship is excellent. I would use them again.',
  },
];

/* ---------------- FAQ ---------------- */

export type FaqItem = { question: string; answer: string };

export const FAQS: FaqItem[] = [
  {
    question: 'How much do plumbing and remodeling services cost?',
    answer: 'Every project is different, so we provide free, no-obligation written estimates before any work begins. You will know the scope and cost upfront before we start — no hidden fees.',
  },
  {
    question: 'Do you handle emergency plumbing calls?',
    answer: 'Yes. We are available 24/7 for plumbing emergencies including burst pipes, severe leaks, water heater failures, and sewer backups. Call (561) 477-3197 at any hour and our team will respond.',
  },
  {
    question: 'Which areas do you serve?',
    answer: 'We are based in Boca Raton and serve Palm Beach County and Broward County, including Delray Beach, Boynton Beach, Deerfield Beach, Coral Springs, Pompano Beach, Parkland, Fort Lauderdale, and surrounding communities.',
  },
  {
    question: 'Is your work warrantied?',
    answer: 'We stand behind our workmanship and address any concerns after the job is completed. Manufacturer warranties on installed parts and fixtures also apply.',
  },
  {
    question: 'How soon can you schedule a visit?',
    answer: 'For emergencies, we respond as quickly as possible. For standard service calls and estimate requests, contact us and we will schedule a visit at the earliest available time.',
  },
  {
    question: 'How long does a kitchen or bathroom remodel take?',
    answer: 'Timelines vary based on the size and scope of the project. We provide an estimated timeline with your written estimate and keep you informed throughout. Contact us to discuss your specific project.',
  },
];

/* ---------------- Gallery Concept ---------------- */
// Concept imagery for website preview. Replace with Terrano's completed project
// photography before launch. Alt text intentionally does not claim ownership.

export type GalleryCategory = 'Bathrooms' | 'Kitchens' | 'Plumbing' | 'Repairs';

export type GalleryImage = {
  category: GalleryCategory;
  src: string;
  alt: string;
};

export const GALLERY_CATEGORIES: ('All' | GalleryCategory)[] = [
  'All', 'Bathrooms', 'Kitchens', 'Plumbing', 'Repairs',
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    category: 'Kitchens',
    src: 'https://images.pexels.com/photos/36511371/pexels-photo-36511371.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Modern kitchen remodeling inspiration with white cabinetry',
  },
  {
    category: 'Kitchens',
    src: 'https://images.pexels.com/photos/35493893/pexels-photo-35493893.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Granite countertop kitchen renovation inspiration',
  },
  {
    category: 'Kitchens',
    src: 'https://images.pexels.com/photos/10827337/pexels-photo-10827337.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Spacious kitchen interior inspiration',
  },
  {
    category: 'Bathrooms',
    src: 'https://images.pexels.com/photos/33529508/pexels-photo-33529508.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Luxury bathroom remodeling inspiration with marble surfaces',
  },
  {
    category: 'Bathrooms',
    src: 'https://images.pexels.com/photos/7045908/pexels-photo-7045908.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Contemporary bathroom with glass shower inspiration',
  },
  {
    category: 'Bathrooms',
    src: 'https://images.pexels.com/photos/17715137/pexels-photo-17715137.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Brass faucet and tub bathroom remodeling inspiration',
  },
  {
    category: 'Plumbing',
    src: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Professional pipe installation inspiration',
  },
  {
    category: 'Plumbing',
    src: 'https://images.pexels.com/photos/29226620/pexels-photo-29226620.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Plumber installing radiator pipe inspiration',
  },
  {
    category: 'Repairs',
    src: 'https://images.pexels.com/photos/5691536/pexels-photo-5691536.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Water heater repair inspiration',
  },
  {
    category: 'Repairs',
    src: 'https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Plumbing fixture repair inspiration',
  },
];

export const GALLERY_NOTE =
  'Concept imagery shown for website preview. Replace with Terrano\u2019s completed project photography before launch.';

/* ---------------- Service options for the estimate form ---------------- */

export const ESTIMATE_SERVICE_OPTIONS: string[] = [
  'General Inquiry',
  ...SERVICE_GROUPS[0].services.map((s) => s.title),
  ...SERVICE_GROUPS[1].services.map((s) => s.title),
  'Other',
];
