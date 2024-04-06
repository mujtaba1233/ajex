import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';



const UpdateDonut = ({ dataColors }:any) => {
    var chartDonutupdatingColors = getChartColorsArray(dataColors);
    const series = [44, 55, 13, 33]
    var options:any = {
        chart: {
            height: 280,
            type: 'donut',
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            position: 'bottom'
        },
        colors: chartDonutupdatingColors
    };
    return (
        <>
        
       <ReactApexChart
                dir='ltr'
            className="apex-charts"
            series={series}
            options={options}
            type="donut"
            height="280px"
        />
        
        </>

    )
}

export default UpdateDonut;