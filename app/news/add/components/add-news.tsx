'use client'
import { IAuthor } from "@/models/author";
import { fetchAuthors } from "@/services/author";
import React, { useEffect, useState } from "react";
import { ISource } from "@/models/source";
import { fetchSources } from "@/services/source";
import { addNews } from "@/services/news";
import { useRouter } from 'next/navigation';



export function AddNews() {

    const [authors, setAuthors] = useState<IAuthor[]>([])
    const [sources, setSources] = useState<ISource[]>([])
    const router = useRouter()


    useEffect(() => {
        initialData()
    }, [])

    const initialData = async () => {

        const authors = await fetchAuthors()
        const sources = await fetchSources()
        setAuthors(authors)
        setSources(sources)
    }


    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const selectedAuthors = formData.getAll("authors[]") as string[];

        const title = formData.get("title") as string;
        const content = formData.get("content") as string;
        const image = formData.get("image") as string;
        const source = formData.get("source") as string;

        if (!title || !content || !image) {
            // Xử lý trường hợp có giá trị rỗng
            alert("Vui lòng điền đầy đủ các trường thông tin");
            return;
        }

        const result = await addNews({ title, content, image, authorIds: selectedAuthors, sourceId: source });

        alert("Thêm thành công");
        router.push("/news")
        
    };


    return <div>
        <div>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label className="col-form-label">Title:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-form-label">Image:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            name="image"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-form-label">Content:</label>
                    <div className="col-sm-10">
                        <textarea
                            className="form-control"
                            name="content"
                            rows={10}
                            required
                        />
                    </div>
                </div>
                <div className="form-group" >
                    <label className="col-form-label">Tác giả:</label>
                    <div className="col-sm-10 overflow-y-scroll" style={{ maxHeight: 150 }}>

                        {
                            authors.map(value => <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="authors[]"
                                    value={value.id}
                                />
                                <label className="form-check-label">
                                    {value.name}
                                </label>
                            </div>)
                        }


                    </div>
                </div>

                <div className="form-group">
                    <label className="col-form-label">Source:</label>
                    <div className="col-sm-10">
                        <select
                            className="form-select"
                            name="source"
                            required
                        >
                            <option value="" selected disabled>Select source</option>
                            {
                                sources.map((value) => <option value={value.id} selected >{value.name}</option>)
                            }
                        </select>
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center my-4">
                    <button type="submit" className="btn btn-primary">
                        Public
                    </button>
                </div>

            </form>
        </div>
    </div>
}