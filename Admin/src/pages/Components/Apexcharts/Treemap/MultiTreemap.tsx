import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const MultiTreemap = ({ dataColors }:any) => {
    var chartTreemapMultiColors = getChartColorsArray(dataColors);
    const series = [{
        name: 'Desktops',
        data: [{
            x: 'ABC',
            y: 10
        },
        {
            x: 'DEF',
            y: 60
        },
        {
            x: 'XYZ',
            y: 41
        }
        ]
    },
    {
        name: 'Mobile',
        data: [{
            x: 'ABCD',
            y: 10
        },
        {
            x: 'DEFG',
            y: 20
        },
        {
            x: 'WXYZ',
            y: 51
        },
        {
            x: 'PQR',
            y: 30
        },
        {
            x: 'MNO',
            y: 20
        },
        {
            x: 'CDE',
            y: 30
        }
        ]
    }
    ]
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
            text: 'Multi-dimensional Treemap',
            align: 'center',
            style: {
                fontWeight: 500,
            }
        },
        colors: chartTreemapMultiColors
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
export default MultiTreemap;