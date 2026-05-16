import { PageWrapper } from '@/components/layout/PageWrapper';
import { Stethoscope, Building2, Landmark } from 'lucide-react';

export default function Industries() {
  return (
    <PageWrapper className="container mx-auto px-4 pt-32">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-6">Industries We Serve</h1>
        <p className="text-xl text-gray-300">Tailored infrastructure and AI solutions for complex regulatory environments.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-panel p-8 rounded-2xl text-center">
          <Stethoscope className="w-16 h-16 text-primary mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">Healthcare</h3>
          <p className="text-gray-400">HIPAA-compliant cloud architectures, secure patient data processing, and AI-driven diagnostic workflow automation.</p>
        </div>
        <div className="glass-panel p-8 rounded-2xl text-center">
          <Landmark className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">Financial Services</h3>
          <p className="text-gray-400">Zero Trust networks, high-frequency low-latency infrastructure, and automated fraud detection pipelines.</p>
        </div>
        <div className="glass-panel p-8 rounded-2xl text-center">
          <Building2 className="w-16 h-16 text-accent mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">Manufacturing</h3>
          <p className="text-gray-400">IoT integration, supply chain AI optimization, and resilient hybrid cloud topologies for global operations.</p>
        </div>
      </div>
    </PageWrapper>
  );
}
