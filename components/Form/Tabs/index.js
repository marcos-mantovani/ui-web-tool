'use client'
import { useState, useRef } from 'react';
import {Container, Row, Col, Tabs, Tab, Form} from 'react-bootstrap';

import styles from "./index.module.css";

import ContainerTab from '/components/Form/ContainerTab';

// Funções e utilitários
import {previousTab, nextTab} from '/functions/form';
import {fieldsForm} from '/lib/fieldsForm';

export default function FormTabs() {
    const formRef = useRef(null);
    const [key, setKey] = useState('consistencia');
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        const formData = new FormData(event.target),
        formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj)
        setValidated(true);
    };

    return (
        <Container className={styles.tabsContainer}>
            <Form ref={formRef} noValidate validated={validated} onSubmit={handleSubmit}>
                <Tabs
                    id="form"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    justify
                >
                    {fieldsForm.map((data, idx) => {
                        return(
                            <Tab key={idx} eventKey={data.tab} title={data.titleTab}>
                                <Container 
                                    className={
                                        data.tab == 'consistencia' ? styles.formContainer1 : 
                                        (data.tab == 'mobile' ? styles.formContainer6 : styles.formContainer)
                                    }
                                >
                                    <ContainerTab
                                        description={data.description}
                                        fields={data.fields}
                                    />
                                </Container>
                            </Tab>
                        );
                    })}
                </Tabs>
                <Row>
                    {key != 'consistencia' && (
                        <Col xs="auto">
                                <button type="button" className={styles.prevButton} onClick={() => previousTab(key, setKey)}>
                                    Anterior
                                </button>
                        </Col>
                    )}
                    <Col xs="auto">
                        <button type="button" className={styles.nextButton} onClick={() => nextTab(key, setKey, formRef)}>
                            {key == 'mobile' ? (
                                'Finalizar avaliação'
                            ) : (
                                'Próxima'
                            )}
                        </button>
                    </Col>
                </Row>
            </Form>    
        </Container>
    );
}