import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const MultipleRadialbar = ({ dataColors }:any) => {
    var chartRadialbarMultipleColors = getChartColorsArray(dataColors);
    const series = [44, 55, 67, 83]
    var options:any = {
        chart: {
            height: 350,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w:any) {
                            return 249
                        }
                    }
                }
            }
        },
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        colors: chartRadialbarMultipleColors
    };
    return (
        <>
        
       <ReactApexChart
                dir='ltr'
            className="apex-charts"
            series={series}
            options={options}
            type="radialBar"
            height={350}
        />
        
        </>
    )
}
export default MultipleRadialbar;