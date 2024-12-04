import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-11/12 mx-auto">
                <h2 className="text-3xl">home</h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;