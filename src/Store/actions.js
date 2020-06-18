import actionTypes from "../Types";
import { OrderData } from "../Logic";

let url =`https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40`;

export const fetchWeatherData = () => {
  return (dispatch) => {
    fetch(url)
      .then((res) => {
        const data = res.json();
        return data;
      })
      .then((res) => {
        let data = OrderData(res.list);
        console.log(data);
        dispatch({
          type: actionTypes.FETCH_WEATHER_DATA_SUCCESS,
          data,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.FETCH_WEATHER_DATA_FAILURE,
        });
      });
  };
};

export const toggleAction = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.TOGGLE_TEMPERATURE_TYPE });
  };
};

export const getDay = (i) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.GET_SPECIFIC_DAY, recentDay: i });
  };
};
