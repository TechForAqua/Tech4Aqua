// pages/index.jsx
import ServiceCard from '../components/ServiceCard';
import { FaLightbulb, FaServer, FaShieldAlt,FaChartLine,FaCloud,FaLock } from 'react-icons/fa'; // Import icons from react-icons

export default function Services() {
  const services = [
    { title: 'Application Design', icon: <FaLightbulb className="w-12 h-12" />, description: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Web Hosting', icon: <FaServer className="w-12 h-12" />, description: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Social Media', icon: <FaShieldAlt className="w-12 h-12" />, description: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'SEO Optimization', icon: <FaChartLine className="w-12 h-12" />, description: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Cloud Server', icon: <FaCloud className="w-12 h-12" />, description: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Data Security', icon: <FaLock className="w-12 h-12" />, description: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    // Add more services as needed
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}
