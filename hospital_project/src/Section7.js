import { Container,Row,Col } from "react-bootstrap"

function Section7()
{
    return(
        <>
            <section className="section1_y">
                <Container>
                        <div className="text-center">
                            <h4>OUR BLOG</h4>
                            <h2>Recent Articles and News</h2>
                            {<img src={require('./img/line_logo.gif')} alt="" srcset="" className="img-fluid heart_logo" />}
                        </div>
                        <Row xs={1} sm={1} md={2} lg={3} xl={3} className="g-5 justify-content-center">
                            <Col className="col-auto">
                            <div class="card">
                                <img src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/news-1.jpg" class="card-img-top" className="img-fluid" alt="..."></img>

                                <div class="card-body p-4">
                                     <a class="card-title">what is the sucess rate of  a root canel?</a>
                                     <p class="card-text mt-3">Nullam mauris vitae tortor sodales efficitur. Quisque orci ante. Proin amet turpis</p>
                                     <hr className="mt-4" />
                                     <div className="d-flex justify-content-between">
                                        <div>
                                            <span>By Admin Rose</span>
                                        </div>
                                        <div>
                                           <span>0<i class="fa-regular fa-heart ps-1"></i></span>
                                           <span className="ps-3">0<i class="fa-regular fa-comments ps-1"></i></span>
                                        </div>
                                     </div>
                                </div>
                            </div>
                            </Col>
                            <Col className="col-auto">
                            <div class="card">
                                <img src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/news-2.jpg" class="card-img-top" className="img-fluid" alt="..."></img>

                                <div class="card-body p-4">
                                     <a class="card-title">how to handle your kids' mystery aliments?</a>
                                     <p class="card-text mt-3">Nullam mauris vitae tortor sodales efficitur. Quisque orci ante. Proin amet turpis</p>
                                     <hr className="mt-4" />
                                     <div className="d-flex justify-content-between">
                                        <div>
                                            <span>By Admin Rose</span>
                                        </div>
                                        <div>
                                           <span>0<i class="fa-regular fa-heart ps-1"></i></span>
                                           <span className="ps-3">0<i class="fa-regular fa-comments ps-1"></i></span>
                                        </div>
                                     </div>
                                </div>
                            </div>
                            </Col>
                            <Col className="col-auto">
                            <div class="card">
                                <img src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/news-3.jpg" class="card-img-top" className="img-fluid" alt="..."></img>

                                <div class="card-body p-4">
                                     <a class="card-title">how to help the cardiology department</a>
                                     <p class="card-text mt-3">Nullam mauris vitae tortor sodales efficitur. Quisque orci ante. Proin amet turpis</p>
                                     <hr className="mt-4" />
                                     <div className="d-flex justify-content-between">
                                        <div>
                                            <span>By Admin Rose</span>
                                        </div>
                                        <div>
                                           <span>0<i class="fa-regular fa-heart ps-1"></i></span>
                                           <span className="ps-3">0<i class="fa-regular fa-comments ps-1"></i></span>
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
export default Section7