import {Container, Row, Col} from 'react-bootstrap';
import Image from 'next/image';

import SectionTitle from '../../SectionTitle';

import styles from "./index.module.css";

export default function Features() {
  return (
    <Container className={styles.features}>
      <SectionTitle title="Avalie e Melhore sua Interface com Facilidade" />
      <Row className="justify-content-center">
        <Col xs={12} sm={6} lg={4}>
          <div className={styles.card}>
            <div className="text-center">
              <Image 
                src="/icons/thumbUp.png"
                width={35}
                height={35}
                title="Facilidade de uso"
                alt="Facilidade de uso" 
              />
            </div>
            <div className={styles.titleCard}>
              Facilidade de uso
            </div>
            <div className={styles.textCard}>
              Interaja com uma interface intuitiva e responda a um questionário guiado sem complicações.
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <div className={styles.card}>
            <div className="text-center">
              <Image 
                src="/icons/fastForward.png"
                width={35}
                height={35}
                title="Avaliação rápida"
                alt="Avaliação rápida" 
              />
            </div>
            <div className={styles.titleCard}>
              Avaliação rápida
            </div>
            <div className={styles.textCard}>
              Receba uma análise completa da sua interface em minutos, sem perder tempo.
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <div className={styles.card}>
            <div className="text-center">
              <Image 
                src="/icons/requestQuote.png"
                width={35}
                height={35}
                title="Gratuito"
                alt="Gratuito" 
              />
            </div>
            <div className={styles.titleCard}>
              Gratuito
            </div>
            <div className={styles.textCard}>
              Acesse todas as funcionalidades da ferramenta sem nenhum custo.
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <div className={styles.card}>
            <div className="text-center">
              <Image 
                src="/icons/laptop.png"
                width={35}
                height={35}
                title="Amplamente abrangente"
                alt="Amplamente abrangente" 
              />
            </div>
            <div className={styles.titleCard}>
              Amplamente abrangente
            </div>
            <div className={styles.textCard}>
              Compatível com uma ampla variedade de interfaces, cobrindo todos os aspectos cruciais de UI.
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <div className={styles.card}>
            <div className="text-center">
              <Image 
                src="/icons/assessment.png"
                width={35}
                height={35}
                title="Relatório detalhado"
                alt="Relatório detalhado" 
              />
            </div>
            <div className={styles.titleCard}>
              Relatório detalhado
            </div>
            <div className={styles.textCard}>
              Obtenha um relatório detalhado com a pontuação e sugestões práticas para melhorias específicas.
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
