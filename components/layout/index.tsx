import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Menu from "./Menu";
import MainContent from "./MmainContent/MainContent";


const Layout: FC<{children:any}> = ({ children }) => {
    
    return <div className='align-items-center black_back' style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        padding: '10px'
    }}>
        <Container style={{height: "100%"}}>
            <Row style={{height: "100%"}} noGutters>
                <Menu />
                <MainContent>                    
                    {children}
                </MainContent>
            </Row>
    </Container>
    </div>
}

export default Layout;