import { fetchNewsDetail } from "@/services/news"
import { NewsDetail } from "./components/news-detail";

export default async function Page({ params }: { params: { id: string } }) {

    const data = await fetchNewsDetail(params.id);

    return <div>
        <NewsDetail news={data} />
    </div>
}