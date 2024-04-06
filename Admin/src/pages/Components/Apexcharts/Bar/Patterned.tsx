import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const Patterned = ({ dataColors }:any) => {
    var chartPatternedColors = getChartColorsArray(dataColors);
    const series = [{
        name: 'Marine Sprite',
        data: [44, 55, 41, 37, 22, 43, 21]
    }, {
        name: 'Striking Calf',
        data: [53, 32, 33, 52, 13, 43, 32]
    }, {
        name: 'Tank Picture',
        data: [12, 17, 11, 9, 15, 11, 20]
    }, {
        name: 'Bucket Slope',
        data: [9, 7, 5, 8, 6, 9, 4]
    }];
    var options:any = {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            dropShadow: {
                enabled: true,
                blur: 1,
                opacity: 0.25
            },
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '60%',
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 2,
        },
        title: {
            text: 'Compare Sales Strategy',
            style: {
                fontWeight: 500,
            },
        },
        xaxis: {
            categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        },
        yaxis: {
            title: {
                text: undefined
            },
        },
        tooltip: {
            shared: false,
            y: {
                formatter: function (val:any) {
                    return val + "K";
                }
            }
        },
        fill: {
            type: 'pattern',
            opacity: 1,
            pattern: {
                style: ['circles', 'slantedLines', 'verticalLines', 'horizontalLines'], // string or array of strings

            }
        },
        grid: {
            padding: {
                bottom: -14,
                left: 0,
                right: 0
            }
        },
        states: {
            hover: {
                filter: 'none'
            }
        },
        legend: {
            position: 'right',
            offsetY: 40
        },
        colors: chartPatternedColors
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

export default Patterned