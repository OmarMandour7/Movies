import React from 'react'
import { Link } from 'react-router-dom';
export default function MovieCard({ title, posterPath, year, rating, views ,id}) {
  return (
    

    <div className="w-[180px] shrink-0 rounded-2xl bg-white/5 ring-1 ring-white/10 p-2 hover:bg-white/[.07] transition">
      <a href={`/movie/${id}`} className="block">
      <div className="relative aspect-[2/3] overflow-hidden rounded-xl">
        <img src={posterPath} alt={title} className="h-full w-full object-cover" loading="lazy" />
      </div>
</a>
      <div className="mt-2 space-y-1">
        <h3 className="line-clamp-1 text-white text-sm font-semibold"> <Link to={`/movie/${id}`}>{title}</Link></h3>
        <div className="flex items-center gap-2 text-[11px] text-gray-300/80">
          <span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1">
            {/* مدة أو سنة الإصدار بدل الساعة */}
            <span>{year || "—"}</span>
          </span>
          <span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1">
            ★ {rating?.toFixed?.(1) ?? "0.0"}
          </span>
          <span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1">
            👁 {Math.round(views || 0)}
          </span>
        </div>
      </div>
     
    </div>

  );
}
