import {Container, Row, Col} from 'react-bootstrap';

import SectionTitle from '../../SectionTitle';

import styles from "./index.module.css";

export default function Steps() {
  return (
    <Container className={styles.steps}>
      <SectionTitle title="Simplifique sua Avaliação de UI em Três Passos" />
      <Container>
      <Row>
        <Col className={styles.boxSteps} xs={12}>
          <p className={styles.textN1}>
            1. Responda ao Questionário
          </p>
          <p className={styles.textN2}>
            Forneça informações detalhadas sobre a sua interface.
          </p>
          <p className={styles.textN1}>
            2. Receba um Relatório Completo
          </p>
          <p className={styles.textN2}>
            Veja a pontuação e os pontos de melhoria.
          </p>
          <p className={styles.textN1}>
            3. Aprimore sua Interface
          </p>
          <p className={styles.textN2}>
            Utilize as sugestões para otimizar sua interface e a experiência do usuário.
          </p>
        </Col>
      </Row>
      </Container>
    </Container>
  );
}
