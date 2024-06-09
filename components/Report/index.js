'use client'
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import OverallScore from './OverallScore';
import DetailedScore from './DetailedScore';

import styles from "./index.module.css";

export default function Report() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <Container>
            <Row className="m-0">
                <Col className={styles.container} xs={12}>
                    <h1>
                        Avaliação concluída!
                    </h1>
                    <OverallScore />
                    <DetailedScore />
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </Col>
            </Row>
            <button className={`${styles.button} print-button`} type="button" onClick={handlePrint}>
                Imprimir relatório
            </button>
        </Container>
    );
}