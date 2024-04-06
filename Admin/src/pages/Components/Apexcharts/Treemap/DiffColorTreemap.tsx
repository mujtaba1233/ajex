import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const DiffColorTreemap = ({ dataColors }:any) => {
    var chartTreemapDiffColor = getChartColorsArray(dataColors);
    const series = [{
        data: [{
            x: 'New Delhi',
            y: 218
        },
        {
            x: 'Kolkata',
            y: 149
        },
        {
            x: 'Mumbai',
            y: 184
        },
        {
            x: 'Ahmedabad',
            y: 55
        },
        {
            x: 'Bangaluru',
            y: 84
        },
        {
            x: 'Pune',
            y: 31
        },
        {
            x: 'Chennai',
            y: 70
        },
        {
            x: 'Jaipur',
            y: 30
        },
        {
            x: 'Surat',
            y: 44
        },
        {
            x: 'Hyderabad',
            y: 68
        },
        {
            x: 'Lucknow',
            y: 28
        },
        {
            x: 'Indore',
            y: 19
        },
        {
            x: 'Kanpur',
            y: 29
        }
        ]
    }]
    var options:any = {
        legend: {
            show: false
        },
        chart: {
            height: 350,
            type: 'treemap',
            toolbar: {
                show: false
            }
        },
        title: {
            text: 'Distibuted Treemap (different color for each cell)',
            align: 'center',
            style: {
                fontWeight: 500,
            }
        },
        colors: chartTreemapDiffColor,
        plotOptions: {
            treemap: {
                distributed: true,
                enableShades: false
            }
        }
    };
    return (
       <ReactApexChart
                dir='ltr'
            className="apex-charts"
            series={series}
            options={options}
            type="treemap"
            height={350}
        />
    )
}

export default DiffColorTreemap;