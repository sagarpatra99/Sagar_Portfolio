import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;

      setScrollPercent(scrolled);
      setIsVisible(scrollTop > 200); // show after 200px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SVG Circle settings
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercent / 100) * circumference;

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed right-4 bottom-12 bg-blue-600s bg-white rounded-full shadow-lg transition-all duration-300 cursor-pointer"
        aria-label="Scroll to top"
      >
        <svg
          className="w-14 h-14 transform"
          viewBox="0 0 50 50"
        >
          {/* Background Circle */}
          <circle
            cx="25"
            cy="25"
            r={radius}
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="4"
            fill="none"
          />
          {/* Progress Circle */}
          <circle
            cx="25"
            cy="25"
            r={radius}
            stroke="blueviolet"
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
          {/* Text or Icon */}
          <foreignObject x="12" y="12" width="26" height="26">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "27px",
                fontSize: "12px",
                fontWeight: "bold",
                color: "blueviolet",
              }}
            >
              {scrollPercent >= 95 ? (
                <ArrowUp size={16} />
              ) : (
                `${Math.round(scrollPercent)}%`
              )}
            </div>
          </foreignObject>
        </svg>
      </button>
    )
  );
}
