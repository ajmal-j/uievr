/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";

import Header from "./components/layouts/header";
import Home from "./pages/home";

function App() {
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
      <div className="min-h-[3000px] bg-[#080716]">
        <Header />
        <Home />
      </div>
    </ReactLenis>
  );
}

export default App;
