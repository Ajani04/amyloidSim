import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../../src/components/Styles/documentation.css";

export default function Documentation() {
    const JSX = (
        <>
            <div id="top"></div>
            <Header />
            <main className="container px-sm-0">
                <h2 className="text-md-center text-secondary display-6 fw-bold mb-3 mt-2 ms-sm-3">
                    Documentation
                </h2>
                <section id="documentation-body" className="d-flex">
                    <div id="navigation-links">
                        <a class="navigation-link" href="#top">
                            Introduction
                        </a>
                        <a class="navigation-link" href="#Introduction">
                            Pre-requisite(s)
                        </a>
                        <a class="navigation-link" href="#Pre-requisites">
                            New Simulation
                        </a>
                        <a class="navigation-link" href="#fig 1">
                            Input Section
                        </a>
                        <a class="navigation-link" href="#Input-Section">
                            Result Section
                        </a>
                        <a class="navigation-link" href="#References">
                            References
                        </a>
                    </div>
                    <div id="content">
                        <section
                            class="main-section mt-2 mx-sm-3"
                            id="Introduction"
                        >
                            <header>
                                <h4 className="text-secondary">Introduction</h4>
                            </header>
                            <article>
                                <p>
                                    This documentation covers the basics of
                                    using the amyloidSim web application. To use
                                    the application, the user must be signed-in
                                    or registered. Once authenticated, the user
                                    gains access to the simulation homepage to
                                    either run a new simulation or preview
                                    previous simulations.
                                    <blockquote className="fst-italic text-secondary my-2">
                                        The previous simulations functionality
                                        is still under development
                                    </blockquote>
                                </p>
                            </article>
                        </section>
                        <section
                            class="main-section mt-2 mx-sm-3"
                            id="Pre-requisites"
                        >
                            <header>
                                <h4 className="text-secondary">
                                    Pre-requisites
                                </h4>
                            </header>
                            <article>
                                <p>
                                    The target users of this web application are
                                    expected to be familiar with protein
                                    sequences and the geometrical properties of
                                    protein structures. Some of the input
                                    parameters to this application are denoted
                                    via <q>familiar</q> symbols like{" "}
                                    <strong>&alpha;</strong>
                                    &nbsp;which represents the{" "}
                                    <q className="fw-bold">
                                        angle between the strand direction and
                                        the helical axis{" "}
                                    </q>
                                    .<br />
                                    The amyloidSim application is based on the
                                    models and discussions in the work of
                                    Hayward and Milner-White (2017) on the{" "}
                                    <cite className="">
                                        Geometrical Principles of Homomeric
                                        &beta;-barrels and &beta;-helices
                                    </cite>
                                    . Users are encouraged to consult this work
                                    for a comprehensive reference on these
                                    concepts and the models implemented in
                                    amyloidSim.
                                    <br />
                                    <div
                                        id="file"
                                        className="btn btn-outline-secondary text-center col-4 shadow-sm my-3"
                                    >
                                        <a href="http://eprints.gla.ac.uk/143478/7/143478.pdf">
                                            <i className="fa fa-file"></i>
                                            &nbsp;&nbsp;Hayward & Milner-White
                                            (2017)
                                        </a>
                                    </div>
                                </p>
                            </article>
                        </section>
                        <section
                            class="main-section mt-2 mx-sm-3"
                            id="New-Simulation"
                        >
                            <header>
                                <h4 className="text-secondary">
                                    New Simulation
                                </h4>
                            </header>
                            <article>
                                <p>
                                    The new simulation page offers the user an
                                    interface for running simulations or
                                    predicting desired Geometrical quantities
                                    and models from experimental values. The
                                    page is interractive with explanations
                                    offered in the <b>instruction section</b>.
                                    <br />
                                    The following image gives an overview of the
                                    New Simulation page:
                                    <figure
                                        id="fig 1"
                                        className="w-100 m-auto mb-3"
                                    >
                                        <img
                                            src="./NewSimulationAJ.jpeg"
                                            class="img-responsive w-100"
                                            alt="A sample overview of the new simulation page"
                                        />
                                        <figcaption className="text-center fw-bold small">
                                            Fig. 1: A blank{" "}
                                            <i>New Simulation</i> Page
                                        </figcaption>
                                    </figure>
                                </p>
                            </article>
                        </section>
                        <section
                            class="main-section mt-2 mx-sm-3"
                            id="Input-Section"
                        >
                            <header>
                                <h4 className="text-secondary">
                                    Input Section
                                </h4>
                            </header>
                            <article>
                                <p>
                                    As seen in <a href="#fig 1">Figure 1,</a>{" "}
                                    the <b>&alpha;</b> parameter is required,
                                    while at least one of the values for{" "}
                                    <b>d</b>&nbsp; or <b>h</b> (experimental
                                    values) must be inputted. Finally, the
                                    desired protein sequence is required in the
                                    labelled box. Protein sequences for testing
                                    can be found in common repositories like
                                    the&nbsp;
                                    <a href="https://www.rcsb.org/">
                                        protein data bank (pdb)
                                    </a>{" "}
                                    or&nbsp;
                                    <a href="https://www.bioinformatics.org/sms2/sample_protein.html">
                                        Bioinformatics.org
                                    </a>
                                    .<br />A sample protein sequence from
                                    bioinformatics.org containing sixty (60)
                                    protein residues is captured below:
                                    <br />
                                    <div class="card card-body bg-light p-2 text-center my-2">
                                        <pre>
                                            LMALMKALCMHLACGGAKLLACKHLKLLCACMGLHMCGAACGHMCAGHMHGAGHLGKMAM
                                        </pre>
                                    </div>
                                </p>
                            </article>
                        </section>
                        <section
                            class="main-section mt-2 mx-sm-3"
                            id="Result-Section"
                        >
                            <header>
                                <h4 className="text-secondary">
                                    Result Section
                                </h4>
                            </header>
                            <article>
                                <p>
                                    This is the scrollable display for reviewing
                                    the results of the prediction. The view
                                    shows the simulation parameters, the
                                    possible and invalid models, as well as a
                                    render of the protein sequence
                                    register-shift.
                                    <figure
                                        id="fig 2"
                                        className="w-100 m-auto mb-3"
                                    >
                                        <img
                                            src="./SimulationPageAJ.jpeg"
                                            class="img-responsive w-100"
                                            alt="Sample simulation result preview"
                                        />
                                        <figcaption className="text-center fw-bold small">
                                            Fig. 2: A sample result page showing
                                            simulation parameters, models, and
                                            register-shifts
                                        </figcaption>
                                    </figure>
                                </p>
                            </article>
                        </section>
                        <section
                            class="main-section mt-2 mx-sm-3"
                            id="References"
                        >
                            <header>
                                <h4 className="text-secondary">References</h4>
                            </header>
                            <article>
                                <p>
                                    To cite this work, please use the following
                                    reference(s):
                                </p>
                                <div
                                    id="references"
                                    className="card card-body bg-light col-12"
                                >
                                    <p className="d-flex">
                                        <span className="col-1">MLA</span>
                                        <p className="col-9 ms-5">
                                            Hayward, Steven, and E. James
                                            Milner‐White. "Geometrical
                                            principles of homomeric β‐barrels
                                            and β‐helices: Application to
                                            modeling amyloid protofilaments."
                                            Proteins: Structure, Function, and
                                            Bioinformatics 85.10 (2017):
                                            1866-1881.
                                        </p>
                                    </p>
                                    <p className="d-flex">
                                        <span className="col-1">APA</span>
                                        <p className="col-9 ms-5">
                                            Hayward, S., & Milner‐White, E. J.
                                            (2017). Geometrical principles of
                                            homomeric β‐barrels and β‐helices:
                                            Application to modeling amyloid
                                            protofilaments. Proteins: Structure,
                                            Function, and Bioinformatics,
                                            85(10), 1866-1881.
                                        </p>
                                    </p>
                                    <p className="d-flex">
                                        <span className="col-1">Chicago</span>
                                        <p className="col-9 ms-5">
                                            Hayward, Steven, and E. James
                                            Milner‐White. "Geometrical
                                            principles of homomeric β‐barrels
                                            and β‐helices: Application to
                                            modeling amyloid protofilaments."
                                            Proteins: Structure, Function, and
                                            Bioinformatics 85, no. 10 (2017):
                                            1866-1881.
                                        </p>
                                    </p>
                                    <p className="d-flex">
                                        <span className="col-1">Harvard</span>
                                        <p className="col-9 ms-5">
                                            Hayward, S. and Milner‐White, E.J.,
                                            2017. Geometrical principles of
                                            homomeric β‐barrels and β‐helices:
                                            Application to modeling amyloid
                                            protofilaments. Proteins: Structure,
                                            Function, and Bioinformatics,
                                            85(10), pp.1866-1881.
                                        </p>
                                    </p>
                                    <p className="d-flex">
                                        <span className="col-1.5">
                                            Vancouver
                                        </span>
                                        <p className="col-9 ms-4 ps-4">
                                            Hayward S, Milner‐White EJ.
                                            Geometrical principles of homomeric
                                            β‐barrels and β‐helices: Application
                                            to modeling amyloid protofilaments.
                                            Proteins: Structure, Function, and
                                            Bioinformatics. 2017
                                            Oct;85(10):1866-81.
                                        </p>
                                    </p>
                                </div>
                            </article>
                        </section>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
    return JSX;
}
