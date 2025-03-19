/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import ClientTestimonials from "@/components/pages/home/client-testimonials";
import Contact from "@/components/pages/home/contact";
import EvrExplanation from "@/components/pages/home/evr-explanation";
import Hero from "@/components/pages/home/hero";
import InfiniteHorizontalMovingCards from "@/components/pages/home/infinite-horizontal-moving-cards";
import LetsWorkGradientText from "@/components/pages/home/lets-work-gradient-text";
import OurClients from "@/components/pages/home/our-clients";
import OurServices from "@/components/pages/home/our-services";
import OurTeam from "@/components/pages/home/our-team";
import OurWorks from "@/components/pages/home/our-works";
import Pricing from "@/components/pages/home/pricing";
import StepsToWorkWithUs from "@/components/pages/home/steps-to-work-with-us";
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
        <div className='overflow-hidden 2xl:space-y-28 xl:space-y-24 lg:space-y-20 md:space-y-16 sm:space-y-14 space-y-6'>
          <Hero />
          <OurClients />
          <StepsToWorkWithUs />
          <OurServices />
          <EvrExplanation />
          <OurWorks />
          <Pricing />
          <OurTeam />
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
