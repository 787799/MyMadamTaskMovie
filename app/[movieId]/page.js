"use client";
import { useEffect } from "react";
import Movie from "../components/movie";
import ShowMovie from "../components/showMovie";
import List from "../components/list";
import { fetchMovieDetailsData } from "../GlobaRedux/store";
import { useDispatch, useSelector } from "react-redux";
import Gallery from "../components/gallery";

export default function ShowMovieDetails({ params }) {
  const dispatch = useDispatch();
  const { data2, data3, status, error } = useSelector((state) => state.data);

  useEffect(() => {
    if (params.movieId) {
      dispatch(fetchMovieDetailsData(params.movieId));
    }
  }, [params.movieId]);

  console.log("movie details data", data2, data3);

  return (
    <>
      <div className="bg-gray-900 ">
        {data3 && (
          <>
            <ShowMovie movie={data3} />
            <List index={0} />
            <Gallery/>
            <List index={5} title="Upcoming Movies" />
            <Movie src={data3?.homepage} />
          </>
        )}
      </div>
    </>
  );
}
