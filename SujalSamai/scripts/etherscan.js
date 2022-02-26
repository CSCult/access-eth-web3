// Import web3 into a variable: Web3
var Web3 = require("web3");
// Import fs into a variable: fs
var fs = require("fs");

var provider = "";

// Create a Web3 Provider using HttpProvider : web3Provider
let web3Provider = new Web3.providers.HttpProvider(provider);

// Create a Web3 object using web3Provider: web3
let web3 = new Web3(web3Provider);

// MAIN CODE STARTS HERE:
// Take a look at README.md to know what to code
// JSON parse code at the bottom of the file

// Task 1
function getBlockInfo() {
  web3.eth.getBlock("69420").then((res) => {
    let data = JSON.stringify(res);
    fs.writeFile("data1.json", data, function (e) {
      if (e) return console.log(e);
      console.log("Data > data1.json");
    });
  });
}
getBlockInfo();
// Task 2
function getRichestBalance() {
  web3.eth
    .getBalance("0x00000000219ab540356cbb839cbe05303d7705fa")
    .then((res) => {
      let data = JSON.stringify(res);
      fs.writeFile("data2.json", data, function (e) {
        if (e) return console.log(e);
        console.log("Data > data2.json");
      });
    });
}
getRichestBalance();
// Task 3
function getTransactionCount() {
  web3.eth.getBlockTransactionCount("latest").then((res) => {
    let data = JSON.stringify(res);
    fs.writeFile("data3.json", data, function (e) {
      if (e) return console.log(e);
      console.log("Data > data3.json");
    });
  });
}
getTransactionCount();
// Task 4
function getCurGasPrice() {
  web3.eth.getGasPrice().then((res) => {
    const curDate = new Date();
    let timeStamp = curDate.toLocaleTimeString();
    let data = JSON.stringify([res, timeStamp]);
    fs.writeFile("data4.json", data, function (e) {
      if (e) return console.log(e);
      console.log("Data > data4.json");
    });
  });
}
getCurGasPrice();
/*  USED TO WRITE JSON INTO THE FILE*/
// let data = JSON.stringify(res);
// fs.writeFile("data.json", data, function (e) {
//   if (e) return console.log(e);
//   console.log("Data > data.json");
// });
