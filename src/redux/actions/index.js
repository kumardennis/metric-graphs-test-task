const updateDataGraph1 = (dataArr) => {
  return {
    type: "UPDATE_DATA_GRAPH1",
    payload: dataArr,
  };
};

const updateDataGraph2 = (dataArr) => {
  return {
    type: "UPDATE_DATA_GRAPH2",
    payload: dataArr,
  };
};

const updateYAxisValueGraph1 = (yAxisValue) => {
  return {
    type: "UPDATE_YAXIS_VALUE_GRAPH1",
    payload: yAxisValue,
  };
};

const updateYAxisValueGraph2 = (yAxisValue) => {
  return {
    type: "UPDATE_YAXIS_VALUE_GRAPH2",
    payload: yAxisValue,
  };
};

const updateLastDrawLocationGraph1 = (lastDrawLocation) => {
  return {
    type: "UPDATE_LAST_DRAW_LOCATION_GRAPH1",
    payload: lastDrawLocation,
  };
};

const updateLastDrawLocationGraph2 = (lastDrawLocation) => {
  return {
    type: "UPDATE_LAST_DRAW_LOCATION_GRAPH2",
    payload: lastDrawLocation,
  };
};

export {
  updateDataGraph1,
  updateDataGraph2,
  updateYAxisValueGraph1,
  updateYAxisValueGraph2,
  updateLastDrawLocationGraph1,
  updateLastDrawLocationGraph2,
};
