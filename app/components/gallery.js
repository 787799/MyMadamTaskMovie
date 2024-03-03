"use client";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovieData } from "../GlobaRedux/store";
import { useEffect } from "react";
import Link from "next/link";

export default function Gallery() {
  const dispatch = useDispatch();
  const { data1, status, error } = useSelector((state) => state.data);
  const { results } = data1;

  useEffect(() => {
    dispatch(fetchPopularMovieData());
  }, []);

  console.log("results gallery", results);

  return (
    <section class="container p-6  mx-auto space-y-3">
      <h4 class="text-xl font-bold mt-4 text-white capitalize  md:text-3xl text-center">
        ⚒️ Movies Gallery 🛠️
      </h4>
      <p class="text-center text-2xl text-white">
        Tools that will help you get things done in less time.
      </p>

      <div class="flex items-center justify-center">
        <div class="grid gap-8 my-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* <!-- cards --> */}
          {results &&
            results.map((e) => {
              return <GalleryCard movie={e} key={e.id} />;
            })}
        </div>
      </div>
    </section>
  );
}

export function GalleryCard({ movie }) {
  return (
    <>
      <Link href={`/${movie.id}`}>
        {/* <div class="flex text-white flex-wrap justify-center">
          <div class="max-w-sm mx-4 mb-8 pb-4 py-2 bg-gray-700 shadow-lg rounded-lg overflow-hidden">
            <img
              class="w-full h-45 lg:h-64 object-cover"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <div class="px-6 py-4">
              <div class="font-bold text-2xl mb-2">{movie.title}</div>
              <p
                className="text-gray-100 text-sm overflow-ellipsis overflow-hidden"
                style={{ maxHeight: "6rem" }}
              >
                {movie.overview}
              </p>
            </div>
            <div class="px-6 py-2">
              {movie?.genre_ids?.map((genreId) => (
                <span
                  key={genreId}
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                >
                  #{genreId}
                </span>
              ))}
            </div>
            <div class="px-2 mx-4 ">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                Rating: {movie.vote_average}/10
              </span>
            </div>
            <button type="button" class="text-white mx-6 my-4 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">View</button>
          </div>
        </div> */}
        <div class="flex text-white flex-wrap justify-center">
          <div class="max-w-xs sm:max-w-sm mx-2 mb-4 sm:mb-8 pb-2 sm:pb-4 py-2 bg-gray-700 shadow-lg rounded-lg overflow-hidden">
            <img
              class="w-full h-40 sm:h-48 lg:h-56 object-cover"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <div class="px-4 sm:px-6 py-2">
              <div class="font-bold text-lg sm:text-xl mb-1">{movie.title}</div>
              <p
                class="text-gray-100 text-sm overflow-ellipsis overflow-hidden"
                style={{ maxHeight: "3rem" }}
              >
                {movie.overview}
              </p>
            </div>
            <div class="px-4 pt-2">
              <div class="flex flex-wrap">
                {movie?.genre_ids?.map((genreId) => (
                  <span
                    key={genreId}
                    class="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs sm:text-sm font-semibold text-gray-700 mr-1 mb-1"
                  >
                    #{genreId}
                  </span>
                ))}
              </div>
            </div>
            <div class="px-4 py-2">
              <span class="inline-block  rounded-full px-2 py-1 text-xs sm:text-sm font-semibold text-gray-100">
                Rating: {movie.vote_average}/10
              </span>
            </div>
            <div class="px-4  flex justify-start">
              <button
                type="button"
                class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-xs sm:text-sm px-4 py-2.5"
              >
                View
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
