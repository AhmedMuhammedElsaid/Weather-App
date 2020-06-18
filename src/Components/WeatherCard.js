import React from "react";
import { useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import { getAvrgTemp, convertType } from "../Logic";
import { makeStyles } from "@material-ui/core/styles";

export default function WeatherCard(props) {
  const { date, day } = props;
  const CvsF = useSelector((state) => state.CvsF);
  const avTempKelvin = getAvrgTemp(day);
  const avTemp = `${convertType(avTempKelvin, CvsF)}°${CvsF ? "C" : "F"}`;
  const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      maxHeight: 340,
      textAlign:'center',
      borderRadius:"2 30% 2$ 30$%",
      margin: "1%",
      color: "#196090",
      backgroundColor: "rgba(255, 255, 255, 0.4)",
      border: "1px solid rgba(255, 255, 255, 0.6)",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,0.3)",
    },
  });
  
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const classes = useStyles();
  const dayName = weekDays[new Date(1000 * date).getDay()];
  const cardDate = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(new Date(1000 * date));

  return (
    <Card className={`main-link ${classes.card}`}>
      <CardActionArea>
        <CardContent>
          <Box fontWeight="fontWeightBold" fontSize={30}>
            <span style={{ fontSize: "30px" }}>Temp:</span>
            {avTemp}
          </Box>
          <div></div>
          <Box fontWeight="fontWeightBold" fontSize={30}>
            <span style={{ fontSize: "30px" }}>Date:</span>
            {cardDate}
          </Box>
          <Box fontSize={30}>{dayName}</Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
