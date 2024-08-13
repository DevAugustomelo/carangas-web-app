import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Carousel from "../../components/carousel/Carousel";
import Catalogo from "../../components/catalogo/Catalogo";




const Home = () => {
  
  return (
    <>
    <Navbar />
    <Carousel />
    <Catalogo /> 
    </>
  );
};

export default Home;
