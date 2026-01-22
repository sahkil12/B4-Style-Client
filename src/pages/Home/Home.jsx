import Categories from "./Categories/Categories";
import Hero from "./Hero/Hero";
import NewArrivals from "./NewArrivals/NewArrivals";

const Home = () => {
     return (
          <div className="space-y-16">
              <Hero></Hero>
              <Categories></Categories>
              <NewArrivals></NewArrivals>
          </div>
     );
};

export default Home;