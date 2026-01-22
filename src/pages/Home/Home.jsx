import Categories from "./Categories/Categories";
import Hero from "./Hero/Hero";

const Home = () => {
     return (
          <div className="space-y-16">
              <Hero></Hero>
              <Categories></Categories>
          </div>
     );
};

export default Home;