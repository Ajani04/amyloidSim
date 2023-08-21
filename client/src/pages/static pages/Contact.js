import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

export default function Contact() {
    const heroMsg = () => {
        return <>CONTACT SECTION</>;
    };
    const JSX = (
        <>
            <Header />
            <main className="container p-3 text-center">
                <div className="mt-lg-5 p-4 text-center v-stack">
                    <Hero data={heroMsg()} />
                    <p className="mt-lg-5 lead">
                        This is extra information about the amyloidSim project
                        developers!
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
    return JSX;
}
