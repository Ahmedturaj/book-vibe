import { useEffect, useState } from "react";
import Author from "../Author/Author";


const Authors = () => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        const loadAuthors = async () => {
            const res = await fetch('authors.json');
            const data = await res.json();
            setAuthors(data);
        }
        loadAuthors();
    }, [])
    return (
        <div>
            <div className="border bg-[#1313130D] my-14 p-7 rounded-2xl">
                <h2 className="text-center font-bold text-3xl">Authors</h2>
            </div>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    authors.map(author=><Author key={author.id} author={author}></Author>)
                }
            </div>
        </div>
    );
};

export default Authors;