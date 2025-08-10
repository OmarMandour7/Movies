import { ChevronRight, Play } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { fetchTrendingPosters } from './api';

const Hero = () => {
  const [bgUrls, setBgUrls] = useState([]);

  useEffect(() => {
    let alive = true;
    fetchTrendingPosters().then((urls) => {
      if (alive) setBgUrls(urls);
    });
    return () => { alive = false; };
  }, []);
  
  

  return (
    <section className="relative">
      {/* Background collage */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="h-full w-full bg-black">
          <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-1 opacity-60">
            {Array.from({ length: 100 }, (_, i) => (
              <div key={i} className="aspect-[2/3] bg-white/5 overflow-hidden">
                <img src={bgUrls[i % bgUrls.length]} alt="poster" className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        {/* dark vignetting */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-white/70">Welcome to StreamVibe</p>
          <h1 className="mt-3 text-4xl md:text-5xl/tight font-bold text-white">
            The Best Streaming Experience
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-300/90">
            StreamVibe is your gateway to unlimited movies and shows on demand, anytime, anywhere. Create your own watchlist, enjoy the latest blockbusters, and discover new favorites.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/20 ring-1 ring-white/10 hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/40"
            >
              <Play className="h-5 w-5" /> Start Watching Now
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              Explore Library <ChevronRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Center play pulse */}
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
          <div className="relative h-64 w-64 md:h-80 md:w-80 md:left-40">
            <div className="absolute inset-0 rounded-full border-2 border-white/10" />
            <div className="absolute inset-6 rounded-full border-2 border-white/10" />
            <div className="absolute inset-12 rounded-full border-2 border-white/10" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="h-14 w-14 grid place-items-center rounded-full bg-white/10 ring-1 ring-white/20">
                <Play className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero