import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const GradientCharts = ({ dataColors } :any ) => {
    var GradientChartsColors = getChartColorsArray(dataColors);
    const series = [{
        name: 'Likes',
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
    }];
    var options:any = {
        chart: {
            height: 350,
            type: 'line',
            toolbar: {
                show: false
            },
        },
        stroke: {
            width: 7,
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: ['1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001', '7/11/2001', '8/11/2001', '9/11/2001', '10/11/2001', '11/11/2001', '12/11/2001', '1/11/2002', '2/11/2002', '3/11/2002', '4/11/2002', '5/11/2002', '6/11/2002'],
            tickAmount: 10,
        },
        title: {
            text: 'Social Media',
            align: 'left',
            style: {
                fontWeight: 500,
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: GradientChartsColors,
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            },
        },
        markers: {
            size: 4,
            colors: ["#038edc"],
            strokeColors: "#fff",
            strokeWidth: 2,
            hover: {
                size: 7,
            }
        },
        yaxis: {
            min: -10,
            max: 40,
            title: {
                text: 'Engagement',
            },
        }
    };

    return (
        <React.Fragment>
           <ReactApexChart
                dir='ltr'
                options={options}
                series={series}
                type="line"
                height={350}
                className="apex-charts"
            />
        </React.Fragment>
    );
};

export default GradientCharts;