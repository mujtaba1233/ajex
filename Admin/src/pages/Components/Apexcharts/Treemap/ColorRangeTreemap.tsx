import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const ColorRangeTreemap = ({ dataColors }:any) => {
    var chartTreemapRangeColors = getChartColorsArray(dataColors);
    const series = [{
        data: [{
            x: 'INTC',
            y: 1.2
        },
        {
            x: 'GS',
            y: 0.4
        },
        {
            x: 'CVX',
            y: -1.4
        },
        {
            x: 'GE',
            y: 2.7
        },
        {
            x: 'CAT',
            y: -0.3
        },
        {
            x: 'RTX',
            y: 5.1
        },
        {
            x: 'CSCO',
            y: -2.3
        },
        {
            x: 'JNJ',
            y: 2.1
        },
        {
            x: 'PG',
            y: 0.3
        },
        {
            x: 'TRV',
            y: 0.12
        },
        {
            x: 'MMM',
            y: -2.31
        },
        {
            x: 'NKE',
            y: 3.98
        },
        {
            x: 'IYT',
            y: 1.67
        }
        ]
    }]
    var options:any = {

        legend: {
            show: false
        },
        chart: {
            height: 350,
            type: 'treemap',
            toolbar: {
                show: false
            }
        },
        title: {
            text: 'Treemap with Color scale',
            style: {
                fontWeight: 500,
            }
        },
        dataLabels: {
            enabled: true,
            style: {
                fontSize: '12px',
            },
            formatter: function (text:any, op:any) {
                return [text, op.value]
            },
            offsetY: -4
        },
        plotOptions: {
            treemap: {
                enableShades: true,
                shadeIntensity: 0.5,
                reverseNegativeShade: true,
                colorScale: {
                    ranges: [{
                        from: -6,
                        to: 0,
                        color: chartTreemapRangeColors[0]
                    },
                    {
                        from: 0.001,
                        to: 6,
                        color: chartTreemapRangeColors[1]
                    }
                    ]
                }
            }
        }
    };
    return (
       <ReactApexChart
                dir='ltr'
            className="apex-charts"
            series={series}
            options={options}
            type="treemap"
            height={350}
        />
    )
}
export default ColorRangeTreemap;