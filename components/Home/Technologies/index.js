import {Container, Row, Col} from 'react-bootstrap';
import Image from 'next/image';

import SectionTitle from '../../SectionTitle';

import styles from "./index.module.css";

export default function Technologies() {
  return (
    <Container className={styles.technologies}>
      <SectionTitle title="Tecnologias e ferramentas utilizadas para o desenvolvimento do projeto" />
      <Container>
        <Row>
          <Col className={styles.boxTechnologies} xs={12}>
            <Row style={{justifyContent: 'space-around'}}>
              <Col xs="auto">
                <div className={styles.logo}>
                  <Image src="/images/js.png" height={65} width={65} title='JavaScript' alt="Logo JavaScript" />
                </div>
                <p className={styles.name}>JavaScript</p>
              </Col>
              <Col xs="auto">
                <div className={styles.logo}>
                  <Image src="/images/react.png" height={65} width={65} title='React' alt="Logo React" />
                </div>
                <p className={styles.name}>React</p>
              </Col>
              <Col xs="auto">
                <div className={styles.logo}>
                  <Image src="/images/next.png" height={65} width={65} title='Next.Js' alt="Logo NextJs" />
                </div>
                <p className={styles.name}>Next.Js</p>
              </Col>
              <Col xs="auto">
                <div className={styles.logo}>
                  <Image src="/images/bootstrap.png" height={65} width={65} title='Bootstrap' alt="Logo Bootstrap" />
                </div>
                <p className={styles.name}>Bootstrap</p>
              </Col>
              <Col xs="auto">
                <div className={styles.logo}>
                  <Image src="/images/git.png" height={65} width={65} title='Git' alt="Logo Git" />
                </div>
                <p className={styles.name}>Git</p>
              </Col>
              <Col xs="auto">
                <div className={styles.logo}>
                  <Image src="/images/figma.png" height={65} width={65} title='Figma' alt="Logo Figma" />
                </div>
                <p className={styles.name}>Figma</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
