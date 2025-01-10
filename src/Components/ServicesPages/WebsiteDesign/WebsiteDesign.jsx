import React from 'react';
import { Button } from 'react-bootstrap'; // Assuming you're using react-bootstrap for Button
import banner from '../../../../public/Image/web-1 (1).jpeg'
import visulaimpact from  '../../../../public/Image/web-1 (15).png'
import usercentric from '../../../../public/Image/web-1 (16).png'
import mobile from '../../../../public/Image/web-1 (26).png'
import acessbility from '../../../../public/Image/web-1 (17).png'
import Projects2 from '../../AboutUspages/Projects/Projects2';
import Blog from '../../Blog/Blog2';

export default function WebSiteDesign() {
  
  return (
    <>
    <div className='row p-0'>
      <img src={banner} alt="banner" className='img-fluid p-0' />

    </div>
      <div className="row justify-content-center align-items-center pt-3">
        <div
          className="col-md-10 col-xs-10 Sectxtsec"
          // style={{
          //   backgroundImage: `url(${blueBackground})`,
          //   backgroundRepeat: 'no-repeat',
          //   backgroundSize: '50%',
          //   backgroundPosition: 'right',
          // }}
        >
          <h2 className='hed2 text-center'>Stand-Out where it matters</h2>
          <p className='para'>
            Website designing is a dynamic and multi-dimensional field that combines art and science. It is a multi-step
            process starting from research and brainstorming. Ideally, website designing is a continuous process of making
            changes and updating the design based on new trends as well as working on the user’s feedback.
          </p>
        </div>
      </div>

       <div
        className="row justify-content-center align-items-center px-0 my-5"
        style={{ backgroundColor: 'rgba(90, 161, 227, 0.322)' }}
      >
        <div className="col-md-5 col-xs-10 d-flex flex-column align-items-center py-5 justify-content-center">
          <h3 className="text-center hed2">Visual Impact</h3>
          <p className="fs-6 text-muted">
            At Razobyte, we believe “First impression is last impression.” From the moment a user presses enter, their
            perception of the website as well as the brand starts to form. Every aspect of the visual triggers an emotion
            and accounts for the overall experience of the user.
          </p>
          <div>
            <Button className="btn2">Get in Touch</Button>
          </div>
        </div>
        <div className="col-md-5  col-xs-10 d-flex flex-column align-items-center py-5 justify-content-center">
          <img src={visulaimpact} className="img-fluid text-center" alt="Visual Impact" />
        </div>
      </div>
      <div className="row justify-content-center align-items-center px-0 my-sm-5 my-2">
        <div className="col-md-5  col-xs-10 d-md-flex flex-column align-items-center justify-content-center">
          <img src={usercentric} className="img-fluid" alt="User-Centric Approach" />
        </div>
        <div
          className="col-md-5 col-xs-10 d-flex flex-column align-items-center justify-content-center py-5"
          // style={{
          //   backgroundImage: `url(${blueBackground})`,
          //   backgroundRepeat: 'no-repeat',
          //   backgroundSize: 'cover',
          //   backgroundPosition: 'right',
          // }}
        >
          <h3 className="text-center hed2">User-Centric Approach</h3>
          <p className="fs-6 text-muted">
            As per Don Norman, the father of User Experience, every design should be made to cater to the user keeping
            how they behave in mind. This user-centric approach makes the design much more accessible and appealing to
            the user and as the saying goes, “A happy client is the best client.”
          </p>
          <div>
            <Button className="btn2">Get in Touch</Button>
          </div>
        </div>
      </div>

      {/* 8th section */}
      <div className=" d-flex row justify-content-center align-items-center px-0 py-sm-5 py-2">
        <div className='col-md-5 col-xs-10'
        >
          <h3 className="hed2 text-center">Mobile Responsiveness</h3>
          <p className="fs-6 text-muted text-center">
            With the increasing number of users taking mobile and tablet devices as their primary devices, the mobile
            responsiveness factor is becoming increasingly important every day. With a variety of different sizes of
            mobile devices, it is important to ensure mobile responsiveness in every device.
          </p>
          <div className='d-flex justify-center items-center'>
            <Button className="btn2">Get in Touch</Button>
          </div>
        </div>
        <div className="col-md-5 col-xs-10 d-md-flex justify-content-center align-items-center py-5">
          <img src={mobile} className="img-fluid shadow-sm rounded-2" alt="Mobile Responsiveness" />
        </div>
      </div>

      {/* 9th section */}
      <div className="row justify-content-center items-center px-0 my-sm-5 my-2">
        <div className="col-md-5  col-xs-10 d-md-flex justify-content-center align-items-center py-5">
          <img src={acessbility} className="img-fluid" alt="Accessibility" />
        </div>
        <div
          className="col-md-5 col-xs-10 d-flex flex-column align-items-center justify-content-center py-5"
          // style={{
          //   backgroundImage: `url(${blueBackground})`,
          //   backgroundRepeat: 'no-repeat',
          //   backgroundSize: 'cover',
          //   backgroundPosition: 'left',
          // }}
        >
          <h3 className="text-secondary text-center hed2">Accessibility</h3>
          <p className="fs-6 text-muted">
            With the digital era racing at full throttle, the accessibility of websites for specially-abled people is now
            possible and has become the moral and ethical responsibility of brands.
          </p>
          <p className="fs-6 text-muted">
            Making the best designs for brands while keeping every aspect in consideration, Razobyte has proven time and
            time again that being one of the best Website designing companies is not an achievement but a responsibility
            of serving the clients.
          </p>
          <div>
            <Button className="btn2">Get in Touch</Button>
          </div>
        </div>
      </div>
      <Projects2 titleProjects="Tow WebSite Design project"/>
      <Blog title="Blog"/>


    </>
  );
}
