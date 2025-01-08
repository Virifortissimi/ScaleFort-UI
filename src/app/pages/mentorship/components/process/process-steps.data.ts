export interface ProcessStep {
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    title: 'Sign Up',
    description: 'Create your profile and tell us about your goals, experience, and what you want to achieve.'
  },
  {
    title: 'Get Matched',
    description: 'Our AI-powered system matches you with mentors who align with your goals and expertise level.'
  },
  {
    title: 'Connect',
    description: 'Schedule your first session and start your journey with personalized guidance and support.'
  },
  {
    title: 'Grow & Scale',
    description: 'Track your progress, achieve milestones, and scale your career or business with expert guidance.'
  }
];