import React from "react";

const PortfolioLoading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
      {/* Ripple container */}
      <div className="relative w-32 h-32 flex justify-center items-center rounded-full">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full" />
        <div className="absolute w-24 h-24 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full animate-[ping_3s_linear_infinite]" />
        <div className="absolute w-24 h-24 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full animate-[ping_3s_linear_infinite_1.5s]" />
        <div className="absolute w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-80" />
        <div className="absolute w-12 h-12 bg-white/20 rounded-full blur-sm animate-pulse" />
      </div>

      {/* Loading dots */}
      <div className="flex mt-6 space-x-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
            style={{
              animation: `bounce 1.4s ease-in-out ${i * 0.16}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Portfolio text */}
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 font-greatVibes text-4xl mt-6">
        Stephfolio
      </p>
    </div>
  );
};

export default PortfolioLoading;
