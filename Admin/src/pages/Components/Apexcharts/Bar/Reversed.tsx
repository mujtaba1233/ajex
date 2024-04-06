import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const Reversed = ({ dataColors }:any) => {
    var chartBarReversedColors = getChartColorsArray(dataColors);
    const series = [
        {
            data: [400, 430, 448, 470, 540, 580, 690],
        },
    ];

    var options:any = {
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false,
            }
        },
        annotations: {
            xaxis: [{
                x: 500,
                borderColor: '#038edc',
                label: {
                    borderColor: '#038edc',
                    style: {
                        color: '#fff',
                        background: '#038edc',
                    },
                    text: 'X annotation',
                }
            }],
            yaxis: [{
                y: 'July',
                y2: 'September',
                label: {
                    text: 'Y annotation'
                }
            }]
        },
        colors: chartBarReversedColors,
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
        grid: {
            padding: {
                bottom: -14,
                left: 0,
                right: 0
            },
            xaxis: {
                lines: {
                    show: true
                }
            }
        },
        dataLabels: {
            enabled: true
        },
        xaxis: {
            categories: ['June', 'July', 'August', 'September', 'October', 'November', 'December'],
        },
        yaxis: {
            reversed: true,
            axisTicks: {
                show: true
            }
        }
    };

    return (
        <React.Fragment>
            
           <ReactApexChart
                // dir='ltr'
                className="apex-charts"
                options={options}
                series={series}
                type="bar"
                height={350}
            />
            
        </React.Fragment>
    );
};

export default Reversed;