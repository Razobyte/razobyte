
import { Row, Col, CardBody, CardTitle, Card, Button, Carousel, CarouselItem, } from 'react-bootstrap';
import { useState } from 'react';
import '../Content/Content.css'
import { useNavigate } from 'react-router';
import firstImage from '../../../../public/Image/po1.jpg';
import SecImage from '../../../../public/Image/po2.jpg';
import ThirdImage from '../../../../public/Image/po3.jpg';
import ForImage from '../../../../public/Image/po4.jpg'
import FifthImage from '../../../../public/Image/po5.jpg'
import SixImage from '../../../../public/Image/po6.jpg'
import SevenImage from '../../../../public/Image/po7.jpg';
import EightImage from '../../../../public/Image/po8.png';
import NineImage from '../../../../public/Image/po9.jpg';





export default function Content() {

    const portfolioData =
    [
        {
            "id": 1,
            "title": "King Clean",
            "subTitle": "Our work speaks for us",
            "image": firstImage,
            "category":"SEO"
          
        },
       
        { "id": 2,
          "title": "Bond Cleaning Services",
           "image": SecImage,
            "subTitle": "ECOMMERCE DEVELOPMENT, SEO",
            "category":"Security"
            
        },
        {  
            "id": 3,
            "title": "Color bar",
            "image":ThirdImage,
            "subTitle": "ECOMMERCE DEVELOPMENT",
            "category":"Interacting"

            
        },
        {
            "id": 4,
            "title": "Brainy Child",
            "image":ForImage,
            "subTitle": "SEO, SINGAPORE, WEB DESIGN, WEB DEVELOPMENT"
            ,"category":"Interacting"
           
        },
        
        {
            "id": 5,
            "title": "MDRC",
            "image": FifthImage,
            "subTitle": "SEO, SINGAPORE, WEB DESIGN",
            "category":"Startup"
         
        },
        {
            "id": 6,
            "title": "Ciseern",
            "image": SixImage,
            "subTitle": "SEO, SINGAPORE, WEB DESIGN",
            "category":"Startup"
        }  ,
        {
            "id": 7,
            "title": "YIS Living",
            "image": SevenImage,
            
            "subTitle": "SEO, SINGAPORE, WEB DESIGN",
            "category":"Fintech"
        
            
        },
        {
            "id": 8,
            "title": "Meri Vidhaansabha",
            "image": EightImage,
            "subTitle": "SEO, SINGAPORE, WEB DESIGN",
            "category":"Fintech"
    
        },
        {
            "id": 9,
            "title": "Avon Malaysia",
            "image": NineImage,
            "subTitle": "SEO, SINGAPORE, WEB DESIGN",
            "category":"Health"
        }
    ]
    const navigate=useNavigate()
    const handleButtonClick = (id) => {
        navigate(`/DetailP${id}/${id}`);
    };
    const [currentCategory, setCurrentCategory] = useState('All');
    const filteredBlogs = currentCategory === 'All' ? portfolioData : portfolioData.filter(blog => blog.category === currentCategory);
    return (
        <Row className='justify-content-center align-items-center pb-5'>
            <div className='PortfoliomaindivButton flex items-center justify-center flex-col'>
                <div className='allportfoliobutton d-md-flex d-none pb-md-3 pb-0 justify-center items-center'>
                    <Button variant='dark' onClick={() => setCurrentCategory('All')}>Show All</Button>
                    <Button variant='dark' onClick={() => setCurrentCategory('Startup')}>Creative</Button>
                    <Button variant='dark' onClick={() => setCurrentCategory('Interacting')}>EcommerceDevelopment</Button>
                    <Button variant='dark' onClick={() => setCurrentCategory('Security')}>SEO</Button>
                    <Button variant='dark' onClick={() => setCurrentCategory('Health')}>Social Media</Button>
                </div>
                <div className='allportfoliobutton d-md-flex d-none'>
                    <Button variant='dark' onClick={() => setCurrentCategory('Fintech')}>Web desgin</Button>
                    <Button variant='dark' onClick={() => setCurrentCategory('SEO')}>Web Development</Button>
                </div>
            </div>
            {filteredBlogs.map((data) => (
                <Col key={data.id} md={4} className='d-md-flex justify-content-center align-items-center pt-5'>
                    <Card className='cardmainPortfolioSec'>
                        <div className='card-imgPort'>
                            <img src={data.image} variant='top' className='img-fluid' />
                        </div>
                            <CardBody>
                            <CardTitle>
                            <div className="overlay">                         
                                    <h2 className='hed2 text-[#ffff] text-center'>{data.title}</h2>
                                  {/*  <Button className='btm text-[#ffff]' onClick={() => handleButtonClick(data.id)}>Read more</Button> */}
                                

                                </div>
                            </CardTitle>
                        </CardBody>
                    </Card>
                </Col>
            ))}
               
        </Row>

    )
}