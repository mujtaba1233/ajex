import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';



const SimplePie = ({ dataColors }:any) => {
    var chartPieBasicColors = getChartColorsArray(dataColors);
    const series = [44, 55, 13, 43, 22]
    var options:any = {
        chart: {
            height: 300,
            type: 'pie',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        legend: {
            position: 'bottom'
        },
        dataLabels: {
            dropShadow: {
                enabled: false,
            }
        },
        colors: chartPieBasicColors
    };
    return (
        <>
        
       <ReactApexChart
                dir='ltr'
            className="apex-charts"
            series={series}
            options={options}
            type="pie"
            height="300px"
        />
        
        </>
    )
}
export default SimplePie;