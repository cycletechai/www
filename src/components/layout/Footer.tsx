import { Link } from 'react-router-dom';
import { Logo } from '@/components/ui/Logo';
import { Globe, MessageSquare, Briefcase, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <Logo />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Hybrid Cloud, AI, Infrastructure, Security, and Enterprise Automation Consulting. Architecting the future of enterprise infrastructure.
            </p>
            <div className="flex items-center space-x-4 text-gray-400">
              <a href="#" className="hover:text-primary transition-colors"><MessageSquare size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Briefcase size={20} /></a>
              <a href="https://cycletechai.com" className="hover:text-primary transition-colors"><Globe size={20} /></a>
              <a href="mailto:contact@cycletech.ai" className="hover:text-primary transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          {/* Solutions Col */}
          <div>
            <h4 className="text-white font-semibold mb-6">Solutions</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/ai-solutions" className="hover:text-primary transition-colors">AI Foundry & Integration</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Azure Architecture</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Hybrid Cloud Migrations</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Zero Trust Security</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Infrastructure Automation</Link></li>
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/industries" className="hover:text-primary transition-colors">Industries</Link></li>
              <li><Link to="/insights" className="hover:text-primary transition-colors">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-semibold mb-6">Ready to Modernize?</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get in touch to discuss how we can transform your enterprise infrastructure.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-2.5 text-sm font-medium rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white"
            >
              Contact Sales
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} CycleTech AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
