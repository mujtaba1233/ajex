import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const ColumnGroupLabels = ({ dataColors }:any) => {
    var chartColumnDistributedColors = getChartColorsArray(dataColors);
    // dayjs.extend(window.dayjs_plugin_quarterOfYear)
    const series = [{
        name: "sales",
        data: [{
            x: 'Q1',
            y: 400
        }, {
            x: 'Q2',
            y: 430
        }, {
            x: 'Q3',
            y: 448
        }, {
            x: 'Q4',
            y: 470
        }, {
            x: 'Q1',
            y: 540
        }, {
            x: 'Q2',
            y: 580
        }, {
            x: 'Q3',
            y: 690
        }, {
            x: 'Q4',
            y: 690
        }]
    
}]
    
    var options:any = {
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false,
            }
        },
        colors: chartColumnDistributedColors,
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '45%',
            }
        },
        dataLabels: {
            enabled: !0
        },
        legend: {
            show: !1
        },
        xaxis: {
            type: 'category',
          
            group: {
                style: {
                    fontSize: '10px',
                    fontWeight: 700
                },
                groups: [
                    { title: '2020', cols: 4 },
                    { title: '2021', cols: 4 }
                ]
            }
        },
        title: {
            text: 'Grouped Labels on the X-axis',
            style: {
                fontWeight: 500,
            },
        },
       
    };

    return (
        <>
            
               <ReactApexChart
                dir='ltr' className="apex-charts" series={series} options={options} type="bar" height={350} />
        
        </>
    )
};

export default ColumnGroupLabels;