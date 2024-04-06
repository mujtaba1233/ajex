import React from 'react';
import ReactApexChart from 'react-apexcharts';


const PolarMonochrome = () => {
    const series = [42, 47, 52, 58, 65]
    var options:any = {
        chart: {
            width: 400,
            type: 'polarArea'
        },
        labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
        fill: {
            opacity: 1
        },
        stroke: {
            width: 1,
            colors: undefined
        },
        yaxis: {
            show: false
        },
        legend: {
            position: 'bottom'
        },
        plotOptions: {
            polarArea: {
                rings: {
                    strokeWidth: 0
                },
                spokes: {
                    strokeWidth: 0
                },
            }
        },
        theme: {
            mode: 'light',
            palette: 'palette1',
            monochrome: {
                enabled: true,
                shadeTo: 'light',
                color: '#573ff7',
                shadeIntensity: 0.6
            }
        }
    };
    return (
        <>
        
       <ReactApexChart
                dir='ltr'
            className="apex-charts"
            series={series}
            options={options}
            type="polarArea"
            height="333px"
        />
        
        </>
    )
}
export default PolarMonochrome;