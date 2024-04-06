import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const Area = ({ dataColors }:any) => {
    var chartLineAreaColors = getChartColorsArray(dataColors);
    const series = [
        {
            name: "TEAM A",
            type: "area",
            data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],
        },
        {
            name: "TEAM B",
            type: "line",
            data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
        },
    ];

    var options:any = {
        chart: {
            toolbar: {
                show: !1,
            },
        },
        stroke: {
            curve: "smooth",
        },
        fill: {
            type: "solid",
            opacity: [0.35, 1],
        },
        labels: [
            "Dec 01",
            "Dec 02",
            "Dec 03",
            "Dec 04",
            "Dec 05",
            "Dec 06",
            "Dec 07",
            "Dec 08",
            "Dec 09 ",
            "Dec 10",
            "Dec 11",
        ],
        markers: {
            size: 0,
        },
        yaxis: [
            {
                title: {
                    text: "Series A",
                },
            },
            {
                opposite: !0,
                title: {
                    text: "Series B",
                },
            },
        ],
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
        colors: chartLineAreaColors,
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

export default Area;