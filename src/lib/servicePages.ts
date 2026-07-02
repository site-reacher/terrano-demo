import {
  Zap, Search, Droplets, Wind, Camera, ShieldCheck, Trash2,
  Thermometer, Flame, Droplet, Wrench, Waves, ShowerHead, Leaf, Sun, Gauge,
  Bath, ChefHat,
  type LucideIcon,
} from 'lucide-react';

export type ServicePage = {
  slug: string;
  title: string;
  icon: LucideIcon;
  heroTitle: string;
  intro: string;
  benefits: string[];
  relatedSlugs: string[];
};

export type ServicePageCategory = {
  id: string;
  label: string;
  blurb: string;
  services: ServicePage[];
};

export const SERVICE_PAGES: ServicePageCategory[] = [
  {
    id: 'plumbing',
    label: 'Plumbing Services',
    blurb: 'Full-service residential and commercial plumbing — from emergency repairs to water heaters and green-energy solutions.',
    services: [
      {
        slug: 'emergency-plumbing',
        title: 'Emergency Plumbing',
        icon: Zap,
        heroTitle: '24/7 Emergency Plumbing Service',
        intro: 'Plumbing emergencies do not wait for business hours. Our team is available around the clock to respond to burst pipes, severe leaks, overflows, and other urgent plumbing failures across South Florida.',
        benefits: [
          'Rapid response for burst pipes and flooding',
          'Available 24 hours a day, 7 days a week',
          'Licensed professionals on every call',
          'Temporary and permanent repair solutions',
        ],
        relatedSlugs: ['leak-detection-specialists', 'leak-and-drip-repair', 'sewer-and-drain-cleaning'],
      },
      {
        slug: 'backflow-repair',
        title: 'Backflow Repair',
        icon: ShieldCheck,
        heroTitle: 'Backflow Testing, Repair & Prevention',
        intro: 'Backflow prevention devices protect your drinking water from contamination. We provide testing, repair, and maintenance to keep your system compliant and your water supply safe.',
        benefits: [
          'Annual backflow testing and certification',
          'Repair and replacement of prevention devices',
          'Compliance with local water utility requirements',
          'Protection of your potable water supply',
        ],
        relatedSlugs: ['water-line-repair-and-replacement', 'water-audits', 'leak-detection-specialists'],
      },
      {
        slug: 'garbage-disposals',
        title: 'Garbage Disposals',
        icon: Trash2,
        heroTitle: 'Garbage Disposal Repair & Installation',
        intro: 'A malfunctioning garbage disposal can disrupt your kitchen and create unpleasant odors. We repair and replace disposals quickly, and install new units built to last.',
        benefits: [
          'Repair of jams, leaks, and motor failures',
          'New disposal installation with proper wiring',
          'Removal and replacement of old units',
          'Recommendations for the right size and model',
        ],
        relatedSlugs: ['sewer-and-drain-cleaning', 'leak-and-drip-repair', 'instant-hot-water'],
      },
      {
        slug: 'green-energy-sales-and-service',
        title: 'Green Energy Sales and Service',
        icon: Leaf,
        heroTitle: 'Green Energy Plumbing Solutions',
        intro: 'Sustainable plumbing can reduce both your water and energy bills. As South Florida\u2019s first licensed green plumber, we offer eco-friendly products and services designed to conserve resources.',
        benefits: [
          'Water-saving fixtures and low-flow solutions',
          'Energy-efficient appliance recommendations',
          'Green plumbing system design and upgrades',
          'Ongoing service for green plumbing products',
        ],
        relatedSlugs: ['solar-sales-and-service', 'water-audits', 'hybrid-water-heaters'],
      },
      {
        slug: 'hybrid-water-heaters',
        title: 'Hybrid Water Heaters',
        icon: Thermometer,
        heroTitle: 'Hybrid Heat-Pump Water Heaters',
        intro: 'Hybrid water heaters combine heat-pump technology with traditional tank storage to deliver hot water efficiently. We help you select, install, and maintain the right system for your home.',
        benefits: [
          'Lower energy consumption than standard tanks',
          'Heat-pump and electric backup in one unit',
          'Professional sizing and installation',
          'Maintenance and repair for existing hybrid units',
        ],
        relatedSlugs: ['tankless-heaters-electric-or-gas', 'water-heaters-electric-or-gas', 'solar-sales-and-service'],
      },
      {
        slug: 'infrared-imaging',
        title: 'Infrared Imaging',
        icon: Thermometer,
        heroTitle: 'Infrared Thermal Imaging Inspection',
        intro: 'Thermal imaging lets us see behind walls and under floors without cutting into them. We use infrared cameras to detect hidden moisture, temperature loss, and plumbing problems early.',
        benefits: [
          'Non-invasive detection of hidden leaks',
          'Identifies moisture behind walls and ceilings',
          'Locates temperature loss and insulation gaps',
          'Supports accurate repair planning',
        ],
        relatedSlugs: ['leak-detection-specialists', 'water-audits', 'video-line-inspection'],
      },
      {
        slug: 'instant-hot-water',
        title: 'Instant Hot Water',
        icon: Droplet,
        heroTitle: 'Instant Hot Water Dispenser Installation',
        intro: 'Instant hot water dispensers provide near-boiling water at the tap — perfect for cooking, tea, and cleanup. We install and service these convenient systems for kitchens and bar areas.',
        benefits: [
          'Near-boiling water on demand at the sink',
          'Compact under-sink installation',
          'Repair of existing dispenser systems',
          'Compatible with most kitchen faucet setups',
        ],
        relatedSlugs: ['garbage-disposals', 'water-heaters-electric-or-gas', 'tankless-heaters-electric-or-gas'],
      },
      {
        slug: 'leak-detection-specialists',
        title: 'Leak Detection Specialists',
        icon: Search,
        heroTitle: 'Professional Leak Detection Services',
        intro: 'Hidden leaks can cause significant damage before you even notice them. Our specialized equipment pinpoints leaks behind walls, under slabs, and underground with minimal disruption to your property.',
        benefits: [
          'Electronic and acoustic leak detection',
          'Locates leaks under slabs and behind walls',
          'Minimal disruption to your home',
          'Early detection prevents costly water damage',
        ],
        relatedSlugs: ['leak-and-drip-repair', 'infrared-imaging', 'water-line-repair-and-replacement'],
      },
      {
        slug: 'leak-and-drip-repair',
        title: 'Leak and Drip Repair',
        icon: Droplets,
        heroTitle: 'Leak and Drip Repair Services',
        intro: 'Even a small drip can waste hundreds of gallons and drive up your water bill. We repair leaking pipes, fittings, faucets, and fixtures to stop water waste and prevent damage.',
        benefits: [
          'Faucet, fixture, and pipe leak repair',
          'Stop wasted water and rising bills',
          'Prevent water damage to walls and cabinets',
          'Durable, code-compliant repairs',
        ],
        relatedSlugs: ['leak-detection-specialists', 'toilet-repair-and-replacement', 'sewer-and-drain-cleaning'],
      },
      {
        slug: 'sewer-and-drain-cleaning',
        title: 'Sewer and Drain Cleaning',
        icon: Wind,
        heroTitle: 'Sewer & Drain Cleaning Services',
        intro: 'Clogged drains and slow sewer lines can escalate quickly. We use professional cleaning equipment to clear blockages and restore proper flow throughout your plumbing system.',
        benefits: [
          'Clears clogs in kitchen, bath, and main lines',
          'Professional snaking and hydro-jetting',
          'Removes grease, scale, and root intrusion',
          'Prevents backups and slow drainage',
        ],
        relatedSlugs: ['video-line-inspection', 'leak-and-drip-repair', 'garbage-disposals'],
      },
      {
        slug: 'shower-pan-installation-and-replacement',
        title: 'Shower Pan Installation & Replacement',
        icon: ShowerHead,
        heroTitle: 'Shower Pan Installation & Replacement',
        intro: 'A properly installed shower pan is essential for waterproofing your bathroom. We install and replace shower pans with correct drainage and sealing to prevent leaks and water damage.',
        benefits: [
          'Proper waterproofing and slope to drain',
          'Replacement of cracked or leaking pans',
          'New installation for remodels and additions',
          'Code-compliant materials and methods',
        ],
        relatedSlugs: ['leak-detection-specialists', 'bathroom-remodeling', 'water-line-repair-and-replacement'],
      },
      {
        slug: 'solar-sales-and-service',
        title: 'Solar Sales and Service',
        icon: Sun,
        heroTitle: 'Solar Water Heating Systems',
        intro: 'Solar water heating uses the sun\u2019s energy to reduce your water heating costs. We sell, install, and service solar water heating systems tailored to South Florida homes.',
        benefits: [
          'Reduces water heating energy costs',
          'Sales, installation, and ongoing service',
          'Environmentally friendly hot water',
          'Expert recommendations for your home',
        ],
        relatedSlugs: ['green-energy-sales-and-service', 'hybrid-water-heaters', 'water-audits'],
      },
      {
        slug: 'tankless-heaters-electric-or-gas',
        title: 'Tankless Heaters \u2013 Electric or Gas',
        icon: Flame,
        heroTitle: 'Tankless Water Heater Installation & Service',
        intro: 'Tankless water heaters deliver hot water on demand without the energy waste of keeping a tank warm. We sell, install, and service both electric and gas tankless systems.',
        benefits: [
          'Endless hot water on demand',
          'Lower energy costs versus tank heaters',
          'Compact, space-saving design',
          'Sales, installation, and repair service',
        ],
        relatedSlugs: ['water-heaters-electric-or-gas', 'hybrid-water-heaters', 'instant-hot-water'],
      },
      {
        slug: 'toilet-repair-and-replacement',
        title: 'Toilet Repair and Replacement',
        icon: Wrench,
        heroTitle: 'Toilet Repair & Replacement',
        intro: 'Running, leaking, or clogged toilets are disruptive and wasteful. We repair common toilet problems and provide full replacement and installation when needed.',
        benefits: [
          'Fix running, leaking, and clogging toilets',
          'Full toilet replacement and installation',
          'Water-saving upgrade recommendations',
          'Fast, clean, and reliable service',
        ],
        relatedSlugs: ['leak-and-drip-repair', 'sewer-and-drain-cleaning', 'instant-hot-water'],
      },
      {
        slug: 'video-line-inspection',
        title: 'Video Line Inspection',
        icon: Camera,
        heroTitle: 'Video Pipe & Sewer Line Inspection',
        intro: 'Camera inspection takes the guesswork out of diagnosing pipe problems. We insert a high-resolution camera into your pipes to locate blockages, cracks, and root intrusion with precision.',
        benefits: [
          'Pinpoints blockages and pipe damage',
          'Identifies root intrusion and cracks',
          'No digging or guesswork required',
          'Supports accurate repair decisions',
        ],
        relatedSlugs: ['sewer-and-drain-cleaning', 'leak-detection-specialists', 'water-line-repair-and-replacement'],
      },
      {
        slug: 'water-audits',
        title: 'Water Audits',
        icon: Gauge,
        heroTitle: 'Water Usage Audits & Efficiency Assessment',
        intro: 'A water audit helps you understand where your water goes and how to use less. We assess your plumbing system and water usage to identify efficiency improvements and potential savings.',
        benefits: [
          'Whole-home water usage assessment',
          'Identifies leaks and waste sources',
          'Recommendations for fixture upgrades',
          'Potential savings on water bills',
        ],
        relatedSlugs: ['green-energy-sales-and-service', 'leak-detection-specialists', 'infrared-imaging'],
      },
      {
        slug: 'water-heaters-electric-or-gas',
        title: 'Water Heaters \u2013 Electric or Gas',
        icon: Flame,
        heroTitle: 'Water Heater Installation, Repair & Replacement',
        intro: 'Reliable hot water is essential for every home. We install, repair, and replace traditional tank water heaters in both electric and gas configurations.',
        benefits: [
          'Installation and replacement of tank heaters',
          'Repair of heating elements and thermostats',
          'Gas and electric models serviced',
          'Help choosing the right capacity for your home',
        ],
        relatedSlugs: ['tankless-heaters-electric-or-gas', 'hybrid-water-heaters', 'instant-hot-water'],
      },
      {
        slug: 'water-line-repair-and-replacement',
        title: 'Water Line Repair & Replacement',
        icon: Waves,
        heroTitle: 'Water Line Repair & Replacement',
        intro: 'Damaged or corroded water supply lines can reduce pressure and cause leaks. We repair and replace water lines to restore reliable water service to your home.',
        benefits: [
          'Repair of damaged or corroded supply lines',
          'Full water line replacement when needed',
          'Restores water pressure and flow',
          'Minimally invasive methods where possible',
        ],
        relatedSlugs: ['leak-detection-specialists', 'backflow-repair', 'sewer-and-drain-cleaning'],
      },
    ],
  },
  {
    id: 'remodeling',
    label: 'Remodeling',
    blurb: 'Complete design-build renovations — from demolition to final painting — handled by a single trusted team.',
    services: [
      {
        slug: 'bathroom-remodeling',
        title: 'Bathroom Remodeling',
        icon: Bath,
        heroTitle: 'Complete Bathroom Remodeling',
        intro: 'From demolition to the final finish, we handle every phase of your bathroom renovation. Our design-build approach means one trusted team manages plumbing, cabinetry, tile, and finish work.',
        benefits: [
          'Full design-build bathroom renovations',
          'Plumbing, cabinetry, and tile under one roof',
          'Custom layouts and fixture selections',
          'Clean job sites and clear timelines',
        ],
        relatedSlugs: ['kitchen-remodeling', 'shower-pan-installation-and-replacement', 'toilet-repair-and-replacement'],
      },
      {
        slug: 'kitchen-remodeling',
        title: 'Kitchen Remodeling',
        icon: ChefHat,
        heroTitle: 'Complete Kitchen Remodeling',
        intro: 'We transform kitchens from layout and cabinetry to plumbing, electrical coordination, and final finishes. Our team manages the entire project so you deal with one point of contact.',
        benefits: [
          'Full kitchen renovations from demo to finish',
          'Cabinetry, plumbing, and fixture coordination',
          'Custom layouts to fit your space and style',
          'Professional project management throughout',
        ],
        relatedSlugs: ['bathroom-remodeling', 'garbage-disposals', 'instant-hot-water'],
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  for (const cat of SERVICE_PAGES) {
    const found = cat.services.find((s) => s.slug === slug);
    if (found) return found;
  }
  return undefined;
}

export function getRelatedServices(slugs: string[]): ServicePage[] {
  return slugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is ServicePage => s !== undefined);
}

export function getAllServiceSlugs(): string[] {
  return SERVICE_PAGES.flatMap((cat) => cat.services.map((s) => s.slug));
}
