
import {Row,Col,Button}  from 'react-bootstrap';

import './Section.css';
import cli1 from '../../../../../../public/Image/cli-2 (1).png';
import cli2 from '../../../../../../public/Image/cli-2 (12).png';
import cli3 from '../../../../../../public/Image/cli-2 (11).png';
import cli4 from '../../../../../../public/Image/cli-2 (10).png';
import cli5 from '../../../../../../public/Image/cli-2 (9).png';
import cli6 from '../../../../../../public/Image/cli-2 (8).png';
import cli7 from '../../../../../../public/Image/cli-2 (7).png';
import cli8 from '../../../../../../public/Image/cli-2 (6).png';
import cli9 from '../../../../../../public/Image/cli-2 (5).png';
import cli10 from '../../../../../../public/Image/cli-2 (4).png';
import cli11 from '../../../../../../public/Image/cli-2 (3).png';
import cli12 from '../../../../../../public/Image/cli-2 (2).png';

export default function Section(){
    return(
        <>
       
       <Row className="flex flex-col items-center justify-center py-8 bg-gray-50/10">
      {/* Heading */}
      <h2 className="hed2  text-center mb-6">
        You Are in Good Company
      </h2>
  
      {/* Clients Rows */}
      <div className="flex flex-col items-center justify-center gap-1">
        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-2">
          <img src={cli1} alt="img" className="w-24 md:w-52 object-contain" />
          <img src={cli2} alt="img" className="w-24 md:w-52 object-contain" />
          <img src={cli3} alt="img" className="w-24 md:w-52 object-contain" />
          <img src={cli4} alt="img" className="w-24 md:w-52 object-contain" />
         
        
         
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center gap-2">
        <img src={cli7} alt="img" className="w-24 md:w-52 object-contain" />
          <img src={cli9} alt="img" className="w-24 md:w-52 object-contain" />
          <img src={cli10} alt="img" className="w-24 md:w-52 object-contain" />
          <img src={cli11} alt="img" className="w-24 md:w-52 object-contain" />
          
        </div>

        {/* Row 3 */}
        <div className="hidden md:flex justify-center gap-6">
        <img src={cli5} alt="img" className="w-24 md:w-52 object-contain" />
          <img src={cli12} alt="img" className="w-24 md:w-52 object-contain" />
           <img src={cli6} alt="img" className="w-24 md:w-52 object-contain" />  
         <img src={cli8} alt="img" className="w-24 md:w-52 object-contain" />
       
        </div>
      </div>
    </Row>
        </>
    )
}