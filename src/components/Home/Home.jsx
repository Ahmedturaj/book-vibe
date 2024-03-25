import Banner from "./Banner/Banner";
import Books from "./Books/Books";


const Home = () => {
    return (
        <div>
           <div className="mt-14">
            <Banner></Banner>
           </div>
           <div className="mt-14">
            <Books></Books>
           </div>
        </div>
    );
};

export default Home;