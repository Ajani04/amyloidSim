import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

export default function Documentation() {
    const heroMsg = () => {
        return <>DOCUMENTATION SECTION</>;
    };
    const JSX = (
        <>
            <Header />
            <main className="container p-3 text-center">
                <div className="mt-lg-5 p-4 text-center v-stack">
                    <Hero data={heroMsg()} />
                    <p className="mt-lg-5 lead">
                        This page offers information about the various options
                        available in the application!
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
    return JSX;
}
