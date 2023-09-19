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
            <main className="container text-center">
                <div className="p-4 v-stack">
                    <div className="text-start d-flex-col">
                        <h2 className="text-center text-secondary display-6 fw-bold">
                            CONTACT US
                        </h2>
                        <p className="container lead mt-lg-3 ms-5">
                            For enquiries and discussions about amyloidSim,
                            kindly reach out to Hayward S. or Ajani S. via email
                            or social media.
                        </p>
                        <div className="d-flex justify-space-between">
                            <div className="d-flex">
                                <div className="card-body shadow-lg m-5 p-5">
                                    <div className="mb-2">
                                        <i className="fa fa-user-circle"></i>
                                        &nbsp;&nbsp;&nbsp;
                                        <span>Dr. Steven Hayward</span>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="fa fa-institution"></i>
                                        &nbsp;&nbsp;&nbsp;
                                        <span>
                                            School of Computing Sciences,
                                            University of East Anglia, Norwich
                                            NR4 7TJ, United Kingdom.
                                        </span>{" "}
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="fa fa-envelope"></i>
                                        &nbsp;&nbsp;&nbsp;
                                        <span>Email: sjh@cmp.uea.ac.uk</span>
                                    </div>
                                </div>

                                <div className="card-body shadow-lg m-5 p-5">
                                    <div className="mb-2">
                                        <i className="fa fa-user-circle"></i>
                                        &nbsp;&nbsp;&nbsp;
                                        <span>Ajani Seun</span>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <i className="fa fa-institution"></i>
                                        &nbsp;&nbsp;&nbsp;
                                        <span>
                                            Department of Computing Sciences,
                                            University of East Anglia, Norwich
                                            NR4 7TJ, United Kingdom.
                                        </span>{" "}
                                    </div>
                                    <div className="d-flex">
                                        <i className="fa fa-envelope"></i>
                                        &nbsp;&nbsp;&nbsp;
                                        <span>
                                            Email: o.ajani@uea.ac.uk;
                                            seunajanik@yahoo.com
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
    return JSX;
}
