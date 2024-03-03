"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchSearchMovieData } from "../GlobaRedux/store";
import { useDispatch, useSelector } from "react-redux";

export default function Hero() {


  const dispatch = useDispatch();
  const { data2,favFilms, status, error } = useSelector((state) => state.data);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Debounce function to limit API requests
  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  // Function to handle search with debounce
  const handleSearch = debounce((query) => {
    setSearchQuery(query);
    if (query) {
      // Dispatch API call only if query is not empty
      dispatch(fetchSearchMovieData(query));
    } else {
      // If query is empty, reset search results
      setSearchResults([]);
    }
  }, 100); // Debounce delay set to 500 milliseconds

  // Function to handle input change
  const handleChange = (event) => {
    const { value } = event.target;
    handleSearch(value);
  };

  // Update search results when data2 changes
  useEffect(() => {
    setSearchResults(data2.results || []);
  }, [data2.results]);

  return (
    <>
    
    <section class="bg-[url('https://tecdn.b-cdn.net/img/new/standard/city/078.jpg')] bg-cover bg-no-repeat h-full lg:h-screen overflow-hidden">
      <div class="relative overflow-hidden  bg-[50%] h-screen ">
        <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.75)]">
          <div class="flex h-full items-center justify-center">
            <div class="px-6 text-center text-white md:px-12">
              <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 mb-4 inline-block text-transparent bg-clip-text">
                <span class="text-6xl lg:text-9xl  ">IMdB Search</span> Online Movies <br />
              </h1>

              <div class="max-w-3xl text-center mx-auto my-6">
                <h1 class="block font-medium text-gray-200 text-4xl sm:text-4xl md:text-4xl lg:text-4xl">
                  Now it's easier than ever to watch movie
                </h1>
              </div>

              <div class="w-11/12 mb-6 md:w-3/4 lg:max-w-3xl m-auto">
                <div class="relative z-30 text-base text-black">
                  <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchQuery}
                    onChange={handleChange}
                    class="mt-2 shadow-md focus:outline-none rounded-full py-3 px-6 block w-full"
                  />
                  <div class="text-left absolute top-10 rounded-t-none rounded-b-2xl shadow bg-white divide-y w-full max-h-40 "></div>
                  
                <ul className="absolute z-10 bg-transparent text-start  rounded text-black  mt-1 w-full max-h-[300px] overflow-y-auto rounded shadow-lg">
                  {searchResults &&
                    searchResults?.map((movie) => (
                      <li
                        key={movie.id}
                        className="py-2 px-4 bg-gray-800 rounded-full text-gray-100 m-2 hover:text-black hover:bg-gray-300"
                      >
                        <Link href={`/${movie.id}`} legacyBehavior>
                          <a id={`/${movie.id}`}>{movie.title}</a>
                        </Link>
                      </li>
                    ))}
                </ul>
                </div>

              </div>
              {/* <a
                class="mb-2  inline-block rounded-full border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
                data-te-ripple-init
                data-te-ripple-color="light"
                href="/"
                role="button"
              >
                Search
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
}
