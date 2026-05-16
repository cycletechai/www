import { PageWrapper } from '@/components/layout/PageWrapper';
import { Brain, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AISolutions() {
  return (
    <PageWrapper className="container mx-auto px-4 pt-32">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">AI Foundry & Solutions</h1>
        <p className="text-xl text-gray-300">Unlock the power of your enterprise data with secure, on-premise, and hybrid AI integrations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="glass-panel p-8 rounded-2xl">
          <Brain className="w-16 h-16 text-secondary mb-6" />
          <h2 className="text-3xl font-bold mb-4">Custom LLM Deployment</h2>
          <p className="text-gray-400 text-lg">We deploy secure, isolated Large Language Models within your own infrastructure or private cloud. Ensure 100% data privacy while giving your team access to cutting-edge AI capabilities.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-panel p-8 rounded-2xl">
          <FileText className="w-16 h-16 text-accent mb-6" />
          <h2 className="text-3xl font-bold mb-4">Document Intelligence</h2>
          <p className="text-gray-400 text-lg">Automate data extraction from complex enterprise documents. Our custom pipelines use AI to read, process, and structure data from invoices, contracts, and technical manuals instantly.</p>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
