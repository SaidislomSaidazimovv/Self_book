import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndexx, setCurrentIndexx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Get Started Now",
    "Join Us Today",
    "Take Action",
    "Start Your Journey",
    "Let's Begin",
  ];

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndexx];

        if (isDeleting) {
          setCurrentText(current.substring(0, currentText.length - 1));
        } else {
          setCurrentText(current.substring(0, currentText.length + 1));
        }

        if (!isDeleting && currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false);
          setCurrentIndexx((prevIndex) => (prevIndex + 1) % texts.length);
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndexx, texts]);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <Sparkles className="h-12 w-12 text-yellow-300 animate-bounce" />
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Create Your
          <span className="block text-yellow-300">
            <span className="bg-gradient-to-r from-yellow-300 via-red-600 to-yellow-300 bg-clip-text text-transparent animate-gradient block min-h-[1.2em]">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </span>
        </h2>

        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join over 50,000 creators who have already transformed their digital
          presence with Selfbook. Start building today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center gap-2">
            Start Building Now
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <p className="text-blue-100 text-sm">
            No credit card required • Free forever plan available
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
