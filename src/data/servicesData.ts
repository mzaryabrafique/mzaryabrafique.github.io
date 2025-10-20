export interface SubService {
  name: string;
  description: string;
  price: string;
  deliveryTime: string;
  features: string[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  gradient: string;
  subServices: SubService[];
}

export const servicesData: Service[] = [
  {
    id: 'ai',
    name: 'AI Development',
    description: 'Cutting-edge artificial intelligence solutions tailored to your business needs',
    icon: '🤖',
    gradient: 'from-[#00F6FF] to-[#00C4CC]',
    subServices: [
      {
        name: 'Custom Chatbot Development',
        description: 'Intelligent conversational AI powered by GPT-4 and custom training',
        price: '$2,500 - $5,000',
        deliveryTime: '2-3 weeks',
        features: ['GPT-4 Integration', 'Custom Training Data', 'Multi-platform Support', 'Analytics Dashboard', 'API Integration'],
      },
      {
        name: 'AI Agent Development',
        description: 'Autonomous agents for workflow automation and task management',
        price: '$3,500 - $7,000',
        deliveryTime: '3-4 weeks',
        features: ['Autonomous Decision Making', 'Multi-step Workflows', 'Task Scheduling', 'Error Handling', 'Integration APIs'],
      },
      {
        name: 'Machine Learning Models',
        description: 'Custom ML models for prediction, classification, and analysis',
        price: '$4,000 - $10,000',
        deliveryTime: '4-6 weeks',
        features: ['Custom Model Training', 'Data Preprocessing', 'Model Optimization', 'Deployment Ready', 'Documentation'],
      },
      {
        name: 'GPT Integration',
        description: 'Seamless integration of OpenAI APIs into your existing systems',
        price: '$1,500 - $3,000',
        deliveryTime: '1-2 weeks',
        features: ['API Setup', 'Prompt Engineering', 'Response Handling', 'Error Management', 'Cost Optimization'],
      },
      {
        name: 'Workflow Automation',
        description: 'AI-powered automation using n8n, Make.com, or custom solutions',
        price: '$2,000 - $5,000',
        deliveryTime: '2-3 weeks',
        features: ['Workflow Design', 'Integration Setup', 'Error Handling', 'Monitoring Dashboard', 'Documentation'],
      },
    ],
  },
  {
    id: 'blockchain',
    name: 'Blockchain Development',
    description: 'Secure and scalable blockchain solutions for the decentralized future',
    icon: '⛓️',
    gradient: 'from-[#FFD700] to-[#FFA500]',
    subServices: [
      {
        name: 'Smart Contract Development',
        description: 'Secure smart contracts on Ethereum, BSC, Solana, and more',
        price: '$3,000 - $8,000',
        deliveryTime: '2-4 weeks',
        features: ['Multi-chain Support', 'Security Audits', 'Gas Optimization', 'Testing Suite', 'Deployment Support'],
      },
      {
        name: 'NFT Development',
        description: 'Complete NFT solutions including minting, marketplace, and metadata',
        price: '$4,000 - $10,000',
        deliveryTime: '3-5 weeks',
        features: ['NFT Contract', 'Minting Platform', 'Metadata Management', 'Marketplace Integration', 'IPFS Storage'],
      },
      {
        name: 'DeFi Protocol Development',
        description: 'Build DeFi applications including staking, lending, and AMM',
        price: '$5,000 - $15,000',
        deliveryTime: '4-8 weeks',
        features: ['Smart Contract Suite', 'Liquidity Pools', 'Yield Farming', 'Governance System', 'Security Audit'],
      },
      {
        name: 'Token Creation',
        description: 'Custom ERC-20, BEP-20, or SPL token development',
        price: '$1,500 - $3,500',
        deliveryTime: '1-2 weeks',
        features: ['Token Standards', 'Tokenomics Implementation', 'Burn Mechanism', 'Access Control', 'Deployment'],
      },
      {
        name: 'Layer 2 Solutions',
        description: 'Rollup development and scaling solutions for Ethereum',
        price: '$7,000 - $20,000',
        deliveryTime: '6-10 weeks',
        features: ['Rollup Implementation', 'Bridge Development', 'Sequencer Setup', 'Validator Network', 'Documentation'],
      },
      {
        name: 'Blockchain Consulting',
        description: 'Architecture design, security audits, and technical advisory',
        price: '$200 - $500/hour',
        deliveryTime: 'Flexible',
        features: ['Architecture Review', 'Security Analysis', 'Cost Optimization', 'Best Practices', 'Strategic Planning'],
      },
    ],
  },
  {
    id: 'dapp',
    name: 'dApp Development',
    description: 'End-to-end decentralized application development with seamless Web3 integration',
    icon: '⚡',
    gradient: 'from-[#00C4CC] to-[#00F6FF]',
    subServices: [
      {
        name: 'Full dApp Development',
        description: 'Complete decentralized applications with Web3 integration and smart contracts',
        price: '$6,000 - $15,000',
        deliveryTime: '4-8 weeks',
        features: ['Frontend Development', 'Smart Contracts', 'Web3 Integration', 'Wallet Connect', 'Responsive Design'],
      },
      {
        name: 'Wallet Integration',
        description: 'MetaMask, WalletConnect, and multi-wallet support',
        price: '$1,500 - $3,000',
        deliveryTime: '1-2 weeks',
        features: ['Multi-wallet Support', 'Chain Switching', 'Transaction Handling', 'Error Management', 'Mobile Support'],
      },
      {
        name: 'IPFS Integration',
        description: 'Decentralized storage solutions for your dApp',
        price: '$2,000 - $4,000',
        deliveryTime: '1-2 weeks',
        features: ['File Upload', 'Pinning Service', 'Gateway Setup', 'Metadata Storage', 'API Integration'],
      },
      {
        name: 'Multichain Support',
        description: 'Deploy across Ethereum, BSC, Polygon, and more',
        price: '$3,000 - $6,000',
        deliveryTime: '2-3 weeks',
        features: ['Chain Detection', 'Network Switching', 'Cross-chain Calls', 'Unified Interface', 'Testing'],
      },
    ],
  },
  {
    id: 'web',
    name: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies',
    icon: '💻',
    gradient: 'from-[#FFA500] to-[#FFD700]',
    subServices: [
      {
        name: 'Full Stack Web Application',
        description: 'Complete web apps with React, Node.js, and modern databases',
        price: '$5,000 - $12,000',
        deliveryTime: '4-8 weeks',
        features: ['React/Next.js Frontend', 'Node.js Backend', 'Database Setup', 'Authentication', 'Deployment'],
      },
      {
        name: 'E-commerce Platform',
        description: 'Custom online stores with payment integration and admin panel',
        price: '$6,000 - $15,000',
        deliveryTime: '5-8 weeks',
        features: ['Product Management', 'Payment Gateway', 'Admin Dashboard', 'Order Tracking', 'Inventory System'],
      },
      {
        name: 'Landing Page Design',
        description: 'High-converting landing pages with modern UI/UX',
        price: '$1,200 - $3,000',
        deliveryTime: '1-2 weeks',
        features: ['Responsive Design', 'Animation', 'SEO Optimization', 'Fast Loading', 'Contact Forms'],
      },
      {
        name: 'API Development',
        description: 'RESTful and GraphQL APIs with comprehensive documentation',
        price: '$2,500 - $6,000',
        deliveryTime: '2-4 weeks',
        features: ['REST/GraphQL', 'Authentication', 'Rate Limiting', 'Documentation', 'Testing Suite'],
      },
      {
        name: 'Progressive Web App (PWA)',
        description: 'Mobile-first web apps with offline capabilities',
        price: '$4,000 - $10,000',
        deliveryTime: '3-6 weeks',
        features: ['Offline Support', 'Push Notifications', 'App Shell', 'Service Workers', 'Responsive Design'],
      },
    ],
  },
  {
    id: 'consulting',
    name: 'Blockchain Consulting',
    description: 'Expert guidance on blockchain architecture, tokenomics, and security',
    icon: '🛡️',
    gradient: 'from-[#00F6FF] to-[#FFD700]',
    subServices: [
      {
        name: 'Architecture Design',
        description: 'Complete blockchain architecture planning and design',
        price: '$3,000 - $8,000',
        deliveryTime: '2-4 weeks',
        features: ['System Design', 'Technology Selection', 'Scalability Planning', 'Documentation', 'Implementation Plan'],
      },
      {
        name: 'Security Audit',
        description: 'Comprehensive smart contract and dApp security review',
        price: '$4,500 - $12,000',
        deliveryTime: '2-3 weeks',
        features: ['Code Review', 'Vulnerability Assessment', 'Security Report', 'Fix Recommendations', 'Re-audit'],
      },
      {
        name: 'Tokenomics Design',
        description: 'Token economics modeling and strategy development',
        price: '$2,500 - $6,000',
        deliveryTime: '2-3 weeks',
        features: ['Economic Model', 'Distribution Plan', 'Vesting Schedule', 'Utility Design', 'Documentation'],
      },
      {
        name: 'Technical Advisory',
        description: 'Ongoing technical guidance and strategic consulting',
        price: '$250 - $500/hour',
        deliveryTime: 'Flexible',
        features: ['Strategic Planning', 'Technical Guidance', 'Code Reviews', 'Team Training', 'Best Practices'],
      },
    ],
  },
  {
    id: 'integration',
    name: 'AI x Blockchain Integration',
    description: 'Combining AI and blockchain for intelligent decentralized systems',
    icon: '🔮',
    gradient: 'from-[#FFD700] to-[#00F6FF]',
    subServices: [
      {
        name: 'AI-Powered dApps',
        description: 'Decentralized applications with built-in AI capabilities',
        price: '$8,000 - $20,000',
        deliveryTime: '6-10 weeks',
        features: ['AI Integration', 'Smart Contracts', 'Web3 Frontend', 'ML Models', 'Deployment'],
      },
      {
        name: 'Smart Oracle Development',
        description: 'AI-enhanced oracles for real-time data processing',
        price: '$5,000 - $12,000',
        deliveryTime: '4-6 weeks',
        features: ['Oracle Network', 'AI Processing', 'Data Validation', 'Smart Contract Integration', 'Monitoring'],
      },
      {
        name: 'Predictive Analytics',
        description: 'Machine learning models for blockchain data analysis',
        price: '$4,500 - $10,000',
        deliveryTime: '3-5 weeks',
        features: ['Data Analysis', 'ML Models', 'Prediction Engine', 'Visualization', 'API Access'],
      },
      {
        name: 'Hybrid Systems',
        description: 'Custom solutions combining AI and blockchain technology',
        price: '$10,000 - $25,000',
        deliveryTime: '8-12 weeks',
        features: ['Custom Architecture', 'AI Integration', 'Blockchain Layer', 'Full Stack', 'Documentation'],
      },
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    icon: '📱',
    gradient: 'from-[#00C4CC] to-[#FFA500]',
    subServices: [
      {
        name: 'Android App Development',
        description: 'Native Android apps with Kotlin and Jetpack Compose',
        price: '$4,500 - $10,000',
        deliveryTime: '4-8 weeks',
        features: ['Kotlin Development', 'Jetpack Compose', 'Material Design', 'Backend Integration', 'Play Store'],
      },
      {
        name: 'Cross-Platform App',
        description: 'React Native apps for both iOS and Android',
        price: '$5,500 - $12,000',
        deliveryTime: '5-10 weeks',
        features: ['React Native', 'iOS & Android', 'Native Modules', 'API Integration', 'App Store Deployment'],
      },
      {
        name: 'Mobile Backend Development',
        description: 'Firebase, Supabase, or custom backend for mobile apps',
        price: '$3,000 - $7,000',
        deliveryTime: '2-4 weeks',
        features: ['Database Setup', 'Authentication', 'Push Notifications', 'API Development', 'Cloud Storage'],
      },
      {
        name: 'App Maintenance & Updates',
        description: 'Ongoing support, bug fixes, and feature updates',
        price: '$150 - $300/hour',
        deliveryTime: 'Flexible',
        features: ['Bug Fixes', 'Feature Updates', 'Performance', 'Security Patches', 'Version Updates'],
      },
    ],
  },
];
