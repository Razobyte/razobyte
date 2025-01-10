
import { Row, Col,Button } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import '../FirstBlogpage/FirstBlog.css'
import Blog from '../../../Blog/Blog2';
import Banner from '../../../Banner/Banner';
import BlogData from './../FirstBlogpage/FirstBlog.json'
import { useNavigate } from 'react-router';


export default function ThirdBlog({title,image}) {
    const navigate=useNavigate()

      
    

    return (
        <>
            <Banner title="How to Make Your E-commerce Website"
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
                            In the modern era of online shopping, e-commerce websites play an important role in catering to the diverse needs and preferences of modern consumers. However, not all online stores succeed in engaging their audience and driving conversions. Understanding the factors that can lead to the downfall of an e-commerce website is essential for crafting a compelling online presence. Let's explore some common mistakes and ways to overcome them


                            </p>
                            <div className="d-flex flex-column align-items-center py-3 justify-content-center">
                            <img src={item.url8}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                            

                        </div>
                      
                    </div>
                <div>
                        <div>
                            <h2 className="hed2 text-left">Clear Value Proposition
                            </h2>
                            <p className="para text-left">
                            The first impression is often the most crucial. A compelling value proposition communicates to visitors why they should choose your brand over competitors. From the homepage layout to the placement of the logo, every element should reinforce your brand message and unique selling points. Ensuring clarity and consistency in conveying your value proposition enhances brand recall and fosters trust among potential customers.
                            </p>
                        </div>
                        <div>
                        <h2 className="hed2 text-left"> Seamless Navigation
                        </h2>
                        <p className="para text-left">
                        Efficient navigation is the same as providing a seamless shopping experience in a physical store. Just as customers expect to easily locate products in-store, they seek navigation on e-commerce websites. Complex navigation structures or unclear categorization can lead to frustration and high bounce rates. Streamlining navigation pathways and implementing user-friendly search features empower customers to find what they need swiftly, enhancing overall satisfaction and retention.

                        </p>
                    </div>
                      
                        <div className="d-flex flex-column align-items-center py-3 justify-content-center">
                            <img src={item.url9}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                   </div>

                    <div className="px-0 ">
                        <div
                            className="py-3">
                            <h2 className="hed2 text-left">
                            Search Functionality
                            </h2>
                            <p className="para  text-left ">
                            A visible search box serves as the most important feature for customers in navigating your online store. Enabling users to swiftly search for specific products enhances convenience and eases their shopping process. Failing to provide a prominent search functionality risks alienating customers who rely on this feature for efficient browsing. Prioritizing the visibility and functionality of the search tool demonstrates a commitment to user convenience and satisfaction.

                            </p>
                            <div className="d-md-flex flex-column align-items-center justify-content-center ">
                            <img src={item.url2} className='img-fluid'/>
                        </div>
                        </div>
                       
                    </div>
                    <div className="px-0">
                        <div
                            className="py-3"
                          
                        >
                            <h2 className="hed2 text-left">
                            Transparent Contact Information
                            </h2>
                            <p className="para text-left">
                           Building trust is paramount in the industry of e-commerce. Displaying clear contact information, including phone numbers and email addresses, instills confidence in the authenticity and reliability of your business. Transparency regarding your location and communication channels reassures customers and facilitates seamless interaction, ultimately fostering long-term relationships and repeat purchases.

                            </p>
                          <h2 className="hed2"> Strategic Product Promotion</h2>
                          <p className="para text-left">Capitalizing on popular or trending items can significantly boost sales and engagement. Effective merchandising techniques, such as prominently featuring best-selling products or showcasing new arrivals, entice customers and encourage impulse purchases. Failing to highlight top-performing items or overlooking seasonal trends may result in missed opportunities for revenue generation and customer engagement.
                          </p>
                         <h2 className="hed2">Simple and effective Payment Options</h2>
                         <p className="para text-left">Simplicity and clarity in payment processes are paramount for facilitating smooth transactions. Communicating available payment methods and any relevant limitations upfront prevents confusion and reduces cart abandonment rates. Prioritizing user-friendly payment interfaces and providing comprehensive payment options cater to diverse customer preferences and enhance the overall shopping experience.</p>
                        
                        
                         <div className=" d-flex justify-content-center  align-items-center ">
                         <img
                             src={item.url3}
                             className="img-fluid shadow-sm rounded-2 "
                             alt=""
                         />
                     </div>
                     

                        






                        </div>
                       
                    </div>
                    <div className="px-0 ">
                        <div
                            className="py-3">
                            <h2 className="hed2 text-left">
                            Trust Assurance
                            </h2>
                            <p className="para  text-left">
                            In an era of heightened cybersecurity concerns, earning customer trust is non-negotiable. Displaying recognized trust marks and security seals from reputable third-party providers instills confidence in the safety and integrity of transactions. Incorporating SSL certificates and adhering to industry-standard security protocols reassure customers of data protection and bolster credibility, laying the foundation for enduring customer relationships.


                            </p>
                            <p className="para  text-left">
                            In essence, the success of an e-commerce website hinges on its ability to prioritize user experience, foster trust, and adapt to evolving consumer expectations. By addressing common pitfalls and implementing strategic enhancements, businesses can cultivate a thriving online presence and capitalize on the limitless opportunities of the digital marketplace.

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
               <div className="d-flex align-items-center gap-2"><MdKeyboardDoubleArrowRight  color="#3b7fbf" size={25}/><li onClick={()=>navigate('/firstBlog')}>10 Tips to Improve Your Website SEO</li></div>
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
               <div className="d-flex align-items-center gap-2"><MdKeyboardDoubleArrowRight  color="#3b7fbf" size={25}/><li onClick={()=>navigate('/firstBlog')}>10 Tips to Improve Your Website SEO</li></div>
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
               <div className="d-flex align-items-center gap-2"><MdKeyboardDoubleArrowRight  color="#3b7fbf" size={25}/><li onClick={()=>navigate('/firstBlog')}>10 Tips to Improve Your Website SEO</li></div>
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