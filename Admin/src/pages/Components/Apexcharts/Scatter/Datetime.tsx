import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from "react";
import ReactApexChart from "react-apexcharts";


const Datetime = ({ dataColors }:any) => {
    var chartScatterDateTimeColors = getChartColorsArray(dataColors);
    const generateDayWiseTimeSeries = (baseval:any, count:any, yrange:any) => {
        var i = 0;
        var series = [];
        while (i < count) {
            var y =
                Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            series.push([baseval, y]);
            baseval += 86400000;
            i++;
        }
        return series;
    };

    const series = [
        {
            name: "TEAM 1",
            data: generateDayWiseTimeSeries(
                new Date("11 Feb 2017 GMT").getTime(),
                20,
                {
                    min: 10,
                    max: 60,
                }
            ),
        },
        {
            name: "TEAM 2",
            data: generateDayWiseTimeSeries(
                new Date("11 Feb 2017 GMT").getTime(),
                20,
                {
                    min: 10,
                    max: 60,
                }
            ),
        },
        {
            name: "TEAM 3",
            data: generateDayWiseTimeSeries(
                new Date("11 Feb 2017 GMT").getTime(),
                30,
                {
                    min: 10,
                    max: 60,
                }
            ),
        },
        {
            name: "TEAM 4",
            data: generateDayWiseTimeSeries(
                new Date("11 Feb 2017 GMT").getTime(),
                10,
                {
                    min: 10,
                    max: 60,
                }
            ),
        },
        {
            name: "TEAM 5",
            data: generateDayWiseTimeSeries(
                new Date("11 Feb 2017 GMT").getTime(),
                30,
                {
                    min: 10,
                    max: 60,
                }
            ),
        },
    ];

    const options:any = {
        chart: {
            zoom: {
                type: "xy",
            },
            toolbar: {
                show: !1,
            },
        },
        dataLabels: {
            enabled: !1,
        },
        grid: {
            xaxis: {
                lines: {
                    show: !0,
                },
            },
            yaxis: {
                lines: {
                    show: !0,
                },
            },
        },
        xaxis: {
            type: "datetime",
        },
        yaxis: {
            max: 70,
        },
        colors: chartScatterDateTimeColors,
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
export default Datetime;