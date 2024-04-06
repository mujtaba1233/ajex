import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const RotateLable = ({ dataColors }:any) => {
    var chartColumnRotateLabelsColors = getChartColorsArray(dataColors);
    const series = [{
        name: 'Servings',
        data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
    }];
    var options:any = {
        annotations: {
            points: [{
                x: 'Bananas',
                seriesIndex: 0,
                label: {
                    borderColor: '#775DD0',
                    offsetY: 0,
                    style: {
                        color: '#fff',
                        background: '#775DD0',
                    },
                    text: 'Bananas are good',
                }
            }]
        },
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                columnWidth: '50%',
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 2
        },
        colors: chartColumnRotateLabelsColors,
        xaxis: {
            labels: {
                rotate: -45
            },
            categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
                'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
            ],
            tickPlacement: 'on'
        },
        yaxis: {
            title: {
                text: 'Servings',
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: "horizontal",
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 0.85,
                opacityTo: 0.85,
                stops: [50, 0, 100]
            },
        }
    };

    return (
        <>
        
           <ReactApexChart
                dir='ltr'  className="apex-charts" series={series} options={options} type="bar" height={350} />
        
        </>
    )
};

export default RotateLable;