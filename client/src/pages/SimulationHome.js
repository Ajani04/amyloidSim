import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

const SimulationHome = (props) => {
    let user = props.user;

    const JSX = (
        <>
            <Navbar username={user} />
            <div className="d-flex-col align-items-center justify-content-center my-4 py-4 text-center">
                <h1 className="display-3"> WELCOME BACK, {user}</h1>
                <h2>What would you like to do?</h2>
                <Cards />
            </div>
            <br />
            <Footer />
        </>
    );
    return JSX;
};

export default SimulationHome;
