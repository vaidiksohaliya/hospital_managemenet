import { Container,Row,Col } from "react-bootstrap"

function About_sec2()
{
    return(
        <>
            <section className="section2_y section2_bg mt-3">
            <Container>
                <Row className="text-center m-0 p-0" xs={1} sm={1} md={2} lg={2} xl={4}>
                    <Col className="">
                        <div className="box_1">
                        <i class="fa-solid fa-person-breastfeeding"></i>    
                            <p>Years of Experience</p>
                            <h1 className="mb-2">25</h1>
                        </div>
                    </Col>
                    <Col className="">
                    <div className="box_1">
                    <i class="fa-solid fa-user-injured"></i>       
                            <p>Medical Spesialities</p>
                            <h1 className="mb-2">470</h1>
                        </div>
                    </Col>
                    <Col className="">
                    <div className="box_1">
                    <i class="fa-solid fa-hospital"></i>   
                            <p>Medical Spesialities</p>
                            <h1 className="mb-2">689</h1>
                        </div>
                    </Col>
                    <Col className="">
                    <div className="box_1">
                    <i class="fa-solid fa-people-line"></i>   
                            <p>Happy Patients</p>
                            <h1 className="mb-2">9036</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
            </section>
        </>
    )
}
export default About_sec2