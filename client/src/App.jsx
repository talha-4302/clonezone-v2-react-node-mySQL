import Box2 from './f_components/box2.jsx';
import Footer from './f_components/footer.jsx';
import Header_box from './f_components/header_box.jsx';
import HeaderSlider from './f_components/header_slider.jsx';
import Mngslider from './f_components/mng_slider.jsx';
import Nav from './f_components/Nav.jsx';
import NavBottom from './f_components/nav_bottom.jsx';
import PriceSlider from './f_components/price_slider.jsx';
import Productslider from './f_components/product_slider.jsx';



const App = () => {
  return (
    <div>



      <Nav />
      <NavBottom />
      <HeaderSlider />
      <Header_box />

      <div className="Products-Slider">
        <h2>Best Seller in Sports & Outdoors</h2>
        <Productslider />
      </div>

      <Box2 />
      <PriceSlider />
      <Box2 />


      <div className="Products-Slider">
        <h2>Our Management Team</h2>
        <Mngslider />
      </div>

      <Footer/>

    </div>
  );
};

export default App;