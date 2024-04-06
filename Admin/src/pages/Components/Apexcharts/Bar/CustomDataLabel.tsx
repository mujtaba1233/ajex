import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const CustomDataLabel = ({ dataColors }:any) => {
    var chartDatalabelsBarColors = getChartColorsArray(dataColors);
    const series = [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }];
    var options:any = {
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                barHeight: '100%',
                distributed: true,
                horizontal: true,
                dataLabels: {
                    position: 'bottom'
                },
            }
        },
        colors: chartDatalabelsBarColors,
        dataLabels: {
            enabled: true,
            textAnchor: 'start',
            style: {
                colors: ['#fff']
            },
            formatter: function (val:any, opt:any) {
                return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
            },
            offsetX: 0,
            dropShadow: {
                enabled: false
            }
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        xaxis: {
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                'United States', 'China', 'India'
            ],
        },
        yaxis: {
            labels: {
                show: false
            }
        },
        grid: {
            padding: {
                bottom: -14,
                left: 0,
                right: 0
            }
        },
        title: {
            text: 'Custom DataLabels',
            align: 'center',
            floating: true,
            style: {
                fontWeight: 500,
            },
        },
        subtitle: {
            text: 'Category Names as DataLabels inside bars',
            align: 'center',
        },
        tooltip: {
            theme: 'dark',
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function () {
                        return '';
                    }
                }
            }
        }
    };
    return (
        <React.Fragment>
           <ReactApexChart
                dir='ltr'
                className="apex-charts"
                options={options}
                series={series}
                type="bar"
                height={350}
            />
        </React.Fragment>
    );
};

export default CustomDataLabel;