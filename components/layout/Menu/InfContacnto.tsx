import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";


const InfContacnto = () => {
    
    return (<div style={{color:'#FFF',padding:15,marginTop:20}}>
        <Row noGutters>
            <Col xs >
                <h5>CONTACTO:</h5>
            </Col>
        </Row>
        <Row>
            <Col xs={1}><FontAwesomeIcon icon={faWhatsapp} /></Col>
            <Col xs={8}>+52 (667)450 95 93 </Col>
        </Row>
        <Row>
            <Col xs={1}><FontAwesomeIcon icon={faEnvelope} /></Col>
            <Col xs={8}>elgael06@gmail.com </Col>
        </Row>
        <a href='https://github.com/elgael06' target='new_window' style={{ color: '#FFF' }}>
            <Row>
                <Col xs={1}><FontAwesomeIcon icon={faGithub} /></Col>
                <Col xs={8}>github</Col>
            </Row>
        </a>
        <a href='https://www.linkedin.com/in/cristian-gael-valenzuela-castro-50a755180/' target='new_window' style={{ color: '#FFF' }}>
            <Row>
                <Col xs={1}><FontAwesomeIcon icon={faLinkedin} /></Col>
                <Col xs={8}>linkedin </Col>
            </Row>
        </a>
        <a href='https://docs.google.com/document/d/e/2PACX-1vQ_xn2pd_MEPSdhh4zSlr-3EGY1RIM5Z-LDip7mPocLnpQlpzZUZuWYRCmT2tf6IQ/pub' target='new_window' style={{ color: '#FFF' }}>
            <Row>
                <Col xs={1}><FontAwesomeIcon icon={faFilePdf} /></Col>
                <Col xs={8}>curriculum </Col>
            </Row>
        </a>
    </div>);
}

export default InfContacnto;