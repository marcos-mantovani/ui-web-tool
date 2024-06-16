'use client'
import { Row, Col } from 'react-bootstrap';
import Highcharts, { color } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';
import SolidGauge from 'highcharts/modules/solid-gauge';

HighchartsMore(Highcharts);
SolidGauge(Highcharts);

import styles from "./index.module.css";

import SectionTitle from '/components/SectionTitle';

export default function OverallScore({dataScore}) {
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
          text: 'Score Geral',
          y: 40,
          style: {
            fontSize: '20px',
            color: 'var(--gray100)'
          }
        },
        tooltip: {
          enabled: false
        },
        pane: {
            center: ['50%', '85%'],
            size: '140%',
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
            stops: [
                [0.1, '#DF5353'], // red
                [0.5, '#DDDF0D'], // yellow
                [0.9, '#00FFF4'], // green
            ],
            min: 0,
            max: 1000,
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
        series: [{
          name: 'Value',
          data: [{
            y: dataScore.score,
          }]
        }]
      };

    return (
        <Col xs={12} className={styles.container}>
            <SectionTitle title="Score total da interface" />
            <Row className={styles.boxContent}>
                <Col xs={12} lg={6}>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                    />
                </Col>
                <Col xs={12} lg={6} className='pt-3 pt-lg-0'>
                    <h2>
                        Score: {dataScore.score}
                    </h2>
                    <p>
                        {dataScore.descriptionOverallScore}
                    </p>
                </Col>
            </Row>
        </Col>
    );
}