
import { Row, Col, Button } from 'react-bootstrap';
import '../Social-Media-optimization/SocialMediaOptimization.css'
import Blog from '../../Blog/Blog2';
import { useNavigate } from 'react-router';
import Proj1Img from '../../../../public/Image/Sem-top-pr-1.png';
import Proj2Img from '../../../../public/Image/Sem-top-pr-2.png';
import Proj3mg from '../../../../public/Image/img (11).png';
import Proj4Img from '../../../../public/Image/img (13).png';
import Proj5Img from '../../../../public/Image/img (9).png';
import Proj6Img from '../../../../public/Image/img (12).png';
import Proj7Img from '../../../../public/Image/img (15).png';
import Proj8Img from '../../../../public/Image/projall1.png';
import BannersmImg from '../../../../public/Image/SMO-Banner.png'
import { Helmet } from 'react-helmet';



export default function SocialMediaOpt(title) {
    const navigate=useNavigate()

    return (

        <>
        <Helmet>
        <title></title>
        <meta name="description" content=""/>
        <meta name="keywords" content=''/>

        </Helmet>
           
        <Row className='p-0 d-lg-none  position-relative'>
      <img src={BannersmImg} alt="banner" className='img-fluid p-0' />
      <Col md lg xxl className="px-0">
          <div className="position-absolute xs:top-[20px]  top-[10px] lg:left-20  sm:left-20 xs:left-20  left-5 w-[50%]">
            <h2 className="md:text-2xl sm:text-xl text-lg md:font-extrabold sm:font-bold font-bold text-[#474747]">
            Social Media Optimization</h2>
            </div></Col>
    </Row>
     <Row
        className="d-lg-flex d-none justify-center items-center relative"
        style={{
          backgroundImage: `url(${BannersmImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px', // Adjust height based on your design
          position: 'relative',
        }}
      >
        <Col md lg xxl className="px-0">
          <div className="absolute top-[120px] left-10 col-6">
            <h2 className="hed1 text-[#474747]">Social Media Optimization</h2>
          </div>
        </Col>
      </Row>
                <Row className='justify-content-center align-items-center py-lg-5  bgim'  style={{backgroundImage:"url('Image/blue.png')",backgroundPosition:"right",backgroundSize:"50%",backgroundRepeat:"no-repeat"}}>
                    <Col md={10} >
                        <h1  className='text-center hed2 py-4'>Much more than posting!!!</h1>
                        <p className=' para'>
                        Instagram has around 2 billion active mobile users, about 28% of the whole world population with its largest database consisting of a young audience of 18-34 years of age. Twitter is one of the most active social media to ever exist with brands, leaders and celebrities regularly interacting with people.
                        LinkedIn is the unopposed pioneer as a professional social media platform.</p>
                        
                  <p className='para'>  This is just the tip of the iceberg.</p>
                        
                      <p className='para'>In the current age of Social Media dominance the regular random post here and there isn’t going to make the cut.</p>
                     
                       <p className='para'> So let’s dive into the depth of Social Media to understand what can make you stand out in the modern world.</p>
                      
                        

                        

                    </Col>
                </Row>

                <Row className='justify-content-center bgsection-homepage-smo  align-items-center gap-5 py-5'>
                    {/* First image for large screens */}
                    <Col md={4} className='d-none d-sm-flex justify-content-center align-items-center'>
                        <img src="/Image/annd 1.png" alt="" className='img-fluid'/>
                    </Col>

                    {/* Content for all screens */}
                    <Col md={6} >
                        <h2 className='text-center hed2'>Platform analysis and prioritising</h2>
                        <p className='para text-justify'>Imagine someone having lunch in the bath-tub, It’s not a good look, Is it?
                        Prioritising social media platforms for your business and creating content accordingly will get you the attention of your audience and potentially their business.</p>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Button className='btn2 text-center'>Get in Touch</Button>
                        </div>
                    </Col>
                    {/* Second image for small screens */}
                    <Col md={4} className="d-sm-none">
                        <img
                            src="/Image/annd 1.png"
                            alt=""
                            className="img-fluid"
                           
                        />
                    </Col>
                </Row>

                <Row className='justify-content-center align-items-center gap-5 py-5'>
                    <Col md={6}>
                        <h2 className='hed2 text-center'>Strategic Content Creation</h2>
                        <p className='para text-justify'>More than just some icons, images, and words, we take a holistic
                            approach to web design. By harnessing the power of shape, font, and colour psychology, we bring the designs to life and ensure the designs portray the brand’s vision.</p>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Button className='btn2 text-center'>Get in Touch</Button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <img src="/Image/lifestyle 1.png" alt="" className='img-fluid' />
                    </Col>
                </Row>
                <Row className='justify-content-center bgsection2-homepage-smo  align-items-center gap-5 '>
                {/* First image for large screens */}
                <Col md={4}>
                   <div className="image-smo d-none d-sm-flex">
                   <img src="/Image/gfhsgfd 1.png" alt="" className='img-fluid'/>
                   </div>
                </Col>

                {/* Content for all screens */}
                <Col md={6}>
                    <h2 className='hed2 text-light text-center'>Regular Engagement</h2>
                    <p className='para text-light text-justify'>Imagine someone having lunch in the bath-tub, It’s not a good look, Is it?
                    Prioritising social media platforms for your business and creating content accordingly will get you the attention of your audience and potentially their </p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <Button className='btn-3 text-center'>Get in Touch</Button>
                    </div>
                </Col>
                {/* Second image for small screens */}
                <Col md={4} className="d-sm-none image-smo2 mb-5 ">
                    <img
                        src="/Image/gfhsgfd 1.png"
                        alt=""
                        className="img-fluid"
                       
                    />
                </Col>
            </Row>
            <Row className='justify-content-center align-items-center gap-5 py-5'>
                    <Col md={6}>
                        <h2 className='hed2 text-center'>Analytics</h2>
                        <p className='para text-justify' >More than just some icons, images, and words, we take a holistic 
                        approach to web design. By harnessing the power of shape, font, and colour psychology, we bring the designs to life and ensure the designs portray the brand’s vision.</p>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Button className='btn2 text-center'>Get in Touch</Button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <img src="/Image/lifestyle 1.png" alt="" className='img-fluid' />
                    </Col>
                </Row>
                <Row className='justify-content-center bgsection-homepage-smo   bgim align-items-center gap-5 my-5 py-5'  style={{backgroundImage:"url('Image/blue.png')",backgroundPosition:"right",backgroundSize:"50%",backgroundRepeat:"no-repeat"}}>
                    {/* First image for large screens */}
                    <Col md={4} className='d-none d-sm-flex justify-content-center align-items-center'>
                        <img src="/Image/annd 1.png" alt="" className='img-fluid'/>
                    </Col>

                    {/* Content for all screens */}
                    <Col md={6} >
                        <h2 className='text-center hed2'>Planned Roadmap</h2>
                        <p className='para'>Imagine someone having lunch in the bath-tub, It’s not a good look, Is it?
                        Prioritising social media platforms for your business and creating content accordingly will get you the attention of your audience and potentially their business.</p>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Button className='btn2 text-center'>Get in Touch</Button>
                        </div>
                    </Col>
                    {/* Second image for small screens */}
                    <Col md={4} className="d-sm-none">
                        <img
                            src="/Image/annd 1.png"
                            alt=""
                            className="img-fluid"
                           
                        />
                    </Col>
                </Row>
                <Row className='flex justify-content-center align-items-center py-5  bg-[#5aa1e333]'>
                <Col md={10}>
                    <h2 className='hed2 text-center'>Top Social Media Optimization Projects</h2>
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
                <Row className='d-flex justify-content-center align-items-center py-5  bg-[#5aa1e333]'>
                <Col md={5} className='d-flex justify-content-center align-items-center mb-3'>
                    <div className='custom2-shadow'>
                        <img src="/Image/Search-projects2.png" alt="" className='img-fluid w-50' />
                        <p className='para pt-2 text-center cursor-pointer' onClick={() => navigate('/socialMedia')}> Social Media Strategy</p>

                    </div>
                </Col>
                <Col md={5} className='d-flex justify-content-center align-items-center mb-3 '>
                    <div className='custom2-shadow'>
                        <img src="/Image/programming (1) 1 (3).png" alt="" className='img-fluid w-50' />
                        <p className='para pt-3 text-center cursor-pointer' onClick={()=>navigate('/socialMediaMarketing')}>Search Media Marketing</p>
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