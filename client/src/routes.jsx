import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Create from './b_components/create'
import Update from './b_components/update'
import App from './App';
import Login from './b_components/login';
import Admin from './b_components/admin';

const Routtes = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                <Route path='/' element ={<App />}></Route>
                <Route path='/admin' element ={<Admin />}></Route>
                <Route path='/admin/create' element ={<Create />}></Route>
                <Route path='/admin/update/:id' element ={<Update  />}></Route>
                <Route path='/login' element ={<Login />}></Route>

                </Routes>
        
        </BrowserRouter>
            
        </div>
    );
};

export default Routtes;