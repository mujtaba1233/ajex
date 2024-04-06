import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const LineColumnArea = ({ dataColors }:any) => {
    var chartLineAreaMultiColors = getChartColorsArray(dataColors);
    const series = [
        {
            name: "TEAM A",
            type: "column",
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
        },
        {
            name: "TEAM B",
            type: "area",
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        },
        {
            name: "TEAM C",
            type: "line",
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
        },
    ];
    const options:any = {
        chart: {
            stacked: !1,
            toolbar: {
                show: !1,
            },
        },
        stroke: {
            width: [0, 2, 5],
            curve: "smooth",
        },
        plotOptions: {
            bar: {
                columnWidth: "50%",
            },
        },

        fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
                inverseColors: !1,
                shade: "light",
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100],
            },
        },
        labels: [
            "01/01/2003",
            "02/01/2003",
            "03/01/2003",
            "04/01/2003",
            "05/01/2003",
            "06/01/2003",
            "07/01/2003",
            "08/01/2003",
            "09/01/2003",
            "10/01/2003",
            "11/01/2003",
        ],
        markers: {
            size: 0,
        },
        xaxis: {
            type: "datetime",
        },
        yaxis: {
            title: {
                text: "Points",
            },
            min: 0,
        },
        tooltip: {
            shared: !0,
            intersect: !1,
            y: {
                formatter: function (y:any) {
                    if (typeof y !== "undefined") {
                        return y.toFixed(0) + " points";
                    }
                    return y;
                },
            },
        },
        colors: chartLineAreaMultiColors,
    };

    return (
        <React.Fragment>
           <ReactApexChart
                dir='ltr'
                className="apex-charts"
                options={options}
                series={series}
                type="line"
                height={350}
            />
        </React.Fragment>
    );
};

export default LineColumnArea;