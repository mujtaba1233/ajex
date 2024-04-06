import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react'
import ReactApexChart from 'react-apexcharts';

const Dumbbell = ({ dataColors }: any) => {
    var dumbbellColors = getChartColorsArray(dataColors);
    var series = [
        {
            data: [
                {
                    x: 'Operations',
                    y: [2800, 4500]
                },
                {
                    x: 'Customer Success',
                    y: [3200, 4100]
                },
                {
                    x: 'Engineering',
                    y: [2950, 7800]
                },
                {
                    x: 'Marketing',
                    y: [3000, 4600]
                },
                {
                    x: 'Product',
                    y: [3500, 4100]
                },
                {
                    x: 'Data Science',
                    y: [4500, 6500]
                },
                {
                    x: 'Sales',
                    y: [4100, 5600]
                }
            ]
        }
    ];
    var options: any = {
        chart: {
            height: 350,
            type: 'rangeBar',
            zoom: {
                enabled: false
            }
        },
        colors: dumbbellColors,
        plotOptions: {
            bar: {
                horizontal: true,
                isDumbbell: true,
                dumbbellColors: dumbbellColors
            }
        },
        title: {
            text: 'Paygap Disparity'
        },
        legend: {
            show: true,
            showForSingleSeries: true,
            position: 'top',
            horizontalAlign: 'left',
            customLegendItems: ['Female', 'Male']
        },
        fill: {
            type: 'gradient',
            gradient: {
                gradientToColors: ['#36BDCB'],
                inverseColors: false,
                stops: [0, 100]
            }
        },
        grid: {
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        }
    };
    return (
        <React.Fragment>
            <ReactApexChart
                dir="ltr"
                className="apex-charts"
                options={options}
                series={series}
                type="rangeBar"
                height={350}
            />
        </React.Fragment>
    )
}

export default Dumbbell