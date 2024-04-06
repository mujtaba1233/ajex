import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';



const SimpleDonut = ({ dataColors }:any) => {
    var chartDonutBasicColors = getChartColorsArray(dataColors);
    const series = [44, 55, 41, 17, 15]
    var options:any = {
        chart: {
            height: 300,
            type: 'donut',
        },
        legend: {
            position: 'bottom'
        },
        dataLabels: {
            dropShadow: {
                enabled: false,
            }
        },
        colors: chartDonutBasicColors
    };
    return (
        <>
        
       <ReactApexChart
                dir='ltr'
            className="apex-charts"
            series={series}
            options={options}
            type="donut"
            height="300px"
        />
        
        </>

    )
}

export default SimpleDonut;