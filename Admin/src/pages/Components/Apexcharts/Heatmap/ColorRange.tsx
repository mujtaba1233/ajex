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

const ColorRange = ({ dataColors }:any) => {
    var chartHeatMapColors = getChartColorsArray(dataColors);
    const series = [{
        name: 'Jan',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Feb',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Mar',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Apr',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'May',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Jun',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Jul',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Aug',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Sep',
        data: generateData(20, {
            min: -30,
            max: 55
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
        plotOptions: {
            heatmap: {
                shadeIntensity: 0.5,
                radius: 0,
                useFillColorAsStroke: true,
                colorScale: {
                    ranges: [{
                        from: -30,
                        to: 5,
                        name: 'Low',
                        color: chartHeatMapColors[0]
                    },
                    {
                        from: 6,
                        to: 20,
                        name: 'Medium',
                        color: chartHeatMapColors[1]
                    },
                    {
                        from: 21,
                        to: 45,
                        name: 'High',
                        color: chartHeatMapColors[2]
                    },
                    {
                        from: 46,
                        to: 55,
                        name: 'Extreme',
                        color: chartHeatMapColors[3]
                    }
                    ]
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 1
        },
        title: {
            text: 'HeatMap Chart with Color Range',
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

export default ColorRange;