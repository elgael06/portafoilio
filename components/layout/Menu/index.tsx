import { FC } from "react";
import { Col, Row } from "react-bootstrap";
import DatosUsuario from "./DatosUsuario";
import TitleMenu from "./TitleMenu";


const Menu: FC<{}> = () => {
    
    return (<Col lg={4} style={{backgroundColor:'#4F67A5'}}>
        <TitleMenu />
        <DatosUsuario />
    </Col>);
}

export default Menu;