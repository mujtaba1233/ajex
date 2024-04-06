import React from "react";

import avatar1 from "../../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../../assets/images/users/avatar-2.jpg";
import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import ReactApexChart from "react-apexcharts";



const ImagesChart = ({ dataColors }:any) => {
    var chartScatterImagesColors = getChartColorsArray(dataColors);
    const series = [
        {
            name: "User A",
            data: [
                [16.4, 5.4],
                [21.7, 4],
                [25.4, 3],
                [19, 2],
                [10.9, 1],
                [13.6, 3.2],
                [10.9, 7],
                [10.9, 8.2],
                [16.4, 4],
                [13.6, 4.3],
                [13.6, 12],
                [29.9, 3],
                [10.9, 5.2],
                [16.4, 6.5],
                [10.9, 8],
                [24.5, 7.1],
                [10.9, 7],
                [8.1, 4.7],
            ],
        },
        {
            name: "User B",
            data: [
                [6.4, 5.4],
                [11.7, 4],
                [15.4, 3],
                [9, 2],
                [10.9, 11],
                [20.9, 7],
                [12.9, 8.2],
                [6.4, 14],
                [11.6, 12],
            ],
        },
    ];

    const options:any = {
        chart: {
            animations: {
                enabled: !1,
            },
            zoom: {
                enabled: !1,
            },
            toolbar: {
                show: !1,
            },
        },
        colors: chartScatterImagesColors,
        xaxis: {
            tickAmount: 10,
            min: 0,
            max: 40,
        },
        yaxis: {
            tickAmount: 7,
        },
        markers: {
            size: 20,
        },
        fill: {
            type: "image",
            opacity: 1,
            image: {
                src: [
                    avatar1,
                    avatar2,
                ],
                width: 40,
                height: 40,
            },
        },
        legend: {
            labels: {
                useSeriesColors: !0,
            },
            markers: {
                customHTML: [
                    function () {
                        return "";
                    },
                    function () {
                        return "";
                    },
                ],
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
                type="scatter"
                height={350}
            />
            
        </React.Fragment>
    );
};
export default ImagesChart;