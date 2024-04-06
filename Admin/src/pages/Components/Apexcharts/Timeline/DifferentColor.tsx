import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import moment from 'moment';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const DifferentColor = ({ dataColors }:any) => {
    var chartTimelineColors = getChartColorsArray(dataColors);
    const series = [
        {
            data: [
                {
                    x: 'Analysis',
                    y: [
                        new Date('2019-02-27').getTime(),
                        new Date('2019-03-04').getTime()
                    ],
                    fillColor: chartTimelineColors[0]
                },
                {
                    x: 'Design',
                    y: [
                        new Date('2019-03-04').getTime(),
                        new Date('2019-03-08').getTime()
                    ],
                    fillColor: chartTimelineColors[1]
                },
                {
                    x: 'Coding',
                    y: [
                        new Date('2019-03-07').getTime(),
                        new Date('2019-03-10').getTime()
                    ],
                    fillColor: chartTimelineColors[2]
                },
                {
                    x: 'Testing',
                    y: [
                        new Date('2019-03-08').getTime(),
                        new Date('2019-03-12').getTime()
                    ],
                    fillColor: chartTimelineColors[3]
                },
                {
                    x: 'Deployment',
                    y: [
                        new Date('2019-03-12').getTime(),
                        new Date('2019-03-17').getTime()
                    ],
                    fillColor: chartTimelineColors[4]
                },
            ],
        },
    ];

    const options:any = {
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
                distributed: true,
                dataLabels: {
                    hideOverflowingLabels: false
                }
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val:any, opts:any) {
                var label = opts.w.globals.labels[opts.dataPointIndex]
                var a = moment(val[0])
                var b = moment(val[1])
                var diff = b.diff(a, 'days')
                return label + ': ' + diff + (diff > 1 ? ' days' : ' day')
            },
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            show: true
        },
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
export default DifferentColor;