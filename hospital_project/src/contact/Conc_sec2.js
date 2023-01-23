import { Container, Row, Col } from "react-bootstrap"

function Conc_sec2() {
    return (
        <>
            <section className="section_y bg_color">

                <Container>
                <div className="text-center">
                    <h4>Contact Now</h4>
                    <h2>Write us a message!</h2>
                    
                </div>
                    <Row className="mt-5 g-5">
                        <Col className="col-4">
                            <div className="d-flex contact_icon">
                                <div>
                                    <i class="fa-solid fa-earth-americas"></i>
                                </div>
                                <div className="ps-3">
                                    <h5>Address</h5>
                                    <p>185, Pickton Near Street,<br></br>Los Angeles, USA</p>
                                </div>
                            </div>
                        </Col>
                        <Col className="col-4">
                        <div className="d-flex contact_icon">
                                <div>
                                <i class="fa-solid fa-mobile-screen-button"></i>
                                </div>
                                <div className="ps-3">
                                    <h5>phone</h5>
                                    <p>(+92)313 888 000</p>
                                    <p>(+92)313 999 000</p>
                                </div>
                            </div>

                        </Col>
                        <Col className="col-4">
                        <div className="d-flex contact_icon">
                                <div>
                                <i class="fa-regular fa-envelope"></i>
                                </div>
                                <div className="ps-3">
                                    <h5>Email</h5>
                                    <p>support@example.com</p>
                                    <p>support@example.com</p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5 g-5">
                        <Col className="col-6">
                            <div className="main_form">
                                <form>
                                    <div>
                                        <input placeholder="Full name*" />
                                    </div>
                                    <div>
                                        <input placeholder="Email Address*" />
                                    </div>
                                    <div>
                                        <input placeholder="your phone" />
                                    </div>
                                </form>
                            </div>
                        </Col>
                        <Col className="col-6">
                            <div className="main_form">
                                <form>
                                    <div>
                                        <input placeholder="message" />
                                    </div>
                                </form>
                            </div>
                        </Col>
                        <Col className="text-center">
                            <div className="conc_sce2_btn1 mt-5">
                                <button>Send message</button>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
        </>
    )
}
export default Conc_sec2