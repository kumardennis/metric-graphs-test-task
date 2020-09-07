const initState = {
  data: [],
  yAxisValue: null,
  lastDrawLocation: null,
};

const graph2Reducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_DATA_GRAPH2":
      return {
        ...state,
        data: action.payload,
      };
    case "UPDATE_YAXIS_VALUE_GRAPH2":
      return {
        ...state,
        yAxisValue: action.payload,
      };
    case "UPDATE_LAST_DRAW_LOCATION_GRAPH2":
      return {
        ...state,
        lastDrawLocation: action.payload,
      };
    default:
      return state;
  }
};

export default graph2Reducer;
