'use client'
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

import OverallScore from './OverallScore';
import DetailedScore from './DetailedScore';

import { calculateScore } from '/functions/report';

import styles from "./index.module.css";

export default function Report() {
    const [dataScore, setDataScore] = useState(null);
    const [width, setWidth] = useState(null);
    const router = useRouter();
    
    useEffect(()=> {
        const formData = JSON.parse(localStorage.getItem('formData'));

        if(formData) {
            setDataScore(calculateScore(formData));
        } else {
            router.push('/form');
        }

        if (typeof window !== 'undefined') {
            setWidth(window?.innerWidth);
        }

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
                {width && width > 992 ? 'Imprimir relatório' : 'Baixar relatório'}
            </button>
        </Container>
    );
}