import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from "react";
import ReactApexChart from "react-apexcharts";

const Horizontal = ({ dataColors }:any) => {
    var chartBoxBasicColors = getChartColorsArray(dataColors);
    const series = [
      {
        type: "boxPlot",
        data: [
          {
            x: 'Category A',
            y: [54, 66, 69, 75, 88]
          },
          {
            x: 'Category B',
            y: [43, 65, 69, 76, 81]
          },
          {
            x: 'Category C',
            y: [31, 39, 45, 51, 59]
          },
          {
            x: 'Category D',
            y: [39, 46, 55, 65, 71]
          },
          {
            x: 'Category E',
            y: [29, 31, 35, 39, 44]
          },
          {
            x: 'Category F',
            y: [41, 49, 58, 61, 67]
          },
          {
            x: 'Category G',
            y: [54, 59, 66, 71, 88]
          }
        ],
      },
    ];
    var options:any = {
      chart: {
        type: 'boxPlot',
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '50%'
        },
        boxPlot: {
          colors: {
            upper: chartBoxBasicColors[0],
            lower: chartBoxBasicColors[1]
          },
        },
      },
      grid: {
        padding: {
            bottom: -10,
            left: 0,
            right: 0
        }
    },
      stroke: {
        colors: [chartBoxBasicColors[2]]
      },
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

  export default Horizontal;