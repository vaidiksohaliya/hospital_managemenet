import { Container,Row,Col } from 'react-bootstrap'

function Section6()
{
    return(
        <>
            
            <section className='section1_y section_y section6_bg'>
            <Container>
                <div className='text-center'>
                    <h4>Our Pricing</h4>
                    <h2>Pricing Plan</h2>
                    {<img src={require('./img/line_logo.gif')} alt="" srcset="" className="img-fluid heart_logo" />}
                </div>
            <Row className='mt-5 g-5 justify-content-center' xs={1} sm={1} md={2} lg={3} xl={4}>
                <Col className='col-auto'>
                    <div className='section6_box1 ps-4 pe-4'>
                        <div className='box1_box1 text-center'>
                            <h1 className='pt-3'>$299</h1>
                            <span className='pb-4 d-block'>per month</span>    
                        </div>
                        <div className='ps-4 pe-4'>
                            <h3 className='text-center p-2'>Cardiology</h3>
                            <hr />
                            <h6><i class="fa-solid fa-check pe-2"></i>Functional Diagnotics</h6>
                            <hr />
                            <h6><i class="fa-solid fa-check pe-2"></i>Allergens Drugs</h6>
                            <hr />
                            <h6><i class="fa-solid fa-check pe-2"></i>Pollen Allergens</h6>
                            <hr />
                            <h6><i class="fa-solid fa-check pe-2"></i>Food Allergens</h6>
                        </div>
                        <div className='text-center'>
                            <button className='ps-5 pe-5 pt-2 pb-2 mt-4 mb-4 text-center section6_box1_button'>get offer</button>
                        </div>
                        
                    </div>  
                </Col>
                <Col className='col-auto'>
                    <div className='section6_box1 ps-4 pe-4'>
                        <div className='box1_box1 text-center'>
                            <h1 className='pt-3'>$120</h1>
                            <span className='pb-4 d-block'>per month</span>    
   
                        </div>
                        <div className='ps-4 pe-4'>
                            <h3 className='text-center p-2'>Detal Care</h3>
                            <hr />
                            <h6><i class="fa-solid fa-check pe-2"></i>Functional Diagnotics</h6>
                            <hr />
                            <h6><i class="fa-solid fa-check pe-2"></i>Allergens Drugs</h6>
                            <hr />
                            <h6><i class="fa-solid fa-check pe-2"></i>Pollen Allergens</h6>
                            <hr />
                            <h6><i class="fa-solid fa-check pe-2"></i>Food Allergens</h6>
                        </div>
                        <div className='text-center'>
                            <button className='ps-5 pe-5 pt-2 pb-2 mt-4 mb-4 text-center section6_box1_button'>get offer</button>
                        </div>
                        
                    </div>  
                </Col>
                <Col className='col-auto'>
                    <div className='section6_box1 ps-4 pe-4'>
                        <div className='box1_box1 text-center'>
                            <h1 className='pt-3'>$150</h1>
                            <span className='pb-4 d-block'>per month</span>    
    
                        </div>
                        <div className='ps-4 pe-4'>
                            <h3 className='text-center p-2'>Body Checkup</h3>
                            <hr />
                            <h6><i class="fa-solid fa-check pe-2"></i>Functional Diagnotics</h6>
                            <hr />
                            <h6><i class="fa-solid fa-check pe-2"></i>Allergens Drugs</h6>
                            <hr />
                            <h6><i class="fa-solid fa-check pe-2"></i>Pollen Allergens</h6>
                            <hr />
                            <h6><i class="fa-solid fa-check pe-2"></i>Food Allergens</h6>
                        </div>
                        <div className='text-center'>
                            <button className='ps-5 pe-5 pt-2 pb-2 mt-4 mb-4 text-center section6_box1_button'>get offer</button>
                        </div>
                        
                    </div>  
                </Col>
                <Col className='col-auto'>
                    <div className='section6_box1 ps-4 pe-4'>
                        <div className='box1_box1 text-center'>
                            <h1 className='pt-3'>$100</h1>
                            <span className='pb-4 d-block'>per month</span>    
 
                        </div>
                        <div className='ps-4 pe-4'>
                            <h3 className='text-center p-2'>Blood Test</h3>
                            <hr />
                            <h6><i class="fa-solid fa-check pe-2"></i>Functional Diagnotics</h6>
                            <hr />
                            <h6><i class="fa-solid fa-check pe-2"></i>Allergens Drugs</h6>
                            <hr />
                            <h6><i class="fa-solid fa-check pe-2"></i>Pollen Allergens</h6>
                            <hr />
                            <h6><i class="fa-solid fa-check pe-2"></i>Food Allergens</h6>
                        </div>
                        <div className='text-center'>
                            <button className='ps-5 pe-5 pt-2 pb-2 mt-4 mb-4 text-center section6_box1_button'>get offer</button>
                        </div>   
                    </div>  
                </Col>
                
            </Row>
            <div>
                <p className='text-center m-5'>Don’t hesitate, contact us for better help and services  <a href="#" className='text-info'> Explore all Dr. Team</a></p>
                </div>    
            </Container>
           </section> 
            
        </>
    )
}
export default Section6