import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import LocationIntro from "../components/location/LocationIntro";
import DistanceCarousel from "../components/location/DistanceCarousel";
import Lifestyle from "../components/lifestyle/Lifestyle";
import Gallery from "../components/gallery/Gallery";
import Harmony from "../components/gallery/Harmony";
import Amenities from "../components/amenities/Amenities";
import TourForm from "../components/forms/TourForm";
import ReraDetails from "../components/footer/ReraDetails";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <LocationIntro />
      <DistanceCarousel />
      <Lifestyle />
      <Gallery />
      <Harmony />
      <Amenities />
      <TourForm />
      <ReraDetails />
    </>
  );
}
