import { FC } from "react";
import { Col } from "react-bootstrap";


const MainContent: FC<{children:any}> = ({ children }) => {
    
    return (
    <Col lg={8} style={{backgroundColor:'#FFF'}}>
        {children}
    </Col>  
    );
}

export default MainContent;