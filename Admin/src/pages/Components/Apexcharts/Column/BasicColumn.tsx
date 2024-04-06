import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const BasicColumn = ({ dataColors }: any) => {
    var chartColumnColors = getChartColorsArray(dataColors);
    const series = [
        {
            name: "Net Profit",
            data: [46, 57, 59, 54, 62, 58, 64, 60, 66],
        },
        {
            name: "Revenue",
            data: [74, 83, 102, 97, 86, 106, 93, 114, 94],
        },
        {
            name: "Free Cash Flow",
            data: [37, 42, 38, 26, 47, 50, 54, 55, 43],
        },
    ];

    var options: any = {
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '45%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        colors: chartColumnColors,
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
            title: {
                text: '$ (thousands)'
            }
        },
        grid: {
            borderColor: '#f1f1f1',
        },
        fill: {
            opacity: 1

        },
        tooltip: {
            y: {
                formatter: function (val: any) {
                    return "$ " + val + " thousands";
                }
            }
        }
    };


    return (
        <React.Fragment>

           <ReactApexChart
                dir='ltr'
                className="apex-charts"
                series={series}
                options={options}
                type="bar"
                height={350}
            />

        </React.Fragment>
    );
};

export default BasicColumn;