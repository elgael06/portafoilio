import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Menu from "./Menu";
import MainContent from "./MmainContent/MainContent";


const Layout: FC<{children:any}> = ({ children }) => {
    
    return <main className='align-items-center black_back' style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        padding: '10px'
    }}>
        <Container style={{height: "100%",minWidth:'70%',maxWidth:400}}  >
            <Row style={{height: "100%"}}  noGutters>
                <Menu />
                <MainContent>                    
                    {children}
                </MainContent>
            </Row>
    </Container>
    </main>
}

export default Layout;