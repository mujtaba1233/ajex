import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const Basicchart = ({ dataColors }:any) => {
    var BasicColors = getChartColorsArray(dataColors);
    const series = [{
        data: [380, 430, 450, 475, 550, 584, 780, 1100, 1220, 1365]
    }];

    const options:any = {
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false,
        },
        colors: BasicColors,
        grid: {
            borderColor: "#f1f1f1",
            padding: {
                bottom: -14,
                left: 0,
                right: 0
            }
        },
        xaxis: {
            categories: ["South Korea", "Canada", "United Kingdom", "Netherlands", "Italy", "France", "Japan", "United States", "China", "Germany"],
        }
    };

    return (
        <React.Fragment>
           <ReactApexChart
                dir='ltr'
                className="apex-charts"
                options={options}
                series={series}
                type="bar"
                height="350px"
            />
        </React.Fragment>
    );
};

export default Basicchart;