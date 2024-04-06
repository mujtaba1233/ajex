import getChartColorsArray from '../../../../Common/ChartsDynamicColor';
import React from 'react';
import ReactApexChart from 'react-apexcharts';


const SteplineChart = ({ dataColors } :any ) => {
    var SteplineChartColors = getChartColorsArray(dataColors);
    const series = [
        {
            data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
        },
    ];
    const options:any = {
        stroke: {
            curve: "stepline",
        },
        dataLabels: {
            enabled: !1,
        },
        title: {
            text: "Stepline Chart",
            align: "left",
            style: {
                fontWeight: 500,
            },
        },
        markers: {
            hover: {
                sizeOffset: 4,
            },
        },
        chart: {
            type: 'line',
            height: 350,
            toolbar: {
                show: false
            },
        },
        colors: SteplineChartColors,
    };

    return (
        <React.Fragment>
           <ReactApexChart
                dir='ltr'
                options={options}
                series={series}
                type="line"
                height={350}
                className="apex-charts"
            />
        </React.Fragment>
    );
};

export default SteplineChart;