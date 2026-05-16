import { PageWrapper } from '@/components/layout/PageWrapper';
import { Cloud, Shield, Server, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: 'Azure Cloud Architecture',
      description: 'Expert migration, deployment, and management of hybrid and multi-cloud environments utilizing Microsoft Azure.',
      icon: Cloud,
    },
    {
      title: 'Zero Trust Security',
      description: 'Comprehensive security models including Entra ID, Intune MDM, and Cloudflare Zero Trust.',
      icon: Shield,
    },
    {
      title: 'Infrastructure Automation',
      description: 'Infrastructure as Code (IaC) using Terraform, CI/CD pipelines, and Kubernetes orchestration.',
      icon: Server,
    }
  ];

  return (
    <PageWrapper className="container mx-auto px-4 pt-32">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Enterprise IT Services</h1>
        <p className="text-xl text-gray-300">Modernize your infrastructure with our comprehensive suite of hybrid cloud, security, and automation services.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-panel p-8 rounded-2xl hover:border-primary/50 transition-all"
          >
            <service.icon className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-400 mb-6">{service.description}</p>
            <a href="/contact" className="inline-flex items-center text-accent hover:text-white transition-colors">
              Learn more <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        ))}
      </div>
    </PageWrapper>
  );
}
