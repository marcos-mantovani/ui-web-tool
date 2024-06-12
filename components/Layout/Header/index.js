'use client'
import {Container, Col, Row} from 'react-bootstrap';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

import styles from "./index.module.css";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Col className={styles.header} xs={12}>
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col xs="auto">
            <Link href="/" title="UI Web Tool">
                <Image 
                    src="/images/logo-projeto.png"
                    width={202}
                    height={56}
                    alt="UI Web Tool"
                    title="UI Web Tool"
                    priority
                />
            </Link>
          </Col>
          <Col xs="auto">
            <button 
              type="button" 
              onClick={() => {pathname != '/form' && router.push('/form')}} 
              className={styles.button} 
              disabled={pathname == '/form'}
            >
              Avaliar interface
            </button>
          </Col>
        </Row>
      </Container>
    </Col>
  );
}
