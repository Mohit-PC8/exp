import React from "react";
import { ChartBar } from "./ChartBar/ChartBar";
import "./Chart.css";

export const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((data) => {
    return data.value;
  });
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((data) => {
        return (
          <ChartBar
            key={data.label}
            value={data.value}
            maxValue={totalMaximum}
            label={data.label}
          />
        );
      })}
    </div>
  );
};
