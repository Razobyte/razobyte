
import { Row, Col,Button } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import '../FirstBlogpage/FirstBlog.css'
import Blog from '../../../Blog/Blog2';
import Banner from '../../../Banner/Banner';
import BlogData from './../FirstBlogpage/FirstBlog.json'
import { useNavigate } from 'react-router';


export default function FourthBlog({title,image}) {
    const navigate =useNavigate()
    

      
    

    return (
        <>
            <Banner title="
            Figma v/s Adobe XD
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
                            In the realm of UI/UX design, choosing the right tool can make all the difference in crafting exceptional digital experiences. Two leading contenders in this space are Figma and Adobe XD. In this blog, we'll delve into what each tool offers, explore their differences, and help you determine which one is the better fit for your design needs.



                            </p>
                            <div className="d-flex flex-column align-items-center py-3 justify-content-center">
                            <img src={item.url12}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                            

                        </div>
                      
                    </div>
                <div>
                        <div>
                            <h2 className="hed2 text-left">UI/UX Design: The Backbone of Digital Experiences
                            </h2>
                            <p className="para text-left">
                            UI/UX design plays a crucial role in creating digital products that are intuitive, engaging, and visually appealing. It encompasses everything from user interface layout and interaction design to visual aesthetics and user experience flow. With the rise of digital platforms and the increasing importance of user-centric design, having the right tools at your disposal is essential for success in the competitive landscape of digital design.
                            </p>
                        </div>
                        <div>
                        <h2 className="hed2 text-left">What is Figma?
                        </h2>
                        <p className="para text-left">
                        Figma is a cloud-based design tool that allows designers to collaborate in real time, making it ideal for remote teams and distributed workflows. It offers a wide range of features, including vector editing, prototyping, and design system management. Figma's cloud-based nature enables seamless collaboration, allowing multiple team members to work on the same design project simultaneously.
                        </p>
                    </div>
                      
                        <div className="d-flex flex-column align-items-center py-3 justify-content-center">
                            <img src="Image/figma.jpg"
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                   </div>

                    <div className="px-0 ">
                        <div
                            className="py-3">
                            <h2 className="hed2 text-left">
                            What is Adobe XD
                            </h2>
                            <p className="para  text-left ">
                            Adobe XD is Adobe's flagship UI/UX design tool, offering a comprehensive set of features for designing, prototyping, and sharing interactive experiences. Like Figma, Adobe XD enables designers to create high-fidelity designs and prototypes with ease. It integrates seamlessly with other Adobe Creative Cloud apps, allowing for a smooth workflow for designers who are already familiar with Adobe's ecosystem.


                            </p>
                          
                           
                        </div>
                       
                    </div>
                    <div className="px-0">
                        <div
                            className="py-3"
                          
                        >
                        <h2 className="hed2 text-left">
                        What are the Differences?
                        </h2>
                        <p className="para  text-left ">
                        While Figma and Adobe XD share many similarities, there are also key differences that set them apart. One notable difference is their pricing model – Figma offers a subscription-based pricing model with a free tier for individuals, while Adobe XD is available as part of Adobe's Creative Cloud subscription.
                        </p>
                         <div className=" d-flex justify-content-center  align-items-center ">
                         <img
                             src={item.url13}
                             className="img-fluid shadow-sm rounded-2 "
                             alt=""
                         />
                     </div>
                     <p className="para  text-left pt-3 ">In terms of features, both Figma and Adobe XD offer robust design and prototyping capabilities, but there are some differences in their approach to certain features. For example, Figma's collaborative features are more seamlessly integrated into the design process, while Adobe XD's integration with other Adobe Creative Cloud apps may appeal to designers who are already invested in Adobe's ecosystem.
                     </p>
                         

                     

                        






                        </div>
                       
                    </div>
                    <div className="px-0 ">
                        <div
                    >
                            <h2 className="hed2 text-left">
                            How Adobe XD is Better than Figma
                            </h2>
                            <p className="para  text-left ">
                            One area where Adobe XD excels is in its integration with other Adobe Creative Cloud apps. For designers who are already familiar with Adobe's suite of tools, Adobe XD offers a familiar workflow and seamless integration with apps like Photoshop and Illustrator. Additionally, Adobe XD's prototyping capabilities are highly advanced, allowing for complex interactions and animations.
                            </p>
                           
                         
                        </div>
                      
                    </div>
                    <div className="px-0 ">
                        <div
                        >
                            <h2 className="hed2 text-left">
                            How Figma is Better than Adobe XD
                            </h2>
                            <p className="para  text-left ">
                            Figma's cloud-based nature and real-time collaboration features make it a standout choice for remote teams and distributed workflows. Its collaborative features are seamlessly integrated into the design process, allowing multiple team members to work on the same project simultaneously without needing file syncing or version control. Additionally, Figma's pricing model – with a free tier for individuals – makes it a more accessible option for small teams and independent designers.

                            </p>
                           
                         
                        </div>
                      
                    </div>
                    <div className="px-0 ">
                        <div>
                            <h2 className="hed2 text-left">
                            Conclusion
                            </h2>
                            <p className="para  text-left ">
                            In conclusion, both Figma and Adobe XD offer powerful tools for UI/UX design, each with its strengths and weaknesses. Adobe XD excels in its integration with other Adobe Creative Cloud apps and advanced prototyping capabilities, while Figma shines in its cloud-based collaboration features and accessible pricing model. Ultimately, the choice between Figma and Adobe XD will depend on your specific design needs, workflow preferences, and budget considerations. Whichever tool you choose, you can rest assured that you'll be equipped with the tools you need to create exceptional digital experiences that delight users and drive results.


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
               <div className="d-flex align-items-center gap-2"><MdKeyboardDoubleArrowRight  color="#3b7fbf" size={25}/><li onClick={()=>navigate('/firstBlog')}>10 Tips to Improve Your Website SEO</li></div>
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
               <div className="d-flex align-items-center gap-2"><MdKeyboardDoubleArrowRight  color="#3b7fbf" size={25}/><li onClick={()=>navigate('/firstBlog')}>10 Tips to Improve Your Website SEO</li></div>
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
               <div className="d-flex align-items-center gap-2"><MdKeyboardDoubleArrowRight  color="#3b7fbf" size={25}/><li onClick={()=>navigate('/firstBlog')}>10 Tips to Improve Your Website SEO</li></div>
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