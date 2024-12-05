import { Link } from "react-router-dom";
import NavSearch from "./nav_search";

const Nav = () => {
    return (
        <nav>

        
            <Link to ="/"><img className='logo' src="assets/amazon_logo.png"></img></Link>
        

        <div className="nav-country">



            <p>Deliver To</p>
            <div className="l1"><img src="assets/location_icon.png" height="20" />
                <h1>Bangladesh</h1>
            </div>

        </div>

        <div className="nav-search">
            <NavSearch />
            <input type="text" className="nav-search-input" placeholder="Search Amazon"/>
            <div className="nav-search-icon"> <img src="assets/search_icon.png" height="20"/></div>
        </div>

        <div className="nav-language">
           
            <Link to ="/login">Admin Panel</Link>
            

        </div>

        <div className="nav-text">
            <p >Hello, Sign in</p>
            <h1>Account & Lists<img src="assets/dropdown_icon.png" width="8px"/></h1>
        </div>

        <div className="nav-text">
            <p>Return</p>
            <h1>& Orders</h1>
        </div>

        <a  href ="#" className="nav-cart">
            <img src="assets/cart_icon.png" width="35px"/>
            <h4>Cart</h4>
        </a>


    </nav>
    );
};

export default Nav;