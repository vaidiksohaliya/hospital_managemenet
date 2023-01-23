import { Container, Row, Col } from "react-bootstrap"

function About_sec3() {
    return (
        <>
            <section className="section_y section3_bg">
                <Container>

                    <Row className="g-5" xs={1} sm={1} md={1} lg={2} xl={2}>
                        <Col className="col-auto">
                            <div className="main_form p-5">
                                <form>
                                    <div className="">
                                        <input placeholder="your name" />
                                    </div>
                                    <div className="mt-3">
                                        <input placeholder="your email*" />
                                    </div>
                                    <div className="mt-3">
                                        <input placeholder="your phone" />
                                    </div>
                                    <div className="mt-3">
                                        <input placeholder="tell us about pasent" />
                                    </div>
                                    <div>
                                        <input type="submit" value="submit query" />
                                    </div>
                                </form>
                            </div>
                        </Col>
                        <Col className="col-auto">
                            <div className="ps-5 sec_box1">
                                    <div>
                                    <h6>Need a Doctor for Check-up?</h6>
                                    <h1 className="mt-3">Just Make an Appointment
                                    and You’re Done!</h1>
                                    </div>
                                    <div className="mt-3">
                                        <h5>Get Your Quote or Call:</h5>
                                        <h2>(0080) 123-453-789</h2>
                                    </div>
                                    <div className="mt-4 ">
                                        <h1 className="sec_box1_h1">Opening Hours</h1>
                                        <div className="d-flex justify-content-between mt-3">
                                            <div>
                                                <p><i class="fa-regular fa-clock pe-2"></i>Monday - Thursday</p>
                                            </div>
                                            <div>
                                                <p>08:00 - 20:00</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <p><i class="fa-regular fa-clock pe-2"></i>Friday</p>
                                            </div>
                                            <div>
                                                <p>09:00 - 19:00</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <p><i class="fa-regular fa-clock pe-2"></i>Saturday - Thursday</p>
                                            </div>
                                            <div>
                                                <p>09:00 - 18:00</p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default About_sec3
