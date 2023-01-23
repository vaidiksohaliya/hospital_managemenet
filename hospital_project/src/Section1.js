import { Container, Row, Col } from "react-bootstrap"

function Section1() {
    return (
        <>  <section className="bgimg_section1 section1_y">
            <Container className="container">
                <Row className="g-5 " xs={1} sm={1} md={2} lg={3} xl={3} >
                    <Col className="col-auto">
                        <div className="box1_section1 p-5">
                            <div className="logo_bg mb-3">
                                <i class="fa-solid fa-hands-holding-child section1_icon"></i>
                            </div>
                            <h3>Quality & Safety</h3>
                            <p>Our Delmont hospital utilizes state of the art technology and employs a team of true experts.</p>

                        </div>
                    </Col>
                    <Col className="col-auto">
                        <div className="box1_section1 p-5">
                            <div className="logo_bg mb-3">
                                <i class="fa-solid fa-heart-pulse section1_icon"></i>
                            </div>
                            <h3>leading Technology</h3>
                            <p>Our Delmont hospital utilizes state of the art technology and employs a team of true experts.</p>
                        </div>
                    </Col>
                    <Col className="col-auto">
                        <div className="box1_section1 p-5">
                            <div className="logo_bg mb-3">
                                <i class="fa-solid fa-hands-holding-child section1_icon"></i>
                            </div>
                            <h3>experts by experience</h3>
                            <p>Our Delmont hospital utilizes state of the art technology and employs a team of true experts.</p>
                        </div>
                    </Col>
                </Row>
                <Row sm={1} md={2} lg={2} xl={2}>
                    <Col>
                        <div className="mt-5">
                            <img src={require('./img/sectino1_logo_png.png')} alt="" srcset="" className="img-fluid" />
                        </div>
                    </Col>
                    <Col>
                        <div className="mt-5">

                            <span className="section1_span">our medical</span>
                            <h2>We're setting Standards in Research <br /> what's more, Clinical Care.</h2>
                            <img src={require('./img/lifeline1.webp')} alt="" srcset="" className="img-fluid lifeline_logo mt-2" />
                            <p>We provide the most full medical services, so every person could have the pportunity o receive qualitative medical help.</p>
                            <p className="text-justify">Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of uality training and experience.</p>

                            <button className="ms-5 mt-3 btn1_section_1">More about</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}
export default Section1