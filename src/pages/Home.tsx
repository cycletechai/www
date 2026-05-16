import { motion } from 'framer-motion';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { 
  Cloud, 
  ShieldCheck, 
  BrainCircuit, 
  Database, 
  Cpu, 
  Network,
  ArrowRight,
  Server,
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <PageWrapper className="pt-0 pb-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" style={{ animationDelay: '4s' }} />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-accent text-sm font-medium mb-6">
              Enterprise Infrastructure & AI Consulting
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-tight">
              Architecting the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                Future of Enterprise
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              We solve complex hybrid cloud, infrastructure, and AI modernization challenges that others cannot. Secure, scalable, and intelligent.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-md bg-white text-background font-semibold text-lg hover:bg-gray-200 transition-colors flex items-center group w-full sm:w-auto justify-center"
              >
                Book a Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 rounded-md bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-colors w-full sm:w-auto justify-center flex"
              >
                Explore Capabilities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise/Services Grid */}
      <section className="py-24 bg-background relative border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Core Capabilities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Delivering executive-ready solutions across the entire modern technology stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Cloud,
                title: "Hybrid Cloud Migration",
                desc: "Seamless VMware to Azure migrations, Azure Arc deployment, and multi-cloud governance."
              },
              {
                icon: BrainCircuit,
                title: "AI Integration & Foundry",
                desc: "Enterprise AI modernization, custom document intelligence pipelines, and secure model deployment."
              },
              {
                icon: ShieldCheck,
                title: "Zero Trust Security",
                desc: "Entra ID modernization, Cloudflare Zero Trust, Intune MDM, and rigorous compliance architectures."
              },
              {
                icon: Server,
                title: "Infrastructure Automation",
                desc: "Terraform, CI/CD pipelines, Kubernetes orchestration, and SAN/Storage modernization."
              },
              {
                icon: Database,
                title: "Data Modernization",
                desc: "Scalable data lakes, real-time analytics architectures, and AI-ready data infrastructure."
              },
              {
                icon: Network,
                title: "Enterprise Architecture",
                desc: "Holistic systems design focusing on resilience, disaster recovery, and hybrid topology."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl hover:border-primary/50 transition-colors group cursor-pointer"
              >
                <div className="h-14 w-14 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions Showcase */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                AI-Powered Workflows & <br/>
                <span className="text-gradient">Document Intelligence</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We transform how mid-market and enterprise organizations process data. Our AI Foundry solutions securely integrate state-of-the-art LLMs into your existing infrastructure, ensuring data privacy while unlocking massive productivity gains.
              </p>
              <ul className="space-y-4 mb-8">
                {['Secure On-Premise LLM Deployment', 'Automated Data Extraction Pipelines', 'Natural Language Enterprise Search', 'AI Readiness Assessments'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <div className="mr-4 p-1 rounded-full bg-primary/20 text-primary">
                      <Lock size={16} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 w-full">
              {/* Interactive/Animated Diagram Mockup */}
              <div className="relative glass-panel rounded-2xl p-6 h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-64 h-64 border border-primary/30 rounded-full border-dashed flex items-center justify-center relative"
                >
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="w-48 h-48 border border-secondary/40 rounded-full flex items-center justify-center relative"
                  >
                     <Cpu className="w-12 h-12 text-accent" />
                  </motion.div>
                  {/* Floating Elements */}
                  <div className="absolute -top-4 w-8 h-8 bg-primary rounded-full blur-md animate-pulse"></div>
                  <div className="absolute -bottom-4 right-10 w-6 h-6 bg-secondary rounded-full blur-md animate-pulse" style={{ animationDelay: '1s' }}></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative bg-background border-t border-white/5 text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready for Serious Transformation?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Partner with CycleTech AI to solve your most complex infrastructure and modernization challenges.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all"
          >
            Schedule an Executive Briefing
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
