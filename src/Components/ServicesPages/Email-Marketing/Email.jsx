
import {Row,Col,Button} from 'react-bootstrap';
import Blog from '../../Blog/Blog2';
import { useNavigate } from 'react-router';
import BannerEmail from '../../../../public/Image//Email-banner.png';
import Proj1Img from '../../../../public/Image/Sem-top-pr-1.png';
import Proj2Img from '../../../../public/Image/Sem-top-pr-2.png';
import Proj3mg from '../../../../public/Image/img (11).png';
import Proj4Img from '../../../../public/Image/img (13).png';
import Proj5Img from '../../../../public/Image/img (9).png';
import Proj6Img from '../../../../public/Image/img (12).png';
import Proj7Img from '../../../../public/Image/img (15).png';
import Proj8Img from '../../../../public/Image/projall1.png';
import email1Img from '../../../../public/Image/Email-1 (5).png';
import email2Img from '../../../../public/Image/Email-1 (4).png';
import email3Img from '../../../../public/Image/Email-1 (3).png';
import email4Img from '../../../../public/Image/Email-1 (2).png';
import email5Img from '../../../../public/Image/Email-1 (1).png';
import '../../DevelopmentsPages/Development.css'



export default function Email({title}){
    const navigate=useNavigate()
    return(
        <>
          <Row className='p-0 d-lg-none  position-relative'>
      <img src={BannerEmail} alt="banner" className='img-fluid p-0' />
      <Col md lg xxl className="px-0">
          <div className="position-absolute xs:top-[20px]  top-[10px] lg:left-20  sm:left-20 xs:left-20  left-5 w-[50%]">
            <h2 className="md:text-2xl sm:text-xl text-lg md:font-extrabold sm:font-bold font-bold text-[#474747]">
            Emai Marketing</h2>
            </div></Col>
    </Row>
     <Row
        className="d-lg-flex d-none justify-center items-center relative"
        style={{
          backgroundImage: `url(${BannerEmail})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px', // Adjust height based on your design
          position: 'relative',
        }}
      >
        <Col md lg xxl className="px-0">
          <div className="absolute top-[120px] left-10 col-6">
            <h2 className="hed1 text-[#474747]">Email Marketing</h2>
          </div>
        </Col>
      </Row>
      


        <Row className='d-flex align-items-center justify-content-center py-5'

        style={{backgroundImage:"url('Image/blue.png')",backgroundRepeat:"no-repeat",backgroundSize:"600px",backgroundPosition:"right"}}

        >
        <Col md={10}>
        <div className='d-md-flex align-items-center justify-content-center gap-5'>
        <div>
        <h2 className='hed2 text-center'>Data Enrichment</h2>
        <p className='para text-justify'>
        Data is the backbone of any successful email marketing campaign. With our data enrichment services, we help you enhance your existing customer data with valuable insights, such as demographics, behaviour patterns, and purchase history. By leveraging enriched data, you can personalize your email content and tailor your messaging to resonate with your audience's interests and preferences.
        </p>
        <p>
        We understand the importance of effective email marketing in driving engagement, nurturing leads, and increasing conversions. campaigns. Let's explore how Razobyte can elevate your email marketing strategy.
        </p>
        <div className='flex items-center justify-center py-3'>
        <Button className='btn2'>Get in touch </Button>
        </div>
      


        </div>
        <div className='col-md-6 d-flex align-items-center justify-content-center'>
        <img src={email1Img} alt="" className='img-fluid'/>
        </div>
        </div>
        </Col>
        </Row>
        <Row className='d-flex align-items-center justify-content-center py-5 bg-[#59a0e333]'>
        <Col md={10} >
        <div className='d-md-flex align-items-center justify-content-center gap-5'>

        <div className='col-md-6 d-md-flex d-none align-items-center justify-content-center'>
        <img src={email2Img} alt="" className='img-fluid'/>
        </div>
        <div>
        <h2 className='hed2 text-center'>Audience Analysis and 
        Segmentation</h2>
        <p className='para text-justify'>Understanding your audience is key to delivering relevant and engaging email content. Our audience analysis and segmentation services enable you to divide your subscriber base into distinct groups based on demographics, interests, and engagement levels. This allows you to send targeted emails that speak directly to the needs and preferences of each segment, ultimately driving higher open and click-through rates.
        </p>
        <div className='flex items-center justify-center py-3'>
        <Button className='btn2'>Get in touch </Button>
        </div>


        </div>
       
        
      
        </div>
        <div className='col-md-6 d-flex d-sm-none align-items-center justify-content-center'>
        <img src={email2Img} alt="" className='img-fluid'/>
        </div>
        
        </Col>
        </Row>
        <Row className='d-flex align-items-center justify-content-center py-5'>
        <Col md={10}>
        <div className='d-md-flex align-items-center justify-content-center gap-5'>
        <div>
        <h2 className='hed2 text-center'>Cadence preparation</h2>
        <p className='para text-justify'>Finding the right cadence for your email campaigns is essential for maintaining engagement without overwhelming your subscribers. Our cadence preparation services help you develop a strategic email schedule that strikes the perfect balance between staying top-of-mind and respecting your audience's inbox. Whether it's weekly newsletters, monthly promotions, or targeted drip campaigns, we'll help you create a cadence that keeps your subscribers engaged and eager for more
        .</p>
        <div className='flex items-center justify-center py-3'>
        <Button className='btn2'>Get in touch </Button>
        </div>


        </div>
        <div className='col-md-6 d-flex align-items-center justify-content-center'>
        <img src={email3Img} alt="" className='img-fluid'/>
        </div>
        </div>
        </Col>
        </Row>
        <Row className=' d-md-flex justify-content-center bgsection2-homepage-smo  align-items-center gap-5 py-3'>

         <Col md={4}>
           <div className="Image-Email d-md-flex d-none">
           <img src={email4Img} alt="" className='img-fluid'/>
           </div>
        </Col>

        <Col md={6}>
            <h2 className='hed2 text-white text-center'>A-B Testing</h2>
            <p className='para text-white ext-justify'>
            Continuous improvement is at the heart of effective email marketing. With our A-B testing services, you can experiment with different email elements, such as subject lines, content, and calls-to-action, to identify what resonates best with your audience. By testing and optimizing your email campaigns, you can improve performance metrics like open rates, click-through rates, and conversion rates, ultimately maximizing the impact of your marketing efforts.
            </p>
            <div className='d-flex justify-content-center align-items-center py-3'>
            <Button className='btn-3 text-center'>Get in Touch</Button>
        </div>

           
             <div className="Image-Email d-flex d-sm-none">
             <img src={email4Img} alt="" className='img-fluid'/>
             </div>
          
        </Col>
  
    </Row>
    <Row className='d-flex align-items-center justify-content-center py-5'>
    <Col md={10}>
    <div className='d-md-flex align-items-center justify-content-center gap-5'>
    <div>
    <h2 className='hed2 text-center'>E-mail Marketing tools</h2>
    <p className='para text-justify'>Choosing the right tools is crucial for streamlining your email marketing workflow and maximizing efficiency. At Razobyte, we work with a range of email marketing platforms, including Mailchimp, Brevo (Send in blue),  HubSpot, and Lemlist, to provide you with the tools you need to create, send, and track your email campaigns. Whether you're a small business or a large enterprise, we'll help you select the email marketing platform that best suits your needs and budget.
    </p>
    <div className='flex items-center justify-center py-3'>
    <Button className='btn2'>Get in touch </Button>
    </div>


    </div>
    <div className='col-md-6 d-flex align-items-center justify-content-center'>
    <img src={email5Img} alt="" className='img-fluid'/>
    </div>
    </div>
    </Col>
    </Row>
    <Row className='flex justify-content-center align-items-center py-5  bg-[#5aa1e333]'>
    <Col md={10}>
        <h2 className='hed2 text-center'>Top E-Mail Marketing Projects</h2>
        <div className='d-flex justify-content-center align-items-center gap-[150px] py-5' >
            <div className='Semproj-shadow'>
                <img src={Proj1Img} alt="" className='img-fluid w-50' />
                <img src={Proj2Img} alt="" className='img-fluid w-50' />
            </div>
            <div className='Semproj-shadow d-md-flex d-none'
            >
                <div className='d-flex justify-content-center align-items-center gap-2'>
                    <img src={Proj8Img} alt="" className='img-fluid w-50' />
                    <img src={Proj3mg} alt="" className='img-fluid w-50' />
                    <img src={Proj4Img} alt="" className='img-fluid w-50' />

                </div>
                <div className='d-flex justify-content-center align-items-center gap-2'>
                    <img src={Proj5Img} alt="" className='img-fluid w-50' />
                    <img src={Proj6Img} alt="" className='img-fluid w-50' />
                    <img src={Proj7Img} alt="" className='img-fluid w-50' />


                </div>
            </div>

        </div>
    </Col>
</Row> 
        <Row className='d-flex justify-content-center align-items-center py-5'>
        <Col md={5} className='d-flex justify-content-center align-items-center mb-3'>
            <div className='custom2-shadow'>
                <img src="/Image/Search-projects2.png" alt="" className='img-fluid w-50' />
                <p className='para pt-2 text-center cursor-pointer' onClick={() => navigate('/socialMedia')}> Social Media Strategy</p>
            </div>
        </Col>
        <Col md={5} className='d-flex justify-content-center align-items-center mb-3 '>
            <div className='custom2-shadow'>
                <img src="/Image/Sem-project.png" alt="" className='img-fluid w-50' />
                <p className='para pt-3 text-center cursor-pointer' onClick={()=>navigate('/seo')}>Search Engine Optimization</p>
            </div>

        </Col>

    </Row>

<Blog title="Blogs"/>
<Row style={{ backgroundColor: "#5e5e5e"}} className='justify-content-center align-items-center mt-5'>
                <Col md={10} className='flex items-center justify-center gap-5 py-3'>
                    <p className='para text-white pt-3'>Interested in a little more details, let us know how we can assist you.</p>
                    <Button variant='dark' className='btn-last-banner-contact-Us' onClick={()=>navigate('/contact')}>Contact-us</Button>
                </Col>
            </Row>


        </>
    )
}