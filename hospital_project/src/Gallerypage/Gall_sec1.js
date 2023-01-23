import { Container,Row,Col } from "react-bootstrap"

function Gall_sec1()
{
    return(
        <>
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
                                    <li className="me-5"><a href="../home">home<i class="fa-solid fa-sort-down"></i></a>
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
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <button className="ms-5 nav_btn1">appoinment</button>
                            </div>
                        </Col>
                        <Col>
                        
                        <div className="text-info  d-md-none d-flex justify-content-end pt-3 pb-3">
                        <i class="fa-solid fa-bars"></i>
                        </div>
                    
                        </Col>
                        
                    </Row>
                    </div>
            
            </nav>
    
            <Col className="col-auto">
                <div className="img_postion">
                    <img src="http://ary-themes.com/html/bold_touch/medicoz/images/background/8.jpg" alt="" srcset="" className="img-fluid" />
                </div>
                <div className="img_content">
                    <h1>Gallery</h1>
                </div>
            </Col>
        </>
    )
}
export default Gall_sec1
