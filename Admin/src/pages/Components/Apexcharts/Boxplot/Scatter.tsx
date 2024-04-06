import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from "react";
import ReactApexChart from "react-apexcharts";

const Scatter = ({ dataColors }:any) => {
    var chartBoxBasicColors = getChartColorsArray(dataColors);
    const series = [
      {
        name: "Box",
        type: "boxPlot",
        data: [
          {
            x: new Date("2017-01-01").getTime(),
            y: [54, 66, 69, 75, 88]
          },
          {
            x: new Date("2018-01-01").getTime(),
            y: [43, 65, 69, 76, 81]
          },
          {
            x: new Date("2019-01-01").getTime(),
            y: [31, 39, 45, 51, 59]
          },
          {
            x: new Date("2020-01-01").getTime(),
            y: [39, 46, 55, 65, 71]
          },
          {
            x: new Date("2021-01-01").getTime(),
            y: [29, 31, 35, 39, 44]
          }
        ]
      },
      {
        name: "Outliers",
        type: "scatter",
        data: [
          {
            x: new Date("2017-01-01").getTime(),
            y: 32
          },
          {
            x: new Date("2018-01-01").getTime(),
            y: 25
          },
          {
            x: new Date("2019-01-01").getTime(),
            y: 64
          },
          {
            x: new Date("2020-01-01").getTime(),
            y: 27
          },
          {
            x: new Date("2020-01-01").getTime(),
            y: 78
          },
          {
            x: new Date("2021-01-01").getTime(),
            y: 15
          }
        ]
      }
    ];
    var options:any = {
      chart: {
        toolbar: {
          show: !1
        }
      },
      colors: [chartBoxBasicColors[0], chartBoxBasicColors[1]],
      title: {
        text: "BoxPlot - Scatter Chart",
        align: "left",
        style: {
          fontWeight: 500,
        },
      },
      xaxis: {
        type: "datetime",
        tooltip: {
          formatter: function (val:any) {
            return new Date(val).getFullYear();
          }
        }
      },
      grid: {
        padding: {
            left: 0,
            right: 0
        }
    },
      plotOptions: {
        boxPlot: {
          colors: {
            upper: chartBoxBasicColors[2],
            lower: chartBoxBasicColors[3]
          }
        }
      },
      stroke: {
        colors: [chartBoxBasicColors[4]]
    },
      tooltip: {
        shared: !1,
        intersect: !0
      }
    };
  
    return (
      <React.Fragment>
        
       <ReactApexChart
                dir='ltr'
         
          className="apex-charts"
          options={options}
          series={series}
          type="boxPlot"
          height={350}
        />
        
      </React.Fragment>
    );
  };

  export default Scatter;