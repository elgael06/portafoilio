import Head from 'next/head'
import { Col, Row } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (<div style={{ padding:20,overflow: 'auto'}}>
    <Row style={{ backgroundColor:'#F1EDED',paddingTop:20,paddingBottom:20,marginTop:-20}}>
      <Col xs={12}><h4>ACERCA DE MI TRABAJO COMO FREELANCE</h4></Col>
      <Col xs={12}>
        <small>DESARROLLO DE SISTEMAS DE CONTROL PARA LA ADMINISTRACION DE EMPRESAS GESTION DE PRODUCTOS Y FINANZA CHECKLIST PARA EVALUACION DE PERSOLA DEPARTAMENSTOS SERVICIO AL CLIENTE Y SUCURSALES, SISTEMAS DE GESTION DE ENVARQUES Y ENTREGA DE PRODUCTOS, SISTEMAS MODULAES A LA MEDIDA MULTIPROPOCITO CON CONTROL DE ACCESOS, ENTRE OTROS.</small>
        <br/>
      </Col>
    </Row>
    <Row style={{ backgroundColor:'#FFF',paddingTop:20,paddingBottom:20,marginTop:-20,minHeight:650}}>

    </Row>
    <Row style={{
      backgroundColor: '#F1EDED',
      color:'#00000070',
      paddingTop: 20,
      paddingBottom: 20,
      marginTop: -20,
      position: 'absolute',
      left: 15,
      right: 15,
      bottom: 0,
      textAlign: 'center',
      justifyContent: 'center',
    }}>
      <span>MYA-APP.TECH</span>
    </Row>
  </div>)
}
