import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';




const GradientDonut = ({ dataColors }: any) => {
    var chartPieGradientColors = getChartColorsArray(dataColors);
    const series = [44, 55, 41, 17, 15]
    var options: any = {

        chart: {
            height: 300,
            type: 'donut',
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 270
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'gradient',
        },
        legend: {
            position: 'bottom',
            formatter: function (val: any, opts: any) {
                return val + " - " + opts.w.globals.series[opts.seriesIndex]
            }
        },
        title: {
            text: 'Gradient Donut with custom Start-angle',
            style: {
                fontWeight: 500,
            },
        },
        colors: chartPieGradientColors
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

export default GradientDonut;