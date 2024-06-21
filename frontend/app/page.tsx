import AllDepartments from "@/components/home/all-departments-btn/AllDepartments";
import SimpleSlider from "@/components/home/carousel/SimpleSlider";

import GoogleMap from "@/components/home/google-map/GoogleMap";
import PopularProductsLayout from "@/components/home/popular-products/PopularProductsLayout";
import SearchBox from "@/components/home/search-box/SearchBox";
import CitySearchBox from "@/components/home/search-by-city/CitySearchBox";

export default function Home() {
  return (
    <main className="main-home">
      <div className="main-home-header-fixed">
        <nav className="wrapper home-big-nav">
          <AllDepartments />
          <SearchBox />
          <CitySearchBox />
        </nav>
      </div>
      <section className="wrapper home-hero-section">
        <div className="carousel">
          <SimpleSlider />
        </div>
        <GoogleMap />
      </section>
      <article className="wrapper">
        <h2>Popular Product Details</h2>
        <div className="hr-line-shadow"></div>
        <PopularProductsLayout />
      </article>
    </main>
  );
}
