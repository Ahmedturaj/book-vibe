import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero min-h-screen bg-[#1313130D] rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse md:px-20">
                <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/432615761_270350012796758_34447797913229624_n.png?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHpEOgF5XE71CgXRANiXuhqYFG7zWDLNmVgUbvNYMs2ZQlUIbOCgTe-oPBzxkob5YxDr2YEvyiKyc7DBYJ5gMZv&_nc_ohc=NbihRrpRxPkAX_tbmpR&_nc_oc=AdgmXsLTBosNgI9MB0svdhTe3MmPGqYS5R_JaPRsdKXCnxEVR1sh_FLnIYYTUckZdzo2mFRz0DRf-fkSEuieOuFS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdR689P3wHJgNz9mE6QKXS0wymWVN6voFrUjJ9e8rqQVUw&oe=662B4594" className="max-w-sm rounded-lg shadow-2xl w-full" />
                <div>
                    <h1 className="text-3xl font-bold mb-10">Open a world of wonder with just a click – 
                    <br />where every page holds a new adventure. Welcome to your online book haven.</h1>
                    <Link to={'/listedBooks'} className="font-semibold text-white text-xl   "><button style={{transition:'all 0.8s'}} className="btn bg-[#23BE0A] rounded-2xl hover:bg-[#59C6D2] hover:scale-105">View The List</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;