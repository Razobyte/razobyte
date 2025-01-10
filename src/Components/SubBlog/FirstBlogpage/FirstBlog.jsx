
import { Row, Col,Carousel,Button } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import '../FirstBlogpage/FirstBlog.css'
import Blog from '../../../Blog/Blog2';
import Banner from '../../../Banner/Banner';
import BlogData from './FirstBlog.json';
import { useNavigate } from 'react-router';


export default function FirstBlog({title,image}) {
    const navigate =useNavigate()

      
    

    return (
        <>
            <Banner title="10 Tips to Improve Your Website SEO"
            image="Image/Blog1.jpg"
            

          
            
            />
            <Row
                className="px-0  py-5  justify-content-center gap-5"
               >
               {BlogData.map((item,index)=>(
                <Col md={6} className="d-flex flex-column align-items-center py-3 justify-content-center" >

                <div className="px-0 ">
                        <div
                            className="py-3">
                          
                            <p className="para  text-left">
                            Starting a business is a hassle, Govt. compliances, taxation, hiring, team management, and whatnot. To top all this you need a website that your potential clients can access to know about your products and services, so you got one ready but there is one major problem…

                            </p>
                            <p className="para  text-left ">“IT IS NOT REACHING ANYONE” </p>
                            <p className="para  text-left">Well, that is because everyone today uses search engines. You remember Google that we use to solve every second problem we have, Right? Search engines have their way of giving people the results for their searches also known as the “ALGORITHM”. </p>
                            <p className="para  text-left ">So, How can you reach your target audience with your website? 
                            Here are 10 tips to make your website SEO-friendly and reach the target audience.</p>

                        </div>
                      
                    </div>
                <div>
                        <div>
                            <h2 className="hed2 text-left">A little magic of Keywords
                            </h2>
                            <p className="para text-left">
                            </p>
                            Keywords are the foundation of Search Engine Optimisation. Just like a treasure map leads to hidden riches, strategically placed keywords guide search engines to your website. Identify relevant keywords related to your niche and use them naturally in your content but do not overuse them, you don’t want to be on Google’s Bad list, Do you?
                        </div>
                      
                        <div className="d-flex flex-column align-items-center py-3 justify-content-center">
                            <img src={item.url1}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                   </div>

                    <div className="px-0 ">
                        <div
                            className="py-3">
                            <h2 className="hed2 text-left">
                            Engaging and SEO-friendly Content
                            </h2>
                            <p className="para  text-left ">
                            Remember the golden rule: content is king. Produce high-quality content that not only includes keywords but also captivates your audience. Whether it’s blog posts, videos, or infographics. The aim is to provide valuable information that keeps visitors engaged and craving for more.
                            </p>
                          <h2 className="hed2">  If your website Snooze, you lose</h2>
                          <p className="para text-left">In the fast-paced digital world, nobody likes to wait. Ensure your website loads quickly to prevent visitors from bouncing to your competitors’ sites. Optimize images, leverage browser caching, and streamline your code to enhance site speed and user experience.</p>


                        </div>
                        <div className="d-md-flex flex-column align-items-center justify-content-center ">
                            <img src={item.url2} className='img-fluid'/>
                        </div>
                    </div>
                    <div className="px-0">
                        <div
                            className="py-3"
                          
                        >
                            <h2 className="hed2 text-left">
                            Optimize for Mobile
                            </h2>
                            <p className="para text-left">
                            Social media is more than just socializing; it’s a valuable tool for driving website traffic. Share your content across various platforms to increase visibility and engagement. Encourage social sharing among your audience to expand your reach and boost SEO.

                            </p>
                          <h2 className="hed2">  Master Meta Tags</h2>
                          <p className="para text-left">Meta tags, including title tags and meta descriptions, play a critical role in attracting visitors from search engine results pages. Write compelling titles and descriptions that attract users to click through to your website. These tags serve as your website’s first impression, so make them count. As you know “First impression is Last Impression</p>
                         <h2 className="hed2"> Internal and External Links</h2>
                         <p className="para text-left">Internal links facilitate navigation within your website, while external links to reputable sites signal credibility to search engines. Strategically place these links to enhance user experience and demonstrate authority within your niche.</p>
                         <h2 className="hed2"> Embrace Social Media</h2>
                         <p className="para text-left">Social media is more than just socializing; it’s a valuable tool for driving website traffic. Share your content across various platforms to increase visibility and engagement. Encourage social sharing among your audience to expand your reach and boost SEO.</p>
                         <h2 className="hed2">Ensure Website Security with HTTPS</h2>
                         <p className="para text-left">No one likes their data and information compromised! Make sure that your website is secure with HTTPS, to secure the data of your users. Obtaining an SSL certificate is essential for both security and SEO purposes.</p>
                         <h2 className="hed2">Consistently Update Your Content
                         </h2>
                         <p className="para text-left">Keep your website fresh and relevant by regularly updating your content. Whether it’s publishing new blog posts, refreshing images, or adding fresh insights, staying active signals to search engines that your website is current and valuable.
                         </p>

                     

                        






                        </div>
                        <div className=" d-flex justify-content-center  align-items-center ">
                            <img
                                src={item.url3}
                                className="img-fluid shadow-sm rounded-2 "
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="px-0 ">
                        <div
                            className="py-3">
                            <h2 className="hed2 text-left">
                            Practice Patience and Persistence
                            </h2>
                            <p className="para  text-left ">
                            Rome wasn’t built in a day, and neither were successful websites. Be patient and persistent in implementing these strategies, as SEO results take time to materialize. Stay committed to providing valuable content and optimizing your website, and you’ll gradually climb the ranks.

                            </p>
                            <p className="para text-left">In conclusion, increasing website traffic requires a multifaceted approach that combines technical optimization, engaging content creation, and strategic promotion. By following these expert tips from Razobyte, you’ll be well-equipped to attract more visitors and elevate your website’s visibility in the digital realm. Remember, success doesn’t happen overnight, but with dedication and perseverance, your website will reach new heights.</p>
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
                <div className="bg-[#3b7fbf] p-[8px] ml-[-5px] ">
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
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight 
               color="#3b7fbf" size={25}/> <li onClick={()=>navigate('/fifthBlog')}>Why e-commerce Brands are failing.</li></div>
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
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight 
               color="#3b7fbf" size={25}/> <li onClick={()=>navigate('/fifthBlog')}>Why e-commerce Brands are failing.</li></div>
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
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight 
               color="#3b7fbf" size={25}/> <li onClick={()=>navigate('/fifthBlog')}>Why e-commerce Brands are failing.</li></div>
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