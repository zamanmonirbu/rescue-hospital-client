import React, { useRef, useEffect } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const PatientsStatistics = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.render();
    }
  }, []);

  const toggleDataSeries = (e) => {
    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    }
    else {
      e.dataSeries.visible = true;
    }
    chartRef.current.render();
  }

  const options = {
    theme: "light2",
    animationEnabled: true,
    title: {
      text: "Patients Statistics"
    },
    subtitles: [{
      text: "Click Legend to Hide or Unhide Data Series"
    }],
    axisX: {
      title: "Categories"
    },
    axisY: {
      title: "Count",
      titleFontColor: "#6D78AD",
      lineColor: "#6D78AD",
      labelFontColor: "#6D78AD",
      tickColor: "#6D78AD"
    },
    toolTip: {
      shared: true
    },
    legend: {
      cursor: "pointer",
      itemclick: toggleDataSeries
    },
    data: [{
      type: "column",
      name: "Total Patients",
      showInLegend: true,
      dataPoints: [
        { label: "Category 1", y: 50 },
        { label: "Category 2", y: 75 },
        { label: "Category 3", y: 100 },
      ]
    }]
  };

  return (
    <div>
      <CanvasJSReact.CanvasJSChart options={options} onRef={(ref) => chartRef.current = ref} />
    </div>
  );
};

export default PatientsStatistics;
