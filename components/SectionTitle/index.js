import {Container, Row} from 'react-bootstrap';

import styles from "./index.module.css";

export default function SectionTitle({title}) {
  return (
    <Container>
      <Row className={styles.title}>
        {title}
      </Row>
    </Container>
  );
}
