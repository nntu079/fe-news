import { IAuthor } from "@/models/author";

export async function fetchAuthors() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/authors/get-authors`)
    const authors: IAuthor[] = await res.json()

    return authors
}

export async function addAuthor(author: IAuthor) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/authors/add-author`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(author)
    })

    const newAuthor = await result.json();
    return newAuthor
}