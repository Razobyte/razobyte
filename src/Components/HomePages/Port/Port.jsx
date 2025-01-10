import React, { useState } from 'react';
import { Row, Col, Card, CardBody, CardImg, CardTitle, CardText, Button } from 'react-bootstrap';
import '../Port/Port.css'
import { FaExternalLinkAlt } from "react-icons/fa";
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





export default function Port() {

    const Portdata =
    [
        {
            "id": 1,
            "title": "King Clean",
            "subTitle": "Our work speaks for us",
            "image": firstImage,
          
        },
       
        { "id": 2,
          "title": "Bond Cleaning Services",
           "image": SecImage,
            "subTitle": "ECOMMERCE DEVELOPMENT, SEO"
            
        },
        {  
            "id": 3,
            "title": "Color bar",
            "image":ThirdImage,
            "subTitle": "ECOMMERCE DEVELOPMENT"
           
        },
        {
            "id": 4,
            "title": "Brainy Child",
            "image":ForImage,
            "subTitle": "SEO, SINGAPORE, WEB DESIGN, WEB DEVELOPMENT"
           
        },
        
        {
            "id": 5,
            "title": "MDRC",
            "image": FifthImage,
            "subTitle": "SEO, SINGAPORE, WEB DESIGN"
         
        },
        {
            "id": 6,
            "title": "Ciseern",
            "image": SixImage,
            "subTitle": "SEO, SINGAPORE, WEB DESIGN"
        }  ,
        {
            "id": 7,
            "title": "YIS Living",
            "image": SevenImage,
            
            "subTitle": "SEO, SINGAPORE, WEB DESIGN"
        
            
        },
        {
            "id": 8,
            "title": "Meri Vidhaansabha",
            "image": EightImage,
            "subTitle": "SEO, SINGAPORE, WEB DESIGN"
    
        },
        {
            "id": 9,
            "title": "Avon Malaysia",
            "image": NineImage,
            "subTitle": "SEO, SINGAPORE, WEB DESIGN"
           
        }
        
    
    
    ]
        
    
    
    
    const navigate=useNavigate()
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage =3;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const visibleRecords = Portdata.slice(firstIndex, lastIndex);
    const numberOfPages = Math.ceil(Portdata.length / recordsPerPage);
    const handlePageClick = (index) => {
        setCurrentPage(index);

       
    };
   

    const pageArray = Array.from({ length: numberOfPages }, (item, index) => index + 1);

    return (
        <>  <Row className='flex justify-content-center align-items-center py-4'
        style={{
            backgroundImage: "url('/Image/blue.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "60%",
            backgroundPosition: "center",
            backgroundColor: "#FFFF"
        }}
    >
        <div className='text-center'>
            <h3 className='hed2'>Portfolio</h3>
        </div>
        <div className={`AllbuttonForMove port-text ${currentPage === 1 ? '' : 'slide'}`} >
            {visibleRecords.map((item,id) => (
                <Col key={id} md={3} className='d-md-flex justify-content-center align-items-center'>
                <Card className='Card-Portfolio'>
                    <div className='Port-imgPort'>
                        <img src={item.image} variant='top' className='img-fluid' />
                    </div>
                            <CardBody className='overlay-link'>   
                                <FaExternalLinkAlt  className="icon-button" size={35} color='#ffff'  />
                                <CardTitle><h4 className='md:text-3xl  hed3 text-white font-semibold  text-center'>{item.title}</h4></CardTitle>
                                <div className="text-center">
                                    <h6 className='para text-white font-semibold md:text-lg text-sm'>{item.subTitle}</h6>
                                </div>
                            </CardBody>
                        </Card>
                    
                </Col>
            ))}
        </div>
        <div className='AllbuttonForMove'>
            {pageArray.map((page) => (
                <Button key={page} onClick={() => handlePageClick(page)}>
                    {page}
                </Button>
            ))}
        </div>
    </Row>
        </>
    );
}
