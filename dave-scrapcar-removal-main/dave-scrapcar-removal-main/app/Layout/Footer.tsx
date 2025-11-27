"use client";
import React from "react";
import Image from "next/image";
export default function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Fallback: update hash so navigation can still try to locate the element
      window.location.hash = id;
    }
  };

  return (
    <footer className="bg-[#F6F6F6] text-[#000000]">
      <style>{`
        /* Ultra-wide footer tuning for ~2490px (2460-2520px) */
        @media (min-width: 2460px) and (max-width: 2520px) {
          .footer-2490 { padding-top: 5rem !important; padding-bottom: 2rem !important; }
          .footer-2490 h4 { font-size: 2rem !important; }
          .footer-2490 ul li, .footer-2490 span, .footer-2490 a { font-size: 1.85rem !important; }
          /* Scale images inside the footer wrapper slightly */
          .footer-2490 img { transform: scale(1.18) !important; width: auto !important; height: auto !important; }

          /* Increase social icons more prominently at this ultra-wide size */
          .footer-2490 .social-desktop img { transform: scale(1.35) !important; }

          /* Add a little left margin to the logo column so it's not flush with the edge */
          .footer-2490 .logo-col { margin-left: 36px !important; }
        }
      `}</style>

      <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 footer-2490">
        {/* Mobile and Small Tablet Layout (xs to md) */}
        <div className="block lg:hidden">
          {/* Mobile Layout (xs to sm) - Two Column */}
          <div className="sm:hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-center mb-6 sm:mb-8">
              {/* Contact Section */}
              <div className="flex flex-col items-center">
                <h4 className="text-[#CE0613] font-semibold mb-3 sm:mb-4 text-xl sm:text-base">
                  Contact
                </h4>
                <ul className="space-y-2 sm:space-y-3 text-md sm:text-sm text-[#000000]">
                  <li>
                    <a
                      href="tel:+16472249886"
                      className="flex items-center justify-center gap-2 sm:gap-3 hover:text-[#000000] transition-colors cursor-pointer"
                      aria-label="Call us at +1 (647) 224-9886"
                    >
                      <Image
                        src="/footer/call2.svg"
                        alt="Phone"
                        width={24}
                        height={24}
                        className="sm:w-5 sm:h-5"
                      />
                      <span className=" sm:text-sm">+1 (647) 224-9886</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:khandelawer09@gmail.com"
                      className="flex items-center justify-center gap-2 sm:gap-3 hover:text-[#000000] transition-colors cursor-pointer"
                      aria-label="Email us at khandelawer09@gmail.com"
                    >
                      <Image
                        src="/footer/email2.svg"
                        alt="Email"
                        width={24}
                        height={24}
                        className="sm:w-5 sm:h-5"
                      />
                      <span className="sm:text-sm break-all">
                        khandelawer09@gmail.com
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://maps.google.com/?q=Seaforth,+Ontario,+Huron+East,+ON,+Canada"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start justify-center gap-2 sm:gap-3 hover:text-[#000000] transition-colors cursor-pointer"
                      aria-label="View our location on Google Maps"
                    >
                      <Image
                        src="/footer/location2.svg"
                        alt="Location"
                        width={24}
                        height={24}
                        className="sm:w-5 sm:h-5 mt-0.5"
                      />
                      <div className=" sm:text-sm">
                        <div>Seaforth, Ontario</div>
                        <div>Huron East, ON, Canada</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Pages and Social Combined */}
              <div className="space-y-4 sm:space-y-6 flex flex-col items-center">
                {/* Pages Section */}
                <div className="flex flex-col items-center">
                  <h4 className="text-[#CE0613] font-semibold mb-3 sm:mb-4 text-lg sm:text-base">
                    Pages
                  </h4>
                  <ul className="space-y-1 sm:space-y-2 text-md sm:text-sm text-[#000000] cursor-pointer">
                    <li>
                      <a href="#home" onClick={(e) => handleScroll(e, "home")}>
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#service"
                        onClick={(e) => handleScroll(e, "service")}
                      >
                        Service
                      </a>
                    </li>
                    <li>
                      <a
                        href="#journey"
                        onClick={(e) => handleScroll(e, "journey")}
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        onClick={(e) => handleScroll(e, "contact")}
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Social Media Section */}
                <div className="flex flex-col items-center">
                  <h4 className="text-[#CE0613] font-semibold mb-3 sm:mb-4 text-lg sm:text-base">
                    Social media
                  </h4>
                  <div className="flex gap-3 sm:gap-4 justify-center">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on Facebook"
                      className="hover:opacity-80 hover:scale-110 transition-all duration-200"
                    >
                      <Image
                        src="/footer/fb2.svg"
                        alt="Facebook"
                        width={28}
                        height={28}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14"
                      />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on Twitter"
                      className="hover:opacity-80 hover:scale-110 transition-all duration-200"
                    >
                      <Image
                        src="/footer/T2.svg"
                        alt="Twitter"
                        width={28}
                        height={28}
                        className="sm:w-6 sm:h-8"
                      />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on LinkedIn"
                      className="hover:opacity-80 hover:scale-110 transition-all duration-200"
                    >
                      <Image
                        src="/footer/I2.svg"
                        alt="LinkedIn"
                        width={28}
                        height={28}
                        className="sm:w-6 sm:h-6"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/davesscrapcarremoval/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on Instagram"
                      className="hover:opacity-80 hover:scale-110 transition-all duration-200"
                    >
                      <Image
                        src="/footer/insta2.svg"
                        alt="Instagram"
                        width={28}
                        height={28}
                        className="sm:w-6 sm:h-6"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Logo Section - Mobile (Bottom) */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Image
                  src="/footer/LogoDave.svg"
                  alt="Dave's Scrap Car Removal Logo"
                  width={200}
                  height={200}
                  className="sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Tablet Layout (sm to md) - Single Column Centered */}
          <div className="hidden sm:block md:block">
            <div className="flex flex-col items-center space-y-8 max-w-sm mx-auto text-center">
              {/* Contact Section */}
              <div className="flex flex-col items-center">
                <h4 className="text-[#CE0613] font-semibold mb-4 text-base">
                  Contact
                </h4>
                <ul className="space-y-3 text-sm text-[#000000]">
                  <li>
                    <a
                      href="tel:+16472249886"
                      className="flex items-center justify-center gap-3 hover:text-[#000000] transition-colors cursor-pointer"
                      aria-label="Call us at +1 (647) 224-9886"
                    >
                      <Image
                        src="/footer/call2.svg"
                        alt="Phone"
                        width={18}
                        height={18}
                      />
                      <span>+1 (647) 224-9886</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:khandelawer09@gmail.com"
                      className="flex items-center justify-center gap-3 hover:text-[#000000] transition-colors cursor-pointer"
                      aria-label="Email us at khandelawer09@gmail.com"
                    >
                      <Image
                        src="/footer/email2.svg"
                        alt="Email"
                        width={18}
                        height={18}
                      />
                      <span>khandelawer09@gmail.com</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://maps.google.com/?q=Seaforth,+Ontario,+Huron+East,+ON,+Canada"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start justify-center gap-3 hover:text-[#000000] transition-colors cursor-pointer"
                      aria-label="View our location on Google Maps"
                    >
                      <Image
                        src="/footer/location2.svg"
                        alt="Location"
                        width={18}
                        height={18}
                        className="mt-0.5"
                      />
                      <div>
                        <div>Seaforth, Ontario</div>
                        <div>Huron East, ON, Canada</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Pages Section */}
              <div className="flex flex-col items-center">
                <h4 className="text-[#CE0613] font-semibold mb-4 text-base">
                  Pages
                </h4>
                <ul className="space-y-2 text-sm text-[#000000] cursor-pointer">
                  <li>
                    <a href="#home" onClick={(e) => handleScroll(e, "home")}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#service"
                      onClick={(e) => handleScroll(e, "service")}
                    >
                      Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#journey"
                      onClick={(e) => handleScroll(e, "journey")}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      onClick={(e) => handleScroll(e, "contact")}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Media Section */}
              <div className="flex flex-col items-center">
                <h4 className="text-[#CE0613] font-semibold mb-4 text-base">
                  Social media
                </h4>
                <div className="flex gap-4 justify-center">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Facebook"
                    className="hover:opacity-80 hover:scale-110 transition-all duration-200"
                  >
                    <Image
                      src="/footer/fb2.svg"
                      alt="Facebook"
                      width={24}
                      height={24}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10"
                    />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Twitter"
                    className="hover:opacity-80 hover:scale-110 transition-all duration-200"
                  >
                    <Image
                      src="/footer/T2.svg"
                      alt="Twitter"
                      width={24}
                      height={24}
                    />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on LinkedIn"
                    className="hover:opacity-80 hover:scale-110 transition-all duration-200"
                  >
                    <Image
                      src="/footer/I2.svg"
                      alt="LinkedIn"
                      width={24}
                      height={24}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/davesscrapcarremoval/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                    className="hover:opacity-80 hover:scale-110 transition-all duration-200"
                  >
                    <Image
                      src="/footer/insta2.svg"
                      alt="Instagram"
                      width={24}
                      height={24}
                    />
                  </a>
                </div>
              </div>

              {/* Logo Section */}
              <div className="flex flex-col items-center">
                <Image
                  src="/footer/LogoDave.svg"
                  alt="Dave's Scrap Car Removal Logo"
                  width={220}
                  height={220}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout (lg and above) */}
        <div className="hidden lg:grid lg:grid-cols-4 xl:grid-cols-4 gap-6 xl:gap-8 items-start">
          {/* Logo Section - Desktop */}
          <div className="flex flex-col items-start gap-4 text-[#000000] col-span-1 logo-col lg:ml-8">
            <div className="flex flex-col items-start gap-3 -mt-8">
              <Image
                src="/footer/LogoDave.svg"
                alt="Dave's Scrap Car Removal Logo"
                width={160}
                height={160}
                className="xl:w-[220px] xl:h-[220px]"
                priority
              />
            </div>
          </div>

          {/* Pages Section - Desktop */}
          <div className="text-left ml-28">
            <h4 className="text-[#CE0613] font-semibold mb-4 text-sm xl:text-base">
              Pages
            </h4>
            <ul className="space-y-2 xl:space-y-3 text-sm xl:text-base text-[#000000] cursor-pointer">
              <li>
                <a href="#home" onClick={(e) => handleScroll(e, "home")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#service" onClick={(e) => handleScroll(e, "service")}>
                  Service
                </a>
              </li>
              <li>
                <a href="#joirney" onClick={(e) => handleScroll(e, "journey")}>
                  About
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section - Desktop */}
          <div className="text-left">
            <h4 className="text-[#CE0613] font-semibold mb-4 text-sm xl:text-base">
              Contact
            </h4>
            <ul className="space-y-3 xl:space-y-4 text-sm xl:text-base text-[#000000]">
              <li>
                <a
                  href="tel:+16472249886"
                  className="flex items-center gap-3 hover:text-[#000000] transition-colors cursor-pointer"
                  aria-label="Call us at +1 (647) 224-9886"
                >
                  <Image
                    src="/footer/call2.svg"
                    alt="Phone"
                    width={18}
                    height={18}
                    className="xl:w-5 xl:h-5"
                  />
                  <span>+1 (647) 224-9886</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:khandelawer09@gmail.com"
                  className="flex items-center gap-3 hover:text-[#000000] transition-colors cursor-pointer"
                  aria-label="Email us at khandelawer09@gmail.com"
                >
                  <Image
                    src="/footer/email2.svg"
                    alt="Email"
                    width={18}
                    height={18}
                    className="xl:w-5 xl:h-5"
                  />
                  <span className="break-all">khandelawer09@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Seaforth,+Ontario,+Huron+East,+ON,+Canada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-[#000000] transition-colors cursor-pointer"
                  aria-label="View our location on Google Maps"
                >
                  <Image
                    src="/footer/location2.svg"
                    alt="Location"
                    width={18}
                    height={18}
                    className="xl:w-5 xl:h-5 mt-1"
                  />
                  <div>
                    <div>Seaforth, Ontario</div>
                    <div>Huron East, ON, Canada</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section - Desktop */}
          <div className="text-left ml-10">
            <h4 className="text-[#CE0613] font-semibold mb-4 text-sm xl:text-base">
              Social media
            </h4>
            <div className="flex gap-4 xl:gap-5 text-[#000000] social-desktop">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="hover:opacity-80 hover:scale-110 transition-all duration-200"
              >
                <Image
                  src="/footer/fb2.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="w-8 h-8 sm:w-8 sm:h-8 md:w-8 md:h-8 xl:w-8 xl:h-8"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="hover:opacity-80 hover:scale-110 transition-all duration-200"
              >
                <Image
                  src="/footer/T2.svg"
                  alt="Twitter"
                  width={22}
                  height={22}
                  className="xl:w-7 xl:h-7"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
                className="hover:opacity-80 hover:scale-110 transition-all duration-200"
              >
                <Image
                  src="/footer/I2.svg"
                  alt="LinkedIn"
                  width={22}
                  height={22}
                  className="xl:w-7 xl:h-7"
                />
              </a>
              <a
                href="https://www.instagram.com/davesscrapcarremoval/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="hover:opacity-80 hover:scale-110 transition-all duration-200"
              >
                <Image
                  src="/footer/insta2.svg"
                  alt="Instagram"
                  width={22}
                  height={22}
                  className="xl:w-7 xl:h-7"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
