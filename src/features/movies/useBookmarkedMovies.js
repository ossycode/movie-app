import { useQuery } from "@tanstack/react-query";
import { getBookmarkedMovies } from "../../services/apiMovies";

export function useBookmarkedMovies() {
  const { isLoading, data: bookmarkedMovies } = useQuery({
    queryKey: ["bookmarkedMovies"],
    queryFn: getBookmarkedMovies,
  });
  return {
    isLoading,
    bookmarkedMovies,
  };
}
