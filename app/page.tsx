import AllDepartments from "@/components/home/all-departments-btn/AllDepartments";
import SearchBox from "@/components/home/search-box/SearchBox";
import CitySearchBox from "@/components/home/search-by-city/CitySearchBox";


export default function Home() {
  return (
    <main className="wrapper">
      <nav className="home-big-nav">
        <AllDepartments/>
        <SearchBox/>
        <CitySearchBox/>
      </nav>
    </main>
  );
}
