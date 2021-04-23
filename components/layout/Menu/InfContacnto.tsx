import { Col, Row } from "react-bootstrap";


const InfContacnto = () => {
    
    return (<div style={{color:'#FFF',padding:15,marginTop:20}}>        
        <Row noGutters>
            <Col xs >
                <h5>INFORMACION DE CONTACTO:</h5>
            </Col>
        </Row>
        <Row>
            <Col xs={4}><b>CELULAR:</b> </Col>
            <Col xs={8}>+52 (6674)509-593 </Col>
        </Row>
        <Row>
            <Col xs={4}><b>Email:</b> </Col>
            <Col xs={8}>elgael06@gmail.com </Col>
        </Row>
    </div>);
}

export default InfContacnto;