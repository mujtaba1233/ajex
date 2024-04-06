import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';



const YAxis = ({ dataColors }:any) => {
    var chartMultiColors = getChartColorsArray(dataColors);
    const series = [
        {
            name: "Income",
            type: "column",
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
        },
        {
            name: "Cashflow",
            type: "column",
            data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
        },
        {
            name: "Revenue",
            type: "line",
            data: [20, 29, 37, 36, 44, 45, 50, 58],
        },
    ];

    var options:any = {
        chart: {
            stacked: !1,
            toolbar: {
                show: !1,
            },
        },
        dataLabels: {
            enabled: !1,
        },
        stroke: {
            width: [1, 1, 4],
        },
        title: {
            text: "XYZ - Stock Analysis (2009 - 2016)",
            align: "left",
            offsetX: 110,
            style: {
                fontWeight: 500,
            },
        },
        xaxis: {
            categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        },
        yaxis: [
            {
                axisTicks: {
                    show: !0,
                },
                axisBorder: {
                    show: !0,
                    color: "#038edc",
                },
                labels: {
                    style: {
                        colors: "#038edc",
                    },
                },
                title: {
                    text: "Income (thousand crores)",
                    style: {
                        color: "#038edc",
                        fontWeight: 600,
                    },
                },
                tooltip: {
                    enabled: !0,
                },
            },
            {
                seriesName: "Income",
                opposite: !0,
                axisTicks: {
                    show: !0,
                },
                axisBorder: {
                    show: !0,
                    color: "#038edc",
                },
                labels: {
                    style: {
                        colors: "#038edc",
                    },
                },
                title: {
                    text: "Operating Cashflow (thousand crores)",
                    style: {
                        color: "#038edc",
                        fontWeight: 500,
                    },
                },
            },
            {
                seriesName: "Revenue",
                opposite: !0,
                axisTicks: {
                    show: !0,
                },
                axisBorder: {
                    show: !0,
                    color: "#51d28c",
                },
                labels: {
                    style: {
                        colors: "#51d28c",
                    },
                },
                title: {
                    text: "Revenue (thousand crores)",
                    style: {
                        color: "#51d28c",
                        fontWeight: 500,
                    },
                },
            },
        ],
        tooltip: {
            fixed: {
                enabled: !0,
                position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
                offsetY: 30,
                offsetX: 60,
            },
        },
        legend: {
            horizontalAlign: "left",
            offsetX: 40,
        },
        colors: chartMultiColors,
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

export default YAxis;