const NotFound = () => {
    const JSX = (
        <>
            <div className="d-flex-col text-center justify-content-center py-5 my-5">
                <h1 className="display-1 mt-5 py-5">Error 404: Not Found</h1>
                <br />
                <h3>
                    Sorry, looks like the page you requested is not available!
                </h3>
            </div>
        </>
    );
    return JSX;
};

export default NotFound;
