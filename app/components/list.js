"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovieData } from "../GlobaRedux/store";

export default function List({ title = "Popular Movies" ,index}) {
  const dispatch = useDispatch();
  const { data1,  status, error } = useSelector(
    (state) => state.data
  );
  const { results } = data1;

  useEffect(() => {
    dispatch(fetchPopularMovieData());
 
  }, []);

  return (
    <>
      <div className="my-10">
        <h2 class="text-3xl my-10 text-center font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        {results && <CardCarousel cards={results} index={index} />}
      </div>
    </>
  );
}

export const CardCarousel = ({ cards ,index}) => {
  const [currentIndex, setCurrentIndex] = useState(index);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 5 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 5 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-[90%]  mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="relative">
        <div className="overflow-hidden">
          <div className="grid grid-cols-2 gap-2 lg:grid lg:grid-cols-5 lg:gap-4">
            {cards &&
              cards
                ?.slice(currentIndex, currentIndex + 5)
                .map((card, index) => (
                  <div key={index} className="flex-none w-full px-2">
                    <div className="bg-gray-500 border border-gray-200  rounded-lg">
                      {
                        <Cards
                          id={card.id}
                          posterPath={card.poster_path}
                          originalTitle={card.original_title}
                          overview={card.overview}
                          releaseDate={card.release_date}
                        />
                      }
                    </div>
                  </div>
                ))}
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            className="h-10  w-10 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center"
            onClick={prevSlide}
          >
            {"<"}
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            className="h-10 w-10 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center"
            onClick={nextSlide}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export function Cards({
  id,
  originalTitle,
  overview,
  releaseDate,
  posterPath,
}) {
  return (
    <Link href="/[id]" as={`/${id}`}>
      <article class="w-full h-[350px] relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-1">
        <img
          src={`https://image.tmdb.org/t/p/original${posterPath}`}
          alt="University of Southern California"
          class="absolute inset-0 h-full w-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <h3 class="z-10 mt-3 text-2xl font-bold text-white">{originalTitle}</h3>
        <p class="z-10 mt-3 text-lg font-bold text-white">{releaseDate}</p>
        <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
          {overview}
        </div>
      </article>
    </Link>
  );
}
