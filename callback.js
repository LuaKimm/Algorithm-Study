function fetchData(callback) {
  setTimeout(() => {
    const data = "서버에서 가져온 데이터";
    callback(data);
  }, 2000);
}

fetchData(function (result) {
  console.log(result);
});
