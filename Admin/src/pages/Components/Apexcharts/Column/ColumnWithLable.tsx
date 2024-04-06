import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const ColumnWithLable = ({ dataColors }:any) => {
    var chartColumnDatatalabelColors = getChartColorsArray(dataColors);
    const series = [
        {
            name: "Inflation",
            data: [2.5, 3.2, 5.0, 10.1, 4.2, 3.8, 3, 2.4, 4.0, 1.2, 3.5, 0.8],
        },
    ];

    const options:any = {
        chart: {
            toolbar: {
                show: !1,
            },
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    position: "top", // top, center, bottom
                },
            },
        },
        dataLabels: {
            enabled: !0,
            formatter: function (val:any) {
                return val + "%";
            },
            offsetY: -20,
            style: {
                fontSize: "12px",
                colors: ["#adb5bd"],
            },
        },
        colors: chartColumnDatatalabelColors,
        grid: {
            borderColor: "#f1f1f1",
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            position: "top",
            labels: {
                offsetY: -18,
            },
            axisBorder: {
                show: !1,
            },
            axisTicks: {
                show: !1,
            },
            crosshairs: {
                fill: {
                    type: "gradient",
                    gradient: {
                        colorFrom: "#D8E3F0",
                        colorTo: "#BED1E6",
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    },
                },
            },
            tooltip: {
                enabled: !0,
                offsetY: -35,
            },
        },
        fill: {
            gradient: {
                shade: "light",
                type: "horizontal",
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: !0,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [50, 0, 100, 100],
            },
        },
        yaxis: {
            axisBorder: {
                show: !1,
            },
            axisTicks: {
                show: !1,
            },
            labels: {
                show: !1,
                formatter: function (val:any) {
                    return val + "%";
                },
            },
        },
        title: {
            text: "Monthly Inflation in Argentina, 2002",
            floating: !0,
            offsetY: 320,
            align: "center",
            style: {
                color: "#444",
                fontWeight: 500,
            },
        },
    };

    return (
        <React.Fragment>
        
       <ReactApexChart
                dir='ltr'
         className="apex-charts" 
         series={series} 
         options={options} 
         type="bar" 
         height={350} />
        
        </React.Fragment>
    );
};

export default ColumnWithLable;