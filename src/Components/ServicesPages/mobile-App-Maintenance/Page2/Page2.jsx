import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap'
import './Page2.css'
import cli_2 from '../../../../../public/Image/cli-2 (2).png'
import cli2_3 from '../../../../../public/Image/cli-2 (3).png';
import cli2_4 from '../../../../../public/Image/cli-2 (4).png';
import cli2_5 from '../../../../../public/Image/cli-2 (5).png';
import php2 from '../../../../../public/Image/php-2.png';

import Marquee from "react-fast-marquee";

const Page2 = () => {
    const [activeService, setActiveService] = useState('monitoring');
    const [activeButton, setActiveButton] = useState('monitoring');

    const handleServiceClick = (service, buttonID) => {
        setActiveService(service);
        setActiveButton(buttonID);
    };

    return (
        <>

            <Row className='d-flex justify-content-center align-items-center'>

                <Col md={12} sm={10}>
                    <Marquee className='gap-2'>
                        <div className='d-flex align-items-center justify-content-center py-3'>
                            <img src={cli_2} alt="" className='img-fluid' />
                            <img src={cli2_3} alt="" className='img-fluid' />
                            <img src={cli2_4} alt="" className='img-fluid' />
                            <img src={cli2_5} alt="" className='img-fluid' />
                        </div>
                    </Marquee>

                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center py-2'>
                <div>
                    <p className='hed2 text-center '>Our Mobile App Maintenance & Support Services</p>
                    <p className='para text-center'>We deliver customized mobile app maintenance services that accomplish all your mobility needs.</p>
                </div>
                <div className='services col-md-12 d-flex justify-content-center py-5 gap-4'>
                    <div className='buttons-app-maintenance col-md-2'>
                        <button className={`btn-app-maintenance  para ${activeButton === 'monitoring' ? 'btn-active' : ''}`} onClick={() => handleServiceClick('monitoring', 'monitoring')}>
                            App Monitoring Services
                        </button>
                        <button className={`btn-app-maintenance ${activeButton === 'upgrade' ? 'btn-active' : ''}`} onClick={() => handleServiceClick('upgrade', 'upgrade')}>
                            App Upgrade Services
                        </button>
                        <button className={`btn-app-maintenance  ${activeButton === 'maintenance' ? 'btn-active' : ''}`} onClick={() => handleServiceClick('maintenance', 'maintenance')}>
                            Mobile App Maintenance and Enhancement Services
                        </button>
                        <button className={`btn-app-maintenance  ${activeButton === 'support' ? 'btn-active' : ''}`} onClick={() => handleServiceClick('support', 'support')}>
                            App Support, Maintenance & Optimization Services
                        </button>
                    </div>

                    <div className='section col-md-7'>
                        {activeService === 'monitoring' && (
                            <>
                                <p className=' hed3'>App Monitoring Services</p>
                                <p className='para'>Application monitoring for evaluating the end-user experience and component-level performance of the mobile application.</p>
                                <div className='bullet'>
                                    <div>
                                        <li>Server monitoring</li>
                                        <li>Analytics monitoring</li>
                                        <li>Security reviews</li>
                                        <li>Performance monitoring</li>
                                        <li>Hosting & third party payment monitoring</li>
                                    </div>
                                    <div>
                                        <li>App crash monitoring</li>
                                        <li>App feedback monitoring</li>
                                        <li>Third party integration update reviews</li>
                                        <li>App store management & monitoring</li>
                                        <li>Source code repository & versioning</li>
                                    </div>
                                </div>
                            </>
                        )}
                        {activeService === 'upgrade' && (
                            <>
                                <h2 className='hed3'>App Upgrade Services</h2>
                                <p className='para'>We provide smart ways of maintaining the user interface and upgrading it to new OS advances user functionality outperforms the application efficiency.</p>
                                <div className='bullet'>
                                    <div>
                                        <li>Mobile app performance optimization</li>
                                        <li>Correct errors</li>
                                        <li>Upgrade to support upcoming OS and devices</li>
                                        <li>Operational level support</li>
                                        <li>Support new library versions</li>
                                    </div>
                                    <div>
                                        <li>Refactoring deprecated code ( If required )</li>
                                        <li>Improve the app interfaces and interactions</li>
                                        <li>Perfecting existing acceptable functions</li>
                                        <li>Major upgrades and additions</li>
                                        <li>Data model migrations between update</li>
                                    </div>
                                </div>
                            </>
                        )}
                        {activeService === 'maintenance' && (
                            <>
                                <h2 className='hed3'>Mobile App Maintenance and Enhancement Services</h2>
                                <p className='para'>Integrated maintenance & enhancement support services to streamline, manage & maximize all systems and applications within your organization.</p>
                                <div className='bullet'>
                                    <div>
                                        <li>Feature extension</li>
                                        <li>Release plan and management</li>
                                        <li>Minor, incremental and major enhancements</li>
                                        <li>Security enhancement</li>
                                        <li>App porting</li>
                                    </div>
                                    <div>
                                        <li>Migration script and backend server modification</li>
                                        <li>Performance enhancement</li>
                                        <li>Usability enhancement</li>
                                        <li>Continuous testing</li>
                                    </div>
                                </div>
                            </>
                        )}
                        {activeService === 'support' && (
                            <>
                                <h2 className='hed3'>App Support, Maintenance & Optimization Services</h2>
                                <p className='para'>From productivity enhancement, feature enrichment, to regular functionality updates, our mobile app maintenance & support services help you make your app convenient to use.</p>
                                <div className='bullet'>
                                    <div>
                                        <li>Responding to customer queries</li>
                                        <li>Providing enterprise training programs</li>
                                    </div>
                                    <div>
                                        <li>Deploying the apps to app stores/enterprise stores</li>
                                        <li>Integrating to complex corporate systems</li>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </Row>
        </>
    );
};

export default Page2;
