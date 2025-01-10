import React, { useState } from 'react'
import './Page2.css'
import cost from '../../../../../public/Image/cost-icon.jpg'
import growth from '../../../../../public/Image/growth-icon.jpg'
import how from '../../../../../public/Image/how-icon.jpg'
import what from '../../../../../public/Image/what-icon.jpg'
import service from '../../../../../public/Image/services-icon.jpg'
import { Row, Col, Button } from 'react-bootstrap'

const Page2 = () => {
    const [visibleDiv, setVisibleDiv] = useState('');
    const [clickedButton, setClickedButton] = useState('');
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        website: '',
      });
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validation to check if all fields are filled
        if (!formData.name || !formData.email || !formData.mobile || !formData.website) {
          alert("Please fill in all fields before submitting.");
          return; // Stop the submission if any field is empty
        }
      
        // Handle form submission logic, like sending formData to an API
        console.log(formData);
        alert('Form Submitted Successfully');
        
        // Reset form fields after submission
        setFormData({
          name: '',
          email: '',
          mobile: '',
          website: '',
        });
      };


    const handleClick = (divId, buttonId) => {
      setVisibleDiv(divId);
      setClickedButton(buttonId);
    };

    const faqData = [
        {
          id: 'button1',
          title: 'What are website maintenance services?',
          shortTitle: 'What',
          image: what,
          content: `Website maintenance is the process of making sure that your site stays up-to-date and running smoothly. It can include making minor changes or adding content, making it fast-loading as well as removing spam comments and other malicious code.
      
      A good maintenance plan covers everything from basic site updates to fixing big problems and makes sure that you never have to worry about being hacked or being unable to pay the cost of web hosts. It can also include other helpful features like domain name registration, email setup and forwarding, social media integration, and more.`
        },
        {
          id: 'button2',
          title: 'How does website maintenance work?',
          shortTitle: 'How',
          image: how,
          content: `Website maintenance is the process of keeping your website up-to-date and running smoothly for your visitors. The word "maintenance" is often confused with "updates," but there's a big difference between the two. Updates are what you do to make changes and add new features, while maintenance is what you do to keep things running smoothly.
      
      At any given time, there are a lot of moving parts that go into making sure your website is working properly web hosts, infrastructure, third-party integrations, security systems, and more. Website maintenance can include everything from checking the status of these different pieces on an ongoing basis to fixing problems as they arise to updating code or even replacing hardware when it becomes too outdated or worn down to function properly.`
        },
        {
          id: 'button3',
          title: 'What are the benefits of website maintenance?',
          shortTitle: 'Benefits',
          image: growth,
          content: `For a website owner, website maintenance has both short and long-term benefits. First, it ensures that the website is always online. This is particularly important for businesses as it is impossible to earn revenue from an offline website. Second, with regular maintenance, the website owner can avoid making major repairs on a site that does not function at all. This is extremely important for business owners who need their websites to attract customers and bring in revenue. Regularly scheduled maintenance also enables the site owner to foresee any problems that could arise and to act before they become serious issues.
      
      In addition to the practical reasons for maintaining a website, there are other reasons such as keeping up with technology or trends in web design. A business might want to redesign its website but only if it feels that redesigning the site will improve its effectiveness in attracting customers. Regular maintenance helps the site owner determine whether or not the time has come to hire a web designer or make changes to the existing site.`
        },
        {
          id: 'button4',
          title: 'What types of Maintenance Services are available?',
          shortTitle: 'Types',
          image: service,
          content: `Maintenance plans can differ by the amount of care they offer for your site. They can range from simple updates like security patches to complete overhauls of your site such as a redesign with new content. The plan can also range in terms of how frequently it is implemented - some plans will provide an update every few months while other services offer daily updates.`
        },
        {
          id: 'button5',
          title: 'How much does website maintenance cost?',
          shortTitle: 'Cost',
          image: cost,
          content: `That's a question that goes through the minds of many small business owners, and it's one we hear often. The answer to this question is that "it depends." What it depends on is what services you're paying for, how often they're needed, and who's going to be performing them. On average, website maintenance will cost in between $700-$1200 per year.`
        }
    ];

    return (
        <>
            <Row className="justify-content-center align-items-center pt-sm-5 pt-2">
                <Col md={10}>
                    <h2 className="text-center mb-4 hed2">We Are The Company You Can Trust On</h2>
                    <p className="text-muted para">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque tempore obcaecati, voluptatem eius veritatis enim cumque. Iusto asperiores ad similique natus ratione ab porro itaque perferendis? Illum suscipit at magnam temporibus praesentium, ex autem harum quas? Nulla at esse beatae excepturi, alias illo optio amet sunt fuga eaque, quam quas. Delectus quis in, facilis unde aperiam corrupti iste? Quia, dolorem vero vitae minima iste, quod optio magni a omnis earum laborum corporis nulla quis non quisquam reiciendis eaque sapiente suscipit nam ab ea ipsa, veniam porro quidem! Nisi impedit eos cum est illum? Expedita, optio quia. Veritatis possimus ex tempore mollitia nisi voluptas magnam corrupti, earum enim expedita adipisci laudantium excepturi quasi ut labore ea temporibus ipsam consequuntur dignissimos debitis praesentium illum? Quod maiores aspernatur consequatur natus soluta accusantium beatae.
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-center  align-items-center pb-sm-5 pb-2">
                <Col md={10}>
                    <h2 className="text-center mb-4 hed2">Website Maintenance Services</h2>
                    <p className="text-muted para">
                        A website maintenance service will help you keep your site up to date: keeping it functioning quickly and smoothly, safe from hackers and malware, and looking great. Depending on the type of business, and the size of the business, you may require a certain amount of maintenance work to be carried out on your website. This could be anything from adding new content to your website, updating your blog with new posts and pages, adding new products to your website, fixing broken links, making changes to the look and feel of your website, to uploading images or videos, and many more.
                    </p>
                    <p className='para'>
                        There are many advantages to outsourcing your website maintenance work, such as; increased productivity, reduced costs due to not having to maintain in-house staff, access to many professional web designers with different skill sets, and varying prices for their services
                    </p>
                </Col>
            </Row>
            <Row className="d-none d-md-flex justify-content-center  align-items-center " style={{backgroundColor:"#f5f5f5"}}>
                {faqData.map((item) => (
                    <Col key={item.id} xs={12} md={2} className='py-sm-4 py-0'>
                        <Button
                            className={`box2 ${clickedButton === item.id ? 'clicked' : ''}`}
                            onClick={() => handleClick(item.id, item.id)}
                        >
                            <img src={item.image} alt={item.shortTitle} height={120} width={200} />
                            <br />
                          <p className='text-md text-muted fw-medium'>  {item.title}</p>
                        </Button>
                    </Col>
                ))}
            </Row>
            
            {/* <Row className="d-md-none">
                {faqData.map((item) => (
                    <Col key={item.id} xs={2}>
                        <Button
                            className={`box2 ${clickedButton === item.id ? 'clicked' : ''}`}
                            onClick={() => handleClick(item.id, item.id)}
                        >
                            <img src={item.image} alt={item.shortTitle} height={20} width={70} />
                            <p className='text-md text-muted '>{item.shortTitle}</p>

                        </Button>
                    </Col>
                ))}
            </Row> */}
            
            {faqData.map((item) => (
                visibleDiv === item.id && (
                    <Row key={item.id} className=" justify-content-center  align-items-center" style={{backgroundColor:"#f5f5f5"}}>
                        <Col xs={12} md={10} className="mainten">
                            <h2 className="hed2">{item.title}</h2>
                            <p className=' fw-normal text-muted text-md'>{item.content}</p>
                        </Col>
                    </Row>
                )
            ))}
    <div className='row d-flex justify-content-center align-items-center py-3' style={{ backgroundColor: "#5AA1E320" }}>
      <p className='hed2 text-center m-0 p-0'>Let's Start A Web Maintenance Project Together</p>
      <p className='text-center m-0 pb-3 p-0'>Your FREE quote is just a click away!</p>
      <form className='d-flex justify-content-evenly col-md-10 mb-5' onSubmit={handleSubmit}>
        <div>
          <input
            className='fill'
            type='text'
            name='name'
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className='fill'
            type='text'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className='fill'
            type='text'
            name='mobile'
            placeholder='Mobile No.'
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className='fill'
            type='text'
            name='website'
            placeholder='Website'
            value={formData.website}
            onChange={handleChange}
          />
          
        </div>
        <div >
          <button type='submit' className='btn2 px-3 py-1'>LET'S GET STARTED</button>
        </div>
      
      </form>
    </div>
        </>
    )
}

export default Page2