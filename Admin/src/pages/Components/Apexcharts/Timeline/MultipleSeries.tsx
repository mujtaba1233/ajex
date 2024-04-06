import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';



const MultipleSeries = ({ dataColors }: any) => {
    var chartMultiSeriesColors = getChartColorsArray(dataColors);
    const series = [
        // George Washington
        {
            name: 'George Washington',
            data: [
                {
                    x: 'President',
                    y: [
                        new Date(1789, 3, 30).getTime(),
                        new Date(1797, 2, 4).getTime()
                    ]
                },
            ]
        },
        // John Adams
        {
            name: 'John Adams',
            data: [
                {
                    x: 'President',
                    y: [
                        new Date(1797, 2, 4).getTime(),
                        new Date(1801, 2, 4).getTime()
                    ]
                },
                {
                    x: 'Vice President',
                    y: [
                        new Date(1789, 3, 21).getTime(),
                        new Date(1797, 2, 4).getTime()
                    ]
                }
            ]
        },
        // Thomas Jefferson
        {
            name: 'Thomas Jefferson',
            data: [
                {
                    x: 'President',
                    y: [
                        new Date(1801, 2, 4).getTime(),
                        new Date(1809, 2, 4).getTime()
                    ]
                },
                {
                    x: 'Vice President',
                    y: [
                        new Date(1797, 2, 4).getTime(),
                        new Date(1801, 2, 4).getTime()
                    ]
                },
                {
                    x: 'Secretary of State',
                    y: [
                        new Date(1790, 2, 22).getTime(),
                        new Date(1793, 11, 31).getTime()
                    ]
                }
            ]
        },
        // Aaron Burr
        {
            name: 'Aaron Burr',
            data: [
                {
                    x: 'Vice President',
                    y: [
                        new Date(1801, 2, 4).getTime(),
                        new Date(1805, 2, 4).getTime()
                    ]
                }
            ]
        },
        // George Clinton
        {
            name: 'George Clinton',
            data: [
                {
                    x: 'Vice President',
                    y: [
                        new Date(1805, 2, 4).getTime(),
                        new Date(1812, 3, 20).getTime()
                    ]
                }
            ]
        },
        // John Jay
        {
            name: 'John Jay',
            data: [
                {
                    x: 'Secretary of State',
                    y: [
                        new Date(1789, 8, 25).getTime(),
                        new Date(1790, 2, 22).getTime()
                    ]
                }
            ]
        },
        // Edmund Randolph
        {
            name: 'Edmund Randolph',
            data: [
                {
                    x: 'Secretary of State',
                    y: [
                        new Date(1794, 0, 2).getTime(),
                        new Date(1795, 7, 20).getTime()
                    ]
                }
            ]
        },
        // Timothy Pickering
        {
            name: 'Timothy Pickering',
            data: [
                {
                    x: 'Secretary of State',
                    y: [
                        new Date(1795, 7, 20).getTime(),
                        new Date(1800, 4, 12).getTime()
                    ]
                }
            ]
        },
        // Charles Lee
        {
            name: 'Charles Lee',
            data: [
                {
                    x: 'Secretary of State',
                    y: [
                        new Date(1800, 4, 13).getTime(),
                        new Date(1800, 5, 5).getTime()
                    ]
                }
            ]
        },
        // John Marshall
        {
            name: 'John Marshall',
            data: [
                {
                    x: 'Secretary of State',
                    y: [
                        new Date(1800, 5, 13).getTime(),
                        new Date(1801, 2, 4).getTime()
                    ]
                }
            ]
        }
    ];

    const options: any = {
        chart: {
            height: 350,
            type: 'rangeBar',
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '35%',
                rangeBarGroupRows: true
            },
        },
        fill: {
            type: 'solid'
        },
        legend: {
            position: 'right'
        },
        xaxis: {
            type: "datetime",
        },
        tooltip: {
            custom: function ({ series, seriesIndex, dataPointIndex, w }: any) {
                const fromYear = new Date(series[seriesIndex][dataPointIndex][0]).getFullYear();
                const toYear = new Date(series[seriesIndex][dataPointIndex][1]).getFullYear();
                const values = w.config.series[seriesIndex];


                return (
                    '<div className="apexcharts-tooltip-rangebar">' +
                    '<div> <span className="series-name" style="color: ' +
                    values.color +
                    '">' +
                    (values.seriesName ? values.seriesName : '') +
                    '</span></div>' +
                    '<div> <span className="category">' +
                    values.ylabel +
                    ' </span> <span className="value start-value">' +
                    fromYear +
                    '</span> <span className="separator">-</span> <span className="value end-value">' +
                    toYear +
                    '</span></div>' +
                    '</div>'
                )
            }
        },
        colors: chartMultiSeriesColors,
    };

    return (
        <React.Fragment>

            <ReactApexChart
                dir='ltr'
                className="apex-charts"
                options={options}
                series={series}
                type="rangeBar"
                height={350}
            />

        </React.Fragment>
    );
};
export default MultipleSeries;