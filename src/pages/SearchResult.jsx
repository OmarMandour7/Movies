import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard"; // نفس الكارد اللي عندك
import { poster, searchMulti } from "../components/api";
import NavBar from "../components/NavBar";

export default function SearchResults() {
  const [sp] = useSearchParams();
  const q = sp.get("q") || "";
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // لما الكيويري تتغير نرجّع الصفحة الأولى ونفضّي النتائج
    setPage(1);
    setItems([]);
  }, [q]);

  useEffect(() => {
    if (!q) return;
    searchMulti( q, page).then((data) => {
      if (data?.results) {
        // فلتر نتائج غير الأفلام/الشوز لو حابب
        const filtered = data.results.filter(r => r.media_type === "movie" || r.media_type === "tv");
        setItems((prev) => [...prev, ...filtered]);
      }
    });
  }, [q, page]);

  if (!q) return <div className="p-6 text-white">اكتب كلمة للبحث…</div>;

  return (
    <div className="bg-black">
        <NavBar/>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-white bg-black">
      <h1 className="text-xl font-semibold">Results for “{q}”</h1>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {items.map((it) => (
          <MovieCard
            key={`${it.media_type}-${it.id}`}
            id={it.id}
            title={it.title || it.name}
            posterPath={poster(it.poster_path, "w342")}
            year={(it.release_date || it.first_air_date || "").slice(0, 4)}
            rating={it.vote_average}
            views={it.popularity}
          />
        ))}
      </div>

      {items.length > 0 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setPage((p) => p + 1)}
            className="rounded-lg bg-white/10 px-4 py-2 text-sm ring-1 ring-white/10 hover:bg-white/15"
          >
            Load more
          </button>
        </div>
      )}
    </div>  
    </div>
    
  );
}
