import Image from 'next/image';
import ParticlesComponent from '../components/ParticleaComponent';


const HeroSection = () => {
  return (
    <>

    <section className="relative  text-white h-screen flex items-center justify-center select-none">
    <ParticlesComponent id="particles" />
      {/* Background Image */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/herobg.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="object-cover hidden md:block"
        />
      </div> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center lg:flex-row lg:items-center container mx-auto px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:w-1/2">
          {/* Placeholder for Image or Additional Content */}
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-0 lg:ml-8">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 leading-tight">
            Delivering Superior Services<br />
            <span className="text-blue-400">IT Solutions.</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6">
            You can easily change any design to your own. It is also highly customizable SEO friendly template.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg">
              Get Quotes
            </button>
            <button className="bg-transparent border border-blue-500 hover:bg-blue-600 hover:border-blue-600 text-white px-6 py-3 rounded-md text-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;