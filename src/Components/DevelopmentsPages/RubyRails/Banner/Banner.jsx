import {Row,Col} from 'react-bootstrap'

export default function Banner(){
    return(
        <>
        <Row className='d-md-flex d-none justify-content-center align-items-center py-5'

        style={{backgroundImage:"url('Image/Rubby-banner.png')",backgroundPosition:"center"
    ,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}
        >
        <Col md>
        <div>
        <h2 className='hed1 font-bold tracking-wide' style={{ color: "#3b7fbf" }}>
  Ruby <span className='hed3 font-medium mr-2' style={{ color: "#3b7fbf" }}>on</span> Rails  <br />
  <span className='hed1 font-medium mr-2' style={{ color: "#3b7fbf" }}>Development </span>
</h2>
        </div>
        <div className='tracking-wide'> 
        <p className='para font-medium text-black'>Build elegant and functional solutions using our ROR capabilites </p>
      <p className='w-50 para'>Build scale and accelerate innovation to outdo competetion and transform your business with ruby on rails development</p>
        </div>
     
        </Col>
        </Row>
        <Row className='d-flex  d-sm-none justify-content-center align-items-center'

      
        >
        <Col md className='px-0'>
        <img src="Image/Rubby-banner.png" alt="" className='img-fluid' />
        <div className='absolute top-5 left-5'>
        <h2 className='hed1 font-bold tracking-wide' style={{ color: "#3b7fbf" }}>
        Ruby <span className='hed3 font-medium mr-2' style={{ color: "#3b7fbf" }}>on</span> Rails  <br />
        <span className='hed1 font-medium mr-2' style={{ color: "#3b7fbf" }}>Development </span>
        
      </h2>
        </div>
  
     
        </Col>
        </Row>
        <Row  className='d-flex justify-content-center align-items-center pt-5'>
        <Col md={10}>
        <div>
        <h2 className='hed2 text-center'>Breakthrough With Ruby On Rails Development</h2>
        <p className='para text-center'>Ruby on Rails, often referred to simply as Rails, is a powerful web application framework built on the Ruby programming language. Known for its simplicity, elegance, and productivity, Rails empowers developers to build robust, scalable web applications with efficiency .</p>
        </div>
        
        </Col>
        </Row>
        </>
    )
}