import LoadMore from "./components/load-more";
import { News } from "./components/news"

import { fetchNews } from "@/services/news"

export default async function Page() {

    const newsData = await fetchNews();

    return <div>
        {
            <div className="row px-4">
                {newsData.map(value => <News news={value} />)}
                
                <LoadMore/>
            </div>
        }
           
    </div>
}