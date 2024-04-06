import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const PolygonRadar = ({ dataColors }:any) => {
    var chartRadarPolyradarColors = getChartColorsArray(dataColors);
    const series = [{
        name: 'Series 1',
        data: [20, 100, 40, 30, 50, 80, 33],
    }]
    var options:any = {
        chart: {
            height: 350,
            type: 'radar',
            toolbar: {
                show: false
            },
        },
        dataLabels: {
            enabled: true
        },
        plotOptions: {
            radar: {
                size: 140,

            }
        },
        title: {
            text: 'Radar with Polygon Fill',
            style: {
                fontWeight: 500,
            },
        },
        colors: chartRadarPolyradarColors,
        markers: {
            size: 4,
            colors: ['#fff'],
            strokeColor: '#fff',
            strokeWidth: 2,
        },
        tooltip: {
            y: {
                formatter: function (val:any) {
                    return val
                }
            }
        },
        xaxis: {
            categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        },
        yaxis: {
            tickAmount: 7,
            labels: {
                formatter: function (val:any, i:any) {
                    if (i % 2 === 0) {
                        return val
                    } else {
                        return ''
                    }
                }
            }
        }
    };
    return (
        <>
        
       <ReactApexChart
                dir='ltr'
            className="apex-charts"
            series={series}
            options={options}
            type="radar"
            height='350'
        />
        
        </>
    )
}
export default PolygonRadar;