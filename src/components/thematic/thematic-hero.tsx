import Image from "next/image";

export default function ThematicHero() {
  return (
    <div className="relative min-h-screen overflow">
      {/* Light background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100" />

      {/* Oval gradient - repositioned to match design */}
      <div className="absolute right-0 bottom-10 w-[100%] h-[450%]">
        <Image
          src="/Oval.png"
          alt="Oval gradient"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Wave image at the bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <Image
          src="/Wave.svg"
          alt="Wave background"
          width={1920}
          height={144}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-8rem)]">
          {/* Left content */}
          <div className="z-10 space-y-6">
            <div className="space-y-3">
              <p className="text-yellow-300 text-xs font-semibold uppercase tracking-widest">
                A Flagship Business Networking Platform · Birat Expo 2026
              </p>
              <h1 className="text-5xl font-bold leading-tight whitespace-nowrap">
                <span className="text-white">Birat Business </span>
                <span className="text-yellow-300">Summit 2026</span>
              </h1>
              <p className="text-blue-200 text-sm font-medium tracking-wide">
                Opportunity Connect
              </p>
            </div>

            <p className="text-gray-200 text-base max-w-lg leading-relaxed">
              Connecting Chambers, Industries, Investors, Buyers, Suppliers and
              Entrepreneurs across Nepal — a three-day summit organized by CIM
              to facilitate B2B meetings, interprovincial trade, and investment
              partnerships.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-blue-100 text-sm backdrop-blur-sm">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                20–22 December, 2026
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-blue-100 text-sm backdrop-blur-sm">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Biratnagar, Nepal
              </span>
            </div>

            <a
              href="/thematic/register"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base rounded-full text-white font-semibold
              bg-gradient-to-r from-indigo-500 to-violet-600
              hover:from-indigo-600 hover:to-violet-700
              transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              Register Now
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>

          {/* Right content */}
          <div className="relative flex justify-center items-center">
            {/* Logo */}
            <div className="relative z-10">
              <Image
                src="/biratmascot.png"
                alt="Birat Digital Expo 2026"
                width={1000}
                height={500}
                className="w-200 h-200"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
