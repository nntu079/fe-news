import { INews } from "@/models/news";
import { formatDateTime } from "@/utils";

export function NewsDetail({ news }: { news: INews }) {

    return <div className="card m-4" >
        <img width={200} height={300} className="card-img-top" src={news.image} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{news.title}</h5>

            <p className="card-text" >
                {news.authors?.map((author) => (
                    <span className="mx-2" key={author.id}>{author.name}</span>
                ))}
                &nbsp;-&nbsp;
                {formatDateTime(news.publishedAt || "")}
            </p>

            <p className="card-text">{news.content}</p>
        </div>
    </div>

}