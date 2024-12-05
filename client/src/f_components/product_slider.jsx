import Scrollhook from "./scroll_hook";

const Productslider = () => {


    const scrollref = Scrollhook();

   



    return (
        

        <div className="products" ref={scrollref}>
            <img src="assets/product1-1.jpg"/>
            <img src="assets/product1-2.jpg"/>
            <img src="assets/product1-3.jpg"/>
            <img src="assets/product1-4.jpg"/>
            <img src="assets/product1-5.jpg"/>
            <img src="assets/product1-6.jpg"/>
            <img src="assets/product1-7.jpg"/>
            <img src="assets/product1-8.jpg"/>
            <img src="assets/product1-9.jpg"/>
            <img src="assets/product1-10.jpg"/>
             



        </div>
   
    );
};

export default Productslider;