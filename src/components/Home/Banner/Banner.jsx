import { Link } from "react-router-dom";
import banner from '../../../assets/banner.png.gif'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-[#1313130D] rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse md:px-20">
                <img src={banner} className="max-w-sm rounded-lg  w-full bg-[#13131300]" />
                <div>
                    <h1 className="text-3xl font-bold mb-10">Open a world of wonder with just a click – 
                    <br />where every page holds a new adventure. Welcome to your online book haven.</h1>
                    <Link to={'/listedBooks'} className="font-semibold text-white text-xl   "><button style={{transition:'all 0.8s'}} className="btn bg-[#23BE0A] rounded-2xl hover:bg-[#59C6D2] hover:scale-105 text-white md:text-xl">View The List</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;