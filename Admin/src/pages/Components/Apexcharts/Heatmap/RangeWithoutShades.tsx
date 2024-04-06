import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


function generateData(count:any, yrange:any) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
            x: x,
            y: y
        });
        i++;
    }
    return series;
}

const RangeWithoutShades = ({ dataColors }:any) => {
    var chartHeatMapShadesColors = getChartColorsArray(dataColors);
    const series = [{
        name: 'Metric1',
        data: generateData(20, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric2',
        data: generateData(20, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric3',
        data: generateData(20, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric4',
        data: generateData(20, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric5',
        data: generateData(20, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric6',
        data: generateData(20, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric7',
        data: generateData(20, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric8',
        data: generateData(20, {
            min: 0,
            max: 90
        })
    },
    {
        name: 'Metric8',
        data: generateData(20, {
            min: 0,
            max: 90
        })
    }
    ]
    var options:any = {
        chart: {
            height: 350,
            type: 'heatmap',
            toolbar: {
                show: false
            }
        },
        stroke: {
            width: 0
        },
        plotOptions: {
            heatmap: {
                radius: 30,
                enableShades: false,
                colorScale: {
                    ranges: [{
                        from: 0,
                        to: 50,
                        color: chartHeatMapShadesColors[0]
                    },
                    {
                        from: 51,
                        to: 100,
                        color: chartHeatMapShadesColors[1]
                    },
                    ],
                },

            }
        },
        dataLabels: {
            enabled: true,
            style: {
                colors: ['#fff']
            }
        },
        xaxis: {
            type: 'category',
        },
        title: {
            text: 'Rounded (Range without Shades)',
            style: {
                fontWeight: 500,
            },
        },
    };
    return (
       <>
        
       <ReactApexChart
                dir='ltr'
            className="apex-charts"
            series={series}
            options={options}
            type="heatmap"
            height={350}
        />
        
        </>
    )
}

export default RangeWithoutShades;