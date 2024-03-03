"use client"
import { useSelector } from "react-redux";
import List from "../components/list";

export default function WatchListMovies()
{
    const { data4,favFilms, status, error } = useSelector((state) => state.data);

    return(
        <>
        <div>
        <List index={3} title="Upcoming movies" />
        <List index={7} title="Released movies" />
        <List index={8} title="Hollywood Movies" />
        <List index={3} />

            {
                favFilms.map((e)=>{
                    return(
                        <>
                        <GalleryCard movie={e} key={e.id} />
                        </>
                    )
                })
            }
        </div>
        </>

    )
}