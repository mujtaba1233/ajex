import getChartColorsArray from "../../Common/ChartsDynamicColor";
import Chart from 'react-apexcharts'


const StructureData = ({ dataColors }:any) => {
    var chartPieBasicColors = getChartColorsArray(dataColors);
    const series:any = [40, 18, 13]
    var options:any = {  
        chart: {
            height: 300,
            type: 'donut',
        }, 
        labels: ["Invoiced", "Collected", "Outstanding"],
        colors: chartPieBasicColors,
        plotOptions: {
          pie: {
              startAngle: 25,
              donut: {
              size: '78%',
              }
          }
        },
      
        legend: {
            show: false,
        },
      
        dataLabels: {
              style: {
                fontSize: '11px',
                fontFamily: 'DM Sans,sans-serif',
                colors: undefined
               },
          
              background: {
                enabled: true,
                foreColor: '#fff',
                padding: 4,
                borderRadius: 2,
                borderWidth: 1,
                borderColor: '#fff',
                opacity: 1,
              },
        },
        responsive: [{
            breakpoint: 600,
            options: {
                chart: {
                    height: 240
                },
                legend: {
                    show: false
                },
            }
        }]
        }
 
    return (
        <Chart
            dir="ltr"
            className="apex-charts"
            series={series}
            options={options}
            type="donut"
            height={300}
        />
    )
  }

export {StructureData}