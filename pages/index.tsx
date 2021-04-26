import Head from 'next/head'
import { Col, Row } from 'react-bootstrap';

export default function Home() {
  return (<div style={{ padding: 20, overflow: 'auto' }}>
    <Head >
      <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
      <meta name="robots" content="index, follow"></meta>
      <meta name='description' content='curriculum vitae de cristian gael valenzuela castro'></meta>
      <title>Cristian Gael Valenzuela Castro</title>
    </Head>
    <Row style={{ backgroundColor: '#F1EDED', paddingTop: 20, paddingBottom: 20, marginTop: -20 }}>
      <Col xs={12}><h4>ACERCA DE MI TRABAJO:</h4></Col>
      <Col xs={12} style={{ padding: 10 }}>
        <small>DESARROLLO DE SISTEMAS DE CONTROL PARA LA ADMINISTRACIÓN DE EMPRESAS GESTIÓN DE PRODUCTOS Y FINANZA, CHECKLIST PARA EVALUACIÓN DE PERSONAL, DEPARTAMENTOS SERVICIO AL CLIENTE Y SUCURSALES, SISTEMAS DE GESTIÓN DE EMBARQUES Y ENTREGA DE PRODUCTOS, SISTEMAS MODULARES A LA MEDIDA MULTIPROPÓSITO CON CONTROL DE ACCESOS, SISTEMA DE INTERFAZ GRÁFICA PARA UNIFICACIÓN DE SISTEMAS, SISTEMA DE GESTION DE PRODUCTOS INVENTARIOS E IMPRECION DE ETIQUETAS Y SISTEMA DE PUTO DE VENTA.</small>
        <br />
      </Col>
    </Row>
    <Row style={{ backgroundColor: '#FFF', paddingTop: 20, paddingBottom: 20, marginTop: -20, minHeight: 650 }}>

    </Row>
    <Row style={{
      backgroundColor: '#F1EDED',
      color: '#00000070',
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
  </div>);
}
