import { Container, Row, Col, Button } from "react-bootstrap"
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Dropdown from 'react-bootstrap/Dropdown';







function Header() {
    return (
        <>
            <header>
                <Container>
                    <Row className="d-flex justify-content-between">
                        <Col className="col-auto">
                            <div className="header_logo">
                                <span><i class="fa-solid fa-location-dot me-2"></i>234 Triumph, Los Angeles, California, US</span>
                            </div>
                        </Col>

                        <Col className="col-auto d-none d-md-block">
                            <div className="header_logo">
                                <span><i class="fa-regular fa-clock me-2"></i>Mon - Sat 8.00 - 18.00. Sunday CLOSED</span>
                            </div>
                        </Col>


                        <Col className="col-auto d-flex d-none d-lg-block">
                            <div className="header_logo">
                                <span><i class="fa-brands fa-facebook-f"></i></span>
                                <span><i class="fa-brands fa-twitter"></i></span>
                                <span><i class="fa-brands fa-skype"></i></span>
                                <span><i class="fa-brands fa-linkedin-in"></i></span>
                            </div>

                        </Col>
                        <Col>
                            <div>
                                <button><a href="/login">Login</a></button>
                                <button><a href="/dash">dash</a></button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
            <nav>
                <div className="container_nav">
                    <Row className="d-flex justify-content-between">
                        <Col className="col-auto">
                            <div className="nav_logo">
                                <img src="https://www.pngkit.com/png/full/774-7746888_be-your-own-best-advocate-medical-store-logo.png" alt="" srcset="" className="img-fluid" />
                            </div>
                        </Col>
                        <Col className="col-auto d-none d-lg-block">
                            <div>
                                <ul className="mt-2 me-5 d-flex p-2 list-unstyled main_menu ">
                                    <li className="me-5"><a href="#">home<i class="fa-solid fa-sort-down"></i></a>
                                        <ul className="sub_menu">
                                            <li><a href="#">home medital</a></li>
                                            <li><a href="#">home clanic</a></li>
                                            <li><a href="#">home dental care </a></li>
                                            <li><a href="#">home eye care </a></li>
                                            <li><a href="#">home prenatal care </a></li>
                                        </ul>
                                    </li>
                                    <li className="me-5"><a href="#">pages<i class="fa-solid fa-sort-down"></i></a>
                                        <ul className="sub_menu">
                                            <li><a href="about">about us</a></li>
                                            <li><a href="service">service</a></li>
                                            <li><a href="gallery">gallery</a></li>
                                            <li><a href="#">pricing table</a></li>
                                            <li><a href="#">ui elements</a></li>
                                            <li><a href="#">coming soon</a></li>
                                            <li><a href="#">error 404</a></li>
                                            <li><a href="#">terms and condition</a></li>
                                        </ul>
                                    </li>
                                    <li className="me-5"><a href="#">doctors<i class="fa-solid fa-sort-down"></i></a>
                                        <ul className="sub_menu">
                                            <li><a href="#">docter</a></li>
                                            <li><a href="#">docter details</a></li>
                                        </ul>
                                    </li>
                                    <li className="me-5"><a href="#">departments<i class="fa-solid fa-sort-down"></i></a>
                                        <ul className="sub_menu">
                                            <li><a href="#">department</a></li>
                                            <li><a href="#">cardiology</a></li>
                                            <li><a href="#">neurology</a></li>
                                            <li><a href="#">urology</a></li>
                                            <li><a href="#">gynecological</a></li>
                                            <li><a href="#">pediatrical</a></li>
                                            <li><a href="#">laboratory</a></li>
                                            <li><a href="#">department details</a></li>
                                        </ul>
                                    </li>
                                    <li className="me-5"><a href="blog">blog<i class="fa-solid fa-sort-down"></i></a></li>
                                    <li className="me-5"><a href="#">shop<i class="fa-solid fa-sort-down"></i></a></li>
                                    <li className="me-5"><a href="contact">contact</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col className="col-auto d-none d-md-block">
                            <div className="mt- p-2">

                                <button className="ms-5 nav_btn1">appoinment</button>
                            </div>
                        </Col>
                        <Col>

                            <div className="text-info  d-md-none d-flex justify-content-end pt-3 pb-3">
                                <Dropdown className="d-inline mx-2">
                                    <Dropdown.Toggle id="dropdown-autoclose-true">
                                        <i class="fa-solid fa-bars"></i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">HOME</Dropdown.Item>
                                        <Dropdown.Item href="#">PAGES</Dropdown.Item>
                                        <Dropdown.Item href="#">DEPARTMENT</Dropdown.Item>
                                        <Dropdown.Item href="#">BLOG</Dropdown.Item>
                                        <Dropdown.Item href="/contact/">CONTACT</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                        </Col>

                    </Row>
                </div>

            </nav>


            <OwlCarousel className='owl-theme' items={1} loop nav={true} dots={false} animateIn={'animate__bounceIn'} animateOut={'animate__zoomOut'} autoplay autoplayTimeout={'3000'} id="slider1">
                <div class="item">
                    <img src={require('./img/slider2.png')} className="img-fluid" />
                    <div class="content">
                        <h1>horse6</h1>
                        <p class="wow animate__fadeInLeft">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore recusandae atque, quo asperiores vitae esse facere quod, nihil odio distinctio magnam earum expedita minus sed maxime impedit, quos velit quis?</p>
                    </div>
                </div>
                <div className="item">
                    <img src={require('./img/slider3.jpeg')} className="img-fluid" />
                </div>
                <div className="item">
                    <img src={require('./img/slider4.jpg')} alt="" className="img-fluid" />
                </div>
            </OwlCarousel>
            <Container>
                <div className="fix_menu">
                    <Button className="btn">may i help you</Button>
                </div>
            </Container>

        </>
    )
}
export default Header