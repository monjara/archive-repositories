const arr1 = [0, 1, 2, 3];
const arr2 = arr1.map((val) => {
  console.log("var: " + val);
  return val * 10;
});
console.log("finish: " + arr2);
