'use client'
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Row, Col, Tabs, Tab, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

import styles from "./index.module.css";

import ContainerTab from '/components/Form/ContainerTab';

// Funções e utilitários
import { previousTab, nextTab } from '/functions/form';
import { fieldsForm, options } from '/lib/fieldsForm';

export default function FormTabs() {
    const router = useRouter();
    const formRef = useRef(null);
    const [key, setKey] = useState('consistencia');
    const [validated, setValidated] = useState(false);
    const [tabValidation, setTabValidation] = useState({
        consistencia: true,
        hierarquia_visual: true,
        usabilidade: true,
        design_visual: true,
        imagens: true,
        mobile: true,
      });

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        const formData = new FormData(event.target),
        formDataObj = Object.fromEntries(formData.entries());

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();

            let tempValidation = [];
            fieldsForm.forEach((element) => {
                tempValidation[element.tab] = element.fields.every(function(field) {
                    if (!(field.name in formDataObj)) return false
                    else return true
                  })
            });

            setTabValidation(tempValidation);

            toast.error("Verifique os campos e tente novamente!");
        } else {
            toast.success("Avaliação concluída!");
            localStorage.setItem('formData', JSON.stringify(formDataObj));
            router.push('/report');
        }
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
                            <Tab 
                                key={idx} 
                                eventKey={data.tab} 
                                title={tabValidation[data.tab] ? data.titleTab : '⚠️  ' + data.titleTab}
                            >
                                <Container 
                                    className={
                                        data.tab == 'consistencia' ? styles.formContainer1 : 
                                        (data.tab == 'mobile' ? styles.formContainer6 : styles.formContainer)
                                    }
                                >
                                    <ContainerTab
                                        description={data.description}
                                        fields={data.fields}
                                        options={options}
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