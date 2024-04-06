import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const Negative = ({ dataColors }:any) => {
    var chartNegativeBarColors = getChartColorsArray(dataColors);
    const series = [
        {
            name: "Males",
            data: [
                0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2,
                4.5, 3.9, 3.5, 3,
            ],
        },
        {
            name: "Females",
            data: [
                -0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3,
                -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8,
            ],
        },
    ];

    const options:any = {
        chart: {
            type: "bar",
            height: 360,
            stacked: !0,
            toolbar: {
                show: !1,
            },
        },
        colors: chartNegativeBarColors,
        plotOptions: {
            bar: {
                horizontal: !0,
                barHeight: "80%",
            },
        },
        dataLabels: {
            enabled: !1,
        },
        stroke: {
            width: 1,
            colors: ["#fff"],
        },

        grid: {
            xaxis: {
                lines: {
                    show: !1,
                },
            },
        },
        yaxis: {
            min: -5,
            max: 5,
            title: {
                text: "Age",
                style: {
                    fontWeight: 600,
                },
            },
        },
        tooltip: {
            shared: !1,
            x: {
                formatter: function (val:any) {
                    return val;
                },
            },
            y: {
                formatter: function (val:any) {
                    return Math.abs(val) + "%";
                },
            },
        },
        title: {
            text: "Mauritius population pyramid 2011",
            style: {
                fontWeight: 500,
            },
        },
        xaxis: {
            categories: [
                "85+",
                "80-84",
                "75-79",
                "70-74",
                "65-69",
                "60-64",
                "55-59",
                "50-54",
                "45-49",
                "40-44",
                "35-39",
                "30-34",
                "25-29",
                "20-24",
                "15-19",
                "10-14",
                "5-9",
                "0-4",
            ],
            title: {
                text: "Percent",
            },
            labels: {
                formatter: function (val:any) {
                    return Math.abs(Math.round(val)) + "%";
                },
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

export default Negative;