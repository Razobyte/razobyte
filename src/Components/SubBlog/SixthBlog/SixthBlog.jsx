
import { Row, Col,Button } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import '../FirstBlogpage/FirstBlog.css'
import Blog from '../../../Blog/Blog2';
import Banner from '../../../Banner/Banner';
import BlogData from './../FirstBlogpage/FirstBlog.json'
import { useNavigate } from 'react-router';


export default function SixthBlog({title,image}) {
    const navigate=useNavigate()

      
    

    return (
        <>
            <Banner title="
            How Social Media is changing 
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
                            In the ever-evolving world of social media, staying ahead of the curve is essential for brands looking to make an impact and connect with their audience. From emerging trends to the rise of influencers, social media is constantly changing, presenting both challenges and opportunities for businesses. Let’s dive into how social media is evolving, why quick trends are becoming the new norm, the influence of influencers, the challenge of fake influencers, the importance of choosing the right platforms, and the pivotal role of creativity in driving success.
                            </p>
                            <div className="d-flex flex-column align-items-center py-3 justify-content-center">
                            <img src={item.url17}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                            

                        </div>
                      
                    </div>
                <div>
                        <div>
                            <h2 className="hed2 text-left">How Social Media is Evolving
                            </h2>
                            <p className="para text-left">
                            Social media platforms have come a long way since their inception, evolving from simple communication tools to powerful marketing platforms. Today, social media is a dynamic ecosystem that encompasses a wide range of platforms, from Facebook and Instagram to TikTok and Clubhouse. As technology advances and consumer behaviors shift, social media continues to evolve, presenting new opportunities and challenges for brands.

                            </p>
                        </div>
                        <div>
                        <h2 className="hed2 text-left">Quick Trends is the New Trend
                        </h2>
                        <p className="para text-left">
                        In the fast-paced world of social media, trends come and go at lightning speed. What's hot today may be old news tomorrow. As a result, brands are increasingly embracing quick trends – fleeting moments of cultural relevance that capture the attention of their audience and drive engagement. From viral challenges to trending hashtags, quick trends allow brands to stay relevant and connect with their audience in real-time.

                        </p>
                    </div>
                      
                        <div className="d-flex flex-column align-items-center py-3 justify-content-center">
                            <img src={item.url18}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                   </div>

                    <div className="px-0 ">
                        <div
                            className="py-3">
                            <h2 className="hed2 text-left">
                            Influencers are a Great Deal

                            </h2>
                            <p className="para  text-left ">
                            Influencer marketing is growing as a powerful tool for brands looking to reach and engage with their target audience on social media. Influencers – individuals with large followings and the ability to influence the opinions and behaviors of their audience – can help brands amplify their message, increase brand awareness, and drive conversions. By partnering with influencers who align with their brand values and target audience, brands can tap into the trust and credibility that influencers have built with their followers.


                            </p>
                            <div className=" d-flex justify-content-center  align-items-center ">
                            <img
                                src={item.url19}
                                className="img-fluid shadow-sm rounded-2 "
                                alt=""
                            />
                        </div>
                          
                           
                        </div>
                       
                    </div>
                    <div className="px-0">
                        <div
                            className="py-3"
                          
                        >
                        <h2 className="hed2 text-left">
                        Fake Influencers are Hard to Differentiate and Sideline
                        </h2>
                        <p className="para  text-left ">
                        While influencer marketing can be highly effective, it's not without its challenges. One of the biggest challenges facing brands is the rise of fake influencers – individuals who buy followers, likes, and engagement to artificially inflate their influence and deceive brands into thinking they have a genuine following. Differentiating between genuine influencers and fake influencers can be difficult, but it's essential for brands to do their due diligence and vet influencers carefully to avoid falling victim to fraudulent practices.

                        </p>
                        
                    
                         

                     

                        






                        </div>
                       
                    </div>
                    <div className="px-0 ">
                        <div
                    >
                            <h2 className="hed2 text-left">
                            Not Every Social Media Platform is Good for Your Brand

                            </h2>
                            <p className="para  text-left ">
                            With so many social media platforms available, it can be tempting for brands to try to be everywhere at once. However, not every social media platform is suitable for every brand. Each platform has its own unique audience, features, and best practices, and it's essential for brands to choose the platforms that align with their target audience, brand identity, and marketing objectives. By focusing on the platforms where their audience is most active and engaged, brands can maximize their impact and drive results.

                            </p>
                            <div className=" d-flex justify-content-center  align-items-center ">
                            <img
                                src={item.url20}
                                className="img-fluid shadow-sm rounded-2 "
                                alt=""
                            />
                        </div>
                           
                         
                        </div>
                      
                    </div>
                    <div className="px-0 ">
                        <div className='py-3'
                        >
                            <h2 className="hed2 text-left">
                            Creativity is the Only Way Up

                            </h2>
                            <p className="para  text-left ">
                            In a crowded and competitive social media landscape, creativity is key to standing out and capturing the attention of your audience. From eye-catching visuals to engaging content, creativity is what sets successful brands apart from the competition. By thinking outside the box, pushing boundaries, and experimenting with new ideas and formats, brands can create memorable experiences that resonate with their audience and drive engagement.


                            </p>
                           
                         
                        </div>
                      
                    </div>
                    <div className="px-0 ">
                        <div>
                            <h2 className="hed2 text-left">
                            Conclusion
                            </h2>
                            <p className="para  text-left ">
                            In conclusion, social media is a dynamic and ever-evolving ecosystem that presents both challenges and opportunities for brands. From embracing quick trends and leveraging the power of influencers to navigating the challenge of fake influencers and choosing the right platforms, brands must adapt to the changing landscape of social media to stay relevant and competitive. By prioritizing creativity, authenticity, and strategic thinking, brands can navigate the evolution of social media and drive meaningful results for their business.
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
                <div className="d-flex  align-items-center gap-2"><MdKeyboardDoubleArrowRight 
               color="#3b7fbf" size={25}/> <li onClick={()=>navigate('/fifthBlog')}>Why e-commerce Brands are failing.</li></div>
               <div className="d-flex align-items-center gap-2"><MdKeyboardDoubleArrowRight  color="#3b7fbf" size={25}/><li onClick={()=>navigate('/firstBlog')}>10 Tips to Improve Your Website SEO</li></div>
                
               
              
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
               <div className="d-flex align-items-center gap-2"><MdKeyboardDoubleArrowRight  color="#3b7fbf" size={25}/><li onClick={()=>navigate('/firstBlog')}>10 Tips to Improve Your Website SEO</li></div>
               
              
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
               <div className="d-flex align-items-center gap-2"><MdKeyboardDoubleArrowRight  color="#3b7fbf" size={25}/><li onClick={()=>navigate('/firstBlog')}>10 Tips to Improve Your Website SEO</li></div>
                
               
              
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