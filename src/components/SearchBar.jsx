import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [sp] = useSearchParams();
  const [value, setValue] = useState(sp.get("q") || "");
  const nav = useNavigate();
  const t = useRef();

  useEffect(() => {
    clearTimeout(t.current);
    t.current = setTimeout(() => {
      const q = value.trim();
      if (q) nav(`/search?q=${encodeURIComponent(q)}`);
    }, 400); // debounce 400ms
    return () => clearTimeout(t.current);
  }, [value , nav]);

  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search movies, shows, people…"
        className="w-full rounded-xl bg-white/10 pl-10 pr-3 py-2 text-sm text-white ring-1 ring-white/10 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
      />
    </div>
  );
}
