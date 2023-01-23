import { Container,Row,Col } from "react-bootstrap"

function Sectino3()
{
    return(
        <>
            <section className="section1_y section3_bg">
            <Container>
                <div className="text-center">
                    <h4>Our Doctor</h4>
                    <h2>Our Dedicated Doctors Team</h2>
                    {<img src={require('./img/line_logo.gif')} alt="" srcset="" className="img-fluid heart_logo" />}
                </div>
                <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-5 text-center">
                    <Col className="col-auto">
                            <div className="img_border effect">
                                <img src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/team-1.jpg" alt="" srcset="" className="img-fluid" />
                            
                            <div className="content1">
                                <h5>dr.Morila Wood</h5>
                                <span>senior Dr.at delmont</span>
                            </div>
                            </div>
                

                    </Col>
                    <Col className="col-auto">
                        <div className="img_border effect">
                            <img src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/team-2.jpg" alt="" srcset=""  className="img-fluid"/>
                            <div className="content1">
                                <h5>dr.Morila Wood</h5>
                                <span>senior Dr.at delmont</span>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-auto">
                        <div className="img_border effect">
                            <img src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/team-3.jpg" className="img-fluid" alt="" srcset="" />
                            <div className="content1">
                                <h5>dr.Morila Wood</h5>
                                <span>senior Dr.at delmont</span>
                            </div>

                        </div>
                    </Col>
                    <Col className="col-auto">
                        <div className="img_border effect">
                            <img src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/team-4.jpg" className="img-fluid" alt="" srcset="" />
                            <div className="content1">
                                <h5>dr.Morila Wood</h5>
                                <span>senior Dr.at delmont</span>
                            </div>
                        </div>
                    </Col>
                    
                </Row>
                <div className="mt-5 text-center">
                        <p>Don’t hesitate, contact us for better help and services <a href="#" className="text-info"> Explore all Dr. Team</a></p>
                    </div>
            </Container>
            </section>
        </>
    )
    
}
export default Sectino3