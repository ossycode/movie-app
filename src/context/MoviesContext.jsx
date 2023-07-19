// import { createContext, useContext } from "react";
// import { useLocalStorageState } from "../hooks/useLocalStorageState";
// import data from "../../data.json";
// import { useState } from "react";

// const MoviesContext = createContext();

// function MoviesProvider({ children }) {
//   const [movies, setMovies] = useState();
//   const bookmark = (id) => {
//     const clone = structuredClone(movies);
//     const updatedMovie = clone.find((movie) => movie.id === id);
//     updatedMovie.isBookmarked = !updatedMovie.isBookmarked;
//     // clone[index].isBookmarked = !clone[index].isBookmarked;
//     // clone.isBookmarked = !clone.isBookmarked;
//     setMovies(clone);
//   };
//   return (
//     <MoviesContext.Provider value={{ movies, bookmark }}>
//       {children}
//     </MoviesContext.Provider>
//   );
// }

// function useMovies() {
//   const context = useContext(MoviesContext);

//   if (context === undefined)
//     throw new Error("MoviesContext was used outside of Movies Provider");

//   return context;
// }

// export { useMovies, MoviesProvider };
