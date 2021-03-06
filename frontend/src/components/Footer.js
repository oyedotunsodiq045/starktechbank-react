import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row>
					{/* <Col className='text-center py-3'>Copyright &copy; StarkTechBank</Col> */}
					{/* <Col className='text-center py-3'>StarkTechBank built for <a href="https://starktechbank.herokuapp.com/">GTech Inc</a> by Sodiq Oyedotun a.k.a <a href="https://twitter.com/major_stark_">@major_stark_</a>.</Col> */}
					<Col className='text-center py-3'>StarkTechBank built for <a href="https://www.advansio.com/">Advansio Software Interactive</a> by Sodiq Oyedotun a.k.a <a href="https://twitter.com/major_stark_">@major_stark_</a>.</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
