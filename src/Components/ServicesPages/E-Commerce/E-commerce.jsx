
import { Row, Col, Button } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import Banner from './Banner/Banner';
import Sec from './SecSection/SecSection';
import Blog from '../../Blog/Blog2';
import Projects2 from '../../AboutUspages/Projects/Projects2';
import bgImg from '../../../../public/Image/e-bgh.png'
export default function ECommmerce(title) {
    return (

        <>

            <Banner />
            <Sec />
            <Row className='flex justify-content-center align-items-center  py-3 gap-5' style={{ background: "linear-gradient(to bottom,rgba(90,161,227,30%), rgba(90,161,227, 0%))" }}
            >
                <Col md={5} className='d-flex flex-col justify-content-center align-items-center'
                >
                    <div>
                        <h2 className='hed2 text-left'>Custom E-commerce Website Development</h2>
                        <p className='para text-left '>At Razobyte, we specialize in creating bespoke e-commerce websites that align perfectly with your brand and business goals. Our expert team of designers and developers will work closely with you to understand your vision and deliver a unique, user-friendly, and visually captivating online store.</p>
                        <Button className='btn2 text-center'>Get in Touch</Button>
                    </div>
                </Col>
                <Col md={5} className='d-flex justify-content-center align-items-center'>
                    <img src="/Image/e-com (7).png" alt="" className='img-fluid' />
                </Col>
            </Row>
            <Row className='flex justify-content-center align-items-center  gap-5 py-5'>

                <Col md={5} className='d-md-flex d-none justify-content-center align-items-center'>
                    <img src="/Image/e-com.png" alt="" className='img-fluid' />
                </Col>
                <Col md={5} className='d-flex flex-col justify-content-center align-items-center'><div>
                    <h2 className='hed2 text-left'>E-commerce Platform Integration</h2>
                    <p className='para text-left '>We have extensive experience working with leading e-commerce platforms such as Shopify, Magento, WooCommerce, and more. Our experts will integrate your website with the platform that best suits your business needs, providing you with a powerful foundation to manage products, inventory, orders, and customer data efficiently.</p>

                    <Button className='btn2 text-center'>Get in Touch</Button>

                </div>
                </Col>
                <Col md={5} className='d-flex d-sm-none justify-content-center align-items-center'>
                    <img src="/Image/e-com.png" alt="" className='img-fluid' />
                </Col>
            </Row>

            <Row className='py-5 d-md-flex d-none justify-center align-items-center'
                style={{ backgroundImage: `url(${bgImg})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "1000px" }}>
                <Col md={10} className='d-md-flex  flex-col justify-content-center align-items-center'>
                    <div>
                        <div className='d-md-flex items-center justify-center gap-5'>
                            <div>
                                <h2 className='hed2 text-light text-left'>Mobile-Optimized E-commerce Solutions</h2>
                                <p className='para text-left  text-light'>In the era of mobile commerce, having a responsive and optimized website is crucial. Our team ensures that your e-commerce platform provides a seamless and engaging experience across all devices, enabling your customers to shop conveniently from their desktops, tablets, or smartphones.</p>

                                <Button className='btn2 text-center'>Get in Touch</Button>

                            </div>
                            <div className='d-md-flex  align-items-center col-md-5'>
                                <img src="/Image/e-com (1).png" alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='d-md-flex items-center justify-center gap-5 pt-[150px]'>
                            <div className='d-md-flex  d-none  col-md-5'>
                                <img src="/Image/e-com (6).png" alt="" className='img-fluid' />
                            </div>
                            <div>
                                <h2 className='hed2 text-light text-left'>Secure Payment Gateway Integratio</h2>
                                <p className='para  text-light text-left'>Trust and security are paramount in e-commerce transactions. We integrate reliable and secure payment gateways, such as PayPal, Stripe, and Authorize.Net, ensuring that your customers’ payment information is protected and their checkout experience is smooth and hassle-free.</p>

                                <Button className='btn2 text-center'>Get in Touch</Button>


                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='d-flex d-sm-none justify-center align-items-center'
                style={{ background: "linear-gradient(to bottom ,#3B7FBF, #4ECFFF)" }}>
                <Col md={10} className='d-md-flex  flex-col justify-content-center align-items-center'>
                    <div>
                        <div className='d-md-flex items-center justify-center gap-5'>
                            <div>
                                <h2 className='hed2 text-light text-center'>Mobile-Optimized E-commerce Solutions</h2>
                                <p className='para  text-light text-center'>In the era of mobile commerce, having a responsive and optimized website is crucial. Our team ensures that your e-commerce platform provides a seamless and engaging experience across all devices, enabling your customers to shop conveniently from their desktops, tablets, or smartphones.</p>

                                <Button className='btn2 text-center'>Get in Touch</Button>


                            </div>
                            <div className='d-md-flex  align-items-center col-md-5'>
                                <img src="/Image/img1 (2).png" alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='d-md-flex items-center justify-center gap-5'>
                            <div className='d-md-flex  d-none  col-md-5'>
                                <img src="/Image/img1 (1).png" alt="" className='img-fluid' />
                            </div>
                            <div>
                                <h2 className='hed2 text-light text-center'>Secure Payment Gateway Integratio</h2>
                                <p className='para  text-light text-center'>Trust and security are paramount in e-commerce transactions. We integrate reliable and secure payment gateways, such as PayPal, Stripe, and Authorize.Net, ensuring that your customers’ payment information is protected and their checkout experience is smooth and hassle-free.</p>

                                <Button className='btn2 text-center'>Get in Touch</Button>

                            </div>
                            <div className='d-flex  d-sm-none  col-md-5 justify-content-center align-items-center '>
                                <img src="/Image/img1 (1).png" alt="" className='img-fluid' />
                            </div>

                        </div>
                    </div>
                </Col>
            </Row>
            <Row className=' d-md-flex justify-content-center align-items-center  gap-5 py-5'
            >
                <Col md={5}>
                    <h2 className='hed2 text-left '>Inventory Management Solutions</h2>
                    <p className='para text-left'>Keeping track of inventory levels, monitoring stock movements, and avoiding stockouts are essential for smooth operations. Our inventory management solutions enable you to efficiently manage your inventory, automate replenishment, and gain valuable insights to optimize your supply chain.</p>

                    <Button className='btn2 text-center'>Get in Touch</Button>

                </Col>
                <Col md={5} className='d-md-flex justify-content-center align-items-center'>
                    <img src="/Image/e-com (8).png" alt="" className='img-fluid' />
                </Col>
            </Row>




            <Row className=' d-md-flex justify-content-center align-items-center  gap-5 bg-[#5aa1e333] py-5'
            >
                <Col md={5} className='d-md-flex  d-none justify-content-center align-items-center'>
                    <img src="/Image/e-com (9).png" alt="" className='img-fluid' />
                </Col>
                <Col md={5}>
                    <h2 className='hed2 text-left'>Conversion Rate Optimization</h2>
                    <p className='para text-left'>Maximizing your conversion rates is key to driving revenue growth. Our experts employ data-driven techniques, conduct A/B testing, and implement effective strategies to optimize your website’s conversion funnel. By enhancing user experience, streamlining the checkout process, and fine-tuning your marketing campaigns, we help you turn visitors into loyal customers.</p>

                    <Button className='btn2 text-center'>Get in Touch</Button>


                </Col>
                <Col md={5} className='d-flex  d-sm-none justify-content-center align-items-center'>
                    <img src="/Image/e-com (9).png" alt="" className='img-fluid' />
                </Col>
            </Row>
            <Row className=' d-md-flex justify-content-center align-items-center py-5'
            >
                <Col md={5}>
                    <h2 className='hed2 text-left'>Digital Marketing and SEO</h2>
                    <p className='para text-left'>Achieving visibility in the crowded online marketplace requires a robust digital marketing strategy. We offer comprehensive SEO (Search Engine Optimization) services, content marketing, social media management, and targeted advertising campaigns to boost your brand’s online presence, attract qualified traffic, and increase conversions.</p>

                    <Button className='btn2 text-center'>Get in Touch</Button>

                </Col>
                <Col md={5} className='d-md-flex justify-content-center align-items-center'>
                    <img src="/Image/e-com (4).png" alt="" className='img-fluid' />
                </Col>
            </Row>
            <Row className='py-5 justify-content-center' style={{ backgroundColor: "#3B7FBF" }}>
                <Col md={10}>
                    <div className='text-center'>
                        <h4 className='hed2 text-white'>Our Ecommerce Technologies And Tools</h4>
                        <p className='para text-white'>Our team of eCommerce website developers makes the best use of the latest tools in the market to develop
                            feasible solutions that ultimately inspire your customers to visit your website repeatedly. Delivering great
                            experiences leads to an increase in traffic, boost your sales and customer retention.G</p>
                    </div>
                    <Marquee>
                        <div className='d-flex justify-content-center align-items-center gap-5 py-3'>
                            <div>
                                <img src="/Image/marq1 (4).png" alt="" className='img-fluid' style={{ marginLeft: "30px" }} />
                            </div>
                            <div>
                                <img src="/Image/marq1 (3).png" alt="" className='img-fluid' />
                            </div>
                            <div>
                                <img src="/Image/marq1 (2).png" alt="" className='img-fluid' />
                            </div>
                            <div>
                                <img src="/Image/marq1 (1).png" alt="" className='img-fluid' />
                            </div>
                        </div>
                    </Marquee>
                </Col>
            </Row>
            <Row className=' d-md-flex justify-content-center align-items-center py-5 gap-5'

            >
                <Col md={5} className='d-md-flex d-none justify-content-center align-items-center'>
                    <img src="/Image/e-com (10).png" alt="" className='img-fluid' />
                </Col>
                <Col md={5}>
                    <h2 className='hed2 text-left'>Fuel Your Business Growth withE-commerce Solutions</h2>
                    <p className='para text-left'>Regardless of how complex or easy your web-based business store is all about, it should be optimized to be successful in gaining a strong customer base. Our digital eCommerce solutions help in simplifying the easy order processing and seamless payment process to provide great shopping experiences to customers.</p>

                    <Button className='btn2 text-center'>Get in Touch</Button>


                </Col>
                <Col md={5} className='d-flex d-sm-none justify-content-center align-items-center'>
                    <img src="/Image/e-com (10).png" alt="" className='img-fluid' />
                </Col>
            </Row>
            <Row className=' d-md-flex justify-content-center align-items-center py-5'
                style={{ background: "linear-gradient(to bottom,rgba(90,161,227,30%), rgba(90,161,227,10%))" }}>
                <Col md={5}>
                    <h2 className='hed2  d-md-flex d-none text-left'>Content Management/Product Catalog</h2>
                    <h2 className='hed2 text-center d-flex d-sm-none'>Content Management/Product Catalog</h2>
                    <p className='para text-left'>Implementing a Content Management System into the back-end enable the site owners to easily add, manage, or update content on the apps, anytime from anywhere.</p>

                    <Button className='btn2 text-center'>Get in Touch</Button>

                </Col>
                <Col md={5} className='d-md-flex justify-content-center align-items-center'>
                    <img src="/Image/e-com (3).png" alt="" className='img-fluid' />
                </Col>
            </Row>
            <Row className=' d-md-flex justify-content-center align-items-center py-5 gap-5'

            >
                <Col md={5} className='d-md-flex  d-none justify-content-center align-items-center'>
                    <img src="/Image/e-com (11).png" alt="" className='img-fluid' />
                </Col>
                <Col md={5}>
                    <h2 className='hed2 text-left'>Flexibility</h2>
                    <p className='para text-left'>Since there is presence of aggressive nature of Web Audiences, Users Cart Accounts, Multiple Product management, Multi transactions, e-Store Mobile Apps Should high flexibility and compatibility.</p>

                    <Button className='btn2 text-center'>Get in Touch</Button>

                </Col>
                <Col md={5} className='d-flex  d-sm-none justify-content-center align-items-center'>
                    <img src="/Image/e-com (11).png" alt="" className='img-fluid' />
                </Col>
            </Row>
            <Row className=' d-md-flex justify-content-center align-items-center py-5'
                style={{ background: "linear-gradient(to bottom,rgba(90,161,227,30%), rgba(90,161,227,10%))" }}>
                <Col md={5}>
                    <h2 className='hed2 text-left'>Web Security and Server Protections</h2>
                    <p className='para text-left'>We make sure our clients to integrate top most level security and protections while using different modules of ecommerce website or Mobile apps to let yours users experience friendly User Interface with all necessary online protections.</p>

                    <Button className='btn2 text-center'>Get in Touch</Button>

                </Col>
                <Col md={5} className='d-md-flex justify-content-center align-items-center'>
                    <img src="/Image/e-com (2).png" alt="" className='img-fluid' />
                </Col>
            </Row>
            <Row className='my-lg-5 justify-content-center align-items-center'
                style={{
                    background: "linear-gradient(rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5) 20%), url('/Image/Rectangle 52.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "60vh"
                }}>
                <Col md={5} className='py-3'>
                    <div >
                        <iframe
                            className="video"
                            src="https://www.youtube.com/embed/BVMsRltq2yU?si=SOwrh26Oz50m26b7"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen={true}
                        />

                    </div>
                </Col>

                <Col md={5} className='py-3'>
                    <div>
                        <h3 className='text-white hed2' >Bespoke E-CommerceWeb
                            Development Experiences</h3>
                        <p className='para text-white'>Reach a massive range of customers across the world by digitizing your
                            platform and serving them online. We offer customized eCommerce
                            website development services to meet specific business goals for your
                            existing and new store.</p>
                    </div>
                </Col>
            </Row>
            <Row className='justify-content-center align-items-center py-5'
            >
                <Col md={5}>
                    <div>
                        <h3 className='hed2'>Essentials You Need For
                            eCommerce Success</h3>
                        <h6 className='d-flex align-items-center gap-2'>
                            <img src="Image/Mask group (7).png" alt="" />
                            <span className='para text-black'>Product Inventory</span></h6>
                        <p className='para'>Allows businesses to do real-time evaluation thus helps in smart decision
                            making</p>
                    </div>
                    <div>
                        <h6 className='d-flex align-items-center gap-2'>
                            <img src="Image/Mask group (7).png" alt="" /><span>Payment Gateways</span></h6>
                        <p className='para'>Adds convenience and security when facilitating online transactions</p>
                    </div>
                    <div>
                        <h6 className='d-flex align-items-center gap-2'>
                            <img src="Image/Mask group (7).png" alt="" /><span>Extend Everything</span></h6>
                        <p className='para'>Easy modifications let you grow your business anytime and anywhere</p>
                    </div>
                    <div>

                        <Button className='btn2 text-center w-auto my-3'>Get a Free Session & Quote</Button>
                    </div>
                    <div>
                        <Button className='btn2 text-center w-auto'>WhatsApp +65-90542405</Button>
                    </div>
                </Col>
                <Col md={5} className='d-md-flex justify-content-center align-items-center'>
                    <img src="/Image/tab_mobile 1.png" alt="" className='img-fluid' />
                </Col>
            </Row>
            <Blog title="Blogs" />
            <Projects2 titleProjects="Top Web E-Commerce Projects" />


        </>

    )
}