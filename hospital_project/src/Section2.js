import { Container,Row,Col } from "react-bootstrap"

function Section2()
{
    return(
        <>
            <section className="section1_y bg_section2">
            <Container>
                <div className="text-center">
                    <h4>OUR SERVICES</h4>
                    <h2>We Care Our Patients.</h2>
                    {<img src={require('./img/line_logo.gif')} alt="" srcset="" className="img-fluid heart_logo" />}
                </div>
                <Row className="g-4" xs={1} sm={1} md={2} lg={3} xl={3}>
                    <Col className="col-auto">
                        <div className="text-center box1_section2 p-4">
                            <div className="box1_logo">
                            <i class="fa-solid fa-heart-pulse icon_box1"></i>
                            </div>
                            <h3 className="pt-2">health check</h3>
                            <p>We offer extensive medical procedures to outbound & inbound patients what it is and we are very proud achievement staff.</p>
                        </div>
                    </Col>
                    <Col className="col-auto">
                        <div className="text-center box1_section2 p-4">
                            <div className="box1_logo">
                            <i class="fa-solid fa-bed-pulse icon_box1"></i>
                            </div>
                            <h3 className="pt-2">operation theater</h3>
                            <p>We offer extensive medical procedures to outbound & inbound patients what it is and we are very proud achievement staff.</p>
                        </div>
                    </Col>
                    <Col className="col-auto">
                        <div className="text-center box1_section2 p-4">
                            <div className="box1_logo">
                            <i class="fa-solid fa-microscope icon_box1"></i>
                            </div>
                            <h3 className="pt-2">pharmacy support </h3>
                            <p>We offer extensive medical procedures to outbound & inbound patients what it is and we are very proud achievement staff.</p>
                        </div>
                    </Col>
                    <Col className="col-auto">
                        <div className="text-center box1_section2 p-4">
                            <div className="box1_logo">
                            <i class="fa-solid fa-truck-medical icon_box1"></i>
                            </div>
                            <h3 className="pt-2">ambulance car</h3>
                            <p>We offer extensive medical procedures to outbound & inbound patients what it is and we are very proud achievement staff.</p>
                        </div>
                    </Col>
                    <Col className="col-auto">
                        <div className="text-center box1_section2 p-4">
                            <div className="box1_logo">
                            <i class="fa-solid fa-flask-vial icon_box1"></i>
                            </div>
                            <h3 className="pt-2">lat tests</h3>
                            <p>We offer extensive medical procedures to outbound & inbound patients what it is and we are very proud achievement staff.</p>
                        </div>
                    </Col>
                    <Col className="col-auto">
                        <div className="text-center box1_section2 p-4">
                            <div className="box1_logo">
                            <i class="fa-solid fa-briefcase-medical icon_box1"></i>
                            </div>
                            <h3 className="pt-2">intensive care</h3>
                            <p>We offer extensive medical procedures to outbound & inbound patients what it is and we are very proud achievement staff.</p>
                        </div>
                    </Col>
                    
                    
                    
                </Row>
            </Container>
            </section>
        </>
    )
}
export default Section2