// components/WhyChooseUs.jsx
import Image from 'next/image';
import { FaRegFileAlt, FaLightbulb, FaMoneyBillWave, FaClock, FaChalkboardTeacher, FaHeadset } from 'react-icons/fa';
import Features from '../../public/features.jpg';

export default function WhyChooseUs() {
  const items = [
    { title: 'Experience', icon: <FaRegFileAlt className="w-10 h-10 text-blue-500" />, description: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Pricing', icon: <FaMoneyBillWave className="w-10 h-10 text-blue-500" />, description: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Products', icon: <FaLightbulb className="w-10 h-10 text-blue-500" />, description: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Delivery', icon: <FaClock className="w-10 h-10 text-blue-500" />, description: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Approach', icon: <FaChalkboardTeacher className="w-10 h-10 text-blue-500" />, description: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Support', icon: <FaHeadset className="w-10 h-10 text-blue-500" />, description: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  ];
 
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Why Choose Us</h2>
        <p className="text-lg text-orange-500 mb-12">Lorem ipsum dolor sit amet</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-8">
            {items.slice(0, 3).map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                {item.icon}
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-500 text-center">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <Image src={Features} alt="Illustration" className="object-cover rounded-lg " />
          </div>
          <div className="space-y-8">
            {items.slice(3).map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                {item.icon}
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-500 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
