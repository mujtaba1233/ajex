import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const RangeColumn = ({ dataColors }: any) => {
    var chartRangeColors = getChartColorsArray(dataColors);
    const series = [
        {
            data: [
                {
                    x: "Team A",
                    y: [1, 5],
                },
                {
                    x: "Team B",
                    y: [4, 6],
                },
                {
                    x: "Team C",
                    y: [5, 8],
                },
                {
                    x: "Team D",
                    y: [3, 11],
                },
            ],
        },
        {
            data: [
                {
                    x: "Team A",
                    y: [2, 6],
                },
                {
                    x: "Team B",
                    y: [1, 3],
                },
                {
                    x: "Team C",
                    y: [7, 8],
                },
                {
                    x: "Team D",
                    y: [5, 9],
                },
            ],
        },
    ];
    var options: any = {
        chart: {
            type: "rangeBar",
            height: 335,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
            },
        },
        dataLabels: {
            enabled: !0,
        },
        legend: {
            show: !1,
        },
        colors: chartRangeColors,
    };

    return (
        <>
            <ReactApexChart
                dir='ltr' className="apex-charts"
                options={options}
                series={series}
                type="rangeBar"
                height={335}
            />
        </>
    );
};

export default RangeColumn;