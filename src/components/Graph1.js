import React, { useState, useEffect } from "react";
import "../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  HorizontalGridLines,
  XAxis,
  YAxis,
  VerticalBarSeries,
  Highlight,
  Crosshair,
} from "react-vis";
import Button from "@material-ui/core/Button";
import {
  updateDataGraph1,
  updateYAxisValueGraph1,
  updateLastDrawLocationGraph1,
} from "redux/actions/index";
import { useSelector, useDispatch } from "react-redux";

const Graph1 = ({ getYAxisValue }) => {
  const dispatch = useDispatch();

  /*------------FROM REDUX STORE ----------------*/
  const [data, setData] = useState(
    useSelector((state) => state.graph1Reducer.data)
  );
  const [yAxisValue, setYAxisValue] = useState(
    useSelector((state) => state.graph1Reducer.yAxisValue)
  );
  const [lastDrawLocation, setLastDrawLocation] = useState(
    useSelector((state) => state.graph1Reducer.lastDrawLocation)
  );

  /*--------------LOCAL STATES---------------------*/
  const [sortedData, setSortedData] = useState([]);
  const [crosshairValues, setCrossHairValues] = useState([]);

  const generateData = () => {
    setData(
      [...new Array(100)].map((row) => ({
        x: Math.random() * 5,
        y: Math.random() * 10 - 5,
      }))
    );
  };

  const _onMouseLeave = () => {
    setCrossHairValues([]);
  };

  const _onNearestX = (value, event) => {
    const values = [];
    values.push(value);
    setCrossHairValues(values);
    setYAxisValue(value.y);
    getYAxisValue(yAxisValue);
  };

  useEffect(() => {
    dispatch(updateDataGraph1(data));
    dispatch(updateYAxisValueGraph1(yAxisValue));
    dispatch(updateLastDrawLocationGraph1(lastDrawLocation));

    data.sort((a, b) => {
      var keyA = a.x,
        keyB = b.x;

      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
    setSortedData(data);
  }, [data, yAxisValue, lastDrawLocation]);

  return (
    <div className="graph1">
      <XYPlot
        onMouseLeave={_onMouseLeave}
        xDomain={
          lastDrawLocation && [lastDrawLocation.left, lastDrawLocation.right]
        }
        yDomain={
          lastDrawLocation && [lastDrawLocation.bottom, lastDrawLocation.top]
        }
        height={500}
        width={1500}
      >
        <XAxis />
        <YAxis />
        <HorizontalGridLines />
        <LineSeries
          curve="curveBasis"
          style={{ strokeWidth: 2 }}
          animation="gentle"
          data={sortedData}
          onNearestXY={_onNearestX}
        />
        <Crosshair values={crosshairValues} className={"test-class-name"} />
        <VerticalBarSeries
          style={{ opacity: 0.7, stroke: "black", fill: "black" }}
          animation="gentle"
          data={sortedData}
        />
        <Highlight
          onBrushEnd={(area) => setLastDrawLocation(area)}
          onDrag={(area) => {
            setLastDrawLocation({
              lastDrawLocation: {
                bottom: lastDrawLocation.bottom + (area.top - area.bottom),
                left: lastDrawLocation.left - (area.right - area.left),
                right: lastDrawLocation.right - (area.right - area.left),
                top: lastDrawLocation.top + (area.top - area.bottom),
              },
            });
          }}
        />
      </XYPlot>

      <Button onClick={generateData} variant="outlined" color="primary">
        Update Data
      </Button>
      <Button
        onClick={() => setLastDrawLocation(null)}
        variant="outlined"
        color="info"
      >
        Reset zoom
      </Button>
    </div>
  );
};

export default Graph1;
