import { useLoaderData } from "react-router-dom";
import Review from "./Review";


const ReadersReview = () => {
    const reviews = useLoaderData();
    return (
       <div>
         <div className="border bg-[#1313130D] my-14 p-7 rounded-2xl">
        <h2 className="text-center font-bold text-3xl">Reviews</h2>
    </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto w-5/6 mt-14 gap-4">
           {
            reviews.map(review=><Review key={review.id} review={review}></Review>)
           }
        </div>
       </div>
    );
};

export default ReadersReview;