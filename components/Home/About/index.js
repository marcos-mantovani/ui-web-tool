import {Container, Row, Col} from 'react-bootstrap';
import Image from 'next/image';

import SectionTitle from '../../SectionTitle';

import styles from "./index.module.css";

export default function About() {
  return (
    <Container className={styles.about}>
      <SectionTitle title="Sobre o projeto" />
      <Container>
        <Row>
          <Col className={styles.boxAbout} xs={12}>
            <p className={styles.textAbout}>
              A <strong>UI Web Tool</strong> foi criada com o propósito de oferecer uma solução acessível e eficaz para avaliar e 
              melhorar a experiência do usuário em interfaces web. Desenvolvida como parte do Trabalho de Conclusão 
              de Curso (TCC) do bacharelado em Engenharia de Computação do Instituto Federal Catarinense - Campus São Bento do Sul, 
              esta ferramenta reflete um compromisso com a excelência acadêmica e a inovação tecnológica.
            </p>
            <p className={styles.textAbout}>
              As métricas utilizadas na avaliação foram cuidadosamente selecionadas a partir de fontes renomadas e 
              autores especializados na área de UI/UX, garantindo uma análise precisa e fundamentada. 
              Cada aspecto da ferramenta foi pensado para fornecer insights e sugestões práticas que ajudem designers e 
              desenvolvedores a otimizar suas interfaces de forma contínua e eficiente.
            </p>
            <p className={styles.dev}>Desenvolvido por</p>
            <Row className="align-items-center">
              <Col xs="auto">
                <Image 
                  src="/images/marcos-mantovani.png" 
                  width={81} 
                  height={81} 
                  quality={100}
                  title="Marcos Guilherme Mantovani" 
                  alt="Foto do autor do projeto" 
                />
              </Col>
              <Col className={`${styles.devName} p-0`}>
                Marcos Guilherme Mantovani
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
