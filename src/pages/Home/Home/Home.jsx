import Banner from "./Banner";
import BannerTile from "./BannerTile";
import Categories from "./Categories";
import Feature from "./Feature";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <BannerTile></BannerTile>
            <PopularMenu></PopularMenu>
            <Feature></Feature>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;