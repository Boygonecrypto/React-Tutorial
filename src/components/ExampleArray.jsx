import { useState } from "react";
//
const films = [
  {
    id: 1,
    image:
      "https://wallpapers.com/images/high/tom-cruise-in-mission-impossible-78ledvcbbq3bqfdt.webp",
    title: "Mission Impossible 1",
  },
  {
    id: 2,
    image:
      "https://wallpapers.com/images/high/bruce-willis-russian-flags-still-mw9eig7k59ltyiuq.webp",
    title: "Die Hard",
  },
  {
    id: 3,
    image:
      "https://wallpapers.com/images/hd/mortal-kombat-subzero-fan-art-7k65wrhpyu2rsmoc.webp",
    title: "Mortal Kombat",
  },
];

const ExampleArray = () => {
  const [movies, setMovies] = useState([]);

  if (movies.length === 0) {
    return (
      <div className="w-full max-w-[400px] mx-auto my-4 p-2.5 text-center shadow-2xl">
        <h1>NO MOVIES FOUND</h1>
        <button className="mybtn" onClick={() => setMovies(films)}>
          Get Movies
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="my-4 font-bold text-3xl">Movies Available</h1>
      <section className="flex gap-3">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="w-full max-w-[300px]">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full object-cover h-[200px]"
              />
              <p>{movie.title}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ExampleArray;
