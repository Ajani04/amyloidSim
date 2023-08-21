import Navbar from "../components/Navbar";

const PastSimulation = (props) => {
    let user = props.user;

    // console.log("This is past simulations");
    // console.log(user);

    const JSX = (
        <>
            <Navbar username={user} />
            <div className="d-flex-col align-items-center justify-content-center my-4 py-4 text-center">
                <h1 className="display-3"> Hello, {user}</h1>
                <h2>These are the past simulations</h2>
            </div>
        </>
    );
    return JSX;
};

export default PastSimulation;
