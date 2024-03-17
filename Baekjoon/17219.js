const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [nm, ...data] = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, m] = nm.split(" ");
let sites = data.splice(+n);
let dataMap = new Map();

data.forEach((ele) => {
  let [site, password] = ele.split(" ");
  dataMap.set(site, password);
});

sites.forEach((ele) => {
  console.log(dataMap.get(ele));
});
