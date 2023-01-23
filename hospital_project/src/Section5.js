import { Container,Row,Col } from "react-bootstrap"


import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Section5()
{
    return(
        <>
        <section className="section1_y section5_bg">
           <Container>
                <div className="text-center">
                    <h4>happy student</h4>
                    <h2>What Says Our Patients</h2>
                    {<img src={require('./img/line_logo.gif')} alt="" srcset="" className="img-fluid heart_logo" />}
                </div>
                <div>
                <OwlCarousel className='owl-theme mt-5'  loop margin={10} nav={true} dots={false} items={1} autoplay autoplayTimeout={'4000'}>
                     <div class='item d-flex justify-content-center '>
                        <div className="col-6 d-flex justify-content-center text-center">
                        <p>
                        Medical Centre is a great place to get all of your medical needs. I came in for a check up and did not wait more than 5 minutes before I was seen. I can only imagine the type of service you get for more serious issues. Thanks!
                        </p>
                        </div>
                        <div className="col-auto">
                            <img src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/testi-thumb-3.jpg" className="img-fluid img_slider ps-5" alt="" srcset="" />
                        </div>
                        <span className="text-middle">Lara Croft</span>

                    </div>
                    <div class='item d-flex justify-content-center '>
                        <div className="col-6 d-flex justify-content-center text-center">
                        <p>
                        Medical Centre is a great place to get all of your medical needs. I came in for a check up and did not wait more than 5 minutes before I was seen. I can only imagine the type of service you get for more serious issues. Thanks!
                        </p>
                        </div>
                        <div className="col-auto">
                            <img src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/testi-thumb-2.jpg" className="img-fluid img_slider ps-5" alt="" srcset="" />
                        </div>
                        <span className="text-middle">Lara Croft</span>
                    </div>
                    <div class='item d-flex justify-content-center '>
                        <div className="col-6 d-flex justify-content-center text-center">
                        <p>
                        Medical Centre is a great place to get all of your medical needs. I came in for a check up and did not wait more than 5 minutes before I was seen. I can only imagine the type of service you get for more serious issues. Thanks!
                        </p>
                        </div>
                        <div className="col-auto">
                            <img src="http://ary-themes.com/html/bold_touch/medicoz/images/resource/testi-thumb-1.jpg" className="img-fluid img_slider ps-5" alt="" srcset="" />
                        </div>
                        <span className="text-middle">Lara Croft</span>
                    </div>
                </OwlCarousel>    
 
                </div>
                
           </Container>
        </section>   
        </>
    )
}
export default  Section5