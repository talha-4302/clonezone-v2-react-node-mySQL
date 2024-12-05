import Scrollhook from "./scroll_hook";
import { useEffect,useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Mngslider = () => {


    const scrollref = Scrollhook();

    const [member,setMember]  = useState([]);


    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res => setMember(res.data))
        .catch(err => console.log(err));
    });



    return (


        <div className="products" ref={scrollref}>
            {
                member.map((data, i) => (

                   

                    <div key = {i} className="product-card mng-card">
                        <div className="product-img-container">
                            <img src="assets/man_logo.jpg" />

                        </div>
                        <div className="mng ">
                            <p>{data.Name}</p>

                        </div>
                        <p className="mng-email"><span>  {data.Email}</span> </p>

                    </div>

                ))}



        </div>

    );
};

export default Mngslider;