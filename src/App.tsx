import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import AISolutions from '@/pages/AISolutions';
import Industries from '@/pages/Industries';
import CaseStudies from '@/pages/CaseStudies';
import About from '@/pages/About';
import Contact from '@/pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans text-foreground overflow-x-hidden">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ai-solutions" element={<AISolutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback route */}
          <Route path="*" element={<div className="p-24 text-center text-gray-400">Page under construction.</div>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
