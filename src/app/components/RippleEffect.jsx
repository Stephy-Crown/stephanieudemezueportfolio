// import React from "react";

// const RippleEffect = () => {
//   return (
//     <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
//       <div className="relative w-24 h-24 flex justify-center items-center rounded-full overflow-hidden">
//         {/* Ripple Circles */}
//         <div className="absolute w-16 h-16 bg-white rounded-full animate-ripple1"></div>
//         <div className="absolute w-16 h-16 bg-white rounded-full animate-ripple2"></div>
//       </div>
//       <p className="text-white font-greatVibes text-3xl mt-8">Stephfolio</p>
//     </div>
//   );
// };

// export default RippleEffect;

import React from "react";

const PortfolioLoading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
      {/* Main ripple container */}
      <div className="relative w-32 h-32 flex justify-center items-center rounded-full overflow-hidden">
        {/* Gradient background for added depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full" />

        {/* Enhanced Ripple Circles */}
        <div className="absolute w-24 h-24 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full animate-[ping_3s_linear_infinite]" />
        <div className="absolute w-24 h-24 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full animate-[ping_3s_linear_infinite_1.5s]" />

        {/* Center static circle */}
        <div className="absolute w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-80" />

        {/* Inner glowing circle */}
        <div className="absolute w-12 h-12 bg-white/20 rounded-full blur-sm animate-pulse" />
      </div>

      {/* Loading dots container */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        {[...Array(3)].map((_, i) => (
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

      <style jsx>{`
        @keyframes bounce {
          0%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioLoading;
