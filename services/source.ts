import { ISource } from "@/models/source";

export async function fetchSources() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/sources/get-sources`)

    const sources: ISource[] = await res.json()

    return sources
}

export async function addSource(source: ISource) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/sources/add-source`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(source)
    })

    const newSource = await result.json();
    return newSource
}