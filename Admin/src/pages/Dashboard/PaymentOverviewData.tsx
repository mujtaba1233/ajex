import getChartColorsArray from "../../Common/ChartsDynamicColor";
import Chart from 'react-apexcharts'


const PaymentOverviewData = ({ dataColors }:any) => {
    var chartPieBasicColors = getChartColorsArray(dataColors);

    const series:any = [{
        name: 'Received Amount',
        data: [0, 20, 35, 45, 35, 55, 65, 50, 65, 75, 60, 75]
      }, {
        name: 'Due Amount',
        data: [15, 9, 17, 32, 25, 68, 80, 68, 84, 94, 74, 62]
      }
    ]

    var options:any = {  
        chart: {
            type: 'area',            
            toolbar: {
              show: false
            },
          },
          stroke: {
            curve: 'smooth',
            width: ['3.5', '3.5'],
          },
          grid:{
            xaxis: {
                lines: {
                    show: true
                }
            },   
            yaxis: {
                lines: {
                    show: true
                }
            }, 
          },
          colors: chartPieBasicColors,
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Now','Des'],
          },
          legend: {
              show: false,
          },
        
          fill: {
              type: 'gradient',
              gradient: {
                  shadeIntensity: 1,
                  inverseColors: false,
                  opacityFrom: 0.40,
                  opacityTo: 0.1,
                  stops: [30, 100, 100, 100]
                },
            },
            dataLabels: {
              enabled: false
            },
          tooltip: {
            fixed: {
              enabled: false
            }
            ,
            x: {
              show: false
            }
            ,
            y: {
              title: {
                formatter: function (seriesName:any) {
                  return ''
                }
              }
            }
            ,
            marker: {
              show: false
            }
          }
        }
 
    return (
        <Chart
            dir="ltr"
            className="apex-charts"
            series={series}
            options={options}
            type="area"
            height={341}
        />
    )
  }

export {PaymentOverviewData}