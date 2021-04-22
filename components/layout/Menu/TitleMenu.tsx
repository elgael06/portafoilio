import { Nav } from "react-bootstrap";

const TitleMenu = () => {
    
    return (<Nav>
        <Nav.Item style={{
            backgroundColor: '#05428B',
            width: '100%',
            padding: 5,
            position: 'initial',
            left: 0,
            right: 0,
            textAlign: 'center',
        }}>
            <br/>
            <h4 style={{ color:'#FFF'}}>DESARROLLADOR WEB</h4>
        </Nav.Item>
    </Nav>);
}

export default TitleMenu;