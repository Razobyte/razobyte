
import { Row, Col,Button } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import '../FirstBlogpage/FirstBlog.css'
import Blog from '../../../Blog/Blog2';
import Banner from '../../../Banner/Banner';
import BlogData from './../FirstBlogpage/FirstBlog.json'
import { useNavigate } from 'react-router';


export default function FifthBlog({title,image}) {
    const navigate=useNavigate()

      
    

    return (
        <>
            <Banner title="
            Why e-commerce Brands are failing
            "
            image="Image/Blog1.jpg"
            />
            <Row
                className="px-0  py-5  justify-content-center gap-5"
               >
               {BlogData.map((item,index)=>(
                <Col md={7} className="d-flex flex-column align-items-center py-3 justify-content-center" >

                <div className="px-0 ">
                        <div
                            className="py-3">
                          
                            <p className="para  text-left">
                            In the world of e-commerce, success is not guaranteed. Despite the immense potential for growth and profitability, many e-commerce companies find themselves facing challenges that hinder their progress and lead to failure. Let’s have a look at some of the common pitfalls that e-commerce companies encounter.
                            </p>
                            <p className="para  text-left">
                            E-commerce has revolutionized the way we shop, offering convenience, choice, and accessibility like never before. However, amid the promise of success lies a harsh reality – many e-commerce companies struggle to thrive in the competitive digital landscape. Here are some reasons why:
                            </p>
                        </div>
                      
                    </div>
                <div>
                        <div>
                            <h2 className="hed2 text-left">Neglecting Their Own Website
                            </h2>
                            <p className="para text-left">
                            One common mistake that e-commerce companies make is neglecting their own website and put all their efforts on famous e-commerce aggregator platforms like  Amazon, Flipkart etc. Your website is your digital storefront – it's where customers come to browse, shop, and interact with your brand. Neglecting your website by failing to optimize it for usability, speed, and mobile responsiveness can drive potential customers away and lead to lost sales opportunities.
                            </p>
                        </div>
                        <div className="d-flex flex-column align-items-center py-3 justify-content-center">
                            <img src={item.url14}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                   </div>

                    <div className="px-0 ">
                        <div
                            className="py-3">
                            <h2 className="hed2 text-left">
                            Pouring Money on the Wrong Marketing Channels
                            </h2>
                            <p className="para  text-left ">
                            Another problem that e-commerce companies often encounter is pouring money into the wrong marketing channels. With countless marketing channels available – from social media and email marketing to paid advertising and influencer partnerships – it's easy to get overwhelmed and spread your resources too thin. Investing in the wrong channels without a clear strategy or understanding of your target audience can result in wasted resources and minimal return on investment.
                            </p>
                          
                           
                        </div>
                       
                    </div>
                    <div className="px-0">
                        <div
                            className="py-3"
                          
                        >
                        <h2 className="hed2 text-left">
                        Neglecting Organic Long-Term Growth
                        </h2>
                        <p className="para  text-left ">
                        In the quest for quick wins and immediate results, many e-commerce companies neglect the importance of organic long-term growth. While paid advertising and promotional campaigns can drive short-term traffic and sales, they often fail to build sustainable momentum and long-term customer loyalty. Neglecting organic growth strategies such as search engine optimization (SEO), content marketing, and email list building can limit your e-commerce company's potential for sustained success
                        </p>
                         <div className=" d-flex justify-content-center  align-items-center ">
                         <img
                             src={item.url15}
                             className="img-fluid shadow-sm rounded-2 "
                             alt=""
                         />
                     </div>
                    
                         

                     

                        






                        </div>
                       
                    </div>
                    <div className="px-0 ">
                        <div
                    >
                            <h2 className="hed2 text-left">
                            Lack of HERO-Product
                            </h2>
                            <p className="para  text-left ">
                            A HERO-product is a flagship product or offering that sets your brand apart from the competition and captures the attention of your target audience. Many e-commerce companies fail to identify or promote a HERO-product, resulting in a lack of differentiation and a failure to stand out in a crowded marketplace. Without a compelling HERO-product, your e-commerce company may struggle to attract and retain customers and achieve sustainable growth.

                            </p>
                           
                         
                        </div>
                      
                    </div>
                    <div className="px-0 ">
                        <div
                        >
                            <h2 className="hed2 text-left">
                            No Catchy Campaigns
                            </h2>
                            <p className="para  text-left ">
                            Finally, e-commerce companies often fall short when it comes to creating catchy campaigns that resonate with their target audience. In today's digital age, consumers are bombarded with marketing messages from every direction. To cut through the noise and capture attention, e-commerce companies need to create campaigns that are creative, memorable, and relevant to their audience's needs and interests.

                            </p>
                            <div className=" d-flex justify-content-center  align-items-center ">
                            <img
                                src={item.url16}
                                className="img-fluid shadow-sm rounded-2 "
                                alt=""
                            />
                        </div>
                         
                        </div>
                      
                    </div>
                    <div className="px-0 ">
                        <div className='py-3'>
                            <h2 className="hed2 text-left">
                            Strategies to save e-commerce brand from failing
                            </h2>
                            <p className="para  text-left ">
                            While the challenges facing e-commerce companies are significant, they are by no means insurmountable. By adopting the right strategies and mindset, e-commerce companies can overcome these pitfalls and pave the way for success. Here are some strategies to consider:
                            </p>
                            <ul className='para text-left' style={{listStyle:"circle"}}>
                            <li>Invest in Your Website: Prioritize the optimization of your website for usability, speed, and mobile responsiveness to provide a seamless shopping experience for your customers.
                            </li>
                            <li>
                            Focus on the Right Marketing Channels: Take the time to research and understand your target audience, and invest in marketing channels that align with their preferences and behavior.

                            </li>
                            <li>Balance Paid and Organic Strategies: Strike a balance between paid advertising and organic growth strategies to drive both short-term results and long-term sustainability.

                            </li>

                            <li className='pt-2'>Identify Your HERO-Product: Identify and promote a flagship product or offering that sets your brand apart and captures the imagination of your target audience.
                            </li>
                            
                            <li className='pt-2'>Create Memorable Campaigns: Invest in creative and memorable campaigns that resonate with your audience and differentiate your brand from the competition.</li>
                            
                            </ul>
                            <h2 className='hed3 text-left'>Conclusion</h2>
                            <p className=' para text-left'>In conclusion, the road to success in e-commerce is fraught with challenges, but with the right strategies and mindset, it's possible to overcome them. By avoiding common pitfalls such as neglecting your website, pouring money into the wrong marketing channels, neglecting organic growth, lacking a HERO-product, and failing to create catchy campaigns, e-commerce companies can position themselves for sustainable growth and long-term success in the competitive digital landscape.
                            </p>
                           
                         
                        </div>
                      
                    </div>
                </Col>

               ))}
               
              
           
               
                
               <Col md={4} className=" py-5 coldiv">
                <div className='d-flex justify-content-center align-items-center'>
                <input
                    type="text"
                    placeholder='Search'
                    className='inputfield text-center'
              
                />
                <div className="bg-[#3b7fbf] p-[8px] ml-[-5px]">
                <FaSearch  className='searchbar '  color="#ffff" size={25}/>
                </div>
                </div> 
                <div className="blog-post-linkallmaindiv py-4 "> 
                <h3 className="text-left  hed3">Recent Posts</h3>
                <ul className="para">
                <div className="d-flex align-items-center gap-2"><MdKeyboardDoubleArrowRight  color="#3b7fbf" size={25}/><li onClick={()=>navigate('/secondBlog')}>Mobile Website v/s responsive website</li></div>
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight 
                color="#3b7fbf" size={25}/> <li onClick={()=>navigate('/thirdBlog')}>How to Make Your E-commerce Website</li></div>
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight
                color="#3b7fbf" size={25} /> <li onClick={()=>navigate('/fourthBlog')}>Figma v/s Adobe XD</li></div>
                <div className="d-flex align-items-center gap-2"><MdKeyboardDoubleArrowRight  color="#3b7fbf" size={25}/><li onClick={()=>navigate('/firstBlog')}>10 Tips to Improve Your Website SEO</li></div>
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight
                color="#3b7fbf" size={25} /> <li onClick={()=>navigate('/sixthBlog')}>How Social Media is changing .</li></div>
                
               
              
                </ul>
        
                </div>
                <div className="blog-post-linkallmaindiv "> 
                <h3 className="text-left  hed3">Related Posts</h3>
              
                <ul className="para">
                <div className="d-flex align-items-center gap-2"><MdKeyboardDoubleArrowRight  color="#3b7fbf" size={25}/><li onClick={()=>navigate('/secondBlog')}>Mobile Website v/s responsive website</li></div>
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight 
                color="#3b7fbf" size={25}/> <li onClick={()=>navigate('/thirdBlog')}>How to Make Your E-commerce Website</li></div>
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight
                color="#3b7fbf" size={25} /> <li onClick={()=>navigate('/fourthBlog')}>Figma v/s Adobe XD</li></div>
                <div className="d-flex align-items-center gap-2"><MdKeyboardDoubleArrowRight  color="#3b7fbf" size={25}/><li onClick={()=>navigate('/firstBlog')}>10 Tips to Improve Your Website SEO</li></div>
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight
                color="#3b7fbf" size={25} /> <li onClick={()=>navigate('/sixthBlog')}>How Social Media is changing .</li></div>
                
               
              
                </ul>
                </div>
                <div className="blog-post-linkallmaindiv"> 
                <h3 className="text-left hed3">Other Post</h3>
                <ul className="para">
                <div className="d-flex align-items-center gap-2"><MdKeyboardDoubleArrowRight  color="#3b7fbf" size={25}/><li onClick={()=>navigate('/secondBlog')}>Mobile Website v/s responsive website</li></div>
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight 
                color="#3b7fbf" size={25}/> <li onClick={()=>navigate('/thirdBlog')}>How to Make Your E-commerce Website</li></div>
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight
                color="#3b7fbf" size={25} /> <li onClick={()=>navigate('/fourthBlog')}>Figma v/s Adobe XD</li></div>
                <div className="d-flex align-items-center gap-2"><MdKeyboardDoubleArrowRight  color="#3b7fbf" size={25}/><li onClick={()=>navigate('/firstBlog')}>10 Tips to Improve Your Website SEO</li></div>
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight
                color="#3b7fbf" size={25} /> <li onClick={()=>navigate('/sixthBlog')}>How Social Media is changing .</li></div>
                
               
              
                </ul>
        
                </div>
                </Col>
              

            </Row>
            <Blog title="Feature Blogs"/>
            <Row style={{ backgroundColor: "#5e5e5e"}} className='justify-content-center align-items-center'>
                <Col md={10} className='flex items-center justify-center gap-5 py-3'>
                    <p className='para text-white pt-2'>Interested in a little more details, let us know how we can assist you Button</p>
                    <Button variant='dark' className='btn-last-banner-contact-Us' onClick={()=>navigate('/sem')}>Expolre Services</Button>
                    <Button variant='dark' className='btn-last-banner-contact-Us d-md-flex d-none' onClick={()=>navigate('/contact')}>Get qoute</Button>

                </Col>
            </Row>



        </>
    )




}