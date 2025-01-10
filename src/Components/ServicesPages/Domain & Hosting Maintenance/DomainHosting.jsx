import Banner from "../../../../public/Image/saas-concept-collage 1.png";
import Page1 from "./Page1/Page1";
import Page3 from "./Page3/Page3";
import { Row } from "react-bootstrap";

export default function DomainHosting() {
  return (
    <>
    <Row className="d-flex justify-content-center align-items-center p-0">
    <img src={Banner} alt="banner-domain-hosting" className="object-contain px-0" />
    </Row>
      <Page1/>
  
      <Page3/>

    </>
  );
}


