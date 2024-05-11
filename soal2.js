import fs from "fs";

var output = fs.readFileSync("log.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

fs.writeFile("new_log.txt", data, "utf-8", (err) => {
  if (err) {
    console.log("error");
    return;
  }
});
