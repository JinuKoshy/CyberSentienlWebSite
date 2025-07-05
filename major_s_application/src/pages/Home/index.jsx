import React from 'react';
import Header from '../../components/common/Header';
import Button from '../../components/ui/Button';

const Home = () => {
  return (
    <div className="bg-global-1">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-[url('/images/img_.png')] bg-cover bg-center rounded-[32px] mx-4 sm:mx-6 lg:mx-4 mt-3.5 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 bg-opacity-90 min-h-[630px] lg:min-h-[874px]">
          <div className="flex flex-col lg:flex-row justify-end items-start px-4 sm:px-6 lg:px-14 pt-14 lg:pt-14 pb-8 lg:pb-0">
            
            {/* Left Content */}
            <div className="w-full lg:w-[38%] lg:mt-14 mb-8 lg:mb-0">
              {/* Service Badge */}
              <div className="mb-6 lg:mb-8">
                <Button 
                  variant="secondary"
                  className="bg-button-2 text-global-2 text-xs sm:text-sm lg:text-base font-medium uppercase tracking-wide rounded-[14px] px-3 py-1 shadow-[0px_4px_5px_#888888ff]"
                >
                  PENETRATION TESTING SERVICES
                </Button>
              </div>

              {/* Main Heading */}
              <h1 className="text-global-2 text-2xl sm:text-3xl md:text-4xl lg:text-[53px] font-extrabold leading-tight lg:leading-[72px] mb-6 lg:mb-8">
                The Next-generation<br />
                Penetration Testing<br />
                Platform
              </h1>

              {/* Description */}
              <p className="text-global-2 text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-7 mb-6 lg:mb-8 max-w-lg">
                Security conscious companies use Astra's penetration<br className="hidden lg:block" />
                testing services to perform continuous pentests, manage<br className="hidden lg:block" />
                vulnerabilities & fix them in record time. All at one place.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-4">
                <Button 
                  variant="secondary"
                  className="bg-global-1 text-global-1 font-bold text-base sm:text-lg rounded-[14px] px-6 py-4 shadow-[0px_-4px_1px_#0000003d] flex items-center justify-center gap-2"
                >
                  Get started
                  <img 
                    src="/images/img_arrow_icon.png" 
                    alt="arrow" 
                    className="w-7 h-7"
                  />
                </Button>
                
                <Button 
                  variant="secondary"
                  className="bg-global-1 text-global-1 font-bold text-base sm:text-[17px] rounded-[16px] px-6 py-4 shadow-[0px_4px_4px_#04143614] flex items-center justify-center gap-1.5"
                >
                  <img 
                    src="/images/img_get_a_demo.png" 
                    alt="demo" 
                    className="w-16 h-7"
                  />
                  Get a personalized demo
                </Button>
              </div>
            </div>

            {/* Right Content - Platform Image */}
            <div className="w-full lg:w-[48%] flex justify-center lg:justify-end">
              <img 
                src="/images/img_astra_s_complete.png" 
                alt="Astra Platform Interface" 
                className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[848px] h-auto"
              />
            </div>
          </div>

          {/* Compliance Badges - Top Right */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 flex flex-wrap gap-2 sm:gap-3">
            <div className="flex items-center gap-1 sm:gap-2">
              <img 
                src="/images/img_focusrite.png" 
                alt="Focusrite" 
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
              />
              <img 
                src="/images/img_github.png" 
                alt="GitHub" 
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
              />
              <img 
                src="/images/img_github_2.png" 
                alt="GitHub 2" 
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
              />
            </div>
            
            <div className="flex items-center gap-1 sm:gap-2 mt-2 sm:mt-0">
              <div className="bg-global-1 rounded-lg px-2 py-1 sm:px-3 sm:py-1.5 flex items-center gap-1">
                <span className="text-xs sm:text-sm font-medium text-blue-600">🔒</span>
                <span className="text-xs sm:text-sm font-medium text-gray-800">ISO</span>
              </div>
              <div className="bg-global-1 rounded-lg px-2 py-1 sm:px-3 sm:py-1.5 flex items-center gap-1">
                <span className="text-xs sm:text-sm font-medium text-blue-600">🛡️</span>
                <span className="text-xs sm:text-sm font-medium text-gray-800">HIPAA</span>
              </div>
              <div className="bg-global-1 rounded-lg px-2 py-1 sm:px-3 sm:py-1.5 flex items-center gap-1">
                <span className="text-xs sm:text-sm font-medium text-blue-600">💳</span>
                <span className="text-xs sm:text-sm font-medium text-gray-800">PCI-DSS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-64">
        <div className="text-center">
          <h2 className="text-global-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight max-w-4xl mx-auto">
            From startups to fortune companies,<br />
            700+ companies trust Astra
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Home;