import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <>
            <section className=" footer_y">
                <Container>
                    <Row className="footer g-4" xs={1} sm={1} md={2} lg={3} xl={4}>
                        <Col className="col-auto">
                            <div>
                                <img src="http://ary-themes.com/html/bold_touch/medicoz/images/logo-2.png" alt="" srcset="" className="img-fluid" />
                            </div>
                            <div>
                                <p className="pt-4">Our Clinic has grown to provide a world class facility for the clinic advanced restorative.</p>
                                <p className="pt-4">
                                    We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.</p>
                            </div>
                            <div className="d-flex mt-4">
                                <div className="footer_soc_i">

                                    <i class="fa-brands fa-instagram blue footer_soc"></i>
                                </div>
                                <div className="footer_soc_i">

                                     <i class="fa-brands fa-facebook-f footer_soc"></i>
                                </div>
                                <div className="footer_soc_i">

                                     <i class="fa-brands fa-twitter footer_soc"></i>
                                </div>
                                <div className="footer_soc_i">

                            <i class="fa-regular fa-envelope footer_soc"></i>
                                </div>

                            </div>
                        </Col><Col className="col-3 d-none d-md-block">
                            <div>
                                <h4>Departments</h4>
                            </div>
                            <div className="pt-4">
                                <ul className="footer_main_menu">
                                    <li><a href="#"><i class="fa-solid fa-plus pe-1"></i>surgery & radiology</a></li>
                                    <li><a href="#"><i class="fa-solid fa-plus pe-1"></i>family medicine</a></li>
                                    <li><a href="#"><i class="fa-solid fa-plus pe-1"></i>women's health</a></li>
                                    <li><a href="#"><i class="fa-solid fa-plus pe-1"></i>optician</a></li>
                                    <li><a href="#"><i class="fa-solid fa-plus pe-1"></i>pediatrics</a></li>
                                    <li><a href="#"><i class="fa-solid fa-plus pe-1"></i>dermatology</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col className="col-auto d-none d-lg-block">
                            <div>
                                <h4>Latest News</h4>
                            </div>
                            <div className="d-flex justify-content-between pt-4">
                                <div>
                                    <img src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/post-thumb-1.jpg" className="img-fluid" alt="" srcset="" />
                                </div>
                                <div>
                                    <a href="#" className="pe-5">Integrative Medicine <br />& Cancer Treatment. </a>
                                    <div>
                                    <span>july 11,2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between pt-4">
                                <div>
                                    <img src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/post-thumb-2.jpg" className="img-fluid" alt="" srcset="" />
                                </div>
                                <div>
                                    <a href="#" className="pe-5">achievin better <br />& health care time </a>
                                    <div>
                                        <span>august 1,2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between pt-4">
                                <div>
                                    <img src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/post-thumb-3.jpg" className="img-fluid" alt="" srcset="" />
                                </div>
                                <div>
                                <a href="#" className="pe-5">great health <br />& health care time </a>
                                    <div>
                                        <span>august1,2022</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="col-auto">
                            <div>
                                <h4>Contact Us</h4>
                            </div>
                            <div className="pt-4 d-flex">
                                <div>
                                <i class="fa-solid fa-location-dot footer_i"></i>
                                </div>
                                 <div className="display5 ps-3">
                                    2130 Fulton Street San Diego
                                    <br /> CA 94117-1080 USA
                                 </div>
                            </div>
                            <div className="pt-4 d-flex mt-3">
                                <div>
                                <i class="fa-solid fa-phone footer_i"></i>
                                </div>
                                 <div className="display5 ps-3">
                                    Mon to Fri : 08:30 - 18:00
                                    <br /><b> +812 65676 656</b>
                                 </div>
                            </div>
                            <div className="pt-4 d-flex mt-3">
                                <div>
                                <i class="fa-regular fa-envelope footer_i"></i>
                                </div>
                                 <div className="display5 ps-3">
                                     Do you have a Question?
                                    <br /><b> info@gmail.com</b>
                                 </div>
                            </div>
                            <div className="pt-4 d-flex mt-3">
                                <div>
                                <i class="fa-regular fa-clock footer_i"></i>
                                </div>
                                 <div className="display5 ps-3">
                                    Mon - Sat 8.00 - 18.00
                                    <br /><b>Sunday CLOSED </b>

                                 </div>
                            </div>
                        </Col>
                    </Row>
                    
                    
                </Container>

                
            </section>
            <div className="copy_right">
                    <Container>
                        <Row className="d-flex justify-content-between ">
                            <Col className="col-auto">
                                <div className="p-3">
                                    <p>Copyright © 2020 Bold TouchAll Rights Reserved.</p>
                                </div>
                            </Col>
                            <Col className="col-auto">
                                <div>
                                    <ul className="d-flex list-unstyled footer_menu">
                                        <li className="ps-3"><a href="#">privacy policy</a></li>
                                        <li className="ps-3"><a href="#"><i class="fa-solid fa-grip-lines-vertical pe-2"></i>privacy policy</a></li>
                                        <li className="ps-3"><a href="#"><i class="fa-solid fa-grip-lines-vertical pe-2"></i>privacy policy</a></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
            </div>
        </>
    )
}
export default Footer