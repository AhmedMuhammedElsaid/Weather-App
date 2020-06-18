import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "./Store/actions";
import Carousel from "./Components/Carousel";
import Toggel from "./Components/Toggel";
import BarChart from "./Components/BarChart";
import Loading from "./LoadingPage";

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeatherData());
  }, []);
  let data = useSelector((state) => state.data);
  return (
    <>
      <div className="App">
        {data.length > 0 ? (
          <>
            <Toggel />
            <Carousel data={data} />
            <BarChart />
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}

export default App;
