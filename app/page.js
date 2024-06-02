import {Container, Col, Row} from 'react-bootstrap';

import Layout from '/components/Layout';

export default function Home() {
  return (
    <Layout>
      <Container>
        <Row>
          <Col xs={6}>
            Col 1
          </Col>
          <Col xs={6}>
            Col 2
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
