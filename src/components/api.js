import axios from "axios";



const apiKey = "20a5d40ac5bf3cd5bfc415f91d23c679" ; 
export async function fetchTrendingPosters() {
  if (!apiKey) return [];
  try {
    const res = await axios.get("https://api.themoviedb.org/3/trending/movie/week", {
      params: {
        language: "en-US",
        page: 1,
        api_key: apiKey,
      },
    });
    return (res.data?.results || [])
      .map((m) => m.backdrop_path || m.poster_path)
      .filter(Boolean)
      .slice(0, 60)
      .map((p) => `https://image.tmdb.org/t/p/w300${p}`);
  } catch (err) {
    console.error("TMDB trending error:", err);
    return [];
  }
}
export async function getAllMovies( page = 1, extraParams = {}) {
  if (!apiKey) return [];
  try {
    const res = await axios.get("https://api.themoviedb.org/3/discover/movie", {
      params: {
        api_key: apiKey,
        language: "en-US",
        sort_by: "popularity.desc",
        page,
        ...extraParams, // مثلاً genre أو سنة الإصدار
      },
          

    })   
;
    return res.data; // فيه results, page, total_pages, total_results
    
  } catch (err) {
    console.error("TMDB getAllMovies error:", err);
    return null;
  }

}
export const poster = (p, size = "w342") => (p ? `https://image.tmdb.org/t/p/${size}${p}` : "");

export async function getMovieDetails( id) {
  if (!apiKey || !id) return null;
  const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params: {
      api_key: apiKey,
      language: "en-US",
      append_to_response: "credits,images,videos", // اختياري
      include_image_language: "en,null",
    },
  });
  return res.data; // فيه title, overview, genres, runtime, backdrop_path, poster_path, vote_average...
}
