import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import Hero from "../../components/Hero";

export default function About() {
    // const heroMsg = () => {
    //     return <>ABOUT amyloidSim</>;
    // };
    const JSX = (
        <>
            <Header />
            <main className="p-3 ms-5 ps-5 pe-5 me-5">
                <div className="p-4 v-stack">
                    <div className="text-start shadow d-flex-col pb-5">
                        <h2 className="text-center text-secondary display-6 fw-bold">
                            ABOUT
                        </h2>
                        <p className="container w-75 lead mt-lg-3 text-left">
                            The amyloidSim project offers an automated approach
                            to amyloid fibrils investigation. This is
                            significant for rapid prototyping of various models
                            of protein sequences for nanotube design. The models
                            and calculations are based on the works of Hayward
                            and Milner-White (2017) on the{" "}
                            <cite className="">
                                Geometrical Principles of Homomeric
                                &beta;-barrels and &beta;-helices: application
                                to modelling amyloid protofilaments. Proteins:
                                Structure Function and Bioinformatics, 85(10),
                                pp. 1866-1881
                            </cite>
                            .<br />
                            AmyloidSim is still in the &alpha;-stage and
                            developed with agile methodologies at the University
                            of East Anglia (UEA). Visit the official github
                            repository of the amyloidSim project via this{" "}
                            <a href="https://www.github.com/Ajani04">link</a>.
                        </p>
                    </div>
                    <p className=""></p>
                </div>
            </main>
            <Footer />
        </>
    );
    return JSX;
}
