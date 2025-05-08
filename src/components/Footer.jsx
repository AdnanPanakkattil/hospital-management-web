import React from 'react';

const Footer = () => {
  const quickLinks = [
    'Home',
    'About Us',
    'Services',
    'Our Cases',
    'Links',
    'Counselling',
    'Finance',
    'Testimonials',
    'FAQ',
    'Contact',
  ];

  return (
    <div className="bg-blue-700 w-full min-h-[300px] text-white">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {/* About Us */}
          <div className="w-full p-4">
            <h2 className="text-2xl sm:text-3xl font-semibold underline decoration-white underline-offset-4 mb-4">
              About Us
            </h2>
            <p className="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Do eiusmod tempor incididunt ut labore dolore magna.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full p-4">
            <h2 className="text-2xl sm:text-3xl font-semibold underline decoration-white underline-offset-4 mb-4">
              Quick Links
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <p
                  key={link}
                  className="text-sm sm:text-base lg:text-lg hover:translate-x-2 transition-transform duration-300"
                >
                  <a href="#" aria-label={`Navigate to ${link} page`}>
                    {link}
                  </a>
                </p>
              ))}
            </div>
          </div>

          {/* Open Hours */}
          <div className="w-full p-4">
            <h2 className="text-2xl sm:text-3xl font-semibold underline decoration-white underline-offset-4 mb-4">
              Open Hours
            </h2>
            <p className="text-sm sm:text-base lg:text-lg mb-4 leading-6 sm:leading-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Do eiusmod tempor incididunt.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm sm:text-base">
                <p>Monday - Friday</p>
                <p>8.00-20.00</p>
              </div>
              <div className="flex justify-between text-sm sm:text-base">
                <p>Saturday</p>
                <p>9.00-18.30</p>
              </div>
              <div className="flex justify-between text-sm sm:text-base">
                <p>Monday - Thursday</p>
                <p>9.00-15.00</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full p-4">
            <h2 className="text-2xl sm:text-3xl font-semibold underline decoration-white underline-offset-4 mb-4">
              Newsletter
            </h2>
            <p className="text-sm sm:text-base lg:text-lg mb-4 leading-6 sm:leading-7">
              Subscribe to our newsletter to get all our news in your inbox. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
