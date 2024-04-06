import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const ZoomableTimeseries = ({ dataColors }:any) => {
    var ZoomableTimeseriesColors = getChartColorsArray(dataColors);
    const series = [{
        name: 'XYZ MOTORS',
        data: [{
            x: new Date('2018-01-12').getTime(),
            y: 140
        }, {
            x: new Date('2018-01-13').getTime(),
            y: 147
        }, {
            x: new Date('2018-01-14').getTime(),
            y: 150
        }, {
            x: new Date('2018-01-15').getTime(),
            y: 154
        }, {
            x: new Date('2018-01-16').getTime(),
            y: 160
        }, {
            x: new Date('2018-01-17').getTime(),
            y: 165
        }, {
            x: new Date('2018-01-18').getTime(),
            y: 162
        }, {
            x: new Date('2018-01-20').getTime(),
            y: 159
        }, {
            x: new Date('2018-01-21').getTime(),
            y: 164
        }, {
            x: new Date('2018-01-22').getTime(),
            y: 160
        }, {
            x: new Date('2018-01-23').getTime(),
            y: 165
        }, {
            x: new Date('2018-01-24').getTime(),
            y: 169
        }, {
            x: new Date('2018-01-25').getTime(),
            y: 172
        }, {
            x: new Date('2018-01-26').getTime(),
            y: 177
        }, {
            x: new Date('2018-01-27').getTime(),
            y: 173
        }, {
            x: new Date('2018-01-28').getTime(),
            y: 169
        }, {
            x: new Date('2018-01-29').getTime(),
            y: 163
        }, {
            x: new Date('2018-01-30').getTime(),
            y: 158
        }, {
            x: new Date('2018-02-01').getTime(),
            y: 153
        }, {
            x: new Date('2018-02-02').getTime(),
            y: 149
        }, {
            x: new Date('2018-02-03').getTime(),
            y: 144
        }, {
            x: new Date('2018-02-05').getTime(),
            y: 150
        }, {
            x: new Date('2018-02-06').getTime(),
            y: 155
        }, {
            x: new Date('2018-02-07').getTime(),
            y: 159
        }, {
            x: new Date('2018-02-08').getTime(),
            y: 163
        }, {
            x: new Date('2018-02-09').getTime(),
            y: 156
        }, {
            x: new Date('2018-02-11').getTime(),
            y: 151
        }, {
            x: new Date('2018-02-12').getTime(),
            y: 157
        }, {
            x: new Date('2018-02-13').getTime(),
            y: 161
        }, {
            x: new Date('2018-02-14').getTime(),
            y: 150
        }, {
            x: new Date('2018-02-15').getTime(),
            y: 154
        }, {
            x: new Date('2018-02-16').getTime(),
            y: 160
        }, {
            x: new Date('2018-02-17').getTime(),
            y: 165
        }, {
            x: new Date('2018-02-18').getTime(),
            y: 162
        }, {
            x: new Date('2018-02-20').getTime(),
            y: 159
        }, {
            x: new Date('2018-02-21').getTime(),
            y: 164
        }, {
            x: new Date('2018-02-22').getTime(),
            y: 160
        }, {
            x: new Date('2018-02-23').getTime(),
            y: 165
        }, {
            x: new Date('2018-02-24').getTime(),
            y: 169
        }, {
            x: new Date('2018-02-25').getTime(),
            y: 172
        }, {
            x: new Date('2018-02-26').getTime(),
            y: 177
        }, {
            x: new Date('2018-02-27').getTime(),
            y: 173
        }, {
            x: new Date('2018-02-28').getTime(),
            y: 169
        }, {
            x: new Date('2018-02-29').getTime(),
            y: 163
        }, {
            x: new Date('2018-02-30').getTime(),
            y: 162
        }, {
            x: new Date('2018-03-01').getTime(),
            y: 158
        }, {
            x: new Date('2018-03-02').getTime(),
            y: 152
        }, {
            x: new Date('2018-03-03').getTime(),
            y: 147
        }, {
            x: new Date('2018-03-05').getTime(),
            y: 142
        }, {
            x: new Date('2018-03-06').getTime(),
            y: 147
        }, {
            x: new Date('2018-03-07').getTime(),
            y: 151
        }, {
            x: new Date('2018-03-08').getTime(),
            y: 155
        }, {
            x: new Date('2018-03-09').getTime(),
            y: 159
        }, {
            x: new Date('2018-03-11').getTime(),
            y: 162
        }, {
            x: new Date('2018-03-12').getTime(),
            y: 157
        }, {
            x: new Date('2018-03-13').getTime(),
            y: 161
        }, {
            x: new Date('2018-03-14').getTime(),
            y: 166
        }, {
            x: new Date('2018-03-15').getTime(),
            y: 169
        }, {
            x: new Date('2018-03-16').getTime(),
            y: 172
        }, {
            x: new Date('2018-03-17').getTime(),
            y: 177
        }, {
            x: new Date('2018-03-18').getTime(),
            y: 181
        }, {
            x: new Date('2018-03-20').getTime(),
            y: 178
        }, {
            x: new Date('2018-03-21').getTime(),
            y: 173
        }, {
            x: new Date('2018-03-22').getTime(),
            y: 169
        }, {
            x: new Date('2018-03-23').getTime(),
            y: 163
        }, {
            x: new Date('2018-03-24').getTime(),
            y: 159
        }, {
            x: new Date('2018-03-25').getTime(),
            y: 164
        }, {
            x: new Date('2018-03-26').getTime(),
            y: 168
        }, {
            x: new Date('2018-03-27').getTime(),
            y: 172
        }, {
            x: new Date('2018-03-28').getTime(),
            y: 169
        }, {
            x: new Date('2018-03-29').getTime(),
            y: 163
        }, {
            x: new Date('2018-03-30').getTime(),
            y: 162
        }, {
            x: new Date('2018-04-01').getTime(),
            y: 158
        }, {
            x: new Date('2018-04-02').getTime(),
            y: 152
        }, {
            x: new Date('2018-04-03').getTime(),
            y: 147
        }, {
            x: new Date('2018-04-05').getTime(),
            y: 142
        }, {
            x: new Date('2018-04-06').getTime(),
            y: 147
        }, {
            x: new Date('2018-04-07').getTime(),
            y: 151
        }, {
            x: new Date('2018-04-08').getTime(),
            y: 155
        }, {
            x: new Date('2018-04-09').getTime(),
            y: 159
        }, {
            x: new Date('2018-04-11').getTime(),
            y: 162
        }, {
            x: new Date('2018-04-12').getTime(),
            y: 157
        }, {
            x: new Date('2018-04-13').getTime(),
            y: 161
        }, {
            x: new Date('2018-04-14').getTime(),
            y: 166
        }, {
            x: new Date('2018-04-15').getTime(),
            y: 169
        }, {
            x: new Date('2018-04-16').getTime(),
            y: 172
        }, {
            x: new Date('2018-04-17').getTime(),
            y: 177
        }, {
            x: new Date('2018-04-18').getTime(),
            y: 181
        }, {
            x: new Date('2018-04-20').getTime(),
            y: 178
        }, {
            x: new Date('2018-04-21').getTime(),
            y: 173
        }, {
            x: new Date('2018-04-22').getTime(),
            y: 169
        }, {
            x: new Date('2018-04-23').getTime(),
            y: 163
        }, {
            x: new Date('2018-04-24').getTime(),
            y: 159
        }, {
            x: new Date('2018-04-25').getTime(),
            y: 164
        }, {
            x: new Date('2018-04-26').getTime(),
            y: 168
        }, {
            x: new Date('2018-04-27').getTime(),
            y: 172
        }, {
            x: new Date('2018-04-28').getTime(),
            y: 169
        }, {
            x: new Date('2018-04-29').getTime(),
            y: 163
        }, {
            x: new Date('2018-04-30').getTime(),
            y: 162
        }, {
            x: new Date('2018-05-01').getTime(),
            y: 158
        }, {
            x: new Date('2018-05-02').getTime(),
            y: 152
        }, {
            x: new Date('2018-05-03').getTime(),
            y: 147
        }, {
            x: new Date('2018-05-04').getTime(),
            y: 142
        }, {
            x: new Date('2018-05-05').getTime(),
            y: 147
        }, {
            x: new Date('2018-05-07').getTime(),
            y: 151
        }, {
            x: new Date('2018-05-08').getTime(),
            y: 155
        }, {
            x: new Date('2018-05-09').getTime(),
            y: 159
        }, {
            x: new Date('2018-05-11').getTime(),
            y: 162
        }, {
            x: new Date('2018-05-12').getTime(),
            y: 157
        }, {
            x: new Date('2018-05-13').getTime(),
            y: 161
        }, {
            x: new Date('2018-05-14').getTime(),
            y: 166
        }, {
            x: new Date('2018-05-15').getTime(),
            y: 169
        }, {
            x: new Date('2018-05-16').getTime(),
            y: 172
        }, {
            x: new Date('2018-05-17').getTime(),
            y: 177
        }, {
            x: new Date('2018-05-18').getTime(),
            y: 181
        }, {
            x: new Date('2018-05-20').getTime(),
            y: 178
        }, {
            x: new Date('2018-05-21').getTime(),
            y: 173
        }, {
            x: new Date('2018-05-22').getTime(),
            y: 169
        }, {
            x: new Date('2018-05-23').getTime(),
            y: 163
        }, {
            x: new Date('2018-05-24').getTime(),
            y: 159
        }, {
            x: new Date('2018-05-25').getTime(),
            y: 164
        }, {
            x: new Date('2018-05-26').getTime(),
            y: 168
        }, {
            x: new Date('2018-05-27').getTime(),
            y: 172
        }, {
            x: new Date('2018-05-28').getTime(),
            y: 169
        }, {
            x: new Date('2018-05-29').getTime(),
            y: 163
        }, {
            x: new Date('2018-05-30').getTime(),
            y: 162
        },]
    }];
    var options:any = {
        chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            }
        },
        colors: ZoomableTimeseriesColors,
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0,
        },
        title: {
            text: 'Stock Price Movement',
            align: 'left',
            style: {
                fontWeight: 500,
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 90, 100]
            },
        },
        yaxis: {
            showAlways: true,
            labels: {
                show: true,
                formatter: function (val:any) {
                    return (val / 1000000).toFixed(0);
                },
            },
            title: {
                text: 'Price',
                style: {
                    fontWeight: 500,
                },
            },
        },
        xaxis: {
            type: 'datetime',

        },
        tooltip: {
            shared: false,
            y: {
                formatter: function (val:any) {
                    return (val / 1000000).toFixed(0);
                }
            }
        }
    };
    return (
        <React.Fragment>
           <ReactApexChart
                dir='ltr'
                options={options}
                series={series}
                type="area"
                height="350"
                className="apex-charts"
            />
        </React.Fragment>
    );
};

export default ZoomableTimeseries;