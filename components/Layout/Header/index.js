import {Container, Col, Row} from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link'

import styles from "./index.module.css";

export default function Header() {
  return (
    <Col className={styles.header} xs={12}>
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col xs="auto">
            <Link href="/">
                <Image 
                    src="/images/logo-projeto.png"
                    width={202}
                    height={56}
                    alt="UI Web Tool"
                    title="UI Web Tool" 
                />
            </Link>
          </Col>
          <Col xs="auto">
            <button className={styles.button}>
              Avaliar interface
            </button>
          </Col>
        </Row>
      </Container>
    </Col>
  );
}
