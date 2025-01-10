import { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import '../TechnicalDev/Technical.css';
import Tech from '../TechnicalDev/Technical.json';

export default function Technical() {
    const [technicalData, setTechnicalData] = useState('Programming Languages');
    const [filteredTech, setFilteredTech] = useState([]);

    useEffect(() => {
        setFilteredTech(Tech.filter(tech => tech.category === technicalData));
    }, [technicalData]);

    const handleLanguageClick = (languageLink) => {
        window.open(languageLink, '_blank'); // Open the link in a new tab
    };

    return (
        <Row className='d-md-flex d-none justify-content-center align-items-center' style={{ backgroundColor: "white" }}>
            <h2 className='hed2 text-center py-3' style={{ color: "#3B7FBF" }}>Core Development</h2>
            <div className='alltechnicalbutton d-md-flex d-none'>
                <Button onClick={() => setTechnicalData("Programming Languages")}>Programming Languages</Button>
                {/* <Button onClick={() => setTechnicalData("Database")}>Database</Button> */}
                <Button onClick={() => setTechnicalData("Frontend")}>Frontend</Button>
                <Button onClick={() => setTechnicalData("Backend")}>Backend</Button>
            </div>
            <Col md={10} className='d-md-flex justify-content-center align-items-center' data-aos="fade-down">
                {filteredTech.map((category, categoryId) => (
                    <div key={categoryId} className='alltechincalshowdatadiv'>
                        {category.languages.map((language, languageId) => (
                            <div key={languageId} onClick={() => handleLanguageClick(language.link)}>
                                <img src={language.image} alt={language.name} className='img-fluid' />
                                <h3 className='text-center py-3 font-[500]'>{language.name}</h3>
                            </div>
                        ))}
                    </div>
                ))}
            </Col>
            <div className='d-md-flex d-none justify-content-center align-items-center py-4'>
                <Button className='btnmain py-2 px-4 fw-bolder fs-6' onClick={() =>
                    window.open('/services/development/website-dvelopment', '_blank')
                }>View Detail Page</Button>
            </div>
        </Row>
    );
}
