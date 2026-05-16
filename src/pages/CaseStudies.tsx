import { PageWrapper } from '@/components/layout/PageWrapper';

export default function CaseStudies() {
  return (
    <PageWrapper className="container mx-auto px-4 pt-32">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-6">Client Success Stories</h1>
        <p className="text-xl text-gray-300">See how we've transformed enterprise operations.</p>
      </div>

      <div className="space-y-12 max-w-5xl mx-auto">
        <div className="glass-panel p-10 rounded-3xl flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4 text-primary">Global Healthcare Provider</h2>
            <h4 className="text-xl text-white mb-4">Hybrid Cloud Migration & Compliance</h4>
            <p className="text-gray-400 mb-6">Successfully migrated 500+ legacy on-premise VMs to a secure Azure hybrid environment, achieving 100% HIPAA compliance and reducing IT operational costs by 35%.</p>
            <div className="flex gap-4">
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Azure</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Zero Trust</span>
            </div>
          </div>
          <div className="md:w-1/3 text-center border-l border-white/10 pl-8">
            <div className="text-5xl font-extrabold text-accent mb-2">35%</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Cost Reduction</div>
          </div>
        </div>

        <div className="glass-panel p-10 rounded-3xl flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4 text-secondary">Mid-Market Financial Firm</h2>
            <h4 className="text-xl text-white mb-4">AI Document Intelligence Integration</h4>
            <p className="text-gray-400 mb-6">Deployed a secure, on-premise LLM to automate the extraction of financial data from unstructured PDFs, reducing manual processing time from days to minutes.</p>
            <div className="flex gap-4">
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">AI Foundry</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Automation</span>
            </div>
          </div>
          <div className="md:w-1/3 text-center border-l border-white/10 pl-8">
            <div className="text-5xl font-extrabold text-accent mb-2">99%</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Faster Processing</div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
