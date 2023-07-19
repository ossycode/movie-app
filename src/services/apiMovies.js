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
    console.log(data);
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

    const res2 = await fetch(
      `https://fake-movies-api.onrender.com/movies?id=${id}`,
      {
        method: "PATCH",
        body: JSON.stringify({ ...data, isBookmarked: !data.isBookmarked }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res2.ok) throw Error();

    // data.isBookmarked = !data.isBookmarked;

    return data;
  } catch (error) {
    console.log(error.message);
    throw Error("Failed bookmarking movie");
  }
}
