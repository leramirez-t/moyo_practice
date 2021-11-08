import React from 'react'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button,Image } from 'react-bootstrap';
import moyoimg from '../img/moyo1.svg';
// import stylesSaas from '../styles/styles.scss'


export default function Home() {
    return (

        <div>
            <div className="container-fluid">
                <div className="row">
                        
                        <div className="col-6 col-md-6 col-sm-12">
                            <Card>
                                <h2 className>Modular, flexible y bajo demanda</h2>
                                <label>
                                    Ayudamos a potenciar sus decisiones a través de la generación 
                                    de confianza en los segmentos con los que quiere trabajar. Atendemos a financieras bancarias y no bancarias, empresas comerciales, gobierno y expandemos nuestros servicios a verticales adyacentes.
                                </label>
                                <Button>AGENDA UN DEMO</Button>
                            </Card>
                        </div>
                        <div className="col-6 col-md-6 col-sm-12">
                            
                            <Image src={moyoimg} width="100" height="50" />
                        </div>
                    
                </div>
            </div>
        </div>

    )
}
// const MyFirstView = () => (
//     <section>
//       <p>Hola Mundo</p>
//     </section>
//   );
//   export default MyFirstView;

