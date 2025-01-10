import Banner from "../../../Banner/Banner";
import {Row,Col,Button} from 'react-bootstrap';
import BlogData from '../FirstBlogpage/FirstBlog.json';
import { FaSearch } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Blog from '../../../Blog/Blog2';
import { useNavigate } from "react-router";
export default function SecondBlog({title,image}){
    const navigate=useNavigate()
    return(
        <>
       <Banner title="Mobile Website v/s responsive website"
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
                   Choosing Between Mobile Website and Responsive Design: A CompleteGuide</p><p className="para  text-left">
                   In today's digital age, where smartphones have become an inseparable part of our lives, having a mobile-friendly website is not just an option but a necessity for businesses. However, the dilemma often lies in deciding between a dedicated mobile website and a responsive design that works seamlessly across various devices. Let's dive into the key factors that can help you in making an informed decision.
                   

                   </p>
                   <div className="d-flex flex-column align-items-center py-3 justify-content-center">
                   <img src={item.url4}
                       className="img-fluid"
                       alt=""
                   />
               </div>

               </div>
             
           </div>
       <div>
               <div>
                   <h2 className="hed2 text-left"> User Experience Goals
                   </h2>
                   <p className="para text-left">
                   Te cornerstone of any successful website strategy is delivering an exceptional user experience (UX). Depending on your business objectives, you may require tailored experiences for desktop and mobile users. While a responsive design ensures consistency across platforms, a mobile-specific website allows customized content and navigation, optimizing the user journey. Thus, if personalized UX is paramount, a mobile website might be the ideal choice.h

                   </p>
               </div>
             
               <div className="d-flex flex-column align-items-center py-3 justify-content-center">
                   <img src={item.url5}
                       className="img-fluid"
                       alt=""
                   />
               </div>
          </div>

           <div className="px-0 ">
               <div
                   className="py-3">
                   <h2 className="hed2 text-left">
                   Cost Considerations
                   </h2>
                   <p className="para  text-left ">
                   Finances play a pivotal role in decision-making for businesses of all sizes. Establishing and maintaining a separate mobile website entails additional expenses compared to opting for a responsive design. For smaller enterprises with limited budgets, the cost-effectiveness of a responsive approach makes it a compelling option, eliminating the need for a separate investment in mobile development.

                   </p>
                 <h2 className="hed2"> Technology Compatibility(</h2>
                 <p className="para text-left">The technology world is continually evolving, posing compatibility concerns for websites. Responsive designs, although cutting-edge, may encounter performance issues on older devices and browsers, compromising user experience. Conversely, mobile-specific websites, tailored for specific devices, ensure optimal performance and compatibility. Thus, the choice between the two hinges on the target audience's device preferences and technological advancements.
                 </p>


               </div>
               <div className="d-md-flex flex-column align-items-center justify-content-center ">
                   <img src={item.url7} className='img-fluid'/>
               </div>
           </div>
           <div className="px-0">
               <div
                   className="py-3"
                 
               >
                   <h2 className="hed2 text-left">
                   Maintenance Efforts
                   </h2>
                   <p className="para text-left">
                   Simplicity in website maintenance is a boon for businesses aiming to streamline operations. With a responsive design, the upkeep involves managing a single URL, simplifying marketing efforts, and user engagement. In contrast, maintaining separate mobile and desktop websites demands additional resources and increases the risk of user experience inconsistencies. Hence, for hassle-free maintenance, responsive design proves to be the pragmatic choice.


                   </p>
               
                 <p className="para text-left">In conclusion, the decision between a mobile website and a responsive design depends on various factors, including user experience objectives, financial considerations, SEO priorities, technological landscape, and maintenance convenience. By carefully assessing these aspects in alignment with organizational goals and audience preferences, businesses can make a well-informed choice that drives success in the digital realm.</p>
                
             
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
                <div className="d-flex align-items-center gap-2"><MdKeyboardDoubleArrowRight  color="#3b7fbf" size={25}/><li onClick={()=>navigate('/firstBlog')}>10 Tips to Improve Your Website SEO</li></div>
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
                <div className="d-flex align-items-center gap-2"><MdKeyboardDoubleArrowRight  color="#3b7fbf" size={25}/><li onClick={()=>navigate('/firstBlog')}>10 Tips to Improve Your Website SEO</li></div>
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
                <div className="d-flex align-items-center gap-2"><MdKeyboardDoubleArrowRight  color="#3b7fbf" size={25}/><li onClick={()=>navigate('/firstBlog')}>10 Tips to Improve Your Website SEO</li></div>
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