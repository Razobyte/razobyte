import { Row, Col, Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import '../Services/Services.css';

const servicesData = [
    {
        title: 'Innovative Web Design',
        subtitle: 'Crafting Exceptional Web Experiences',
        description: `Welcome to razObyte, your partner in exceptional web design solutions. 
                      We are a team of passionate designers and developers who believe 
                      in the power of captivating web experiences.`,
        image: 'Image/Ser1 (3).jpeg',
    },
    {
        title: 'Ecommerce Solutions',
        subtitle: 'Crafting Exceptional Web Experiences',
        description: `Welcome to razObyte, your partner in exceptional web design solutions. 
                      We are a team of passionate designers and developers who believe 
                      in the power of captivating web experiences.`,
        image: 'Image/up1 (2).jpeg',
    },
    {
        title: 'Search Engine Optimization',
        subtitle: 'Crafting Exceptional Web Experiences',
        description: `Welcome to razObyte, your partner in exceptional web design solutions. 
                      We are a team of passionate designers and developers who believe 
                      in the power of captivating web experiences.`,
        image: 'Image/Ser1 (1).jpeg',
    },
    {
        title: 'Google Local Listing',
        subtitle: 'Crafting Exceptional Web Experiences',
        description: `Welcome to razObyte, your partner in exceptional web design solutions. 
                      We are a team of passionate designers and developers who believe 
                      in the power of captivating web experiences.`,
        image: 'Image/up1 (1).jpeg',
    },
    {
        title: 'Google Adwords',
        subtitle: 'Crafting Exceptional Web Experiences',
        description: `Welcome to razObyte, your partner in exceptional web design solutions. 
                      We are a team of passionate designers and developers who believe 
                      in the power of captivating web experiences.`,
        image: 'Image/Ser1 (4).jpeg',
    },
];

export default function Services() {
    return (
        <>
            <Row
                className="justify-content-center align-items-center py-2 px-0"
                style={{
                    backgroundColor: "#FFFF"
                }}
            >
                <h2 className="hed2 text-center">Our Awesome Services</h2>
                <p className="para text-center">Dive into the excellence</p>
                <Col md={12} xs={10}>
                    <div className="d-flex flex-column flex-md-row px-0 justify-content-center align-items-center">
                        {servicesData.map((service, index) => (
                            <Card
                                key={index}
                                className="card-clip"
                                style={{
                                    backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.11), rgba(0, 0, 0, 0.514)), url('${service.image}')`
                                }}
                            >
                                <CardBody className="text-light">
                                    <h1 className="fw-bold hed2 text-white text-center">{service.title}</h1>
                                    <div className="text-center">
                                        <h4 className="fw-bold hed3 text-white ">{service.subtitle}</h4>
                                        <p className="para text-white absolute">{service.description}</p>
                                    </div>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </Col>
            </Row>
        </>
    );
}
