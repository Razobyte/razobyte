import React, { useState } from 'react';
import { Row, Col, Card, CardImg, CardText, CardTitle, CardBody, Button } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import sectiondata from './sectionall.json';
import '../Section/Section.css';
import { useNavigate } from 'react-router';

export default function Section() {
    const [input, setInput] = useState('');
    const [filteredData, setFilteredData] = useState(sectiondata);
    const navigate=useNavigate()

    const handleSearch = () => {
        const lowercasedInput = input.toLowerCase();
        const newFilteredData = sectiondata.filter(item =>
            item.Category.toLowerCase().includes(lowercasedInput)
        );
        setFilteredData(newFilteredData);
    };
    const handleChange = (e) => {
        setInput(e.target.value);
      
    }
    const routes = [
        '/firstBlog',
        '/secondBlog',
        '/thirdBlog',
        '/fourthBlog',
        '/fifthBlog',
        '/sixthBlog'
        // Add more routes as needed
    ];

   

    return (
        <>
            <Row  className='d-flex justify-content-center align-items-center '>
            <div className='d-flex justify-content-center align-items-center py-5 mainsearchbardiv'>
            <input
                type="text"
                placeholder='What are you searching for ?'
                className='inputfield text-left p-3'
                onChange={handleChange}
          
            />
            <div className=" p-[3px] ml-[-45px] bg-[#3b7fbf] w-40 h-[40px] flex items-center justify-center gap-2 radius">
    
          <FaSearch  className='searchbar  cursor-pointer'  color="#fff" size={15} 
          onClick={handleSearch}/>
          <p className='text-white text-center flex items-center justify-center pt-3'>Search</p>
          
            </div>
        
            </div>
                {filteredData.map((item,index) => (
                    <Col key={item.id} md={4} className='d-flex justify-content-center align-items-center pb-5'>
                        <Card className='d-md-flex justify-content-centerm card-main-blog'
                         onClick={()=>navigate(routes[index])} >
                            <img src={item.IMAGE} alt={item.full_name} className='img-fluid w-100 
                             d-flex justify-content-center align-items-center ' 
                              style={{minHeight:"300px",maxHeight:"300px"}}/>
                            <CardBody className='p-4'>
                            <CardTitle className='title-h4'>
                                <h4 >{item.full_name}</h4>
                            </CardTitle>
                                <CardText className='card-text-mainblog'>
                                    <p className='para text-left'>{item.title}</p>
                                    <div className='flex items-center pt-3'>
                                    <Button className='read-more-btn'>Read More</Button>
                                    </div>
                                  
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}
