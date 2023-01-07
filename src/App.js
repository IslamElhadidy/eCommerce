import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ProductsList from "./Components/ProductsList";
import Slider from "./Components/Slider";
import {Routes,Route} from 'react-router-dom';
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    < >
      <Navbar />
      <Slider />

      <Routes>
        <Route path="/" element={<ProductsList />}/>
        <Route path="product/:id" element={<ProductDetails />}/>
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
