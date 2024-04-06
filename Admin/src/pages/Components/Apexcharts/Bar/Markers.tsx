import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const Markers = ({ dataColors }:any) => {
    var chartBarMarkersColors = getChartColorsArray(dataColors);
    const series = [
        {
            name: "Actual",
            data: [
                {
                    x: "2011",
                    y: 12,
                    goals: [
                        {
                            name: "Expected",
                            value: 14,
                            strokeWidth: 5,
                            strokeColor: "#564ab1",
                        },
                    ],
                },
                {
                    x: "2012",
                    y: 44,
                    goals: [
                        {
                            name: "Expected",
                            value: 54,
                            strokeWidth: 5,
                            strokeColor: "#564ab1",
                        },
                    ],
                },
                {
                    x: "2013",
                    y: 54,
                    goals: [
                        {
                            name: "Expected",
                            value: 52,
                            strokeWidth: 5,
                            strokeColor: "#564ab1",
                        },
                    ],
                },
                {
                    x: "2014",
                    y: 66,
                    goals: [
                        {
                            name: "Expected",
                            value: 65,
                            strokeWidth: 5,
                            strokeColor: "#564ab1",
                        },
                    ],
                },
                {
                    x: "2015",
                    y: 81,
                    goals: [
                        {
                            name: "Expected",
                            value: 66,
                            strokeWidth: 5,
                            strokeColor: "#564ab1",
                        },
                    ],
                },
                {
                    x: "2016",
                    y: 67,
                    goals: [
                        {
                            name: "Expected",
                            value: 70,
                            strokeWidth: 5,
                            strokeColor: "#564ab1",
                        },
                    ],
                },
            ],
        },
    ];

    var options:any = {
        chart: {
            toolbar: {
                show: false,
            },
        },
        grid: {
            padding: {
                bottom: -14,
                left: 0,
                right: 0
            }
        },  
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        colors: chartBarMarkersColors,
        dataLabels: {
            formatter: function (val:any, opt:any) {
                var goals =
                    opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].goals;

                if (goals && goals.length) {
                    return `${val} / ${goals[0].value}`
                }
                return val;
            },
        },
        legend: {
            show: true,
            showForSingleSeries: true,
            customLegendItems: ["Actual", "Expected"],
            Markers: {
                fillColors: ["#00E396", "#775DD0"],
            },
        },
    };

    return (
        <React.Fragment>
           <ReactApexChart
                dir='ltr'
              
                className="apex-charts"
                options={options}
                series={series}
                type="bar"
                height={360}
            />
        </React.Fragment>
    );
};

export default Markers;