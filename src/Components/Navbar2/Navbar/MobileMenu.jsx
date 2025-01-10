import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import ButtonE from "../Button";
import { text } from '@fortawesome/fontawesome-svg-core';

const MobileMenu = ({ isOpen }) => {
  const [showAboutSection, setShowAboutSection] = useState(false);
  const [showServicesSection, setShowServicesSection] = useState(false);
  const [showsubMenuDesign, setShowsubMenuDesign] = useState(false);
  const [showsubMenuEcommerce, setShowsubMenuEcommerce] = useState(false);
  const [showsubMenuDevelopment, setShowsubMenuDevelopment] = useState(false);
  const [showsubMenuDigital, setShowsubMenuDigital] = useState(false);
  const [showsubMenuGame, setShowsubMenuGame] = useState(false);
  const [showsubMenuMaintenance, setShowsubMenuMaintenance] = useState(false);
  const [showsubMenuMobile, setShowsubMenuMobile] = useState(false);
  const handleAboutMenu = () => setShowAboutSection(!showAboutSection);
  const handleActive = () => setShowServicesSection(!showServicesSection);
  const togglesubMneu = () => setShowsubMenuDesign(!showsubMenuDesign);
  const toggleEcommerceMenu = () => setShowsubMenuEcommerce(!showsubMenuEcommerce);
  const toggleDevelopment = () => setShowsubMenuDevelopment(!showsubMenuDevelopment);
  const toggleDigitalMenu = () => setShowsubMenuDigital(!showsubMenuDigital);
  const toggleGame = () => setShowsubMenuGame(!showsubMenuGame);
  const toggleMaintenace = () => setShowsubMenuMaintenance(!showsubMenuMaintenance);
  const toggleMobile = () => setShowsubMenuMobile(!showsubMenuMobile);

  if (!isOpen) return null;

  return (
    <div className="sm:hidden z-50 block absolute top-26 h-[90vh] w-50 right-0 bg-white backdrop-blur-lg bg-opacity-30 py-3">
      <ul className="flex flex-col gap-6 text-lg items-center">
        <Link to="/" className="no-underline">
          <li className="hover:text-blue-600 cursor-pointer text-gray-600">Home</li>
        </Link>

        {/* About Section */}
        <div className="group">
          <div className="flex items-center">
            <Link className="no-underline flex items-center" onClick={handleAboutMenu}>
              <li className="hover:text-blue-600 cursor-pointer text-gray-600 text-lg">About</li>
            </Link>
            {!showAboutSection && (
              <IoIosArrowForward className="text-gray-600 cursor-pointer" size={20} onClick={handleAboutMenu} />
            )}
          </div>
          {showAboutSection && (
            <div className="absolute top-0 right-0 w-full h-screen bg-white z-50 p-3">
              <div className="flex">
                <div className="w-96">
                  <span className="flex gap-2">
                    <IoIosArrowBack
                      className="text-white cursor-pointer rounded bg-blue-600 p-1"
                      onClick={handleAboutMenu}
                      size={20}
                    />
                    <h6 className="text-blue-600 font-medium">About Us</h6>
                  </span>
                  <ul className="flex flex-col">
                    <Link to="/about/about-us" className="no-underline hover:no-underline">
                      <li className="hover:text-blue-600 cursor-pointer text-gray-600 py-1">About</li>
                    </Link>
                    <Link to="/careers" className="no-underline hover:no-underline">
                      <li className="hover:text-blue-600 cursor-pointer text-gray-600 py-1">Careers</li>
                    </Link>
                    <Link to="/about/our-clients" className="no-underline hover:no-underline">
                      <li className="hover:text-blue-600 cursor-pointer text-gray-600 py-1">Our Clients</li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Services Section */}
        <div className="group">
          <div className="flex items-center">
            <Link className="no-underline flex items-center" onClick={handleActive}>
              <li className="hover:text-blue-600 cursor-pointer text-gray-600 text-lg">Services</li>
            </Link>
            {!showServicesSection && (
              <IoIosArrowForward className="text-gray-600 cursor-pointer" size={20} onClick={handleActive} />
            )}
          </div>
          {showServicesSection && (
            <div className="absolute top-0 right-0 w-full h-screen bg-white z-50 p-2">
              <div className="flex p-2">
                <div className="w-96">
                  <span className="flex gap-2">
                    <IoIosArrowBack
                      className="cursor-pointer rounded bg-blue-600 text-white p-1"
                      onClick={handleActive}
                      size={20}
                    />
                    <h6 className="text-blue-600">Services</h6>
                  </span>
                  <div className="overflow-y-scroll h-48">
                    {/* Design Section */}
                    <ServiceSubmenu
                      title="Design"
                      isOpen={showsubMenuDesign}
                      onToggle={togglesubMneu}
                      items={[
                        { to: "/services/design/ui/ux-design", text: "UI/UX Design" },
                        { to: "/services/design/website-design", text: "Web Design" }
                      ]}
                    />

                    {/* Ecommerce Section */}
                    <ServiceSubmenu
                      title="Ecommerce"
                      isOpen={showsubMenuEcommerce}
                      onToggle={toggleEcommerceMenu}
                      items={[
                        { to: "/services/ecommerce-solutions/shopify-development", text: "Shopify" },
                        { to: "/services/ecommerce-solutions/opencart-development", text: "OpenCart" },
                        { to: "/services/ecommerce-solutions/wocommerce-development", text: "WooCommerce" },
                        { to: "/services/ecommerce-solutions/Magneto-development", text: "Magento" },
                        { to: "/", text: "Prestashop" }
                      ]}
                    />

                    {/* Development Section */}
                    <ServiceSubmenu
                      title="Development"
                      isOpen={showsubMenuDevelopment}
                      onToggle={toggleDevelopment}
                      items={[
                        { to: "/services/development/website-dvelopment", text: "Website Development" },
                        { to: "/services/development/codeigniter-website-development", text: "CodeIgniter Website" },
                        { to: "/services/development/php-development", text: "PHP Development" },
                        { to: "/services/development/html-css-website", text: "HTML & CSS Website" },
                        { to: "/services/development/laravel-devlopment", text: "Laravel Website" },
                        { to: "/services/development/reactjs-development", text: "React.js Website" },
                        { to: "/services/rubyrails", text: "Ruby on Rails" }
                      ]}
                    />
                    {/* Development Section */}
                    <ServiceSubmenu
                      title="Digital Marketing"
                      isOpen={showsubMenuDigital}
                      onToggle={toggleDigitalMenu}
                      items={[
                        {
                          text: "Search Engine Marketing",
                          to: "/services/digital-marketing/sem-search-engine-marketing"
                        },
                        { to:  "/services/digital-marketing/seo-search-engine-optimization",
                           text: "Search Engine Optimization" },
                        { to: "/services/digital-marketing/smo/social-media-optimization", 
                          text: "Social Media Optimization" },

                        { to: "/services/digital-marketing/smm/social-media-marketing", text: "Social Media Marketing" },
                        { to: "/services/digital-marketing/email-marketing", text: "Email Marketing" },
                        { to: "/services/digital-marketing/performance-marketing", text: "Performance Marketing" },
                      ]}
                    />

                    {/* Other sections remain similar */}
                  </div>
                  <ButtonE name="Enquire Now" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Portfolio Link */}
        <Link to="/portfolio" className="no-underline">
          <li className="hover:text-blue-600 cursor-pointer text-gray-600">Portfolio</li>
        </Link>

        {/* Blog Link */}
        <Link to="/blogMain" className="no-underline">
          <li className="hover:text-blue-600 cursor-pointer text-gray-600">Blogs</li>
        </Link>

        {/* Contact Link */}
        <Link to="/contact" className="no-underline">
          <li className="hover:text-blue-600 cursor-pointer text-gray-600">Reach us</li>
        </Link>
      </ul>
      <ButtonE name="Enquire Now" />
    </div>
  );
};

// Helper component for service submenus
const ServiceSubmenu = ({ title, isOpen, onToggle, items }) => {
  return (
    <div className="flex py-1">
      <h6 className="text-gray-600 font-medium">{title}</h6>
      {!isOpen && (
        <IoIosArrowForward
          className="text-gray-600 cursor-pointer"
          onClick={onToggle}
          size={20}
        />
      )}
      {isOpen && (
        <div className="absolute top-0 right-0 w-full h-screen bg-white z-50 p-1">
          <div className="flex p-2">
            <div className="w-96">
              <span className="flex gap-2">
                <IoIosArrowBack
                  className="cursor-pointer rounded bg-blue-600 text-white p-1"
                  onClick={onToggle}
                  size={20}
                />
                <h6 className="text-blue-600">{title}</h6>
              </span>
              <ul className="flex flex-col">
                {items.map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    className="no-underline hover:text-blue-600 text-gray-600 py-1"
                    onClick={onToggle}
                  >
                    <li>{item.text}</li>
                  </Link>
                ))}
              </ul>
              <ButtonE name="Enquire Now" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;