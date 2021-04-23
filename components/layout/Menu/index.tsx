import { FC } from "react";
import { Col } from "react-bootstrap";
import DatosUsuario from "./DatosUsuario";
import Habilidades from "./Habilidades";
import InfContacnto from "./InfContacnto";
import TitleMenu from "./TitleMenu";


const Menu: FC<{}> = () => {
    
    return (<Col lg={4} style={{backgroundColor:'#4F67A5',overflow:'auto',}} >
        <TitleMenu />
        <DatosUsuario />
        <InfContacnto />
        <Habilidades />
    </Col>);
}

export default Menu;