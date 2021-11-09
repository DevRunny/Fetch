let arrData = [];

const getData = () => {
  return fetch("db.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      arrData.push(data);
    })
    .catch((error) => console.log(error));
};

console.log(arrData[0]);

const sendData = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: arrData[0],
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

getData();
sendData();
