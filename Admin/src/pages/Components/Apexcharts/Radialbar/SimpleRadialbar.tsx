import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const SimpleRadialbar = ({ dataColors }:any) => {
    var chartRadialbarBasicColors = getChartColorsArray(dataColors);
    const series = [70]
    var options:any = {

        chart: {
            height: 350,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70%',
                }
            },
        },
        labels: ['Cricket'],
        colors: chartRadialbarBasicColors
    };
    return (
        <>
        
       <ReactApexChart
                dir='ltr'
            className="apex-charts"
            series={series}
            options={options}
            type="radialBar"
            height={350}
        />
        
        </>
    )
}
export default SimpleRadialbar;