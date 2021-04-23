import { faCopy, faGrinStars } from "@fortawesome/free-regular-svg-icons";
import { faCode, faHourglassStart, faStar, faStarHalf, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";

const lista_habilidades = [
    {tech: 'JavaScript', rank: {number:5,mid:false}},
    {tech: 'Typescript', rank: {number:4,mid:true}},
    {tech: 'ReactJS', rank: {number:5,mid:false}},
    {tech: 'React/Native', rank: {number:4,mid:false}},
    {tech: 'HTML/CSS', rank: {number:4,mid:true}},
    {tech: 'Python/Falsk', rank: {number:4,mid:false}},
    {tech: 'Python/Django', rank: {number:4,mid:false}},
    {tech: 'netCore/EF', rank: {number:3,mid:true}},
    {tech: 'MongoDB', rank: {number:3,mid:true}},
    {tech: 'MariaDB/Mysql', rank: { number: 3, mid: false } },    
    {tech: 'MS sqlServer', rank: {number:3,mid:true}},
    {tech: 'PostgreSQL', rank: {number:3,mid:false}},
    {tech: 'Boostrap', rank: {number:4,mid:false}},
    {tech: 'Material.io', rank: {number:4,mid:true}},
    {tech: 'Flutter', rank: {number:3,mid:true}},
];

const Habilidades = () => {
    
    return (<div style={{color:'#FFF',padding:15,marginTop:20}}>
        <Row>
            <Col xs><h5>Habilidades: </h5></Col>
        </Row>
        {lista_habilidades.map(({ tech, rank: {number, mid} }, index) => {
            
            return (<Row key={index}>
                <Col xs={7}>
                    <FontAwesomeIcon icon={faCode} />{ '\t' + tech}
                </Col>                   
                <CrearEstrellas mid={mid} number={number} />
                <hr/>
            </Row>);
        })}
    </div>);
}

const CrearEstrellas = ({
    number = 0,
    mid=false,
}) => {
    
    const lista_start = [];
    for (let start = 0; start < 5; start++) {
        let count = null;
        if (start < number) {            
            count = faStar;
        }
        else if (mid && start == number){
            count = faStarHalfAlt;
        }
        count && lista_start.push(<FontAwesomeIcon key={start} icon={count} />);
    }
    return <Col xs={5}>{lista_start}</Col>
}

export default Habilidades;