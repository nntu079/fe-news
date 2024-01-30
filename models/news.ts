import { IAuthor } from "./author";
import { ISource } from "./source";

export interface INews {
    id?:string,
    title:string,
    image:string,
    publishedAt?:string,
    content:string,
    authors?:IAuthor[],
    source?:ISource
}

export interface INewsRequest extends INews {
    authorIds:string[],
    sourceId:string
}  