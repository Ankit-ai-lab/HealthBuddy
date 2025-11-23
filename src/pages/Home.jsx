import React from "react";
import phoneImage from "../assets/hero-phone-large.webp";
import Rating from "../components/Rating";
import Banner from "../components/Banner";
import Four from "../components/Four";

const Home = () => {
  return (
    <>
      {/* Hero Section with Speed Animations */}
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">

        {/* Speed Line Animations */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Horizontal Speed Lines */}
          <div className="absolute top-1/4 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-speed-line-horizontal"></div>
          <div className="absolute top-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-speed-line-horizontal delay-1000"></div>
          <div className="absolute bottom-1/3 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-speed-line-horizontal delay-2000"></div>

          {/* Vertical Speed Lines */}
          <div className="absolute left-1/4 h-full w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-speed-line-vertical"></div>
          <div className="absolute right-1/3 h-full w-px bg-gradient-to-b from-transparent via-blue-500/15 to-transparent animate-speed-line-vertical delay-1500"></div>

          {/* Floating Particles */}
          <div className="absolute top-20 left-20 w-1 h-1 bg-blue-400 rounded-full animate-particle-float delay-100"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-blue-500 rounded-full animate-particle-float delay-500"></div>
          <div className="absolute bottom-32 left-40 w-1 h-1 bg-blue-400 rounded-full animate-particle-float delay-700"></div>
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-blue-500 rounded-full animate-particle-float delay-300"></div>

          {/* Pulse Rings */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-64 h-64 border border-blue-200/30 rounded-full animate-pulse-ring"></div>
            <div className="w-96 h-96 border border-blue-300/20 rounded-full animate-pulse-ring delay-1000"></div>
          </div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-6 md:p-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Text Content */}
            <div className="space-y-8 animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold tracking-wide">
                    #1 RANKED FITNESS APP
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 dark:text-white leading-tight">
                  Elevate Your
                  <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Fitness
                  </span>
                </h1>
                <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light tracking-wide">
                  Smart tracking for modern lifestyles
                </h2>
              </div>

              {/* Description */}
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-8 max-w-xl">
                Experience the future of fitness with AI-powered insights, real-time tracking,
                and personalized workout plans designed for your success.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center justify-center gap-3">
                  <span>Start Free Trial</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>

                <button className="group border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-800/50 font-semibold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-sm">
                  View Features
                </button>
              </div>
            </div>

            {/* Phone Image */}
            <div className="relative flex justify-center items-center animate-float-slow">
              <div className="relative">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-[3rem] blur-3xl animate-pulse-slow"></div>

                {/* Phone Image */}
                <img
                  src={phoneImage}
                  alt="Fitness app interface"
                  className="relative w-full max-w-[280px] md:max-w-[340px] object-contain z-10 drop-shadow-2xl"
                />

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-cyan-400 rounded-full animate-bounce delay-1000 shadow-lg"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-blue-400 rounded-full animate-bounce delay-500 shadow-lg"></div>

                {/* Live Activity Badge */}
                <div className="absolute top-8 -right-6 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg animate-pulse">
                  LIVE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-slate-400 dark:text-slate-500 text-sm font-medium">Scroll</span>
            <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-400 dark:bg-slate-500 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes speed-line-horizontal {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        @keyframes speed-line-vertical {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes particle-float {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          25% { transform: translate(10px, -15px) scale(1.2); opacity: 0.6; }
          50% { transform: translate(-5px, -25px) scale(0.8); opacity: 0.4; }
          75% { transform: translate(-15px, -10px) scale(1.1); opacity: 0.7; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        .animate-speed-line-horizontal {
          animation: speed-line-horizontal 3s linear infinite;
        }
        .animate-speed-line-vertical {
          animation: speed-line-vertical 4s linear infinite;
        }
        .animate-particle-float {
          animation: particle-float 8s ease-in-out infinite;
        }
        .animate-pulse-ring {
          animation: pulse-ring 3s ease-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Other Components */}
      <Four />
      <Rating />
      <Banner />
    </>
  );
};

export default Home;
