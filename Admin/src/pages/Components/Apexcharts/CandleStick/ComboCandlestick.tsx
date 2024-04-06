import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from "react";
import ReactApexChart from "react-apexcharts";

const ComboCandlestick = ({dataColors}:any) => {
    var chartCandlestickBasicColors = getChartColorsArray(dataColors);
    const seriesData1 = [{
        x: new Date(2016, 1, 1),
        y: [51.98, 56.29, 51.59, 53.85]
      },
      {
        x: new Date(2016, 2, 1),
        y: [53.66, 54.99, 51.35, 52.95]
      },
      {
        x: new Date(2016, 3, 1),
        y: [52.96, 53.78, 51.54, 52.48]
      },
      {
        x: new Date(2016, 4, 1),
        y: [52.54, 52.79, 47.88, 49.24]
      },
      {
        x: new Date(2016, 5, 1),
        y: [49.10, 52.86, 47.70, 52.78]
      },
      {
        x: new Date(2016, 6, 1),
        y: [52.83, 53.48, 50.32, 52.29]
      },
      {
        x: new Date(2016, 7, 1),
        y: [52.20, 54.48, 51.64, 52.58]
      },
      {
        x: new Date(2016, 8, 1),
        y: [52.76, 57.35, 52.15, 57.03]
      },
      {
        x: new Date(2016, 9, 1),
        y: [57.04, 58.15, 48.88, 56.19]
      },
      {
        x: new Date(2016, 10, 1),
        y: [56.09, 58.85, 55.48, 58.79]
      },
      {
        x: new Date(2016, 11, 1),
        y: [58.78, 59.65, 58.23, 59.05]
      },
      {
        x: new Date(2017, 0, 1),
        y: [59.37, 61.11, 59.35, 60.34]
      },
      {
        x: new Date(2017, 1, 1),
        y: [60.40, 60.52, 56.71, 56.93]
      },
      {
        x: new Date(2017, 2, 1),
        y: [57.02, 59.71, 56.04, 56.82]
      },
      {
        x: new Date(2017, 3, 1),
        y: [56.97, 59.62, 54.77, 59.30]
      },
      {
        x: new Date(2017, 4, 1),
        y: [59.11, 62.29, 59.10, 59.85]
      },
      {
        x: new Date(2017, 5, 1),
        y: [59.97, 60.11, 55.66, 58.42]
      },
      {
        x: new Date(2017, 6, 1),
        y: [58.34, 60.93, 56.75, 57.42]
      },
      {
        x: new Date(2017, 7, 1),
        y: [57.76, 58.08, 51.18, 54.71]
      },
      {
        x: new Date(2017, 8, 1),
        y: [54.80, 61.42, 53.18, 57.35]
      },
      {
        x: new Date(2017, 9, 1),
        y: [57.56, 63.09, 57.00, 62.99]
      },
      {
        x: new Date(2017, 10, 1),
        y: [62.89, 63.42, 59.72, 61.76]
      },
      {
        x: new Date(2017, 11, 1),
        y: [61.71, 64.15, 61.29, 63.04]
      }
      ]
    const series = [{
        data: seriesData1
    }];
    var options:any = {
        chart: {
            type: 'candlestick',
            height: 200,
            id: 'candles',
            toolbar: {
                autoSelected: 'pan',
                show: false
            },
            zoom: {
                enabled: false
            },
        },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: chartCandlestickBasicColors[0],
                    downward: chartCandlestickBasicColors[1]
                }
            }
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
                type="candlestick"
                height={200}
                className="apex-charts"
            />
            
        </React.Fragment>
    );
};

export default ComboCandlestick;