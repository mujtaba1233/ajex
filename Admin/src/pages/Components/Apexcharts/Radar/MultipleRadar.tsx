import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const MultipleRadar = ({ dataColors }:any) => {
    var chartRadarMultiColors = getChartColorsArray(dataColors);
    const series = [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
    },
    {
        name: 'Series 2',
        data: [20, 30, 40, 80, 20, 80],
    },
    {
        name: 'Series 3',
        data: [44, 76, 78, 13, 43, 10],
    }
    ]
    var options:any = {
        chart: {
            height: 350,
            type: 'radar',
            dropShadow: {
                enabled: true,
                blur: 1,
                left: 1,
                top: 1
            },
            toolbar: {
                show: false
            },
        },
        stroke: {
            width: 2
        },
        fill: {
            opacity: 0.2
        },
        markers: {
            size: 0
        },
        colors: chartRadarMultiColors,
        xaxis: {
            categories: ['2014', '2015', '2016', '2017', '2018', '2019']
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
export default MultipleRadar;