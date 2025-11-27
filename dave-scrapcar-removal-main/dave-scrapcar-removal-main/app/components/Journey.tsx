"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Journey() {
  // Images to rotate — replace/add your paths here
  const images = ["/J.svg", "/journey2.svg"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 2000); // change every 5000ms = 5s

    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section id="journey" className="py-10 px-6 lg:py-16 lg:px-16 bg-white">
      <div className="w-full mx-auto">
        <div
          className="rounded-2xl p-[2px]"
          style={{ background: "linear-gradient(to right,#FFC5C5,#FF9595)" }}
        >
          <div className="bg-white rounded-2xl p-6 md:p-10 lg:p-12">
            {/* Heading at top center */}
            <h3 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-[#000000] font-['Poppins',sans-serif]">
              <span className="bg-gradient-to-r from-[#CE0613] via-[#8B0101] to-[#8B0101] bg-clip-text text-transparent">
                Our Journey:
              </span>
              <span className="ml-2 font-semibold">Get to know us</span>
            </h3>

            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Image - left on large screens; moved below text on small screens */}
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <div
                  className="overflow-hidden rounded-xl relative"
                  // maintain aspect ratio (520 / 900 = 57.78%) so layout doesn't shift
                  style={{ paddingTop: "57.78%" }}
                >
                  {/* Stacked images with crossfade so the text isn't affected during image change */}
                  {images.map((src, i) => (
                    <Image
                      key={`${src}-${i}`}
                      src={src}
                      alt={`Slide ${i + 1} - Tow truck loading a car`}
                      fill
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                        i === index ? "opacity-100" : "opacity-0"
                      }`}
                      priority={i === 0}
                    />
                  ))}
                </div>
              </div>

              {/* Text - right on large screens */}
              <div
                id="journey-text"
                className="w-full lg:w-1/2 order-1 lg:order-2 text-center lg:text-left font=['Poppins',sans-serif]"
              >
                <div className="text-sm md:text-base lg:text-lg text-[#6D6D6D] leading-relaxed space-y-3">
                  <p>
                    At Dave&apos;s Scrap Car Tow Service, we take pride in
                    delivering fast, reliable, and professional towing
                    solutions. With a certified team of experts and
                    well-equipped tow trucks, we ensure every job is handled
                    with care and precision — whether it&apos;s a scrap car,
                    accident recovery, or vehicle transport.
                  </p>

                  <p>
                    Our mission is simple: to make your towing experience
                    smooth, safe, and hassle-free. From the first call to the
                    final drop-off, we&apos;ve got your back.
                  </p>

                  <p className="mt-2 text-sm md:text-base lg:text-lg text-[#6D6D6D]">
                    Towing made easy, honest, and dependable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Targeted media query: enlarge heading + right-side text around large viewports
          + small-screen upward shift to move content slightly up on mobile */}
      <style jsx>{`
        /* Add a smooth transition so the shift doesn't jank */
        #journey {
          transition: transform 280ms ease;
        }

        @media (max-width: 768px) {
          /* shift the entire section slightly upward on small viewports */
          #journey {
            transform: translateY(-40px);
          }
        }

        @media (min-width: 1800px) and (max-width: 2490px) {
          /* Increase paragraph sizes in the right-side text block only */
          #journey-text {
            /* ensure any inherited font sizing grows — used for small wrappers */
            font-size: 2rem !important;
          }

          #journey-text .text-sm,
          #journey-text p {
            font-size: 2rem !important; /* ~32px */
            line-height: 1.35 !important;
          }

          #journey-text .text-sm.md\:text-base.lg\:text-lg {
            font-size: 2.1rem !important;
          }

          /* Also enlarge the section heading so it scales with the text */
          #journey h3 {
            font-size: 3rem !important; /* ~51px */
            line-height: 1.05 !important;
          }

          /* keep the gradient text visible */
          #journey h3 span {
            display: inline-block;
          }
        }

        @media (min-width: 2460px) and (max-width: 2520px) {
          #journey-text,
          #journey-text .text-sm,
          #journey-text p,
          #journey-text .text-sm.md\:text-base.lg\:text-lg {
            font-size: 2.2rem !important; /* larger for clear visibility */
            line-height: 1.15 !important;
          }

          /* Stronger heading size around the 2490 target */
          #journey h3 {
            font-size: 4rem !important; /* ~64px */
            line-height: 1 !important;
          }

          #journey h3 span {
            display: inline-block;
          }
        }
      `}</style>
    </section>
  );
}
