
import getChartColorsArray from "../../Common/ChartsDynamicColor";
import Chart from 'react-apexcharts'


const PaymentActivityData = ({ dataColors }:any) => {
    var chartbarBasicColors = getChartColorsArray(dataColors);

    const series:any = [{
        name: 'Income',
        data: [38, 48, 41, 52, 22, 43, 36, 48, 24, 28, 36, 44]
    }, {
        name: 'Outcome',
        data: [13, 20, 20, 8, 13, 27, 18, 22, 15, 16, 24, 22]
    }]

    var options:any = {  
        chart: {
            height: 362,
            type: 'bar',
            // stacked: true,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: true
            }
        },

        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '35%',
                endingShape: 'rounded'
            },
        },

        dataLabels: {
            enabled: false
        },
        
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        grid:{
            xaxis: {
                lines: {
                    show: false
                }
            },   
            yaxis: {
                lines: {
                    show: false
                }
            }, 
          },
        colors: chartbarBasicColors,
        legend: {
            show: false
        },
        fill: {
            opacity: 1
        },
    };
    return (
        <Chart
            dir="ltr"
            className="apex-charts"
            series={series}
            options={options}
            type="bar"
            height={362}
        />
    )
  }

export {PaymentActivityData}  