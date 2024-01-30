import { INews } from "@/models/news";
import { formatDateTime } from "@/utils";
import Link from "next/link";



export function News({ news }: { news: INews }) {

    return <div className="card m-4" style={{ width: "18rem" }}>
        <img width={200} height={300} className="card-img-top" src={news.image} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{news.title}</h5>

            <p className="card-text" style={{minHeight:"5rem"}}>
                {news.authors?.map((author) => (
                    <span key={author.id}>{author.name}</span>
                ))}
                &nbsp;-&nbsp;
                {formatDateTime(news.publishedAt || "")}
            </p>

            <Link href={`/news/${news.id}`} >
                View detail
            </Link>
        </div>
    </div>
}