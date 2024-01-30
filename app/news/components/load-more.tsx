'use client'
import { INews } from "@/models/news";
import { fetchNews } from "@/services/news";
import { useEffect, useState } from "react"
import { News } from "./news";

export default function LoadMore() {
    const [page, setPage] = useState(2)
    const [data, setData] = useState<INews[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [isLastPage, setIsLastPage] = useState<boolean>(false)

    const fetchData = async (page: number) => {

        setIsLoading(true)

        const newData = await fetchNews(page);

        if (newData.length == 0) {
            setIsLastPage(true)
        }

        setData([...data, ...newData]);

        setIsLoading(false)
    };

    useEffect(() => {
        fetchData(page)
    }, [page])

    const handleLoadMore = () => {
        setPage(page + 1);
    };


    return <>
        {data.map(value => <News news={value} />)}

        {isLoading == true && <div className="col-12 d-flex justify-content-center align-items-center m-4">
            <div className="col-12 spinner-grow text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>}

        {isLoading == false && <button disabled={isLastPage} onClick={handleLoadMore} className="col-12 d-flex justify-content-center align-items-center m-4 btn btn-primary btn-lg btn-block">
            LOAD MORE
        </button>
        }
    </>
}
