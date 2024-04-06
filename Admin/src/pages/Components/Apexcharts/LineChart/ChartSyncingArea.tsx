import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


function generateDayWiseTimeSeriesline(baseval:any, count:any, yrange:any) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push([x, y]);
        baseval += 86400000;
        i++;
    }
    return series;
}

const ChartSyncingArea = ({ dataColors } :any ) => {
    var ChartSyncingAreaColors = getChartColorsArray(dataColors);
    const series = [{
        data: generateDayWiseTimeSeriesline(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 60
        })
    }];
    var options:any = {
        chart: {
            id: 'yt',
            group: 'social',
            type: 'area',
            height: 160,
            toolbar: {
                show: false
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
            width: 3,
        },
        toolbar: {
            tools: {
                selection: false
            }
        },
        colors: ChartSyncingAreaColors,
        markers: {
            size: 4,
            hover: {
                size: 6
            }
        },
        tooltip: {
            followCursor: false,
            x: {
                show: false
            },
            marker: {
                show: false
            },
            y: {
                title: {
                    formatter: function () {
                        return '';
                    }
                }
            }
        },
        grid: {
            clipMarkers: false
        },
        yaxis: {
            tickAmount: 2
        },
        xaxis: {
            type: 'datetime'
        }
    };
    return (
        <React.Fragment>
           <ReactApexChart
                dir='ltr'
                options={options}
                series={series}
                type="area"
                height="160"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

export default ChartSyncingArea;