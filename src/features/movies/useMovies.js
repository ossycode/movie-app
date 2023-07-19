import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../services/apiMovies";

export function useMovies() {
  const {
    isLoading,
    data: movies,
    error,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });
  return { isLoading, movies, error };
}
