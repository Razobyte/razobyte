import React, { useEffect, useRef } from 'react';
import './Page4.css';
import mobileApp from'../../../../../public/Image/mobieAppFeaures.png';
import background from'../../../../../public/Image/background_form.jpg'
import { Row,Col} from 'react-bootstrap';

const Page4 = () => {
  const statsRef = useRef(null);
  const appFeatures = [
    "Reviewing applications online",
    "Incorporating latest trends",
    "Testing apps",
    "Fixing bugs",
    "Improving user interface and experience",
    "Enhancing usability",
    "Timely monitoring applications",
    "Feature extension",
    "Migrating applications to different platforms",
    "Prompt response to all queries",
    "Security maintenance and support"
  ];
  
  useEffect(() => {
    const statsSection = statsRef.current;
    const statsTopOffset = statsSection.offsetTop - 400;

    let statsCounted = false;

    const handleScroll = () => {
      if (!statsCounted && window.pageYOffset > statsTopOffset) {
        statsCounted = true;

        const stats = [
          { selector: '.stat:nth-child(1) .count', finalValue: 98 },
          { selector: '.stat:nth-child(2) .count', finalValue: 340 },
          { selector: '.stat:nth-child(3) .count', finalValue: 4 },
          { selector: '.stat:nth-child(4) .count', finalValue: 8 }
        ];

        stats.forEach(stat => {
          const countElement = statsSection.querySelector(stat.selector);
          const initialValue = parseInt(countElement.textContent, 10);

          let startTime = null;
          const duration = 2000;

          const animateCount = timestamp => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            countElement.textContent = Math.floor(initialValue + percentage * (stat.finalValue - initialValue));

            if (progress < duration) {
              requestAnimationFrame(animateCount);
            }
          };

          requestAnimationFrame(animateCount);
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <Row className='d-flex justify-content-center align-items-center py-5' style={{backgroundColor:"#3b7fbf"}}>
      <div>
        <div>
        <p className='hed2 text-center text-white'>Need App Maintenance Service to Secure Your App?</p>
        <p className='para text-white  text-center'>We offer mobile app maintenance and support services that adhere to the <br /> highest levels of security and industry standards.</p>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <button className='btn-whitebg px-4 py-2'>Let's Discuss</button>
        </div>
      </div>

   
      
</Row>
<Row className='d-flex justify-content-center align-items-center py-5'>
  <Col md={10}>
        <div className='hed2 text-center'>Mobile App Maintenance Features</div>
        <div className='para text-center'>Offering app maintenance services for iOS & Android based on comprehensive and persistent strategies. Our immensely well-defined features provide superior user experience when accomplishing our customer’s requirement.</div>
      <div className='d-flex justify-content-center align-items-center gap-4 pt-5'>
        <div >
          <img src={mobileApp} height={310} width={400} alt=""  className='img-fluid'/>
        </div>
        <div>
          <ul>
            {appFeatures.map((feature, index) => (
              <li key={index} className='my-2 para' style={{color:"#3b7fbf"}}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      </Col>
</Row>

     <Row className='d-flex justify-content-center align-items-center pb-5'>
      <Col md={10}>
     <div className='Tech'>
        <p className='hed2 text-center'>Why Choose Mobisoft Infotech?</p>
        <p className='para text-center'>Providing a host of benefits that make your mobile app maintenance and support task hasslefree
        Our Application Maintenance Services increase businesses’ operational expertise with an enterprise-grade mobile strategy to blend with systems, routes, and platforms.
        </p>
      
      </div>

      <div ref={statsRef} className="stats-section gap-3">
        <div className="stat">
          <span className="count">0</span>
          <span className="count">%</span>
          <span className="label">Clients Satisfied</span>
        </div>
        <div className="stat">
          <span className="count">0</span>
          <span className="count">+</span>
          <span className="label">Successful Projects</span>
        </div>
        <div className="stat">
          <span className="count">0</span>
          <span className="count">M</span>
          <span className="count">+</span>
          <span className="label">Lines of Code</span>
        </div>
        <div className="stat">
          <span className="count">0</span>
          <span className="count">+</span>
          <span className="label">Years of Excellence</span>
        </div>
      </div>
      </Col>
     </Row>
    </>
  );
};

export default Page4;
