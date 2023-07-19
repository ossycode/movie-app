import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "../../services/apiMovies";
import { useSearchParams } from "react-router-dom";

export function useSearch() {
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("search");

  const { isLoading: isSearching, data: searchedMovies } = useQuery({
    queryKey: ["search", searchQuery],
    queryFn: () => searchMovies(searchQuery),
  });
  return { isSearching, searchedMovies };
}
