import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import MobileMenu from './MobileMenu';
import './Navbar.css'
import ModalExample from '../../Modal/Modal';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const menuData = {
    "logo": "/Image/COMPANY LOGO -razobyte-01 (1).png",
    "mainMenu": [
      {
        "title": "Home",
        "path": "/",
        "type": "link"
      },
      {
        "title": "About",
        "type": "dropdown",
        "submenu": [
          {
            "title": "About Us",
            "path": "/about/about-us"
          },
          {
            "title": "Our Clients",
            "path": "/about/our-clients"
          },
          {
            "title": "Careers",
            "path": "/careers"
          }, {
            "title": "Blogs",
            "path": "/blogMain",
            "type": "link"
          },
          {
            "title": "Reach us",
            "path": "/contact",
            "type": "link"
          }
        ]
      },

      {
        "title": "Services",
        "type": "megamenu",
        "columns": [
          {
            "title": "Design",
            "icon": "/Image/nav-lar-1 (3).svg",
            "path": "/services/design", 
            "items": [
              {
                "title": "UI/UX Design",
                "path": "/services/design/ui/ux-design"
              },
              {
                "title": "Website Design",
                "path": "/services/design/website-design"
              }
            ],
            "subcategory": {
              "title": "Ecommerce Solutions",
              "icon": "/Image/cart.png",
              "items": [
                {
                  "title": "Shopify",
                  "path": "/services/ecommerce-solutions/shopify-development"
                },
                {
                  "title": "OpenCart",
                  "path": "/services/ecommerce-solutions/opencart-development"
                },
                {
                  "title": "Woocommerce",
                  "path": "/services/ecommerce-solutions/wocommerce-development"
                },
                {
                  "title": "Magento",
                  "path": "/services/ecommerce-solutions/Magneto-development"
                },
                {
                  "title": "Prestashop",
                  "path": "/services/remainpage"
                }
              ]
            }
          },
          {
            "title": "Development",
            "icon": "/Image/nav-lar-1 (2).svg",
            "items": [
              {
                "title": "Website Development",
                "path": "/services/development/website-dvelopment"
              },
              {
                "title": "CodeIgniter Website",
                "path": "/services/development/codeigniter-website-development"
              },
              {
                "title": "Informative Website",
                "path": "/"
              },
              {
                "title": "Php Website",
                "path": "/services/development/php-development"
              },
              {
                "title": "Html & Css Website",
                "path": "/services/development/html-css-website"
              },
              {
                "title": "Laravel Website",
                "path": "/services/development/laravel-devlopment"
              },
              {
                "title": "React js Website",
                "path": "/services/development/reactjs-development"
              },
              {
                "title": "Angular js Website",
                "path": "/services/remainpage"
              },
              {
                "title": "E-commerce Website",
                "path": "/services/development/ecommerce-website-development"
              },
              {
                "title": "Payment Gateway",
                "path": "/services/remainpage"
              }
            ]
          },
          {
            "title": "Digital Marketing",
            "icon": "/Image/nav-lar-1 (4).svg",
            "path": "/services/digital-marketing",  // Main Digital Marketing Page
            "items": [
              {
                "title": "Search Engine Optimization",
                "path": "/services/digital-marketing/seo-search-engine-optimization"
              },
              {
                "title": "Search Engine Marketing",
                "path": "/services/digital-marketing/sem-search-engine-marketing"
              },
              {
                "title": "Social Media Optimization",
                "path": "/services/digital-marketing/smo/social-media-optimization"
              },
              {
                "title": "Social Media Marketing",
                "path": "/services/digital-marketing/smm/social-media-marketing"
              },
              {
                "title": "Email Marketing",
                "path": "/services/digital-marketing/email-marketing"
              },
              {
                "title": "Performance Marketing",
                "path": "/services/digital-marketing/performance-marketing",
                "type": "link"
              }
            ]
          },
          {
            "title": "Game Development",
            "icon": "/Image/nav-lar-1 (3).svg",
            "items": [
              {
                "title": "2D",
                "path": "/services/remainpage"
              },
              {
                "title": "3D",
                "path": "/services/remainpage"
              },
              {
                "title": "Meta Verse",
                "path": "/services/remainpage"
              }
            ]
          },
          {
            "title": "Maintenance & Support",
            "icon": "/Image/nav-lar-1 (3).svg",
            "items": [
              {
                "title": "Website Maintenance",
                "path": "/services/maintenance-and-support/website-maintenance"
              },
              {
                "title": "Mobile App Maintenance",
                "path": "/services/maintenance-and-support/mobile-app-maintenance"
              },
              {
                "title": "Domain & Hosting Maintenance",
                "path": "/services/maintenance-and-support/domain-and-hosting-maintenance"
              }
            ]
          },
          {
            "title": "Mobile Applications",
            "icon": "/Image/nav-lar-1 (5).svg",
            "items": [
              {
                "title": "Android App",
                "path": "/services/mobile-application/android-applications-development"
              },
              {
                "title": "IOS App",
                "path": "/services/mobile-application/ios-applications-development"
              }
            ]
          }
        ]
      },
      {
        "title": "Industry",
        "type": "dropdown",
        "submenu": [
          {
            "title": "Healthcare  Solutions ",
            "path": "/industry/healthcare-it-soultions"
          },
          {
            "title": "IT Consulting",
            "path": "/industry/it-consulting"
          },
          {
            "title": "Product Engineering",
            "path": "/industry/product-engineering"
          }
        ]
      },
      {
        "title": "Portfolio",
        "path": "/portfolio",
        "type": "link"
      },


    ],
    "contact": {
      "icon": "MdPhoneInTalk"
    }


  };

  const handleDropdownToggle = (title) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const handleSubcategoryHover = (columnTitle) => {
    setActiveSubcategory(columnTitle);
  };

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md w-full">
      <div className="max-w-7xl w-full mx-auto px-4">
        <div className="flex justify-center items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-1">
            {menuData.logo && (
              <img
                src={menuData.logo}
                alt="logo"
                className="h-6 lg:w-full md:w-full sm:w-full xs:w-full sm:h-6 md:h-8 lg:h-10 xl:h-12 img-fluid object-contain "
              />
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center 
           justify-center xl:space-x-8 lg:space-x-6 md:space-x-4 space-x-2">
            <ul className="flex items-center  justify-center pt-3 xl:space-x-8 
            lg:space-x-6 md:space-x-4 space-x-2 ">
              {menuData.mainMenu?.map((item, index) => (
                <div key={index} className="relative group">
                  {item.type === 'link' ? (
                    <li>
                      <Link
                        to={item.path}
                        className="text-gray-600
                         hover:text-[#3b7fbf] transition-colors duration-200 font-medium
                         text-decoration-none lg:text-xl md:text-base sm:text-sm text-sm"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ) : (
                    <li className="relative list-none">
                      <button
                        className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                        onMouseEnter={() =>
                          handleDropdownToggle(item.title)}
                      >
                        <span className=' text-decoration-none lg:text-xl md:text-base sm:text-sm '>{item.title}</span>
                        {activeDropdown === item.title ? (
                          <FaAngleUp className="h-4 w-4" />
                        ) : (
                          <FaAngleDown className="h-4 w-4" />
                        )}
                      </button>

                      {activeDropdown === item.title && (
                        <div
                          className="absolute top-10 bg-gray-100 rounded-md shadow-lg py-3 z-50"
                          onMouseLeave={() => handleDropdownToggle(null)}
                        >
                          {item.type === 'dropdown' && item.submenu ? (
                            <div className="grid relative p-3 rounded-md bg-white overflow-y-auto min-w-[300px]">
                              {item.submenu.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.path}
                                  className="block  py-2 text-gray-600 hover:text-blue-600
                                   hover:bg-gray-50
                                    text-decoration-none lg:text-xl md:text-base sm:text-sm "
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </div>
                          ) : item.type === 'megamenu' && item.columns ? (
                            <div className="grid lg:grid-cols-3 sm:-left-52 absolute 
                             sm:grid-cols-5 gap-2 p-3 rounded-md min-w-[820px] bg-gray-100 overflow-y-auto">
                              {item.columns.map((column, colIndex) => (
                                <div
                                  key={colIndex}
                                  className="relative"
                                  onMouseEnter={() => handleSubcategoryHover(column.title)}
                                >
                                  <div className="p-1 bg-white rounded-md hover:bg-gray-50 transition-colors duration-200 h-[350px] overflow-y-auto shadow-sm">
                                    <div className="flex items-center justify-evenly">
                                      <h3 className="text-[#3b7fbf] text-base font-semibold">
                                        <Link
                                          to={column.path}  // Add the path from column object
                                          className="hover:text-blue-600 text-decoration-none list-undisc"
                                        >
                                          {column.title}
                                        </Link>
                                      </h3>
                                      {column.icon && (
                                        <img src={column.icon}
                                          alt="" className="w-8 h-8" />
                                      )}
                                    </div>
                                    <ul className="space-y-2">
                                      {column.items?.map((subItem, subIndex) => (
                                        <li key={subIndex}>
                                          <Link
                                            to={subItem.path}
                                            className="block text-gray-600 hover:text-blue-600 
                                            text-[15px]
                                            
                                            text-decoration-none"
                                          >
                                            {subItem.title}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>

                                    {/* Subcategory Section */}
                                    {column.subcategory && (
                                      <div className="mt-4 pt-4 border-t border-gray-200">
                                        <div className="flex items-center gap-2 mb-2">
                                          {column.subcategory.icon && (
                                            <img
                                              src={column.subcategory.icon}
                                              alt=""
                                              className="w-6 h-6"
                                            />
                                          )}
                                          <h4 className="text-[#3b7fbf] md:text-base text-sm font-semibold">
                                            {column.subcategory.title}
                                          </h4>
                                        </div>
                                        <ul className="space-y-2">
                                          {column.subcategory.items?.map((item, idx) => (
                                            <li key={idx}>
                                              <Link
                                                to={item.path}
                                                className="block text-gray-600
                                                 hover:text-blue-600 text-sm
                                                 text-decoration-none"
                                              >
                                                {item.title}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}


                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      )}
                    </li>
                  )}
                </div>
              ))}
            </ul>

            {/* Contact Section */}
            <div className="flex items-center space-x-2">
              <a
                href={`tel:+91${menuData.contact.phone}`}
                className="flex items-center space-x-1 text-[#3b7fbf] hover:text-blue-700
                text-decoration-none"
              >
                <div className="bg-[#3b7fbf]  hidden hover:bg-[#000] lg:p-2  p-md-2 p-1 rounded-full">
                  <MdPhoneInTalk className="lg:h-5 lg:w-5 text-white " />
                </div>
                <span className="font-medium">{menuData.contact.phone}</span>
              </a>
              <ModalExample headingform="Book Your Session" buttonLabel="Book Your Session"
                subheadingForm="We’re Here to Help You Grow and Succeed"
                className="btnmain text-white  d-md-block d-none" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={handleClick}
              className="ms-3 rounded-md text-gray-600  hover:text-blue-600 hover:bg-gray-100"
            >
              {click ? (
                <GrClose className="h-8 w-8" />
              ) : (
                <HiMenuAlt2 className="h-8 w-8 ms-3" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {click && <MobileMenu isOpen={click} />}
    </nav>
  );
};

export default Navbar;