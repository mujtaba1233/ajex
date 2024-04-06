import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const DynamicColumn = ({ dataColors }: any) => {
    var chartColumnColors = getChartColorsArray(dataColors);
    const colors = chartColumnColors;
    const shuffleArray = (array1: any) => {
        for (var i = array1.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array1[i];
            array1[i] = array1[j];
            array1[j] = temp;
        }
        return array1;
    };

    const arrayData = [
        {
            y: 400,
            quarters: [
                {
                    x: "Q1",
                    y: 120,
                },
                {
                    x: "Q2",
                    y: 90,
                },
                {
                    x: "Q3",
                    y: 100,
                },
                {
                    x: "Q4",
                    y: 90,
                },
            ],
        },
        {
            y: 430,
            quarters: [
                {
                    x: "Q1",
                    y: 120,
                },
                {
                    x: "Q2",
                    y: 110,
                },
                {
                    x: "Q3",
                    y: 90,
                },
                {
                    x: "Q4",
                    y: 110,
                },
            ],
        },
        {
            y: 448,
            quarters: [
                {
                    x: "Q1",
                    y: 70,
                },
                {
                    x: "Q2",
                    y: 100,
                },
                {
                    x: "Q3",
                    y: 140,
                },
                {
                    x: "Q4",
                    y: 138,
                },
            ],
        },
        {
            y: 470,
            quarters: [
                {
                    x: "Q1",
                    y: 150,
                },
                {
                    x: "Q2",
                    y: 60,
                },
                {
                    x: "Q3",
                    y: 190,
                },
                {
                    x: "Q4",
                    y: 70,
                },
            ],
        },
        {
            y: 540,
            quarters: [
                {
                    x: "Q1",
                    y: 120,
                },
                {
                    x: "Q2",
                    y: 120,
                },
                {
                    x: "Q3",
                    y: 130,
                },
                {
                    x: "Q4",
                    y: 170,
                },
            ],
        },
        {
            y: 580,
            quarters: [
                {
                    x: "Q1",
                    y: 170,
                },
                {
                    x: "Q2",
                    y: 130,
                },
                {
                    x: "Q3",
                    y: 120,
                },
                {
                    x: "Q4",
                    y: 160,
                },
            ],
        },
    ];

    const makeData = () => {
        var dataSet = shuffleArray(arrayData);

        var dataYearSeries = [
            {
                x: "2011",
                y: dataSet[0].y,
                color: colors[0],
                quarters: dataSet[0].quarters,
            },
            {
                x: "2012",
                y: dataSet[1].y,
                color: colors[1],
                quarters: dataSet[1].quarters,
            },
            {
                x: "2013",
                y: dataSet[2].y,
                color: colors[2],
                quarters: dataSet[2].quarters,
            },
            {
                x: "2014",
                y: dataSet[3].y,
                color: colors[3],
                quarters: dataSet[3].quarters,
            },
            {
                x: "2015",
                y: dataSet[4].y,
                color: colors[4],
                quarters: dataSet[4].quarters,
            },
            {
                x: "2016",
                y: dataSet[5].y,
                color: colors[5],
                quarters: dataSet[5].quarters,
            },
        ];
        return dataYearSeries;
    };

    const updateQuarterChart = (sourceChart: any, destChartIDToUpdate: any) => {
        var series = [];
        var seriesIndex = 0;
        var colors = [];

        if (sourceChart.w.globals.selectedDataPoints[0]) {
            var selectedPoints = sourceChart.w.globals.selectedDataPoints;
            for (var i = 0; i < selectedPoints[seriesIndex].length; i++) {
                var selectedIndex = selectedPoints[seriesIndex][i];
                var yearSeries = sourceChart.w.config.series[seriesIndex];
                series.push({
                    name: yearSeries.data[selectedIndex].x,
                    data: yearSeries.data[selectedIndex].quarters,
                });
                colors.push(yearSeries.data[selectedIndex].color);
            }

            if (series.length === 0)
                series = [
                    {
                        data: [],
                    },
                ];


        };
    };

    const series = [
        {
            data: makeData(),
        },
    ];

    const options: any = {

        chart: {
            id: "barYear",
            height: 330,
            width: "100%",
            events: {
                dataPointSelection: function (e: any, chart: any, opts: any) {
                    const quarterChartEl = document.querySelector("#chart-quarter");
                    const yearChartEl = document.querySelector("#chart-year");

                    if (opts.selectedDataPoints[0].length === 1) {
                        if (quarterChartEl) {
                            if (quarterChartEl.classList.contains("active")) {
                                updateQuarterChart(chart, "barQuarter");
                            } else {
                                if (yearChartEl) {
                                    yearChartEl.classList.add("chart-quarter-activated");
                                }
                                quarterChartEl.classList.add("active");
                                updateQuarterChart(chart, "barQuarter");
                            }
                        }
                    } else {
                        updateQuarterChart(chart, "barQuarter");
                    }

                    if (opts.selectedDataPoints[0].length === 0) {
                        if (yearChartEl) {
                            yearChartEl.classList.remove("chart-quarter-activated");
                        }
                        if (quarterChartEl) {
                            quarterChartEl.classList.remove("active");
                        }
                    }
                },
                updated: function (chart: any) {
                    updateQuarterChart(chart, "barQuarter");
                },
            },
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                distributed: !0,
                horizontal: !0,
                barHeight: "75%",
                dataLabels: {
                    position: "bottom",
                },
            },
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: true,
            textAnchor: "start",
            style: {
                colors: ["#fff"],
            },
            formatter: function (val: any, opt: any) {
                return opt.w.globals.labels[opt.dataPointIndex];
            },
            offsetX: 0,
            dropShadow: {
                enabled: !1,
            },
        },

        colors: colors,

        states: {
            normal: {
                filter: {
                    type: "desaturate",
                },
            },
            active: {
                allowMultipleDataPointsSelection: !0,
                filter: {
                    type: "darken",
                    value: 1,
                },
            },
        },
        tooltip: {
            x: {
                show: !1,
            },
            y: {
                title: {
                    formatter: function (val: any, opts: any) {
                        return opts.w.globals.labels[opts.dataPointIndex];
                    },
                },
            },
        },
        title: {
            text: "Yearly Results",
            offsetX: 15,
            style: {
                fontWeight: 600,
            },
        },
        subtitle: {
            text: "(Click on bar to see details)",
            offsetX: 15,
        },
        yaxis: {
            labels: {
                show: !1,
            },
        },
        grid: {
            yaxis: {
                lines: {
                    show: false,
                }
            },
            xaxis: {
                lines: {
                    show: true,
                }
            }
        },
    };

    return (
        <>

            <ReactApexChart
                dir='ltr' className="apex-charts" series={series} options={options} type="bar" height={328} />

        </>
    )
};

export default DynamicColumn;