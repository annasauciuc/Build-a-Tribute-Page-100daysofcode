const getDayCards = () => {
  let result = [];
  const url =
    "https://cors-anywhere.herokuapp.com/http://www.amsauciuc.com/data/days.json";

  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      result = data.data;
      return result;
    })
    .catch(error => {
      error = {
        id: 0,
        mood: "ERROR",
        languages: [],
        date: "Soon",
        research: "Sorry for the error",
        classStyle: "",
        hrefGit: "",
        text: "Error found sorry",
        title: "Error!"
      };
      result.push(error);
      return result;
    });
};

export { getDayCards };
