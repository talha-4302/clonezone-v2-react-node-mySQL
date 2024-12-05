import  { useEffect, useState } from 'react';
import axios from  'axios';
import { Link } from 'react-router-dom';
import Footer from '../f_components/footer';
import Nav from '../f_components/Nav';


const Admin = () => {

   const [admin,setAdmin]  = useState([]);


    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res => setAdmin(res.data))
        .catch(err => console.log(err));
    });

    const handleDelete = async (id) =>{

        try{
            await axios.delete('http://localhost:8081/student/'+id);
           
            
        }

        catch(err){
            console.log(err);
        }

    }

    return (
        <div>
            <Nav />
            <div className='tbl'>
                <Link to ="/admin/create" ><button className ="button-14 add-btn">Add +</button></Link>
                <Link to ="/" ><button className ="button-14 log-btn">Log out</button></Link>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                                
                            { 
                            admin.map((data,i)=>(

                                    <tr key = {i}>
                                        <td>{data.Name}</td>
                                        <td>{data.Email}</td>
                                        <td className='btns'>
                                            <Link to = {`/admin/update/${data.ID}`} ><button className="button-14 btn-upd">Update</button></Link>
                                            <button className="button-14 btn-red" onClick={e => handleDelete(data.ID)}>Delete</button>
                                        </td>
                                    </tr>
                                
                            ))}

                         
                        </tbody>
                    </table>
                 </div>

    <Footer />
        </div>


    );
};

export default Admin;