/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import ClientTestimonials from "@/pages/home/client-testimonials";
import Contact from "@/pages/home/contact";
import EvrExplanation from "@/pages/home/evr-explanation";
import Hero from "@/pages/home/hero";
import InfiniteHorizontalMovingCards from "@/pages/home/infinite-horizontal-moving-cards";
import LetsWorkGradientText from "@/pages/home/lets-work-gradient-text";
import OurServices from "@/pages/home/our-services";
import OurTools from "@/pages/home/our-tools";
import OurWorks from "@/pages/home/our-works";
import StepsToWorkWithUs from "@/pages/home/steps-to-work-with-us";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";

export default function Home() {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    const lenis = lenisRef.current?.lenis;

    if (!lenis) return;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(raf as any);
    };
  }, []);
  return (
    <ReactLenis
      options={{
        duration: 3,
        smoothWheel: true,
      }}
      root
      ref={lenisRef}
    >
      <div
        className={`min-h-[3000px] bg-[#080716] bg-[url("/pages/home/hero-bg-svg.svg")] bg-repeat bg-top bg-fixed`}
      >
        <Header />
        <div className="overflow-hidden 2xl:space-y-28 xl:space-y-24 lg:space-y-20 md:space-y-16 sm:space-y-14 space-y-6">
          <Hero />
          <OurTools />
          <StepsToWorkWithUs />
          <OurServices />
          <EvrExplanation />
          <OurWorks />
          {/* <Pricing /> */}
          {/* <OurTeam /> */}
          <ClientTestimonials />
          <LetsWorkGradientText />
          <Contact />
          <InfiniteHorizontalMovingCards />
          <Footer />
        </div>
      </div>
    </ReactLenis>
  );
}
