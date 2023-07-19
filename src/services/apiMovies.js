export async function getMovies() {
  try {
    const res = await fetch("https://fake-movies-api.onrender.com/movies");
    if (!res.ok) throw new Error("Movies not found");

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error.message);
    throw Error("Movies not found");
  }
}

export async function getBookmarkedMovies() {
  try {
    const res = await fetch(
      "https://fake-movies-api.onrender.com/movies?isBookmarked=true"
    );
    if (!res.ok) throw new Error("Movies not found");

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error.message);
    throw Error("Movies not found");
  }
}

export async function bookmarkedMovie(id) {
  try {
    const res = await fetch(
      `https://fake-movies-api.onrender.com/movies?id=${id}`
    );
    if (!res.ok) throw new Error("Movie not found");

    const data = await res.json();
    const data2 = data[0];

    const res2 = await fetch(
      `https://fake-movies-api.onrender.com/movies/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify({ ...data2, isBookmarked: !data2.isBookmarked }),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      }
    );

    if (!res2.ok) throw Error("Movie not bookmarked");

    return data;
  } catch (error) {
    console.log(error.message);
    throw Error("Failed bookmarking movie");
  }
}

export async function searchMovies(query) {
  try {
    const res = await fetch(
      `https://fake-movies-api.onrender.com/movies?q=${query}`
    );
    if (!res.ok) throw new Error("No Movies found");

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
    throw Error("No Movies found");
  }
}
