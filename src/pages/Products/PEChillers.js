import React from "react";
import { Button, Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import NavbarComp from "../../components/NavbarComp";

export default function PEChillers() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <NavbarComp />
            <div
                style={{
                    width: "100%",
                    height: "72vh",
                    backgroundImage:
                        "url('https://broadusa.com/broad/wp-content/uploads/2020/04/broadusa-products.jpg')",
                    backgroundOrigin: "center",
                    backgroundAttachment: "fixed",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        height: "100%",
                        width: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        color: "white",
                        position: "relative",
                    }}
                >
                    <div
                        className="display-2"
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: "5rem",
                            margin: "5rem",
                            fontWeight: "700",
                        }}
                        data-aos="fade-up"
                    >
                        Power Efficient Chillers
                    </div>
                </div>
            </div>
            <Container style={{ margin: "5rem 10rem" }}>
                <div className="display-6 mb-4">
                    BROAD Magnetic bearing chiller
                </div>
                <img
                    src="https://broadusa.com/broad/wp-content/uploads/2020/04/Magnetic-bearing-chiller.jpg"
                    alt="pec"
                />
                <ul>
                    <li>Cooling capacity ranging from 150 ton to 2000 ton</li>
                    <li>
                        The Danfoss Turbocor, Portfolio of Oil free Compressors
                    </li>
                    <li>
                        Multi Compressors provided un-compatible Reliable and
                        flexible
                    </li>
                    <li>High COP (6.5) and excellent IPLV ( maximum 13.26)</li>
                    <li>Minimum impact to electrical grid ( as low as 2A)</li>
                    <li>Adjustable load: 10~100%</li>
                    <li>Operation noise: ≤65dB (A)</li>
                    <li>Operation vibration: ≤0.30mm</li>
                    <li>Life design: 30 years</li>
                    <li>Package design (option)</li>
                </ul>
                <Button>Download Catalog</Button>
            </Container>
            <Footer />
        </div>
    );
}
