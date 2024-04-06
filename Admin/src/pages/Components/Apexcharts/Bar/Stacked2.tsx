import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const Stacked2 = ({ dataColors }:any) => {
    var chartStackedBar100Colors = getChartColorsArray(dataColors);
    const series = [
        {
            name: "Marine Sprite",
            data: [44, 55, 41, 37, 22, 43, 21],
        },
        {
            name: "Striking Calf",
            data: [53, 32, 33, 52, 13, 43, 32],
        },
        {
            name: "Tank Picture",
            data: [12, 17, 11, 9, 15, 11, 20],
        },
        {
            name: "Bucket Slope",
            data: [9, 7, 5, 8, 6, 9, 4],
        },
        {
            name: "Reborn Kid",
            data: [25, 12, 19, 32, 25, 24, 10],
        },
    ];

    const options:any = {
        chart: {
            stacked: !0,
            stackType: "100%",
            toolbar: {
                show: !1,
            },
        },
        plotOptions: {
            bar: {
                horizontal: !0,
            },
        },
        stroke: {
            width: 1,
            colors: ["#fff"],
        },
        grid: {
            padding: {
                bottom: -14,
                left: 0,
                right: 0
            }
        },
        title: {
            text: "100% Stacked Bar",
            style: {
                fontWeight: 600,
            },
        },
        xaxis: {
            categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        },
        tooltip: {
            y: {
                formatter: function (val:any) {
                    return val + "K";
                },
            },
        },
        fill: {
            opacity: 1,
        },
        legend: {
            position: "top",
            horizontalAlign: "left",
            offsetX: 40,
        },
        colors: chartStackedBar100Colors,
    };

    return (
        <React.Fragment>
            
           <ReactApexChart
                dir='ltr'
                
                className="apex-charts"
                options={options}
                series={series}
                type="bar"
                height={350}
            />
            
        </React.Fragment>
    );
};

export default Stacked2;