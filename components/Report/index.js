'use client'
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import OverallScore from './OverallScore';
import DetailedScore from './DetailedScore';

import { calculateScore } from '/lib/report';

import styles from "./index.module.css";

export default function Report() {
    const [dataScore, setDataScore] = useState(null);
    
    useEffect(()=> {
        const formData = JSON.parse(localStorage.getItem('formData'));
        setDataScore(calculateScore(formData));
    },[])
    
    const handlePrint = () => {
        window.print();
    };

    return (
        <Container>
            <Row className="m-0">
                {dataScore && (
                    <Col className={styles.container} xs={12}>
                        <h1>
                            Avaliação concluída!
                        </h1>
                        <OverallScore dataScore={dataScore} />
                        <DetailedScore dataScore={dataScore} />
                    </Col>
                )}
            </Row>
            <button className={`${styles.button} print-button`} type="button" onClick={handlePrint}>
                Imprimir relatório
            </button>
        </Container>
    );
}