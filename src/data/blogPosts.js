import placeholder1 from '../assets/cocaine_blog.png';
import placeholder2 from '../assets/msc_guayane.png';
import placeholder3 from '../assets/claim_bananas.jpg';
import banakingLogo from '../assets/banaking_logo.png';
import philaportLogo from '../assets/philaport_logo.png';
import adversaryUniverse from '../assets/adversary-universe.png';

export const blogPosts = [
  {
    id: 1,
    category: 'Industry Analysis',
    title: 'The Hidden Costs of Contamination: A 2025 Report',
    summary: 'A deep dive into the financial and reputational damage caused by undetected breaches in the cold chain.',
    imageUrl: placeholder1,
    date: 'July 5, 2025',
    featured: true,
    slug: 'hidden-costs-of-contamination',
  },
  {
    id: 2,
    category: 'Technology',
    title: 'How AI is Revolutionizing Supply Chain Security',
    summary: 'Beyond simple temperature logging, AI is now proactively identifying security threats before they become disasters.',
    imageUrl: placeholder2,
    date: 'June 28, 2025',
    slug: 'ai-revolutionizing-security',
  },
  {
    id: 3,
    category: 'Compliance',
    title: 'Navigating CTPAT and BASC with Verifiable Data',
    summary: 'Learn how immutable chain-of-custody data from LoadGuard can streamline your compliance and reduce inspection times.',
    imageUrl: placeholder3,
    date: 'June 15, 2025',
    slug: 'navigating-ctpat-and-basc',
  },
  {
    id: 4,
    category: 'Technology',
    title: 'The Power of Real-Time Monitoring',
    summary: 'A look at how real-time data for temperature, humidity, light, and GPS is changing the game for perishable logistics.',
    imageUrl: placeholder1,
    date: 'July 10, 2025',
    slug: 'power-of-real-time-monitoring',
  },
  {
    id: 5,
    category: 'Security',
    title: 'AI-Powered Alerts: Your First Line of Defense',
    summary: 'Our system proactively alerts you to potential contamination or security breaches, giving you the time you need to take action and prevent loss.',
    imageUrl: placeholder2,
    date: 'July 12, 2025',
    slug: 'ai-powered-alerts',
  },
  {
    id: 6,
    category: 'Compliance',
    title: 'The Unbreakable Chain: Ensuring Traceability',
    summary: 'Generate immutable, time-stamped reports to prove container integrity, simplify claims processing, and meet regulatory compliance.',
    imageUrl: placeholder3,
    date: 'July 14, 2025',
    slug: 'unbreakable-chain-traceability',
  },
  {
    id: 7,
    category: 'Partnerships',
    title: 'Seamless Integration for a Smarter Supply Chain',
    summary: 'Seamlessly share data with customs officials, insurance providers, and logistics partners to streamline your entire supply chain.',
    imageUrl: placeholder1,
    date: 'July 16, 2025',
    slug: 'seamless-integration',
  },
  {
    id: 8,
    category: 'Market Access & Compliance',
    title: 'EU Phytosanitary Hurdles: How Ecuadorean Exporters Can Guarantee Clean Shipments',
    summary: 'A practical guide to meeting strict EU regulations. Learn how proactive VOC and ethylene monitoring can prevent costly rejections and delays at ports like Rotterdam and Hamburg.',
    imageUrl: placeholder2,
    date: 'July 18, 2025',
    slug: 'eu-phytosanitary-hurdles',
  },
  {
    id: 9,
    category: 'Security & Risk Management',
    title: '"Contamination": The Threat Beyond Spoilage for Ecuadorean Bananas',
    summary: 'Narcotrafficking is a top risk for exporters. We break down how real-time alerts and an immutable chain of custody can protect your containers, your reputation, and your BASC certification.',
    imageUrl: placeholder1,
    date: 'July 20, 2025',
    slug: 'contamination-threat-beyond-spoilage',
  },
  {
    id: 10,
    category: 'Quality & Profitability',
    title: 'From Guayaquil to St. Petersburg: Mastering Ripening on Long-Haul Voyages',
    summary: 'Every day at sea impacts your bottom line. Discover the science of ethylene control and precise temperature management to deliver perfectly yellow bananas and minimize quality claims.',
    imageUrl: placeholder3,
    date: 'July 22, 2025',
    slug: 'mastering-ripening-long-haul',
  },
  {
    id: 11,
    category: 'Customer Stories',
    title: 'Customer Stories: BanaKing & PhilaPort',
    summary: 'Read how LoadGuard helps BanaKing protect its banana shipments and how PhilaPort secures its port operations.',
    imageUrl: banakingLogo,
    date: 'July 25, 2025',
    slug: 'customer-stories',
    content: `
      ## BanaKing: Securing the Sweetest Shipments
      BanaKing, a leading exporter of premium bananas, faced significant challenges with cargo theft and spoilage. Unauthorized container openings and temperature fluctuations were costing them millions. With LoadGuard, BanaKing gained real-time visibility into their shipments. Our tamper-evident seals and environmental monitoring alerted them to every unauthorized access and deviation from the optimal temperature range. This allowed them to not only prevent theft but also to guarantee the quality of their product, leading to a 20% reduction in spoilage and a 15% increase in profits.

      ## PhilaPort: Guardian of the Gateway
      As a major US port, PhilaPort is a critical node in the global supply chain. Ensuring the integrity of incoming cargo is paramount. By integrating LoadGuard's data into their terminal operating system, PhilaPort gained a new level of security. They can now verify the chain of custody for high-value shipments, streamline inspections, and collaborate more effectively with law enforcement. This has resulted in a 30% reduction in inspection times and a significant decrease in contraband seizures.
    `
  },
  {
    id: 12,
    category: 'Security',
    title: 'The Adversary Universe: A Look at Contraband Smuggling',
    summary: 'An overview of the different actors involved in contraband smuggling, from plantation workers to organized crime.',
    imageUrl: adversaryUniverse,
    date: 'July 28, 2025',
    slug: 'adversary-universe',
    content: `
      Contraband smuggling is a complex ecosystem with a diverse cast of players. Understanding their roles is the first step to dismantling their operations.

      ### The Insiders
      * **Plantation Workers:** Often the first link in the chain, they may be coerced or bribed to conceal contraband within legitimate shipments.
      * **Port Workers:** From crane operators to customs clerks, their access and knowledge of port operations make them valuable assets to smugglers.

      ### The Professionals
      * **Career Criminals:** These are the masterminds who orchestrate the smuggling operations, from sourcing the contraband to laundering the profits.
      * **Corrupt Police Officers:** Providing protection and intelligence, they are a critical component of any successful smuggling ring.

      By understanding the motivations and methods of each of these groups, we can develop more effective strategies to combat them. LoadGuard's technology is designed to disrupt this ecosystem by providing an unbroken chain of custody, making it impossible for contraband to be introduced without detection.
    `
  }
  // Add more blog posts here
];