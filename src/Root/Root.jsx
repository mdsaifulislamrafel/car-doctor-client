import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Sheard/Footer';
import Navbar from '../Pages/Sheard/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Root;