const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let hongjun_id = fs.readFileSync(filePath).toString().trim();

console.log(`:fan::fan::fan:
:fan::${hongjun_id}::fan:
:fan::fan::fan:`);
