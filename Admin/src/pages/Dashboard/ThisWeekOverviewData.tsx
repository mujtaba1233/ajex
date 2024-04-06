import getChartColorsArray from "../../Common/ChartsDynamicColor";
import Chart from 'react-apexcharts'


const Donut1 = ({ dataColors }:any) => {
    var chartDonutBasicColors = getChartColorsArray(dataColors);
    const series = [60, 40]
    var options:any = {  
        chart: {
            type: 'donut',
            height: 110,
        },
        colors: chartDonutBasicColors,
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false
        }
    };
    return (
        <Chart
            dir="ltr"
            className="apex-charts"
            series={series}
            options={options}
            type="donut"
        />
    )
  }

const Donut2 = ({ dataColors }:any) => {
    var chartDonutBasicColors = getChartColorsArray(dataColors);
    const series = [60, 40]
    var options = {
        series: [35, 80],
        chart: {
            type: 'donut',
            height: 110,
        },
        colors: chartDonutBasicColors,
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false
        }
    };
    return (
        <Chart
            dir="ltr"
            className="apex-charts"
            series={series}
            options={options}
            type="donut"
        />
    )
  }  

  const Donut3 = ({ dataColors }:any) => {
    var chartDonutBasicColors = getChartColorsArray(dataColors);
    const series = [60, 40]
    var options:any = {  
        chart: {
            type: 'donut',
            height: 110,
        },
        colors: chartDonutBasicColors,
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false
        }
    };
    return (
        <Chart
            dir="ltr"
            className="apex-charts"
            series={series}
            options={options}
            type="donut"
        />
    )
  }

export {Donut1,Donut2,Donut3}