import React from "react";
import ReactApexChart from "react-apexcharts";

const ComboCandlestick1 = () => {
    const seriesDataLinear = [{
        x: new Date(2016,1,1),
        y: 3.85
      },
      {
        x: new Date(2016,2,1),
        y: 2.95
      },
      {
        x: new Date(2016,3,1),
        y: -12.48
      },
      {
        x: new Date(2016,4,1),
        y: 19.24
      },
      {
        x: new Date(2016,5,1),
        y: 12.78
      },
      {
        x: new Date(2016,6,1),
        y: 22.29
      },
      {
        x: new Date(2016,7,1),
        y: -12.58
      },
      {
        x: new Date(2016,8,1),
        y: -17.03
      },
      {
        x: new Date(2016,9,1),
        y: -19.19
      },
      {
        x: new Date(2016, 10,1),
        y: -28.79
      },
      {
        x: new Date(2016, 11,1),
        y: -39.05
      },
      {
        x: new Date(2017,0,1),
        y: 20.34
      },
      {
        x: new Date(2017,1,1),
        y: 36.93
      },
      {
        x: new Date(2017,2,1),
        y: 36.82
      },
      {
        x: new Date(2017,3,1),
        y: 29.30
      },
      {
        x: new Date(2017,4,1),
        y: 39.85
      },
      {
        x: new Date(2017,5,1),
        y: 28.42
      },
      {
        x: new Date(2017,6,1),
        y: 37.42
      },
      {
        x: new Date(2017,7,1),
        y: 24.71
      },
      {
        x: new Date(2017,8,1),
        y: 37.35
      },
      {
        x: new Date(2017,9,1),
        y: 32.99
      },
      {
        x: new Date(2017, 10,1),
        y: 31.76
      },
      {
        x: new Date(2017, 11,1),
        y: 43.04
      }
      ]
    const series = [
        {
            name: "volume",
            data: seriesDataLinear,
        },
    ];
    var options:any = {
        chart: {
            height: 150,
            type: 'bar',
            brush: {
                enabled: true,
                target: 'candles'
            },
            selection: {
                enabled: true,
                xaxis: {
                    min: new Date('20 Jan 2017').getTime(),
                    max: new Date('10 Dec 2017').getTime()
                },
                fill: {
                    color: '#ccc',
                    opacity: 0.4
                },
                stroke: {
                    color: '#0d47a1',
                }
            },
        },
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            bar: {
                columnWidth: '80%',
                colors: {
                    ranges: [{
                        from: -1000,
                        to: 0,
                        color: '#f1734f'
                    }, {
                        from: 1,
                        to: 10000,
                        color: '#f7cc53'
                    }],

                },
            }
        },
        stroke: {
            width: 0
        },
        xaxis: {
            type: 'datetime',
            axisBorder: {
                offsetX: 13
            }
        },
        yaxis: {
            labels: {
                show: false
            },
        },
    };
    return (
        <React.Fragment>
            
           <ReactApexChart
                dir='ltr'
              
                options={options}
                series={series}
                type="bar"
                height={150}
                className="apex-charts"
            />
            
        </React.Fragment>
    );
};

export default ComboCandlestick1;