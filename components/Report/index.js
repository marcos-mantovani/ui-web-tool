'use client'
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { Margin, usePDF } from "react-to-pdf";
import ReactLoading from 'react-loading';

import OverallScore from './OverallScore';
import DetailedScore from './DetailedScore';

import { calculateScore } from '/functions/report';

import styles from "./index.module.css";

export default function Report() {
    const [dataScore, setDataScore] = useState(null);
    const [downloadPdf, setDownloadPdf] = useState(false);
    const router = useRouter();
    const { toPDF, targetRef } = usePDF({
        method: "save",
        filename: "relatorio_interface.pdf",
        page: {margin: Margin.SMALL},
    });
    
    useEffect(()=> {
        const formData = JSON.parse(localStorage.getItem('formData'));

        if(formData) {
            setDataScore(calculateScore(formData));
        } else {
            router.push('/form');
        }

    },[]);

    const handleGeneratePDF = () => {
        const pdfContent = targetRef.current;
        pdfContent.classList.add('pdf-styles');
        setDownloadPdf(true);

        setTimeout(() => {
            toPDF().then(() => {
                pdfContent.classList.remove('pdf-styles');
                setDownloadPdf(false);
            });
          }, "500");
    };

    return (
        <Container>
            <Row className={`${styles['box-pdf']} m-0`}>
                {dataScore && (
                    <Col className={styles.container} xs={12} ref={targetRef}>
                        <h1>
                            Avaliação concluída!
                        </h1>
                        <OverallScore dataScore={dataScore} downloadPdf={downloadPdf} />
                        <DetailedScore dataScore={dataScore} downloadPdf={downloadPdf} />
                    </Col>
                )}
                <div className={`${styles['block-loading']} ${downloadPdf ? 'd-block' : 'd-none'}`} />
            </Row>
            <button className={`${styles.button} print-button`} type="button" onClick={handleGeneratePDF}>
                {downloadPdf ? (<ReactLoading type="spin" color='white' height={'20px'} width={'20px'} />) : ('Baixar relatório')}
            </button>
        </Container>
    );
}