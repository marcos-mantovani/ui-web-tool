'use client'
import { Row, Col } from 'react-bootstrap';
import Highcharts, { color } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import styles from "./index.module.css";

import SectionTitle from '/components/SectionTitle';

export default function DetailedScore({dataScore, downloadPdf}) {
    const options = {
        accessibility: {
          enabled: false,
        },
        chart: {
          type: 'bar',
          backgroundColor: 'var(--gray400)',
          borderRadius: 3,
          marginTop: 30,
          style: {
            margin: '0 auto',
          }
        },
        title: {
            text: '',
            style: {
              fontSize: '0',
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
          max: 100,
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

    const optionsLight = {
      accessibility: {
        enabled: false,
      },
      chart: {
        type: 'bar',
        backgroundColor: 'white',
        borderRadius: 3,
        style: {
          margin: '0 auto',
        }
      },
      title: {
          text: ' ',
          style: {
            fontSize: '0',
            color: 'var(--gray700)'
          }
      },
      xAxis: {
        categories: ['Consistência', 'Hierarquia Visual', 'Usabilidade', 'Design Visual', 'Imagens', 'Mobile'],
        title: {
          text: null
        },
        labels: {
          style: {
              color: 'var(--gray700)'
          }
        },
        lineColor: 'var(--gray200)'
      },
      yAxis: {
        min: 0,
        max: 100,
        title: {
          text: 'Pontuação',
          align: 'high',
          style: {
              color: 'var(--gray700)'
          }
        },
        labels: {
          overflow: 'justify',
          style: {
              color: 'var(--gray700)'
          }
        },
        gridLineColor: 'var(--gray200)',
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
            color: 'var(--gray700)'
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
        color: 'var(--gray700)',
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
                        options={downloadPdf ? optionsLight : options}
                    />
                </Col>
                <Col xs={12} lg={6} className='pt-5 pt-lg-0'>
                    <p style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '15px'}}>
                      Pontos que necessitam de atenção
                    </p>
                    {dataScore.detailedScore.consistencia.questions.length > 0 && (
                      <div className={styles.detailedDescription}>
                          <h3>
                              Consistência
                          </h3>
                          {dataScore.detailedScore.consistencia.questions.map((val) => {
                              return (
                                <p>- {val.name}</p>
                              );
                          })}
                      </div>
                    )}
                    {dataScore.detailedScore.hierarquiaVisual.questions.length > 0 && (
                      <div className={styles.detailedDescription}>
                          <h3>
                              Hierarqui visual
                          </h3>
                          {dataScore.detailedScore.hierarquiaVisual.questions.map((val) => {
                              return (
                                <p>- {val.name}</p>
                              );
                          })}
                      </div>
                    )}
                    {dataScore.detailedScore.usablidade.questions.length > 0 && (
                      <div className={styles.detailedDescription}>
                          <h3>
                              Usabilidade
                          </h3>
                          {dataScore.detailedScore.usablidade.questions.map((val) => {
                              return (
                                <p>- {val.name}</p>
                              );
                          })}
                      </div>
                    )}
                    {dataScore.detailedScore.designVisual.questions.length > 0 && (
                      <div className={styles.detailedDescription}>
                          <h3>
                              Design visual
                          </h3>
                          {dataScore.detailedScore.designVisual.questions.map((val) => {
                              return (
                                <p>- {val.name}</p>
                              );
                          })}
                      </div>
                    )}
                    {dataScore.detailedScore.imagens.questions.length > 0 && (
                      <div className={styles.detailedDescription}>
                          <h3>
                              Imagens
                          </h3>
                          {dataScore.detailedScore.imagens.questions.map((val) => {
                              return (
                                <p>- {val.name}</p>
                              );
                          })}
                      </div>
                    )}
                    {dataScore.detailedScore.mobile.questions.length > 0 && (
                    <div className={styles.detailedDescription}>
                        <h3>
                            Mobile
                        </h3>
                        {dataScore.detailedScore.mobile.questions.map((val) => {
                            return (
                              <p>- {val.name}</p>
                            );
                        })}
                    </div>
                    )}
                </Col>
            </Row>
        </Col>
    );
}