import React from "react";

const PdfContainer = ({ createPdf, children }) => {
    const bodyRef = React.createRef();
    const pdf = () => createPdf(bodyRef.current);
    return (
        <section className="">
            <section className="flex justify-center my-4">
                <button className="navbar-btn" onClick={pdf}>
                    Create PDF
                </button>
            </section>
            <section className="pdf-body" ref={bodyRef}>
                {children}
            </section>
        </section>
    );
};

export default PdfContainer;
