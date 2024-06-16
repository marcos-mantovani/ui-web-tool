'use client'
import { Row, Col } from 'react-bootstrap';
import Highcharts, { color } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import styles from "./index.module.css";

import SectionTitle from '/components/SectionTitle';

export default function DetailedScore({dataScore}) {
    const options = {
        accessibility: {
          enabled: false,
        },
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
                color: 'var(--gray100)',
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
          data: [
            dataScore.detailedScore.consistencia.score, 
            dataScore.detailedScore.hierarquiaVisual.score, 
            dataScore.detailedScore.usablidade.score, 
            dataScore.detailedScore.designVisual.score, 
            dataScore.detailedScore.imagens.score, 
            dataScore.detailedScore.mobile.score
          ],
          color: 'var(--secondary)',
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
                            {dataScore.detailedScore.consistencia.description} 
                        </p>
                    </div>
                    <div className={styles.detailedDescription}>
                        <h3>
                            Hierarqui visual
                        </h3>
                        <p>
                          {dataScore.detailedScore.hierarquiaVisual.description}
                        </p>
                    </div>
                    <div className={styles.detailedDescription}>
                        <h3>
                            Usabilidade
                        </h3>
                        <p>
                          {dataScore.detailedScore.usablidade.description} 
                        </p>
                    </div>
                    <div className={styles.detailedDescription}>
                        <h3>
                            Design visual
                        </h3>
                        <p>
                          {dataScore.detailedScore.designVisual.description}
                        </p>
                    </div>
                    <div className={styles.detailedDescription}>
                        <h3>
                            Imagens
                        </h3>
                        <p>
                          {dataScore.detailedScore.imagens.description}
                        </p>
                    </div>
                    <div className={styles.detailedDescription}>
                        <h3>
                            Mobile
                        </h3>
                        <p>
                          {dataScore.detailedScore.mobile.description}
                        </p>
                    </div>
                </Col>
            </Row>
        </Col>
    );
}