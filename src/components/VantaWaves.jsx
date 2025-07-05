import { useEffect, useRef } from "react";

export default function VantaWaves() {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    if (window.VANTA && window.VANTA.NET && !effectRef.current) {
      effectRef.current = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x2686d9,
        backgroundColor: 0x111827,
        points: 20.0,
        maxDistance: 16.0,
        spacing: 20.0,
      });
    }

    return () => {
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 -z-10 w-full h-full"
      id="vanta-background"
    />
  );
}
