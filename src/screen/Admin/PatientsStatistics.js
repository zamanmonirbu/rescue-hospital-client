import React, { useRef, useEffect, useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../Auth/Firebase/app.config";

const PatientsStatistics = () => {
  const chartRef = useRef(null);
  const [dataPoints, setDataPoints] = useState([
    { label: "Admins", y: 0 },
    { label: "Doctor", y: 0 },
    { label: "Patients", y: 0 },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const adminsCollection = collection(db, "admin");
        const doctorsCollection = collection(db, "doctors");
        const patientsCollection = collection(db, "appointments"); 

        const [adminsSnapshot, doctorsSnapshot, patientsSnapshot] = await Promise.all([
          getDocs(adminsCollection),
          getDocs(doctorsCollection),
          getDocs(patientsCollection),
        ]);

        const adminsCount = adminsSnapshot.size;
        const doctorsCount = doctorsSnapshot.size;
        const patientsCount = patientsSnapshot.size;

        setDataPoints([
          { label: "Admins", y: adminsCount },
          { label: "Doctor", y: doctorsCount },
          { label: "Patients", y: patientsCount },
        ]);

        if (chartRef.current) {
          chartRef.current.render();
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
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
      text: "Summary Of Rescue Hospital"
    },
    subtitles: [{
      text: "Show all info"
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
      name: "Total",
      showInLegend: true,
      dataPoints: dataPoints
    }]
  };

  return (
    <div>
      <CanvasJSReact.CanvasJSChart options={options} onRef={(ref) => chartRef.current = ref} />
    </div>
  );
};

export default PatientsStatistics;
