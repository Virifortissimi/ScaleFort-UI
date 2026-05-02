export interface AssistantQaItem {
  question: string;
  answer: string;
  keywords: readonly string[];
}

export const ASSISTANT_QA: ReadonlyArray<AssistantQaItem> = [
  {
    question: 'What tracks can I study?',
    answer:
      'Our tech school currently includes Frontend Development, Backend Development with .NET, Backend Development with Python/Django, Cloud Computing, Data Analysis, UI/UX Design, and Cybersecurity.',
    keywords: ['track', 'tracks', 'course', 'courses', 'study', 'learn', 'program', 'programs'],
  },
  {
    question: 'How much does the tech school cost?',
    answer:
      'The full programme is NGN 300,000. You can also pay NGN 150,000 upfront and the remaining NGN 150,000 within 2 months, or reserve your seat with NGN 50,000 and complete payment later with admissions guidance.',
    keywords: ['price', 'pricing', 'cost', 'tuition', 'fee', 'fees', 'payment', 'pay', 'instalment'],
  },
  {
    question: 'How do admissions work?',
    answer:
      'Admissions are simple: choose your preferred track, submit your application, and our team will guide you through the next steps. The current class callout on the school page shows the next cohort starts on August 15, 2026.',
    keywords: ['admission', 'admissions', 'apply', 'application', 'enrol', 'enroll', 'cohort', 'start'],
  },
  {
    question: 'Do you help with internships or jobs?',
    answer:
      'Yes. The programme is designed in three stages: learn, intern, and get hired. Scalefort supports learners with practical project work, portfolio development, CV support, mock interviews, and recruiter connections.',
    keywords: ['internship', 'intern', 'job', 'jobs', 'hired', 'hire', 'career', 'placement'],
  },
  {
    question: 'What does corporate training cover?',
    answer:
      'Corporate training covers Technical Upskilling, Agentic Programming, Agile Transformation, Cloud Migration, Data Literacy, and Cybersecurity Awareness. Programmes can be tailored for teams of 5 to 100 participants.',
    keywords: ['corporate', 'team', 'teams', 'company', 'companies', 'training', 'workforce', 'upskilling'],
  },
];

export function findAssistantQa(input: string): AssistantQaItem | null {
  const normalized = input.trim().toLowerCase();
  if (!normalized) {
    return null;
  }

  const exactMatch = ASSISTANT_QA.find((item) => item.question.toLowerCase() === normalized);
  if (exactMatch) {
    return exactMatch;
  }

  const bestMatch = ASSISTANT_QA
    .map((item) => ({
      item,
      score: item.keywords.reduce((count, keyword) => count + (normalized.includes(keyword) ? 1 : 0), 0),
    }))
    .sort((left, right) => right.score - left.score)[0];

  return bestMatch && bestMatch.score > 0 ? bestMatch.item : null;
}
