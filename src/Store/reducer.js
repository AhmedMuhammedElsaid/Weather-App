import actionTypes from "../Types";

 let initialState = {
   data: {},
   CvsF:true,
   recentDay:0,
  err: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WEATHER_DATA_REQUEST:
      return {
        ...state,
      };

    case actionTypes.FETCH_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    case actionTypes.TOGGLE_TEMPERATURE_TYPE:
      return {
        ...state,
        CvsF: !state.CvsF,
      };

    case actionTypes.GET_SPECIFIC_DAY:
      return {
        ...state,
        recentDay: action.recentDay,
      };
    case actionTypes.FETCH_WEATHER_DATA_FAILURE:
      return {
        ...state,
        err: action.err,
      };

    default:
      return state;
  }
};

export default rootReducer;
