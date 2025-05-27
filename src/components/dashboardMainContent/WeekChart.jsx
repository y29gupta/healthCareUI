import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import './index.css'; // your CSS file

const WeekChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    Highcharts.chart(chartRef.current, {
      chart: {
        type: 'column',
      },
      title: {
        text: null,
      },
      xAxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        
      },
      yAxis:{
        visible:false
      },
    //   yAxis: {
    //     title: {
    //       text: 'Number of Appointments',
    //     },
    //   },
    //   credits: {
    //     enabled: false,
    //   },
    //   plotOptions: {
    //     column: {
    //       borderRadius: '25%',
    //     },
    //   },
     legend: {
    enabled: false,
  },
      series: [
        {
          name: '',
          data: [5, 3, 4, 7, 2, 3, 1],
          color: '#007bff',
        },
        {
          name: 'Jane',
          data: [2, -2, -3, 2, 1, 0, -1],
          color: '#dc3545',
        },
        {
          name: 'Joe',
          data: [3, 4, 4, -2, 5, 2, 3],
          color: '#ffc107',
        },
      ],
    });
  }, []);

  return (
    <div className="chart-wrapper">
      <div ref={chartRef} className="chart-container"></div>
    </div>
  );
};

export default WeekChart;
