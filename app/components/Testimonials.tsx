import React from "react";
import { StarRating } from "./Icons";

export function Testimonials() {
  const reviews = [
    {
      quote: "VinuLabs transformed the way we think about technology and innovation.",
      author: "Chief Technology Officer",
      org: "Enterprise Healthcare Network",
      rating: 5,
    },
    {
      quote: "A trusted partner with deep technical expertise.",
      author: "Director of Engineering",
      org: "Global Banking Institution",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-24 bg-[#07090e]">
      <div className="section-wrapper">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Client Feedback
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            What Partners <span className="gradient-text-gold">Say.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="glass-card p-8 border-white/10 hover:border-amber-400/40 relative flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="mb-6">
                  <StarRating rating={rev.rating} />
                </div>
                <blockquote className="text-lg sm:text-xl font-medium text-slate-100 mb-6 italic leading-relaxed">
                  &ldquo;{rev.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm">{rev.author}</div>
                  <div className="text-xs text-slate-400">{rev.org}</div>
                </div>
                <span className="text-amber-400 font-extrabold text-xl">★★★★★</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
