import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bookmarkedMovie as bookmarkedMovieApi } from "../../services/apiMovies";

export function useBookmarked() {
  const queryClient = useQueryClient();
  const { mutate: bookmarkedMovie, isLoading: isBookmarking } = useMutation({
    mutationFn: bookmarkedMovieApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });
      console.log("success");
    },
    onError: (err) => {
      console.log(err.message);
    },
  });
  return { bookmarkedMovie, isBookmarking };
}
