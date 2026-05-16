import { PageWrapper } from '@/components/layout/PageWrapper';
import { Target, Users, Zap } from 'lucide-react';

export default function About() {
  return (
    <PageWrapper className="container mx-auto px-4 pt-32">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-6">About CycleTech AI</h1>
        <p className="text-xl text-gray-300">We are a premier consultancy specializing in deep tech enterprise transformations.</p>
      </div>

      <div className="glass-panel p-12 rounded-3xl max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          At CycleTech AI, we bridge the gap between legacy infrastructure and the future of artificial intelligence. We believe that true digital transformation requires a rock-solid hybrid cloud foundation, uncompromising security, and the intelligent application of AI workflows.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          We don't just advise; we build. Our team of senior architects and engineers work directly with your leadership to design and execute complex migrations and AI integrations that generic IT firms cannot handle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="text-primary w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold mb-2">Precision</h4>
          <p className="text-gray-400">Architectures designed with exact enterprise specifications.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Zap className="text-secondary w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold mb-2">Agility</h4>
          <p className="text-gray-400">Rapid deployment and automation for immediate ROI.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="text-accent w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold mb-2">Partnership</h4>
          <p className="text-gray-400">We work as an extension of your internal executive team.</p>
        </div>
      </div>
    </PageWrapper>
  );
}
