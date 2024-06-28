'use client'
import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import SolidGauge from 'highcharts/modules/solid-gauge';


import styles from "./index.module.css";

import SectionTitle from '/components/SectionTitle';

export default function OverallScore({dataScore, downloadPdf}) {
    const [loading, setLoading] = useState(true);
    const [width, setWidth] = useState(null);
    
    useEffect(() => {
        if (typeof HighchartsMore === 'function') {
            HighchartsMore(Highcharts);
            setLoading(false);
        }
        if (typeof SolidGauge === 'function') {
            SolidGauge(Highcharts);
            setLoading(false);
        }

        if (typeof window !== 'undefined') {
            setWidth(window?.innerWidth);
        }
    },[dataScore]);

    const options = {
        accessibility: {
          enabled: false,
        },
        chart: {
            type: 'solidgauge',
            backgroundColor: 'var(--gray400)',
            borderRadius: 3,
        },
        title: {
          text: '',
          style: {
            fontSize: '0',
            color: 'var(--gray100)'
          }
        },
        tooltip: {
          enabled: false
        },
        pane: {
            center: width > 1200 ? ['50%', '85%'] : ['50%', '75%'],
            size: width > 1200 ? '140%' : '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: 'var(--gray300)',
                borderRadius: 3,
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc',
                borderWidth: 0,
            }
        },
        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickWidth: 0,
            tickPositions: [],
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },
        plotOptions: {
            solidgauge: {
                borderRadius: 3,
                dataLabels: {
                    y: -30,
                    borderWidth: 0,
                    useHTML: true,
                    style: {
                      fontSize: '20px',
                      color: 'var(--gray100)'
                    }
                }
            }
        },
        credits: {
          enabled: false
        },
        series: [{
          name: 'Value',
          data: [{
            y: dataScore.score,
            color: 'var(--tertiary)',
          }]
        }]
      };

    const optionsLight = {
        accessibility: {
          enabled: false,
        },
        chart: {
            type: 'solidgauge',
            backgroundColor: 'white',
            borderRadius: 3,
        },
        title: {
          text: '',
        },
        tooltip: {
          enabled: false
        },
        pane: {
            center: width > 1200 ? ['50%', '85%'] : ['50%', '75%'],
            size: width > 1200 ? '140%' : '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: 'var(--gray200)',
                borderRadius: 3,
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc',
                borderWidth: 0,
            }
        },
        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickWidth: 0,
            tickPositions: [],
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },
        plotOptions: {
            solidgauge: {
                borderRadius: 3,
                dataLabels: {
                    y: -30,
                    borderWidth: 0,
                    useHTML: true,
                    style: {
                      fontSize: '20px',
                      color: 'var(--gray600)'
                    }
                }
            }
        },
        credits: {
          enabled: false
        },
        series: [{
          name: 'Value',
          data: [{
            y: dataScore.score,
            color: 'var(--tertiary)',
          }]
        }]
    };

    return (
        <Col xs={12} className={styles.container}>
            <SectionTitle title="Score total da interface" />
            {!loading && (
                <Row className={styles.boxContent}>
                    <Col xs={12} lg={6} className="mb-3 mb-lg-0">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={downloadPdf ? optionsLight : options}
                        />
                    </Col>
                    <Col xs={12} lg={6}>
                        <h2>
                            Score: {dataScore.score}
                        </h2>
                        <p>
                            {dataScore.descriptionOverallScore}
                        </p>
                    </Col>
                </Row>
            )}
        </Col>
    );
}