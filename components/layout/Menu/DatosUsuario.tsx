import { Col, Image, Row } from "react-bootstrap";


const DatosUsuario = () => {
    
    return (<Row style={{color:'#FFF',padding:5,marginTop:20}} noGutters>
        <Col xs={4}>
            <Image alt='imagen perfil' fluid rounded height='100' width='90' src='https://scontent.fcul1-1.fna.fbcdn.net/v/t1.6435-9/88961774_3058214747557242_1875408065482719232_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=174925&_nc_eui2=AeFBtKYcE5JqG2q8wGAOwFGdo57hartEvjmjnuFqu0S-OToZNiyuJvc3VZfWvvhfJxMCLns4FI0rUpknSQZ88bQZ&_nc_ohc=IYU05zb4ShYAX8o9B_a&_nc_ht=scontent.fcul1-1.fna&oh=3223804d59ec996d82a1649b66da1439&oe=60A77F46' />
        </Col>
        <Col xs={8} style={{display:'flex',flexDirection:'column'}}>
            <b>CRISTIAN GAEL VALENZUELA CASTRO</b>
            <small>FULL-STACK DEV.</small>
        </Col>
    </Row>);
}

export default DatosUsuario;