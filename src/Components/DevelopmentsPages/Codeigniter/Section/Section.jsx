import {Row,Col} from 'react-bootstrap';
import { GiCheckMark } from 'react-icons/gi';
import '../../Development.css'
import Blog from '../../../Blog/Blog2';
import { useNavigate } from 'react-router';
import Projects2 from '../../../AboutUspages/Projects/Projects2';
// Importing images
import image1 from '../../../../../public/Image/codeigniter-firstSection1 (6).png';
import image2 from '../../../../../public/Image/codeigniter-firstSection1 (5).png';
import image3 from '../../../../../public/Image/codeigniter-firstSection1 (4).png';
import image4 from '../../../../../public/Image/codeigniter-firstSection1 (3).png';
import image5 from '../../../../../public/Image/codeigniter-firstSection1 (2).png';
import image6 from '../../../../../public/Image/codeigniter-firstSection1 (1).png';
import image7 from '../../../../../public/Image/codeigniter-second-sec (6).png';
import image8 from '../../../../../public/Image/codeigniter-second-sec (5).png';
import image9 from '../../../../../public/Image/codeigniter-second-sec (4).png';
import image10 from '../../../../../public/Image/codeigniter-second-sec (1).png';
import image11 from '../../../../../public/Image/codeigniter-second-sec (2).png';
import image12 from '../../../../../public/Image/codeigniter-second-sec (3).png';
import image13 from '../../../../../public/Image/cod-3 (1).png';
import image14 from '../../../../../public/Image/cod-3 (6).png';
import image15 from '../../../../../public/Image/cod-3 (5).png';
import image16 from '../../../../../public/Image/cod-3 (2).png';
import image17 from '../../../../../public/Image/cod-3 (3).png';
import image18 from '../../../../../public/Image/cod-3 (4).png';
import image19 from '../../../../../public/Image/cod-4 (8).png';
import image20 from '../../../../../public/Image/cod-4 (7).png';
import image21 from '../../../../../public/Image/cod-4 (6).png';
import image22 from '../../../../../public/Image/cod-4 (5).png';
import image23 from '../../../../../public/Image/cod-4 (4).png';
import image24 from '../../../../../public/Image/cod-4 (3).png';
import image25 from '../../../../../public/Image/cod-4 (2).png';
import image26 from '../../../../../public/Image/cod-4 (1).png';
import image27 from '../../../../../public/Image/Codi.png';
import image28 from '../../../../../public/Image/php-else (2).png';
import image29 from '../../../../../public/Image/php-else (1).png';
import image30 from '../../../../../public/Image/php-else(7).png';
import image31 from '../../../../../public/Image/lar-8 (11).jpg';
import image32 from '../../../../../public/Image/Html-5 (1).png';
import html from '../../../../../public/Image/html-css.png';
import image33 from '../../../../../public/Image/lar-8 (8).png';
import image34 from '../../../../../public/Image/shopify7.png';
import image35 from '../../../../../public/Image/php-else (3).png';
import image36 from '../../../../../public/Image/php-else (4).png';
import image37 from '../../../../../public/Image/php-else(6).png';
import CommonSection from '../../../ServicesPages/looking/Looking';
import wordpress from '../../../../../public/Image/wp (1).png'

