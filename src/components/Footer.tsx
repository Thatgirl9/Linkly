import { useEffect, useRef, useState } from "react";
import Icon from "../assets/Group 18.png";
import "animate.css";
// import ArrowUp from "../assets/FooterAssets/arrow-up-outline.svg";

const Footer: React.FC = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const animatedElementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(animatedElementRef.current);
    return () => observer.disconnect();
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-stroke px-8 py-[1em] flex md:flex-row flex-col-reverse gap-[0.9em] md:gap-0 justify-between items-center">
      <p className="text-primaryLite text-sm">&copy; 2024 Linkly </p>

      <div className="flex justify-center items-center gap-[1em]">
        <div>
          <img src={Icon} className="h-[35px]" alt="Logo" />
        </div>
        <p>
          <a
            href="#features"
            className="font-semibold text-primaryLite hover:text-white"
          >
            Features
          </a>
        </p>
        <p>
          <a
            href="#pricing"
            className="font-semibold text-primaryLite hover:text-white"
          >
            Pricing
          </a>
        </p>

        <button
          ref={animatedElementRef}
          className={`border border-stroke rounded-md px-1 py-1 text-2xl  ${
            isIntersecting ? "animate__bounce" : ""
          }  animate__animated animate__repeat-2 transition-all`}
          onClick={handleScrollToTop}
        >
          <ion-icon name="arrow-up-outline"></ion-icon>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
