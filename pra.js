function parseJSONAsync(json, callback) {
  setTimeout(() => {
    try {
      callback(null, JSON.parse(json));
    } catch (err) {
      callback(err);
    }
  }, 1000);
}
parseJSONAsync("不正なJSON", (err, res) => {
  console.log("result ", err, res);
});
