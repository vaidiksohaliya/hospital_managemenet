import { Container, Row, Col } from "react-bootstrap"

function About_sec4() {
    return (
        <>
            <section className="section_y section4_bg">
                <Container>
                    <Row  className="g-5" xs={1} sm={1} md={1} lg={2} xl={2}>
                        <Col className="col-auto">
                            <div>
                                <img src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/image-7.jpg" alt="" srcset="" className="img-fluid" />
                            </div>
                        </Col>
                        <Col>
                            <div className="p-4 box_shodo">
                                <div>
                                    <h6>BEST OF THE BEST</h6>
                                    <h2>High End Equipments.</h2>
                                </div>
                                <div>
                                    <p>Surgery of the respiratory tract is generally performed by specialists in cardiothoracic surgery (or thoracic surgery) though minor procedures may be performed by pulmonologists. Pulmonology is closely.</p>
                                </div>
                                <div className="mt-3">
                                    <div className="d-flex justify-content-between">
                                        <h6>CARDIO-ONCOLOGY</h6>
                                        <h6>55%</h6>
                                    </div>
                                    <div className="line">
                                        <div className="in_line"></div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-3">
                                        <h6>HEART ASSESSMENT</h6>
                                        <h6 className="text-end ">72%</h6>
                                    </div>
                                    <div className="line">
                                        <div className="in_line2"></div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-3">
                                        <h6>Dental SURGERY</h6>
                                        <h6 className="text-end ">88%</h6>
                                    </div>
                                    <div className="line">
                                        <div className="in_line3"></div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-3">
                                        <h6>HEART ASSESSMENT</h6>
                                        <h6 className="text-end ">78%</h6>
                                    </div>
                                    <div className="line">
                                        <div className="in_line4"></div>
                                    </div>
                                </div>
                                <div>
                                    <button className="sec4_btn1">learn more</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default About_sec4