import BestSellers from "./BestSellers/BestSellers";
import Categories from "./Categories/Categories";
import Hero from "./Hero/Hero";
import NewArrivals from "./NewArrivals/NewArrivals";
import Newsletter from "./Newsletter/Newsletter";
import PromoBanner from "./PromoBanner/PromoBanner";
import WhyB4Style from "./WhyB4Style/WhyB4Style";
import SEO from './../../Components/Shared/SEO';

const Home = () => {
     return (
          <>
               <SEO
                    title="Home"
                    description="Welcome to our online clothing store B4 style."
                    keywords="fashion, B4 style, trending, clothing"
                />

               <div>
                    <Hero></Hero>
                    <Categories></Categories>
                    <NewArrivals></NewArrivals>
                    <section className=""> <PromoBanner ></PromoBanner></section>
                    <BestSellers></BestSellers>
                    <WhyB4Style></WhyB4Style>
                    <Newsletter></Newsletter>
               </div>
          </>
     );
};

export default Home;