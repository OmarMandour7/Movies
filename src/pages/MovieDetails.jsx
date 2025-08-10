import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetails } from "../components/api";
import { Play, Plus, ThumbsUp, Volume2 } from "lucide-react";
import AllMovieSection from "../components/AllMovieSection";

export default function MovieDetails(){
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then(setMovie);
  }, [id]);

  if(!movie) return <div className="p-6 text-white">Loading…</div>;

  const poster = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "";
  const title = movie.title || movie.original_title;
  const overview = movie.overview;
  console.log(poster)
  return (
    <div className="bg-black">
 <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
      <div className="relative overflow-hidden py-5 rounded-2xl ring-4 ring-white/10">
        {/* الخلفية */}
        <img
          src={poster}
          alt=""
          className="h-72 md:h-[500px] w-full object-contain"
          loading="lazy"
        />
        {/* تظليل */}
        <div className="absolute  bg-gradient-to-t from-black via-black/30 to-transparent" />

        {/* المحتوى */}
        <div className=" inset-x-0 bottom-0 p-6 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
          <p className="mt-2 text-sm md:text-base text-gray-300/90 line-clamp-2">
            {overview}
          </p>

          <div className="mt-4 flex items-center justify-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500">
              <Play className="h-4 w-4" /> Play Now
            </button>
            <button className="rounded-lg bg-white/10 p-2 text-white ring-1 ring-white/10 hover:bg-white/15">
              <Plus className="h-4 w-4" />
            </button>
            <button className="rounded-lg bg-white/10 p-2 text-white ring-1 ring-white/10 hover:bg-white/15">
              <ThumbsUp className="h-4 w-4" />
            </button>
            <button className="rounded-lg bg-white/10 p-2 text-white ring-1 ring-white/10 hover:bg-white/15">
              <Volume2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
                <AllMovieSection/>

    </section>
    </div>
 
  );
}
