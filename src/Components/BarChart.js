import React from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import { convertType, constantTimeValue } from "../Logic";
import { useSelector } from "react-redux";

export default function BarChart() {
  const allData = useSelector((state) => state.data);
  const recentDay = useSelector((state) => state.recentDay);
  const labels = allData[recentDay].map(
    (item) => `${new Date(item.dt * 1000 + constantTimeValue).toLocaleTimeString()}`);

  const CvsF = useSelector((state) => state.CvsF);

  const TemperatureType = `Degree in °${CvsF ? "C" : "F"}`;
  const chartData = allData[recentDay].map((day) =>
    convertType(day.main.temp, CvsF)
  );

  const data = {
    labels,
    datasets: [
      {
        TemperatureType: "Temperature across the day",
        backgroundColor: " #be99a9",
        borderColor: "rgba(255, 0, 0, 0.42)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: chartData,
      },
    ],
  };
  return (
    <BarContainer>
      <Bar
        data={data}
        width={120}
        height={50}
        options={{
          legend: {
            display: false,
          },
          plugins: {
            datalabels: {
              display: true,
              color: "white",
              anchor: "end",
              align: "start",
            },
          },
          tooltips: {
            enabled: false,
          },
          maintainAspectRatio: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
                scaleLabel: {
                  display: true,
                  labelString: TemperatureType,
                },
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: 'Time Over The Day'
                },
              },
            ],
          },
        }}
      />
    </BarContainer>
  );
}
const BarContainer = styled.div`
  margin: 20px;
  align-self: stretch;
  padding: 0 2%;
`;
