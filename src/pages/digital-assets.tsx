import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './digital-assets.module.css';

type AssetCategory = {
  title: string;
  description: string;
  assets: Array<{
    name: string;
    description: string;
    downloadUrl?: string;
    previewUrl?: string;
  }>;
};

const assetCategories: AssetCategory[] = [
  {
    title: 'AI Development Tools',
    description: 'Essential tools and templates for AI-powered development',
    assets: [
      {
        name: 'AI Prompt Engineering Template',
        description: 'A comprehensive template for crafting effective AI prompts',
        downloadUrl: '#',
      },
      {
        name: 'Code Review Checklist',
        description: 'AI-assisted code review guidelines and best practices',
        downloadUrl: '#',
      },
    ],
  },
  {
    title: 'Workflow Automation',
    description: 'Scripts and configurations to automate your development workflow',
    assets: [
      {
        name: 'GitHub Actions Collection',
        description: 'Curated collection of AI-powered GitHub Actions',
        downloadUrl: '#',
      },
      {
        name: 'VS Code Settings',
        description: 'Optimized VS Code settings for AI pair programming',
        downloadUrl: '#',
      },
    ],
  },
];

function AssetCard({name, description, downloadUrl, previewUrl}) {
  return (
    <div className={styles.assetCard}>
      <Heading as="h3" className={styles.assetTitle}>
        {name}
      </Heading>
      <p className={styles.assetDescription}>{description}</p>
      <div className={styles.assetActions}>
        {downloadUrl && (
          <a href={downloadUrl} className="button button--primary">
            Download
          </a>
        )}
        {previewUrl && (
          <a href={previewUrl} className="button button--secondary">
            Preview
          </a>
        )}
      </div>
    </div>
  );
}

export default function DigitalAssets(): JSX.Element {
  return (
    <Layout
      title="Digital Assets"
      description="Download AI-powered development resources, templates, and tools">
      <header className={styles.digitalAssetsHeader}>
        <div className="container">
          <Heading as="h1">Digital Assets</Heading>
          <p>
            Download resources to supercharge your AI development workflow
          </p>
        </div>
      </header>
      <main className="container margin-vert--lg">
        {assetCategories.map((category, idx) => (
          <div key={idx} className={styles.categorySection}>
            <Heading as="h2">{category.title}</Heading>
            <p className={styles.categoryDescription}>{category.description}</p>
            <div className={styles.assetGrid}>
              {category.assets.map((asset, assetIdx) => (
                <AssetCard key={assetIdx} {...asset} />
              ))}
            </div>
          </div>
        ))}
      </main>
    </Layout>
  );
} 