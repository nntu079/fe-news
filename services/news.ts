import { INews, INewsRequest } from "@/models/news"

export async function fetchNews(page = 1) {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/news/get-newses/${page}`)
    const news: INews[] = await res.json()

    return news
}

export async function addNews(news: INewsRequest) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/news/add-news`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(news)
    })

    const newNews = await result.json();
    return newNews
}

export async function fetchNewsDetail(id: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/news/get-news/${id}`)
    const news: INews = await res.json()

    return news
}