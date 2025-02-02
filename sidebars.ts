import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'AI Development Lifecycle',
      items: [
        'ai-development-lifecycle/research-planning',
        'ai-development-lifecycle/implementation-coding',
        'ai-development-lifecycle/testing-debugging',
        'ai-development-lifecycle/deployment-scaling',
        'ai-development-lifecycle/best-practices',
      ],
    },
    {
      type: 'category',
      label: 'AI Tools & Assistants',
      items: [
        'ai-tools/understanding-ai-assistants',
        'ai-tools/github-copilot',
        'ai-tools/chatgpt-coding',
        'ai-tools/cursor-dev',
        'ai-tools/training-finetuning',
      ],
    },
    {
      type: 'category',
      label: 'Backend & Microservices',
      items: [
        'backend/ai-microservices',
        'backend/api-development',
        'backend/database-design',
        'backend/process-automation',
        'backend/scaling-performance',
      ],
    },
    {
      type: 'category',
      label: 'Data Engineering',
      items: [
        'data-engineering/web-scraping',
        'data-engineering/pipeline-automation',
        'data-engineering/analysis-visualization',
        'data-engineering/etl-processes',
        'data-engineering/realtime-processing',
      ],
    },
    {
      type: 'category',
      label: 'Practical Applications',
      items: [
        'practical-applications/personal-automation',
        'practical-applications/financial-analysis',
        'practical-applications/social-media',
        'practical-applications/job-market',
        'practical-applications/portfolio-projects',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Topics',
      items: [
        'advanced/model-integration',
        'advanced/custom-solutions',
        'advanced/security',
        'advanced/optimization',
        'advanced/architecture',
      ],
    },
  ],
};

export default sidebars;