export default function Section(title){
    const otherServices = [
      
        { title: 'PHP Website', image: image27, link: '/services/development/php-development', show: true },
        { title: 'Prestashop', image: image28, link: '/services/remainpage', show: true },
        { title: 'HTML & CSS Website', image: html, link: '/services/development/html-css-website', show: true },
        { title: 'React JS Website', image: image30, link: '/services/development/reactjs-development', show: true },
        { title: 'Angular JS Website', image: image31, link: '/services/remainpage', show: true },
        { title: 'Laravel Development', image: image33, link: '/services/development/laravel-devlopment', show: true }, 
        { title: 'Ruby On Rails', image: image32, link: '/services/remainpage', show: true }, 
        // { title: 'CodeIgniter Website', image: image29, link: '/services/development/codeigniter-website-development', show: true },
        { title: 'Shopify', image: image34, link: '/services/ecommerce-solutions/shopify-development', show: true },
        { title: 'OpenKart', image: image35, link: '/services/ecommerce-solutions/opencart-development', show: true },
        { title: 'Woocommerce', image:image36, link: '/services/ecommerce-solutions/wocommerce-development', show: true },
        { title: 'Magneto', image:image37, link: '/services/ecommerce-solutions/Magneto-development', show: true },
        { title: 'Wordpress Development', image: wordpress, link: '/services/remainpage', show: true },
      ];
    const navigate=useNavigate()
    return(
        <>
        <Row className='justify-center items-center py-5'>
        <Col md={10} >
        <h3 className='hed2  text-center'>Why Choose CodeIgniter for Your Website?</h3>
        <p className='para text-md-center text-sm-justify'>We specialize in crafting cutting-edge websites using the robust CodeIgniter framework. With our expertise and dedication, we bring your digital vision to life, delivering tailor-made solutions that empower your online presence. Explore our CodeIgniter website development services to unlock unparalleled possibilities for your business.</p>
        <div className='flex flex-col justify-content-center align-items-center'>
        <div className='flex items-center justify-center gap-5'>
        <div className='code-firstdiv-section'> 
        <img src= {image1} alt=""  className='img-fluid w-20' />
        <h3 className='hed3 text-center pt-4 text-[#3b7fbf]'>Streamlined  Development   
        Process</h3>
        </div>
        <div className='code-firstdiv-section'>
        <img src= {image2} alt="" className='img-fluid w-20' />
        <h3 className='hed3 text-center pt-2 text-[#3b7fbf]'>High Performance</h3>
        </div>
        <div className='code-firstdiv-section d-md-flex flex-col d-none '> 
        <img src= {image3} alt=""  className='img-fluid w-20'/>
        <h3 className='hed3 text-center pt-4 text-[#3b7fbf]'>Extensive  Library Support</h3>
        </div>
   

        </div>
        <div className='flex items-center justify-center gap-[50px] pt-5'>
        <div className='code-firstdiv-section'>
        <img src= {image4} alt="" className='img-fluid w-20' />
        <h3 className='hed3 text-center pt-4 text-[#3b7fbf]'>Enhanced  Security 
        Features</h3>
        </div>
        <div className='code-firstdiv-section'>
        <img src={image5} alt="" className='img-fluid w-20' />
        <h3 className='hed3 pt-2 text-center text-[#3b7fbf]'>Scalability</h3>
        </div>
        <div className='code-firstdiv-section d-md-flex flex-col d-none '>
        <img src= {image6} alt=""  className='img-fluid w-20'/>
        <h3 className='hed3 pt-2 text-center text-[#3b7fbf]'>MVC Architecture</h3>
        </div>
   

        </div>
        </div>
        

        </Col>
        </Row>
        <Row className='bg-[#5aa1e333] justify-center items-center'> 
        <Col md={10} xs={10} lg={10}>
        <div className='flex flex-col justify-content-center align-items-center py-5'>
        <h2 className='text-center hed2 pb-3'>What we Offer</h2>
        <div className='flex items-center justify-center gap-5'>
        <div className='code-firstdiv-section bg-white d-md-flex flex-col d-none '> 
        <img src= {image7} alt=""  className='img-fluid w-20'/>
        <h3 className='hed3 text-center pt-2 text-[#3b7fbf] '>Custom CodeIgniter 
        Website Development</h3>
        </div>
        <div className='code-firstdiv-section  bg-white'>
        <img src= {image8} alt="" className='img-fluid w-20' />
        <h3 className='hed3 text-center pt-2 text-[#3b7fbf]'>CodeIgniter  Web 
        App Development</h3>
        </div>
        <div className='code-firstdiv-section  bg-white' > 
        <img src= {image9} alt=""  className='img-fluid w-20'/>
        <h3 className='hed3 text-center pt-2 text-[#3b7fbf] '>CodeIgniter Migration 
        and Upgradation</h3>
        </div>
   

        </div>
        <div className='flex items-center justify-center gap-[50px] pt-5'>
        <div className='code-firstdiv-section  bg-white d-md-flex flex-col d-none '>
        <img src= {image10} alt="" className='img-fluid w-20' />
        <h3 className='hed3 text-center pt-2 text-[#3b7fbf]'>CodeIgniter Integration 
        Services</h3>
        </div>
        <div className='code-firstdiv-section  bg-white'>
        <img src= {image11} alt="" className='img-fluid w-20' />
        <h3 className='hed3 pt-4 text-center text-[#3b7fbf] '>CodeIgniter Maintenance 
        and Support</h3>
        </div>
        <div className='code-firstdiv-section  bg-white'>
        <img src= {image12} alt=""  className='img-fluid w-20'/>
        <h3 className='hed3 pt-4 text-center text-[#3b7fbf]'>Technology Advancements 
        in CodeIgniter</h3>
        </div>
   

        </div>
        </div>
        <div className='flex justify-center items-center text-center para pb-5'>
        Stay ahead of the curve with CodeIgniter's latest advancements, ensuring your website is equipped with the most innovative features and 
functionalities. Our team at Razobyte continuously updates their skills to leverage the latest developments in CodeIgniter, offering you unmatched 
solutions that align with industry standards and trends.
        </div>
        </Col>
        </Row>
        <Row className='d-flex justify-content-center align-items-center py-5'>
        <Col md={10}>
        <h3 className='hed2 text-center text-[#3b7fbf]'>CodeIgniter Development Services – The Benefits</h3>
       
      <div className='d-flex flex-col '>
      <div className='d-flex  gap-5'>
      <div className='d-flex gap-2 w-50'>
      <GiCheckMark color='#3b7fbf' size={25}/>
      <p className='para  font-[550]  fs-md-6  fs-6'>
      Lightweight and Fast</p>
      </div> 
  
      
      </div>
      <div className='d-flex gap-5'>
      <div className='d-flex gap-2 w-50 '>
      <GiCheckMark color='#3b7fbf' size={25}/>
      <p className='para  font-[550]  fs-md-6  fs-6'>
      Versatile and Flexible</p>
      </div>

   
      

      </div>
      <div className='d-flex  d-none  gap-5'>
      <div className='d-flex w-50'>
      <div className='d-flex gap-2'>
      <GiCheckMark color='#3b7fbf' size={25}/>
      <p className='para  font-[550]  fs-md-6  fs-6'>
      Easy to Learn and Implement</p>
      </div>
      </div>
    
      

      </div>
      <div className='d-flex gap-5'>
      <div className='d-flex w-50'>
      <div className='d-flex gap-2'>
      <GiCheckMark color='#3b7fbf' size={25}/>
      <p className='para  font-[550]  fs-md-6  fs-6'>
      Extensive Documentation</p>
      </div>
      </div>
   

      </div> 
      <div className='d-flex gap-5'>
      <div className='d-flex w-50'>
      <div className='d-flex gap-2'>
      <GiCheckMark color='#3b7fbf' size={25}/>
      <p className='para  font-[550]  fs-md-6  fs-6'>
      Active Community Support</p>
      </div>
      </div>
      
      

      </div> 
      <div className='d-md-flex  d-none gap-5'>
      <div className='d-flex w-50'>
      <div className='d-flex gap-2'>
      <GiCheckMark color='#3b7fbf' size={25}/>
      <p className='para  font-[550]  fs-md-6  fs-6'>
      Seamless Integration with Third-party Libraries</p>
      </div>
      </div>
     
      

      </div>
      </div>

        </Col>
        </Row>
        <Row className='d-flex justify-content-center align-items-center py-5'>
        <Col md={10}>
            <h3 className='hed2 text-center'>Latest Versions and Features</h3>
          
            <div className='d-flex flex-column flex-sm-row justify-content-center align-items-center gap-5'>
                <div className='d-flex flex-column items-center CodeIgniter-section hover:text-[#ffff]'>
                    <img src= {image13} alt="" className='img-fluid' />
                    <h3 className="text-center font-semibold text-sm pt-4 pt-md-0 md:text-lg">Embracing CodeIgniter 4</h3>

                   
                </div>
                <div className='d-flex flex-column items-center CodeIgniter-section hover:text-[#fff]'>
                    <img src= {image14} alt="" className='img-fluid ' />
                    <h3 className="text-center font-semibold text-sm pt-4 pt-md-0 md:text-lg">Enhanced Routing System</h3>
                
                </div>
                <div className='d-flex flex-column items-center CodeIgniter-section  hover:text-[#ffff]'>
                    <img src= {image15} alt="" className='img-fluid' />
                    <h3 className="text-center font-semibold text-sm pt-4 pt-md-0 md:text-lg">Improved Security Measure</h3>
                 
                </div>
            </div>
            <div className='d-md-flex d-none flex-column flex-sm-row justify-content-center align-items-center gap-5'>
            <div className='d-flex flex-column items-center CodeIgniter-section hover:text-[#ffff]'>
                <img src= {image16} alt="" className='img-fluid' />
                <h3 className='text-center font-semibold text-sm pt-4 pt-md-0 md:text-lg'>Modernized Templating 
                System</h3>
               
            </div>
            <div className='d-flex flex-column items-center CodeIgniter-section hover:text-[#fff]'>
                <img src= {image17} alt="" className='img-fluid ' />
                <h3 className="text-center font-semibold text-sm pt-4 pt-md-0 md:text-lg">Simplified Configuration</h3>
            
            </div>
            <div className='d-flex flex-column items-center CodeIgniter-section  hover:text-[#ffff]'>
                <img src= {image18} alt="" className='img-fluid' />
                <h3 className="text-center font-semibold text-sm pt-4 pt-md-0 md:text-lg">Powerful Query Builder</h3>
             
            </div>
        </div>
        </Col>
    </Row>
        <Row className='d-md-flex justify-content-center  align-items-center py-4 mb-5  bg-[#5aa1e333] '
      >
        <Col md={10} className='d-md-flex  flex-column justify-content-center  align-items-center' >
        <div> 
        <h3 className='hed2 text-[#3b7fbf] text-center'>Expert CodeIgniter Developers at Razobyte</h3>
        <p className='para text-md-center text-sm-justify'>Entrust your CodeIgniter projects to our team of seasoned developers who possess extensive experience and expertise in harnessing the full potential 
        of the CodeIgniter framework. With a keen eye for detail and a passion for innovation, our developers ensure that your website not only meets but 
        exceeds your expectations, delivering unparalleled results that drive your business forward.</p>
        </div>
        <div>
        <div className='d-md-flex justify-content-center align-items-center gap-4 my-3'>
        <div className='w-full bg-white rounded p-4 shadow-md'>
        <h3 className='hed3 text-center'>API Based Web Application</h3>
        <p className='para  text-md-center text-sm-justify'>Being a developer friendly framework, Laravel makes ot extremely 
        easy for developers to document releases. The Laravel API has 
        extremely consistent coding styles with briefly explained methods 
        and classes.Being a developer friendly framework, Laravel makes 
        ot extremely easy for developers to document releases. The 
        Laravel API has extremely consistent coding styles with briefly 
        explained methods and classes.</p>
        </div>
        <div className='w-full bg-white rounded p-4 my-3 shadow-md '>
        <h3 className='hed3 text-center'>Third-party Integration</h3>
        <p className='para  text-md-center text-sm-justify'>Being a developer friendly framework, Laravel makes ot extremely 
        easy for developers to document releases. The Laravel API has 
        extremely consistent coding styles with briefly explained methods 
        and classes.Being a developer friendly framework, Laravel makes 
        ot extremely easy for developers to document releases. The 
        Laravel API has extremely consistent coding styles with briefly 
        explained methods and classes.</p>
        </div>

        </div>
        <div className='d-md-flex d-none justify-content-center align-items-center gap-4 my-3'>
        <div className='w-full bg-white rounded p-4 shadow-md'> 
        <h3 className='hed3 text-center'>App Upgrade Services</h3>
        <p className='para text-center fs-6'>Being a developer friendly framework, Laravel makes ot extremely 
        easy for developers to document releases. The Laravel API has 
        extremely consistent coding styles with briefly explained methods 
        and classes.Being a developer friendly framework, Laravel makes 
        ot extremely easy for developers to document releases. The 
        Laravel API has extremely consistent coding styles with briefly 
        explained methods and classes.</p>
        </div>
        <div className='w-full bg-white rounded p-4 shadow-md'>
        <h3 className='hed3 text-center'>App Migration Services</h3>
        <p className='para text-center fs-6'>Being a developer friendly framework, Laravel makes ot extremely 
        easy for developers to document releases. The Laravel API has 
        extremely consistent coding styles with briefly explained methods 
        and classes.Being a developer friendly framework, Laravel makes 
        ot extremely easy for developers to document releases. The 
        Laravel API has extremely consistent coding styles with briefly 
        explained methods and classes.</p>
        </div>

        </div>
        </div>

        </Col>

        </Row>
        <Projects2 titleProjects="Top Web Design Projects"/>
        <Row className='bgphp d-flex justify-content-center align-items-center py-5'>
        <Col md={10} className=' d-flex flex-col align-items-center justify-center'>
        <div>
        <h3 className='hed2 text-white text-center'>Following The Best Practices</h3>
        </div>
   
        <div className='d-flex justify-content-center align-items-center py-3 gap-md-3 gap-2'>
        <div className='Code-section-3 d-md-flex d-none'>
        <img src= {image19} alt=""  className='img-fluid  w-20'/>
        <h3 className='para text-center font-[600]' style={{color:"#3b7fbf"}}>Default Application 
        Structure</h3>
        </div>
        <div className='Code-section-3 '>
        <img src= {image20} alt=""  className='img-fluid  w-20' />
        <h3 className='para text-center font-[600]' style={{color:"#3b7fbf"}}>ORM Library/Third 
        Party Data Access</h3>
        </div>
        <div className='Code-section-3'>
        <img src={image21} alt=""  className='img-fluid w-20'  />
        <h3 className='para text-center font-[600]' style={{color:"#3b7fbf"}}>JavaScript or CSS 
        Libraries</h3>
        </div>
        <div className='Code-section-3'>
        <img src= {image22} alt=""  className='img-fluid w-20'/>
        <h3 className='para text-center font-[600] pt-3' style={{color:"#3b7fbf"}}>Custom Web Developm
        ent and Caching</h3>
        </div>
        </div>
        <div className='d-flex justify-content-center align-items-center py-3 gap-md-3 gap-2'>
        <div className='Code-section-3 d-md-flex d-none'>
        <img src=  {image23} alt=""  className='img-fluid w-20' />
        <h3 className='para text-center font-[600] pt-3' style={{color:"#3b7fbf"}}>Custom Template 
        Engine</h3>
        </div>
        <div className='Code-section-3'> 
        <img src= {image24} alt=""  className='img-fluid  w-20 ' />
        <h3 className='para text-center font-[600]' style={{color:"#3b7fbf"}}>Validate Your Inputs</h3>
        </div>
        <div className='Code-section-3'>
        <img src= {image25} alt=""  className='img-fluid  w-20 ' />
        <h3 className='para text-center font-[600]' style={{color:"#3b7fbf"}}>SEO-friendly URLs</h3>
        
        </div>
        <div className='Code-section-3'>
        <img src=  {image26} alt=""  className='img-fluid  w-20 ' />
        <h3 className='para text-center font-[600] pt-3' style={{color:"#3b7fbf"}}>Store Configuration 
Information</h3>
        
        </div>
        </div>
   

        </Col>
  
        </Row>
        <CommonSection title="Looking for Something Else" services={otherServices} bgName="bg-[#EAF2FF]" />

        <Blog title="Blogs"/>
        </>
    )
}