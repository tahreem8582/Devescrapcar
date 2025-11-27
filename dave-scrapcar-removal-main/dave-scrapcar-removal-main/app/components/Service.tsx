"use client";
import Image from "next/image";

export default function Service() {
  return (
    <section id="service" className="py-6 md:py-16 lg:px-10 bg-white">
      <style>{`
        /* Make Service section text larger on wide desktops (1400px - 3000px) */
        @media (min-width: 1900px) and (max-width: 3000px) {
          /* Main heading */
          #service .text-center h2 {
            font-size: 4rem !important; /* ~56px */
            line-height: 1.02 !important;
          }

          /* Subheading paragraph under heading */
          #service .text-center p {
            font-size: 1.535rem !important; /* ~18px */
            line-height: 1.4 !important;
          }

          /* Timeline item titles */
          #service h3 {
            font-size: 3rem !important; /* ~32px */
            line-height: 1.08 !important;
          }

          /* Timeline item descriptions */
          #service .space-y-10 p {
            font-size: 1.825rem !important; /* ~17px */
            line-height: 1.5 !important;
          }

          /* Slightly enlarge the step icons if needed */
          #service .w-20 img, #service .w-20 svg {
            width: 76px !important;
            height: 76px !important;
          }

          /* Enlarge the right-side image container and image itself */
          /* target the inner image container that uses max-w-lg */
          #service .w-full.max-w-lg {
            max-width: 1100px !important;
            height: 620px !important;
            min-height: 520px !important;
          }

          /* Ensure the actual image fills the enlarged container */
          #service .w-full.max-w-lg img,
          #service .w-full.max-w-lg .w-full.h-full {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
          }

          /* Make the badge overlay bigger and keep it positioned */
          #service .absolute.top-2.left-2 {
            width: 220px !important;
            height: auto !important;
          }
        }
      `}</style>
      <div className="w-full mx-auto px-6 ">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#000000]">
            How{" "}
            <span className="bg-gradient-to-r from-[#CE0613] via-[#8B0101] to-[#8B0101] bg-clip-text text-transparent">
              Our Service
            </span>{" "}
            Work
          </h2>
          <p className="max-w-3xl mx-auto mt-3 text-lg text-[#8A8A8A]">
            Your trusted partner for stress-free towing and fair scrap deals. We
            make car removal simple, smooth, and completely worry-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8 md:mt-16">
          {/* Left - timeline (on small screens this will appear after the image) */}
          <div className="relative order-2 md:order-1">
            <div className="space-y-10 relative">
              <div className="absolute left-10 w-px border-l-2 border-dashed border-[#111111] top-12 bottom-20 md:top-6 md:bottom-26 lg:bottom-6 -translate-x-2" />
              <div className="flex items-start">
                <div className="w-20 flex justify-center z-10 -translate-x-2">
                  <Image
                    src="/1.svg"
                    alt="step 1"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <div className="flex-1 sm:pl-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#000000]">
                    Fast & Hassle-Free Towing
                  </h3>
                  <p className="text-sm md:text-base text-[#6b6b6b] mt-2">
                    We make car removal simple and stress-free. Our team reaches
                    you quickly and handles everything from pickup to transport
                    with care.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-20 flex justify-center z-10 -translate-x-2">
                  <Image
                    src="/2.svg"
                    alt="step 2"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <div className="flex-1 sm:pl-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#000000]">
                    Fair Scrap Value
                  </h3>
                  <p className="text-sm md:text-base text-[#6b6b6b] mt-2">
                    Get the best price for your old or damaged vehicle. We offer
                    honest quotes and instant payment without hidden charges.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-20 flex justify-center z-10 -translate-x-2">
                  <Image
                    src="/3.svg"
                    alt="step 3"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <div className="flex-1 sm:pl-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#000000]">
                    Professional & Safe Handling
                  </h3>
                  <p className="text-sm md:text-base text-[#6b6b6b] mt-2">
                    Your vehicle is managed by trained experts using modern tow
                    trucks. We ensure a smooth, damage-free process from start
                    to finish.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - image (on small screens this will appear before the timeline) */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            {/* Keep compact on mobile/tablet but allow a larger image on desktop (lg+) */}
            <div className="w-full max-w-lg lg:max-w-[660px] rounded-2xl overflow-hidden shadow-sm relative h-[240px] md:h-[380px] lg:h-[400px]">
              {/* Badge overlay: placed at the top inside the image container */}
              <div className="absolute top-4 left-4 z-30">
                <div className="bg-[#FFFFFF] rounded-lg px-4 py-1 sm:px-6 sm:py-2 flex items-center gap-3 shadow-md border border-gray-100">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FFEFEF]">
                    <svg
                      className="w-6 h-6"
                      style={{ transform: "translateY(2px)" }}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
                    >
                      <path
                        d="M12 2.5l2.39 4.85 5.36.78-3.88 3.78.92 5.36L12 15.77 6.21 17.25l.92-5.36L3.25 8.11l5.36-.78L12 2.5z"
                        fill="#AB0000"
                        stroke="#AB0000"
                        strokeWidth={1.6}
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#111111] whitespace-normal w-auto">
                    Best team of towing specialists in town.
                  </span>
                </div>
              </div>

              <Image
                src="/service2.svg"
                alt="Tow truck loading a car"
                width={900}
                height={440}
                className="w-full h-full object-cover block rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
