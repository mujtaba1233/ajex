import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const DistributedColumn = ({ dataColors }:any) => {
    var chartColumnDistributedColors = getChartColorsArray(dataColors);
    const series = [{
        data: [21, 22, 10, 28, 16, 21, 13, 30]
    }];
    var options:any = {
        chart: {
            height: 350,
            type: 'bar',
            events: {
                click: function (chart:any, w:any, e:any) {
                }
            },
            toolbar: {
                show: false
            }
        },
        colors: chartColumnDistributedColors,
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        xaxis: {
            categories: [
                ['John', 'Doe'],
                ['Joe', 'Smith'],
                ['Jake', 'Williams'],
                'Amber',
                ['Peter', 'Brown'],
                ['Mary', 'Evans'],
                ['David', 'Wilson'],
                ['Lily', 'Roberts'],
            ],
            labels: {
                style: {
                    colors: [
                        '#038edc',
                        '#51d28c',
                        '#f7cc53',
                        '#f34e4e',
                        '#564ab1',
                        '#5fd0f3',
                    ],
                    fontSize: '12px'
                }
            }
        }
    };

    return (
        <>
            
               <ReactApexChart
                dir='ltr'  className="apex-charts" series={series} options={options} type="bar" height={350} />
            
        </>
    )
};

export default DistributedColumn;
