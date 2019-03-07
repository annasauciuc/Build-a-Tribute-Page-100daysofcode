import days from "../data/days";

function getDayCards() {
  // let data = [];
  // const url = "http://www.amsauciuc.com/data/days.json";

  // fetch(url, {
  //   method: "GET",
  //   mode: "no-cors",
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Content-Type": "text/html"
  //   }
  // }).then(response => {
  //   console.log("response :", response);
  //   data = response.json();
  //  // console.log("data", data);
  //});
  return days;
}

export { getDayCards };
