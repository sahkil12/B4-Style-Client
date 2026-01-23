import BestSellers from "./BestSellers/BestSellers";
import Categories from "./Categories/Categories";
import Hero from "./Hero/Hero";
import NewArrivals from "./NewArrivals/NewArrivals";
import PromoBanner from "./PromoBanner/PromoBanner";

const Home = () => {
     return (
          <div className="">
               <Hero></Hero>
               <Categories></Categories>
               <NewArrivals></NewArrivals>
               <section className=""> <PromoBanner ></PromoBanner></section>
               <BestSellers></BestSellers>
          </div>
     );
};

export default Home;