import { PageWrapper } from '@/components/layout/PageWrapper';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <PageWrapper className="container mx-auto px-4 pt-32">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-6">Contact Us</h1>
        <p className="text-xl text-gray-300">Ready to architect your enterprise future? Get in touch.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <h3 className="text-3xl font-bold mb-6">Let's Talk</h3>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Fill out the form to schedule an executive briefing or technical assessment. Our lead architects will review your request and contact you within 24 hours.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center text-gray-300">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-4">
                <Mail className="text-primary" />
              </div>
              <a href="mailto:info@cycletech.ai" className="hover:text-white transition-colors">info@cycletech.ai</a>
            </div>
            <div className="flex items-center text-gray-300">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-4">
                <Phone className="text-primary" />
              </div>
              <span>+1 (800) 555-0199</span>
            </div>
            <div className="flex items-center text-gray-300">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-4">
                <MapPin className="text-primary" />
              </div>
              <span>San Francisco, CA (HQ)</span>
            </div>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-2xl">
          <form action="mailto:info@cycletech.ai" method="POST" encType="text/plain" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
              <input type="text" id="name" name="name" required className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Jane Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Work Email</label>
              <input type="email" id="email" name="email" required className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="jane@enterprise.com" />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">Company</label>
              <input type="text" id="company" name="company" className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Acme Corp" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea id="message" name="message" rows={4} required className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="How can we help?"></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all flex items-center justify-center">
              Send Message <Send className="w-5 h-5 ml-2" />
            </button>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}
