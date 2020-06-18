// a constant value to get the right value for the exact time
const constantTimeValue = 1000 * 60 * new Date(Date.now()).getTimezoneOffset();

// get the right array of weather data  for a unique day
function findClosestSegmentToNow(data) {
  return data.find((item) => {
    const now = Date.now() / 1000;
    return (
      Math.abs(item.dt + constantTimeValue / 1000 - now) <=
      (3 * 60 * 60) / 2
    );
  });
}

//Helper function to order our data according to time because every element within the array has the weather for 3 hours
// so we just trying to order all of them  to have a big array includes number of arrays each one has the weather for the whole day 
function OrderData(data) {
  const groupedData = [];
  let lastIndex = -1;
  let middle = 0;
  let arrData = data;
  data.forEach((itm, i) => {
    if (i < lastIndex + middle) return;
    const smallArr = arrData.filter(
      (val) =>
        new Date(val.dt * 1000).getDay() === new Date(itm.dt * 1000).getDay()
    );
    middle = smallArr.length;
    lastIndex = i;
    groupedData.push(smallArr);
    arrData = arrData.slice(middle);
  });

  return groupedData;
}

//This functions calculates the average temperature of an array of weather segments
function getAvrgTemp(dayData) {
  let temp = 0;
  dayData.forEach((item) => (temp += item.main.temp));
  return temp / dayData.length;
}
//This function converts temoerature to F or C scale
function convertType(val, CvsF) {
  const temp = val - 273.15;
  if (CvsF === true) return temp.toFixed(1);
  return (1.8 * temp + 32).toFixed(1);
}

export {
  findClosestSegmentToNow,
  OrderData,
  getAvrgTemp,
  constantTimeValue,
  convertType,
};
