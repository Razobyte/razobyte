import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Table } from 'react-bootstrap';
import { TiTick } from "react-icons/ti";
import { FaCheckCircle } from "react-icons/fa";

const Page5 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const PlanBox = ({ title, price, duration, timing, features }) => (
        <Col md={3} className="mb-4">
            <div className="h-100 p-3 border rounded">
                <h3 className='hed3'>{title}</h3>
                <Button variant="primary" size="sm" className="mb-2 btn2">Get Quote</Button>
                <p className="fw-bold para">{price}</p>
                <p className='text-lg fw-medium text-muted'>{duration}</p>
                <p className='text-md fw-normal text-muted'>{timing}</p>
                {features.map((feature, index) => (
                    <p key={index} className="d-flex align-items-center para">
                        <FaCheckCircle className="me-2 "  color="#3b7fbf" size={14} />
                        {feature}
                    </p>
                ))}
            </div>
        </Col>
    );

    return (
      <>

            <Row className="justify-content-center align-items-center py-5">
                <Col md={10}>
                    <h2 className="text-center mb-4 hed2">Website Maintenance Packages</h2>
                    <Row className="d-md-flex justify-content-center">
                        <PlanBox
                            title="Bronze"
                            price="250 USD/15000 INR"
                            duration="Yearly"
                            timing="2 Hours Monthly"
                            features={[
                                "Monthly backup Offline",
                                "Monthly Scanning",
                                "Disaster Recovery",
                                "Domain & Hosting Support",
                                "SSL Certificate Monitoring",
                                "Domain Expiration Alert",
                                "Google Analytics Setup",
                                "Search Console Setup",
                                "Webmail Supports",
                                "WP Core & plugins update",
                                "New Page Creation"
                            ]}
                        />
                        <PlanBox
                            title="Silver"
                            price="350 USD/22000 INR"
                            duration="Yearly"
                            timing="5 Hours Monthly"
                            features={[
                                "Two off-site backup Monthly",
                                "Monthly Scanning",
                                "Broken link check & fix",
                                "Disaster Recovery",
                                "Domain & Hosting Support",
                                "SSL Certificate Monitoring",
                                "Domain Expiration Alert",
                                "Basic website updates",
                                "Google Analytics Setup",
                                "Search Console Setup",
                                "Webmail Supports",
                                "WP Core & plugins update",
                                "New Page Creation"
                            ]}
                        />
                        <PlanBox
                            title="Gold"
                            price="500 USD/40000 INR"
                            duration="Yearly"
                            timing="7 Hours Monthly"
                            features={[
                                "Monthly Offline Backup",
                                "Monthly Security Scanning",
                                "Broken link check & fix",
                                "Disaster Recovery",
                                "Domain & Hosting Support",
                                "SSL Certificate Monitoring",
                                "Domain Expiration Alert",
                                "Basic website updates",
                                "Google Analytics Setup",
                                "Search Console Setup",
                                "Webmail Supports",
                                "WP Core & plugins update",
                                "New Page Creation"
                            ]}
                        />
                        <PlanBox
                            title="Platinum"
                            price="700 USD/55000 INR"
                            duration="Yearly"
                            timing="15 Hours Monthly"
                            features={[
                                "Monthly Backup Offline",
                                "Website Performance Monitoring",
                                "Disaster Recovery",
                                "Domain & Hosting Support",
                                "Broken link check & fix",
                                "SSL Certificate Monitoring",
                                "Domain Expiration Alert",
                                "Basic website updates",
                                "Webmail Supports",
                                "Google Analytics Setup",
                                "Search Console Setup",
                                "WP Core & plugins update",
                                "Malware scanning",
                                "New Page Creation"
                            ]}
                        />
                    </Row>
                    <Row className="justify-content-center mt-1 mb-4">
                        <Col md={4}>
                            <Button variant="primary" onClick={openModal} className=" btn2 w-100">
                                SEE FULL COMPARISON
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Modal show={isModalOpen} onHide={closeModal} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Full Comparison</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>Main Features</th>
                                <th>WP-Essential</th>
                                <th>WP-Optimum</th>
                                <th>WP-Intense</th>
                                <th>WP-Managed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Add table rows here, similar to the original table */}
                            {/* Example row: */}
                            <tr>
                                <td>Monthly Website Edits</td>
                                <td>5</td>
                                <td>10</td>
                                <td>15</td>
                                <td>Unlimited</td>
                            </tr>
                            {/* ... Add more rows ... */}
                        </tbody>
                    </Table>
                </Modal.Body>
            </Modal>
      </>
    );
};

export default Page5;