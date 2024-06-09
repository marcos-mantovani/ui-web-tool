'use client'
import { Row, Col } from 'react-bootstrap';
import Highcharts, { color } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import styles from "./index.module.css";

import SectionTitle from '/components/SectionTitle';

export default function DetailedScore() {
    const options = {
        chart: {
          type: 'bar',
          backgroundColor: 'var(--gray400)',
          borderRadius: 3,
          style: {
            margin: '0 auto',
          }
        },
        title: {
            text: 'Score por Segmento',
            style: {
              fontSize: '20px',
              color: 'var(--gray100)'
            }
        },
        xAxis: {
          categories: ['Consistência', 'Hierarquia Visual', 'Usabilidade', 'Design Visual', 'Imagens', 'Mobile'],
          title: {
            text: null
          },
          labels: {
            style: {
                color: 'var(--gray100)'
            }
          },
          lineColor: 'var(--gray300)'
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Pontuação',
            align: 'high',
            style: {
                color: 'var(--gray100)'
            }
          },
          labels: {
            overflow: 'justify',
            style: {
                color: 'var(--gray100)'
            }
          },
          gridLineColor: 'var(--gray300)',
        },
        tooltip: {
          valueSuffix: ' pontos'
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true,
              style: {
                color: 'var(--gray100)', // Personalização da cor dos rótulos de dados
              }
            },
            borderWidth: 0,
            style: {
              fontSize: '20px',
              color: 'var(--gray100)'
            }
          }
        },
        credits: {
          enabled: false
        },
        series: [{
          name: 'Pontuação',
          data: [85, 78, 90, 95, 70, 80], // Exemplos de pontuações para cada critério
          color: 'var(--secondary)', // Cor das barras,
        }],

    legend: {
        itemStyle: {
          color: 'var(--gray100)',
        }
      },
    };

    return (
        <Col xs={12} className={styles.container}>
            <SectionTitle title="Score por segmento" />
            <Row className={styles.boxContent}>
                <Col xs={12} lg={6}>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                    />
                </Col>
                <Col xs={12} lg={6} className='pt-3 pt-lg-0'>
                    <div className={styles.detailedDescription}>
                        <h3>
                            Consistência
                        </h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </p>
                    </div>
                    <div className={styles.detailedDescription}>
                        <h3>
                            Hierarqui visual
                        </h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                        </p>
                    </div>
                    <div className={styles.detailedDescription}>
                        <h3>
                            Usabilidade
                        </h3>
                        <p>
                            Lorem Ipsum is simply dummy 
                        </p>
                    </div>
                    <div className={styles.detailedDescription}>
                        <h3>
                            Design visual
                        </h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        </p>
                    </div>
                    <div className={styles.detailedDescription}>
                        <h3>
                            Imagens
                        </h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                        </p>
                    </div>
                    <div className={styles.detailedDescription}>
                        <h3>
                            Mobile
                        </h3>
                        <p>
                            Lorem Ipsum is simply dummy texten
                        </p>
                    </div>
                </Col>
            </Row>
        </Col>
    );
}