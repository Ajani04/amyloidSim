import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../../src/components/Styles/documentation.css";

export default function Documentation() {
    const JSX = (
        <>
            <Header />
            <main className="container px-sm-0">
                <h2 className="text-md-center text-secondary display-6 fw-bold mb-3 mt-2 ms-sm-3">
                    Documentation
                </h2>
                <section id="documentation-body" className="d-flex">
                    <div id="navigation-links">
                        <a class="navigation-link" href="#Introduction">
                            Introduction
                        </a>
                        <a class="navigation-link" href="#Pre-requisites">
                            Pre-requisite(s)
                        </a>
                        <a class="navigation-link" href="#New-Simulation">
                            New Simulation
                        </a>
                        <a class="navigation-link" href="#Input-Section">
                            Input Section
                        </a>
                        <a class="navigation-link" href="#Result-Section">
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
                                <h2>Introduction</h2>
                            </header>
                            <article>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Consectetur commodi sit
                                    animi qui corporis quis dolorum impedit fuga
                                    ipsum doloribus ab, asperiores quos magni
                                    corrupti quaerat vitae cum culpa ullam.
                                </p>
                            </article>
                        </section>
                        <section
                            class="main-section mt-2 mx-sm-3"
                            id="Pre-requisites"
                        >
                            <header>
                                <h2>Pre-requisites</h2>
                            </header>
                            <article>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Consectetur commodi sit
                                    animi qui corporis quis dolorum impedit fuga
                                    ipsum doloribus ab, asperiores quos magni
                                    corrupti quaerat vitae cum culpa ullam.
                                </p>
                            </article>
                        </section>
                        <section
                            class="main-section mt-2 mx-sm-3"
                            id="New-Simulation"
                        >
                            <header>
                                <h2>New Simulation</h2>
                            </header>
                            <article>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Consectetur commodi sit
                                    animi qui corporis quis dolorum impedit fuga
                                    ipsum doloribus ab, asperiores quos magni
                                    corrupti quaerat vitae cum culpa ullam.
                                </p>
                            </article>
                        </section>
                        <section
                            class="main-section mt-2 mx-sm-3"
                            id="Input-Section"
                        >
                            <header>
                                <h2>Input Section</h2>
                            </header>
                            <article>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Consectetur commodi sit
                                    animi qui corporis quis dolorum impedit fuga
                                    ipsum doloribus ab, asperiores quos magni
                                    corrupti quaerat vitae cum culpa ullam.
                                </p>
                            </article>
                        </section>
                        <section
                            class="main-section mt-2 mx-sm-3"
                            id="Result-Section"
                        >
                            <header>
                                <h2>Result Section</h2>
                            </header>
                            <article>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Consectetur commodi sit
                                    animi qui corporis quis dolorum impedit fuga
                                    ipsum doloribus ab, asperiores quos magni
                                    corrupti quaerat vitae cum culpa ullam.
                                </p>
                            </article>
                        </section>
                        <section
                            class="main-section mt-2 mx-sm-3"
                            id="References"
                        >
                            <header>
                                <h2>References</h2>
                            </header>
                            <article>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Consectetur commodi sit
                                    animi qui corporis quis dolorum impedit fuga
                                    ipsum doloribus ab, asperiores quos magni
                                    corrupti quaerat vitae cum culpa ullam.
                                </p>
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
