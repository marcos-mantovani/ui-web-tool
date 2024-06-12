import {Container, Col, Row} from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

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
                <Link href="mailto:marcosg056@gmail.com" target="_blank" title="Entre em contato pelo e-mail">
                  <Image 
                      src="/icons/envelope-fill.svg"
                      width={16}
                      height={16}
                      alt="E-mail"
                      title="Entre em contato pelo e-mail" 
                  />
                </Link>
              </Col>
              <Col className={styles.icon} xs="auto">
                <Link href="https://www.linkedin.com/in/marcos-guilherme-mantovani/" target='_blank' title="Entre em contato pelo LinkedIn">
                  <Image 
                      src="/icons/linkedin.svg"
                      width={16}
                      height={16}
                      alt="Linkedin"
                      title="Entre em contato pelo LinkedIn"
                  />
                </Link>
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
