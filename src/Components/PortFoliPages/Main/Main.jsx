
import { Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'

export default function Main() {
  const navigate = useNavigate()
  return (
    <>


      <Row className='d-flex items-center justify-center relative' >
        <Col md className=' d-flex flex-col justify-center px-0'>
        <img src="Image/Portfolio-Main-Banner.png" alt=""  className='img-fluid '/>
          <div className='col-md-6 d-md-flex d-none flex-col items-center justify-center absolute left-8'>
            <h2 className=' text-[#3b7fbf] hed3'>we must design for the way people behave,not for how we wuld to wish them behave"
            </h2>
            <h3 className='hed3 text-[#3b7fbf] font-bold'>~Don norman (The Father Of UX)</h3> 
            <div className='d-flex  py-2'>
            <Button  className="btn2" onClick={() => navigate('/template')}>Know More</Button>
            </div>
          </div>
        </Col>
       
      </Row>
  
      <Row className='justify-content-center py-5 align-items-center'>
        <Col md={10}>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='hed2 text-center'>Perfection is a Myth, We build to better what already exists</h2>
            <p className='para'>We believe constant evolution is the path toward being the best. We at Razobyte are constantly looking for ways to get better and deliver more than
              what the clients expect. With fast-paced trends and deep-rooted principles, we work to create a symphony that soothes the eyes that behold it. We
              do not believe in strict departmentalization, as it is the combination of minds with different backgrounds, strengths, and skills, that produces a
              result far better than a room filled with like-minded people who have a single-track mind.
            </p>
            <span className='para text-justify'>
              Have a look at what we have done and envision what we can do for you, and we will deliver better.</span>
          </div>
        </Col>
      </Row>
    </>
  )
}