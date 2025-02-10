export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  process: {
    title: string;
    description: string;
  }[];
  whyUs: string[];
}

export const services: Service[] = [
  {
    id: 'application-development',
    icon: '💻',
    title: 'Web Development',
    description:
      'Custom web applications built with modern technologies to meet your specific business requirements.',
    features: [
      'Full-stack web development',
      'Progressive Web Apps (PWA)',
      'API development and integration',
      'Database design and optimization'
    ],
    benefits: [
      'Increased operational efficiency through automation',
      'Enhanced user experience and customer satisfaction',
      'Scalable solutions that grow with your business',
      'Secure and reliable applications',
      'Reduced operational costs'
    ],
    process: [
      {
        title: 'Discovery',
        description:
          'We analyze your requirements and create a detailed project roadmap.'
      },
      {
        title: 'Design',
        description:
          'Our team creates intuitive user interfaces and robust system architectures.'
      },
      {
        title: 'Development',
        description:
          'We build your application using modern technologies and best practices.'
      },
      {
        title: 'Testing',
        description:
          'Rigorous testing ensures your application meets quality standards.'
      },
      {
        title: 'Deployment',
        description:
          'We handle the deployment and provide ongoing support.'
      }
    ],
    whyUs: [
      'Experienced development team with diverse technical expertise',
      'Proven track record of successful project delivery',
      'Agile development methodology for faster time-to-market',
      'Comprehensive testing and quality assurance',
      'Ongoing support and maintenance services'
    ]
  },
  {
    id: 'mobile-development',
    icon: '📱',
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    features: [
      'iOS and Android development',
      'Cross-platform solutions',
      'Mobile UI/UX design',
      'App store deployment'
    ],
    benefits: [
      'Reach users on their preferred devices',
      'Improved customer engagement',
      'Offline functionality',
      'Push notifications for better engagement',
      'Seamless cross-platform experience'
    ],
    process: [
      {
        title: 'Strategy',
        description: 'We define your mobile app strategy and platform choices.'
      },
      {
        title: 'Design',
        description: 'Creating intuitive and engaging mobile interfaces.'
      },
      {
        title: 'Development',
        description: 'Building your app with the latest mobile technologies.'
      },
      {
        title: 'Testing',
        description:
          'Comprehensive testing across devices and platforms.'
      },
      {
        title: 'Launch',
        description: 'App store submission and launch support.'
      }
    ],
    whyUs: [
      'Expert mobile developers for both iOS and Android',
      'Focus on user experience and performance',
      'Experience with complex mobile applications',
      'App store optimization expertise',
      'Continuous updates and support'
    ]
  },
  {
    id: 'application-support',
    icon: '🛠️',
    title: 'Application Support',
    description:
      'Ongoing technical support and maintenance services to ensure your applications run smoothly and efficiently.',
    features: [
      '24/7 monitoring and troubleshooting',
      'Incident management',
      'Regular updates and maintenance',
      'Performance optimization'
    ],
    benefits: [
      'Minimized downtime',
      'Enhanced application performance',
      'Proactive issue resolution',
      'Improved user satisfaction',
      'Cost-effective maintenance'
    ],
    process: [
      {
        title: 'Assessment',
        description:
          'Evaluate your current applications and identify areas for improvement.'
      },
      {
        title: 'Monitoring',
        description:
          'Continuous monitoring to detect and resolve issues promptly.'
      },
      {
        title: 'Resolution',
        description:
          'Rapid response to troubleshoot and fix issues as they arise.'
      },
      {
        title: 'Maintenance',
        description:
          'Scheduled updates and regular maintenance for optimal performance.'
      },
      {
        title: 'Continuous Improvement',
        description:
          'Ongoing enhancements based on performance feedback and metrics.'
      }
    ],
    whyUs: [
      'Experienced support team',
      '24/7 availability for critical issues',
      'Proven track record in reducing downtime',
      'Customized support plans',
      'Proactive maintenance strategies'
    ]
  },
  {
    id: 'quality-assurance-testing',
    icon: '🧪',
    title: 'QA Testing',
    description:
      'Comprehensive testing services to ensure your applications meet the highest quality standards and perform flawlessly.',
    features: [
      'Manual and automated testing',
      'Performance and load testing',
      'Security and vulnerability assessments',
      'Regression and integration testing'
    ],
    benefits: [
      'Enhanced software quality',
      'Reduced risk of bugs and defects',
      'Improved user experience',
      'Faster time-to-market',
      'Increased reliability'
    ],
    process: [
      {
        title: 'Planning',
        description:
          'Define testing strategies and identify key objectives.'
      },
      {
        title: 'Test Design',
        description:
          'Develop detailed test cases and scenarios.'
      },
      {
        title: 'Execution',
        description:
          'Perform tests across multiple environments and platforms.'
      },
      {
        title: 'Reporting',
        description:
          'Document findings and provide actionable insights.'
      },
      {
        title: 'Retesting',
        description:
          'Verify fixes and ensure resolution of identified issues.'
      }
    ],
    whyUs: [
      'Expert QA professionals',
      'Utilization of cutting-edge testing tools',
      'Rigorous and systematic testing methodologies',
      'Proven track record of delivering defect-free software',
      'Flexible testing services tailored to your needs'
    ]
  },
  {
    id: 'consultation-services',
    icon: '💡',
    title: 'Consulting',
    description:
      'Expert consultation to help you navigate technology challenges and optimize your IT strategy for success.',
    features: [
      'IT strategy and planning',
      'Technology assessment',
      'Digital transformation guidance',
      'Process optimization',
      'Risk management'
    ],
    benefits: [
      'Informed decision-making',
      'Streamlined IT operations',
      'Enhanced competitive advantage',
      'Cost savings',
      'Expert industry insights'
    ],
    process: [
      {
        title: 'Initial Assessment',
        description:
          'Understand your business needs and current IT landscape.'
      },
      {
        title: 'Strategy Development',
        description:
          'Craft a tailored strategy to achieve your objectives.'
      },
      {
        title: 'Implementation Guidance',
        description:
          'Provide practical advice and support during execution.'
      },
      {
        title: 'Review and Optimization',
        description:
          'Continuously evaluate and refine strategies for improved outcomes.'
      }
    ],
    whyUs: [
      'Industry experts with extensive experience',
      'Proven methodologies and strategic frameworks',
      'Customized solutions that align with your business goals',
      'Commitment to long-term client success',
      'Innovative approaches to technology challenges'
    ]
  }
];
