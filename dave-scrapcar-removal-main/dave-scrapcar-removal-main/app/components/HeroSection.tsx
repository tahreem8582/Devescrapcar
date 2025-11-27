"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-[520px] xl:h-screen custom-tablet-hero-height overflow-hidden"
    >
      <style>{`
        @media (min-width: 768px) and (max-width: 1200px) {
          .custom-tablet-hero-height {
            height: 40vh !important;
          }
        }

        /* iPad Pro specific adjustments */
        @media (min-width: 1024px) and (max-width: 1366px) {
          /* iPad Pro: reduce right text + push further right */
          .ipadpro-right-text {
            font-size: 1.6rem !important;
          }
          .ipadpro-headline {
            font-size: 120px !important;
            transform: translateX(110px) !important;
          }
          .ipadpro-subheadline {
            font-size: 78px !important;
            transform: translateX(110px) !important;
          }

          /* Button smaller and shifted right on iPad Pro */
          .ipadpro-btn {
            font-size: 0.7rem !important;
            padding: 0.2rem 0.6rem !important;
            transform: translateX(100px) !important;
          }

          /* Left text — keep similar but slightly smaller to balance */
          .ipadpro-left-text {
            font-size: 2rem !important;
            line-height: 1.25 !important;
            transform: translateY(0px);
          }

          .ipadpro-left-text h2 {
            font-size: 2rem !important;
          }
        }

        /* iPad Mini / small tablets: reduce and shift right a bit */
        @media (min-width: 768px) and (max-width: 1023px) {
          .ipadpro-right-text {
            font-size: 1.25rem !important;
          }
          .ipadpro-headline {
            font-size: 72px !important;
            transform: translateX(40px) translateY(-90px);
          }
          .ipadpro-subheadline {
            font-size: 46px !important;
            transform: translateX(40px) translateY(-80px);
          }

          /* Left text smaller on iPad mini / iPad Air */
          .ipadpro-left-text {
            font-size: 1.8rem !important;
            line-height: 1.15 !important;
            transform: translateY(-4px) !important;
          }

          .ipadpro-left-text h2 {
            font-size: 1.8rem !important;
            line-height: 1.15 !important;
          }

          /* Slightly reduce hero height on iPad mini / small tablets */
          .custom-tablet-hero-height {
            height: 68vh !important;
          }

          .ipadpro-btn {
            font-size: 0.7rem !important;
            padding: 0.18rem 0.5rem !important;
            /* shift right and slightly up compared to previous position */
            transform: translateX(70px) translateY(20px) !important;
          }
        }

        @media (min-width: 530px) and (max-width: 550px) {
          .custom-tablet-hero-height {
            height: 90vh !important;
          }
        }

        /* Special case: make hero height 996px for viewports around 996px wide
           (requested: "996 pe image ki height ho thodi") */
        @media (min-width: 768px) and (max-width: 1024px) {
          .custom-tablet-hero-height {
            height: 500px !important;
          }
        }

        @media (min-width: 1270px) and (max-width: 1290px) {
          .custom-tablet-hero-height {
            height: 100vh !important;
          }
        }

        @media (min-width: 1024px) and (max-width: 1280px) {
          .custom-tablet-hero-height {
            height: 90vh !important;
          }
        }

        /* Tweak for ~1245px view: move right-side text slightly to the right
           and lower the CTA button a bit to improve alignment */
        @media (min-width: 1220px) and (max-width: 1260px) {
          .ipadpro-headline {
            /* nudge the large headline slightly left compared to previous value */
            transform: translateX(20px) !important;
          }

          .ipadpro-subheadline {
            /* keep subheadline aligned with headline (moved left ~20px) */
            transform: translateX(20px) !important;
          }

          /* keep CTA button lowered as before */
          .ipadpro-btn {
            transform: translateY(28px) !important;
          }
        }

        @media (min-width: 820px) and (max-width: 1370px) and (orientation: portrait) {
          .custom-tablet-hero-height {
            height: 48vh !important;
          }
        }

        /* Large / extra-wide desktop screens (tuned for ~2490px) */
        @media (min-width: 2000px) {
          /* Make the right-hand headline and subheadline much larger */
          .ipadpro-headline {
            font-size: 220px !important;
            transform: translateX(140px) !important;
            line-height: 0.82 !important;
          }

          .ipadpro-subheadline {
            font-size: 180px !important;
            transform: translateX(140px) !important;
            line-height: 0.9 !important;
          }

          /* Slightly increase right-text base size */
          .ipadpro-right-text {
            font-size: 2.5rem !important;
          }

          /* Move the left text further down so it sits lower on very wide screens */
          .ipadpro-left-text {
            transform: translateY(120px) !important;
            /* make left heading larger on very wide screens */
            font-size: 3.25rem !important;
          }

          .ipadpro-left-text h2 {
            font-size: 56px !important;
            line-height: 1.05 !important;
          }
        }

        /* Additional tuning for ultra-wide >=2400px (if needed) */
        @media (min-width: 2400px) {
          .ipadpro-headline { font-size: 240px !important; transform: translateX(160px) !important; }
          .ipadpro-subheadline { font-size: 156px !important; transform: translateX(160px) !important; }
          .ipadpro-left-text { transform: translateY(180px) !important; font-size: 3.5rem !important; }
          .ipadpro-left-text h2 { font-size: 64px !important; line-height: 1.03 !important; }
        }
        /* Specific tweaks for ~2490px viewports: enlarge CTA button and nudge left text slightly left */
        @media (min-width: 2460px) and (max-width: 2520px) {
          /* Move the CTA slightly left and down so it sits closer to the center */
          .ipadpro-btn {
            font-size: 5rem !important; /* larger button text */
            padding: 1.5rem 5.4rem !important; /* bigger tappable area */
            /* combine vertical nudge with a left shift */
            transform: translateY(10px) translateX(-80px) !important;
            gap: 1.25rem !important;
          }

          /* Enlarge the red outer circle inside the CTA */
          .ipadpro-btn .relative {
            width: 90px !important;
            height: 72px !important;
          }

          /* Enlarge the white inner circle that holds the phone icon */
          .ipadpro-btn .relative > span {
            width: 90px !important;
            height: 90px !important;
          }

          /* Make the call image/icon larger and centered */
          .ipadpro-btn img {
            width: 60px !important;
            height: 60px !important;
            object-fit: contain !important;
          }

          /* Increase the phone number text size inside the CTA */
          .ipadpro-btn .text-left .text-xs {
            font-size: 1.9rem !important; /* bigger phone text */
            line-height: 1.05 !important;
          }

          /* nudge the left-side block a bit to the left while keeping vertical position */
          .ipadpro-left-text {
            transform: translateY(180px) translateX(40px) !important;
          }

          /* if needed, slightly increase left headline size to balance */
          .ipadpro-left-text h2 {
            font-size: 70px !important;
          }
        }
        /* Desktop-only: nudge right-side text slightly to the right */
        @media (min-width: 1280px) {
          .desktop-shift-right {
            transform: translateX(70px) !important;
          }
        }
      `}</style>

      {/* Mobile Image */}
      <div className="absolute inset-0 w-full h-full z-0 sm:hidden">
        <Image
          src="/c.svg"
          alt="Hero mobile background"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Desktop / Tablet Image */}
      <div className="absolute inset-0 w-full h-full z-0 hidden sm:block">
        <Image
          src="/HeroImage.png"
          alt="Hero desktop background"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Left text */}
      <div className="absolute z-30 top-52 left-8 lg:left-24 ipadpro-left-text">
        <div className="hidden sm:block text-[#FFFFFF] max-w-xs lg:max-w-md">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug font-['Poppins', sans-serif] "
            style={{ textShadow: "0 6px 18px rgba(0,0,0,0.75)" }}
          >
            Tow Away
            <br />
            Your Trouble
            <br />
            Today
          </h2>
        </div>
      </div>

      {/* Right text */}
      <div className="relative z-20 px-4 md:px-8 lg:px-16 xl:px-32 h-full flex items-center justify-between">
        <div className="w-full flex items-stretch justify-end">
          <div className="hidden sm:flex w-full items-end justify-end pr-4 text-right relative -translate-y-4 lg:-translate-y-24 lg:-translate-x-8">
            <div className="hidden sm:block text-[#FFFFFF] desktop-shift-right">
              <div
                className="uppercase tracking-[0.02em] text-[48px] md:text-[72px] lg:text-[140px] ipadpro-right-text ipadpro-headline"
                style={{
                  fontFamily: "var(--font-antonio), Antonio, sans-serif",
                  lineHeight: 0.82,
                  letterSpacing: "-0.01em",
                  textShadow: "0 6px 18px rgba(0,0,0,0.65)",
                }}
              >
                GUARANTED
              </div>

              <div
                className="uppercase tracking-[0.04em] mt-6 text-[28px] md:text-[48px] lg:text-[90px] ipadpro-right-text ipadpro-subheadline"
                style={{
                  fontFamily: "var(--font-antonio), Antonio, sans-serif",
                  lineHeight: 0.9,
                  letterSpacing: "0.01em",
                  textShadow: "0 6px 18px rgba(0,0,0,0.65)",
                }}
              >
                MAXIMUM VALUE
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile headline + CTA */}
      <div className="absolute z-30 inset-x-0 top-20 sm:hidden flex flex-col items-center px-6 mt-12">
        <div
          className="text-white text-center"
          style={{ textShadow: "0 6px 18px rgba(0,0,0,0.85)" }}
        >
          <div
            className="uppercase tracking-[0.02em]"
            style={{
              fontFamily: "var(--font-antonio), Antonio, sans-serif",
              fontSize: "58px",
              lineHeight: 0.9,
              letterSpacing: "-0.01em",
            }}
          >
            GUARANTED
          </div>
          <div
            className="uppercase tracking-[0.04em] mt-2"
            style={{
              fontFamily: "var(--font-antonio), Antonio, sans-serif",
              fontSize: "36px",
              lineHeight: 0.9,
              letterSpacing: "0.01em",
            }}
          >
            MAXIMUM VALUE
          </div>
          <button
            onClick={() => (window.location.href = "tel:+16472249886")}
            className="mt-6 inline-flex items-center gap-2 bg-[#c2161f] text-white px-4 py-2 rounded-2xl shadow-md ipadpro-btn text-sm"
            aria-label="Call now +1 (647) 224-9886"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
              <Image
                src="/HeroCall.svg"
                alt="phone icon"
                width={16}
                height={16}
              />
            </span>
            <span className="font-semibold text-sm">+1 (647) 224-9886</span>
          </button>
        </div>
      </div>

      {/* Phone CTA */}
      <a
        href="tel:+16472249886"
        className="hidden sm:inline-flex absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 items-center gap-3 bg-[#c2161f] text-white px-4 md:px-6 py-0.5 sm:rounded-3xl shadow-2xl whitespace-nowrap ipadpro-btn md:top-auto md:bottom-20 md:left-auto md:right-42 md:translate-x-0 md:-translate-y-0 lg:bottom-16 lg:right-60 xl:bottom-12 xl:right-68"
        aria-label="Call now +1 (647) 224-9886"
      >
        <span className="relative flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#c2161f]">
          <span className="flex items-center justify-center w-8 h-8 md:w-11 md:h-11 rounded-full bg-white">
            <Image
              src="/HeroCall.svg"
              alt="phone icon"
              width={20}
              height={20}
            />
          </span>
        </span>

        <div className="text-left whitespace-nowrap">
          <div className="text-xs md:text-base lg:text-lg font-semibold tracking-tight">
            +1 (647) 224-9886
          </div>
        </div>
      </a>
    </section>
  );
}
