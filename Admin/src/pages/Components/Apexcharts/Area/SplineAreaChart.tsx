import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';



const SplineAreaChart = ({dataColors}:any) => {
    var areachartSplineColors = getChartColorsArray(dataColors);    
    const series = [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
    }];
    var options:any = {
        chart: {
            height: 350,
            type: 'area',
            toolbar: {
                show: true
            }
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            padding: {
                top: 0,
                right: 0,
            },
        },
        stroke: {
            curve: 'smooth'
        },
        colors: areachartSplineColors,
        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    };

    return (
        <React.Fragment>
        
           <ReactApexChart
                dir='ltr'
                
                options={options}
                series={series}
                type="area"
                height="350"
                className="apex-charts"
            />
            
        </React.Fragment>
    );
};

export default SplineAreaChart