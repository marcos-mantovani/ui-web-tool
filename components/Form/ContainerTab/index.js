'use client'
import Image from 'next/image';
import {Col, Row, OverlayTrigger, Tooltip, Form} from 'react-bootstrap';

import styles from "./index.module.css";

export default function ContainerTab({description, fields}) {
  const renderTooltip = (text) => (
    <Tooltip id="button-tooltip">
      {text}
    </Tooltip>
  );

  return (
    <Row className={styles.containerStyle}>
        <p>
            {description}
        </p>
        {fields.map((field, idx) => {
          return(
            <Col key={idx} xs={12}>
              <Row>
                <Col xs="auto" className={styles.title}>
                  {field.label}
                </Col>
                <Col className="p-0" xs="auto">
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 100, hide: 400 }}
                    overlay={renderTooltip(field.help)}
                  >
                    <Image 
                      src="/icons/help.svg"
                      height={16}
                      width={16}
                      alt="Ajuda"
                      style={{cursor: 'pointer'}}
                    /> 
                  </OverlayTrigger>
                  
                </Col>
              </Row>
              <Row className="m-0">
                <Col xs={12} className="p-3" style={{border: '1px solid var(--gray400)', borderRadius: '3px', margin: '5px 0 15px 0'}}>
                  <Form.Check
                    label="Atende"
                    name={field.name}
                    type={'radio'}
                    id={field.name + '__1'}
                    required
                  />
                  <Form.Check
                    label="Atende parcialmente"
                    name={field.name}
                    type={'radio'}
                    id={field.name + '__2'}
                    required
                  />
                  <Form.Check
                    label="Não atende"
                    name={field.name}
                    type={'radio'}
                    id={field.name + '__3'}
                    required
                  />
                  <Form.Check
                    label="Não se aplica"
                    name={field.name}
                    type={'radio'}
                    id={field.name + '__4'}
                    required
                  />
                </Col>
              </Row>
            </Col>
          );
        })}
    </Row>
  );
}