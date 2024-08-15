import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Carousel from "../../components/carousel/Carousel";
import Catalogo from "../../components/catalogo/Catalogo";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";




const Home = () => {
  
  return (
    <>
    <Navbar />
    <Carousel />
    <Catalogo />
    <Contact />
    <Footer />
    </>
  );
};

export default Home;
