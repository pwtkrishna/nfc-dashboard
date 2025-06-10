const Loader = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="text-center">
        {/* Animated TAP ON Logo */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto bg-black rounded-2xl flex items-center justify-center relative overflow-hidden">
            {/* Animated radiating lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-12 bg-gradient-to-t from-cyan-400/80 to-transparent animate-pulse"
                  style={{
                    transform: `rotate(${i * 30}deg)`,
                    transformOrigin: "center 64px",
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>

            {/* Pulsing circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border border-cyan-400/30 animate-ping"></div>
              <div
                className="absolute w-16 h-16 rounded-full border border-cyan-400/50 animate-ping"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute w-8 h-8 rounded-full border border-cyan-400/70 animate-ping"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            {/* TAP ON text with glow effect */}
            <div className="relative z-10 text-cyan-400 font-bold text-xl text-center animate-pulse">
              <div className="drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                TAPONN
              </div>
              <div className="drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                SOLUTIONS
              </div>
            </div>
          </div>
        </div>

        {/* Loading text with dots animation */}
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <span className="text-lg font-medium">Loading your profile</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full mx-auto mt-6 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
        </div>

        {/* Loading steps */}
        <div className="mt-8 space-y-2 text-sm text-gray-500">
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
            <span>Fetching profile data...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
