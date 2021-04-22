import { Col, Image, Row } from "react-bootstrap";


const DatosUsuario = () => {
    
    return (<Row style={{color:'#FFF',padding:5}} >
        <Col xs={4}>
            <Image rounded height='100' width='100' src='https://scontent.fcul1-1.fna.fbcdn.net/v/t1.6435-1/s200x200/133193665_3954452661266775_2966281835083362624_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeHFrof_IezJUtXt49ZniHK2Yx0vsYW6NZpjHS-xhbo1mhGEXCPo_blcbF8243y6WWGM4eaRQJKk0ZwVf5pxxx4y&_nc_ohc=kZQswipLLTsAX_lMpiR&_nc_ht=scontent.fcul1-1.fna&tp=7&oh=2befacd29011ceca4a07daf9e1c7a2f4&oe=60A94AF7' />
        </Col>
        <Col xs={8} style={{padding:15,justifyContent:'center',display:'flex',flexDirection:'column'}}>
            <span>CRISTIAN GAEL VALENZUELA CASTRO</span>
            <small>FULL-STACK DEV.</small>
        </Col>
    </Row>);
}

export default DatosUsuario;