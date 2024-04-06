import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from "react";
import ReactApexChart from "react-apexcharts";


const Basic = ({ dataColors }: any) => {
  var chartBoxBasicColors = getChartColorsArray(dataColors);
  const series = [
    {
      type: "boxPlot",
      data: [
        {
          x: "Jan 2015",
          y: [54, 66, 69, 75, 88],
        },
        {
          x: "Jan 2016",
          y: [43, 65, 69, 76, 81],
        },
        {
          x: "Jan 2017",
          y: [31, 39, 45, 51, 59],
        },
        {
          x: "Jan 2018",
          y: [39, 46, 55, 65, 71],
        },
        {
          x: "Jan 2019",
          y: [29, 31, 35, 39, 44],
        },
        {
          x: "Jan 2020",
          y: [41, 49, 58, 61, 67],
        },
        {
          x: "Jan 2021",
          y: [54, 59, 66, 71, 88],
        },
      ],
    },
  ];
  var options: any = {
    chart: {
      type: 'boxPlot',
      height: 350,
      toolbar: {
        show: false
      }
    },
    title: {
      text: 'Basic BoxPlot Chart',
      align: 'left',
      style: {
        fontWeight: 500,
      },
    },
    grid: {
      padding: {
        bottom: -10,
        left: 0,
        right: 0
      }
    },
    plotOptions: {
      boxPlot: {
        colors: {
          upper: chartBoxBasicColors[0],
          lower: chartBoxBasicColors[1]
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
        type="boxPlot"
        height={350}
      />

    </React.Fragment>
  );
};

export default Basic;