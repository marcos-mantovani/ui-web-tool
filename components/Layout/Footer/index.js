import {Container, Col, Row} from 'react-bootstrap';
import Image from 'next/image';

import styles from "./index.module.css";

export default function Footer() {
  return (
    <Col className={styles.footer} xs={12}>
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <Row>
              <Col xs="auto">
                Entre em contato
              </Col>
              <Col className={styles.icon} xs="auto">
                <Image 
                    src="/icons/envelope-fill.svg"
                    width={16}
                    height={16}
                    alt="E-mail"
                    title="E-mail" 
                />
              </Col>
              <Col className={styles.icon} xs="auto">
                <Image 
                    src="/icons/instagram.svg"
                    width={16}
                    height={16}
                    alt="Instagram"
                    title="Instagram" 
                />
              </Col>
              <Col className={styles.icon} xs="auto">
                <Image 
                    src="/icons/linkedin.svg"
                    width={16}
                    height={16}
                    alt="Linkedin"
                    title="Linkedin" 
                />
              </Col>
            </Row>
          </Col>
          <Col xs="auto">
              © 2024 UI Web Tool
          </Col>
        </Row>
      </Container>
    </Col>
  );
}
