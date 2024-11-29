import Image from "next/image";
import Hero from "./navbar/hero/page";
import SearchInput from "./components/SearchInput";
import CarsFilterOption from "./components/CarsFilterOption";
import Catalog from "./catalog/page";
import About from "./about/page";
import Contact from "./contact/page";

export default function Home() {
  return (
 <div className=" p-5 sm:px-10 md:px-20"> 
  

  <Hero/>
  <SearchInput/>
  <CarsFilterOption/>
  <Catalog/>
  <About/>
  <Contact/>
</div>
  );
}
