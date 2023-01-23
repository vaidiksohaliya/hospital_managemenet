import {Container,Row,Col} from "react-bootstrap"
function Ser_sec2()
{
    return(
        <>
                <div className="bg_color_row">
                    <Container>
                    <Row xs={1} sm={1} md={1} lg={1} xl={2} className="g5">
                        <Col className="col-auto g-5 d-none d-md-block">
                            <div className="p-5 mt-5 section4_text">
                                <span>NEED A DOCTOR FOR CHECK-UP?</span>
                                <h2>Just Make an Appointmentand You’re Done!</h2>
                                <span className="pt-3 d-block">Get Your Quote or Call:</span>
                                <h3 className="pt-2">(0080) 123-453-789</h3>
                                <button className="section4_btn1 mt-4">get an appointment</button>
                            </div>
                        </Col>
                        <Col className="col-auto section4_img g-5">
                            <div className="">
                                <img src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/image-4.png" className="img-fluid section4_img2" alt="" srcset="" />
                            </div>
                        </Col>
                    </Row>
                    <Row className="  section4_row_bg text-center p-5 h6_font"xs={2} sm={2} md={2} lg={4} xl={4}>
                        <Col className="p-2 col-3 z-i">
                            <div className="logo_box_section4">
                            <i class="fa-solid fa-users-rectangle"></i>
                            </div>
                            <h6 className="pt-2 logo_box_section4_p">Years of Experience</h6>
                            <h2 className="z-i">25</h2>
                        </Col>
                        <Col className="p-2 col-3 z-i">
                            <div className="logo_box_section4">
                            <i class="fa-solid fa-people-group"></i>
                            </div>
                            <h6 className="pt-2 logo_box_section4_p">Medical Spesialities</h6>
                            <h2>470</h2>
                        </Col>
                        <Col className="p-2 col-3 z-i">
                            <div className="logo_box_section4">
                            <i class="fa-solid fa-hospital"></i>
                            </div>
                            <h6 className="pt-2 logo_box_section4_p">Years of Experience</h6>
                            <h2>689</h2>
                        </Col>
                        <Col className="p-2 col-3 z-i">
                            <div className="logo_box_section4">
                            <i class="fa-solid fa-user-doctor"></i>
                            </div>
                            <h6 className="pt-2 logo_box_section4_p">Years of Experience</h6>
                            <h2>9036</h2>
                        </Col>
                        
                    </Row>
                </Container>
                </div>
        </>
    )
}
export default Ser_sec2