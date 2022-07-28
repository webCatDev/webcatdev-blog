import { Fragment } from "react";
import FeaturedPosts from "./featured-posts/FeaturedPosts";
import Hero from "./hero/Hero";

const Home = () => {
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts/>
        </Fragment>
    );
}

export default Home;