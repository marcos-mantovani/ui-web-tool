'use client'
import Image from 'next/image';
import {Col, Row, OverlayTrigger, Tooltip, Form} from 'react-bootstrap';

import styles from "./index.module.css";

export default function ContainerTab({description, fields, options}) {
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
            <Col key={idx} xs={12} className="p-0">
              <Row>
                <Col xs="auto" className={styles.title}>
                  <span style={{paddingRight: '15px'}}>
                    {field.label}
                  </span>
                  {field?.help && (
                    <OverlayTrigger
                      placement="auto"
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
                  )}
                </Col>
              </Row>
              <Row className="m-0">
                <Col xs={12} className="p-2 p-sm-3" style={{border: '1px solid var(--gray400)', borderRadius: '3px', margin: '5px 0 0 0'}}>
                  <Form.Group controlId={field.name}>
                    {options.map((option, idx2) => {
                      return(
                        <Form.Check
                          key={idx2}
                          type='radio'
                          label={option.label}
                          name={field.name}
                          id={`${field.name}_${option.name}`}
                          required
                          value={option.name}
                        />
                      );
                    })}
                  </Form.Group>
                </Col>
              </Row>
            </Col>
          );
        })}
    </Row>
  );
}