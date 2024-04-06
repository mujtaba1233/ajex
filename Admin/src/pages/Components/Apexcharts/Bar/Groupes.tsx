import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const Groupes = ({ dataColors }:any) => {
    var chartGroupbarColors = getChartColorsArray(dataColors);
    const series = [
        {
            data: [44, 55, 41, 64, 22, 43, 21],
        },
        {
            data: [53, 32, 33, 52, 13, 44, 32],
        },
    ];

    var options:any = {
        chart: {
            type: 'bar',
            height: 410,
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
                dataLabels: {
                    position: 'top',
                },
            }
        },
        grid: {
            padding: {
                bottom: -14,
                left: 0,
                right: 0
            }
        },
        dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
                fontSize: '12px',
                colors: ['#fff']
            }
        },
        stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
        },
        tooltip: {
            shared: true,
            intersect: false
        },
        xaxis: {
            categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
        },
        colors: chartGroupbarColors
    };
    return (
        <React.Fragment>
            
           <ReactApexChart
                dir='ltr'
               
                className="apex-charts"
                options={options}
                series={series}
                type="bar"
                height={410}
            />
            
        </React.Fragment>
    );
};

export default Groupes;