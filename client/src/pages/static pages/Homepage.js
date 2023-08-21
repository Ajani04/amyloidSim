import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

export default function Homepage() {
    const heroMsg = () => {
        return (
            <>
                Unleash the Potential of Amyloid Research:
                <small>explore amyloidSim</small>
            </>
        );
    };
    const JSX = (
        <>
            <Header />
            <main className="container p-3 text-center">
                <div className="mt-lg-5 p-4 text-center v-stack">
                    <Hero data={heroMsg()} />
                    <p className="mt-lg-5 lead">
                        Welcome to the Amyloid Web Simulator, where cutting-edge
                        technology merges with the fascinating world of amyloid
                        research. Join us on a groundbreaking journey of
                        discovery as we unlock the secrets of these enigmatic
                        protein structures and their impact on human health.
                    </p>
                    <a href="/auth/register">
                        <button className="btn btn-lg btn-secondary mt-2">
                            GET STARTED
                        </button>
                    </a>
                </div>
            </main>
            <Footer />
        </>
    );
    return JSX;
}
