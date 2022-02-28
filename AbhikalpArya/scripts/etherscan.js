// Import web3 into a variable: Web3
var Web3 = require("web3");
// Import fs into a variable: fs
var fs = require('fs');

var provider = "https://mainnet.infura.io/v3/d9be2c0c1638421aad8b032da1c0605b";

// Create a Web3 Provider using HttpProvider : web3Provider
let web3Provider = new Web3.providers.HttpProvider(provider);

// Create a Web3 object using web3Provider: web3
let web3 = new Web3(web3Provider);

// MAIN CODE STARTS HERE:
// Take a look at README.md to know what to code
// JSON parse code at the bottom of the file

// Task 1
web3.eth.getBlock(69420).then((res) => {
    let data = JSON.stringify(res);
    fs.writeFile('../AbhikalpArya/Data/data1.json', data, function(e) {
        if (e) return console.log(e);
        console.log('Data > data1.json');
    })
})
// Task 2
web3.eth.getBalance("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2").then((res) => {
    let data = JSON.stringify(res);
    fs.writeFile('../AbhikalpArya/Data/data2.json', data, function(e) {
        if (e) return console.log(e);
        console.log('Data > data2.json');
    })
})
// Task 3
web3.eth.getBlockTransactionCount("latest").then((res) => {
    let data = JSON.stringify(res);
    fs.writeFile('../AbhikalpArya/Data/data3.json', data, function(e) {
        if (e) return console.log(e);
        console.log('Data > data3.json');
    })
})
// Task 4
web3.eth.getGasPrice().then((res) => {
    const currentDate = new Date();
    let timestamp = currentDate.toLocaleTimeString();
    let data = JSON.stringify([res, timestamp]);
    // In JavaScript, a time stamp is the number of milliseconds that have passed since January 1, 1970.
    fs.writeFile('../AbhikalpArya/Data/data4.json', data, function(e) {
        if (e) return console.log(e);
        console.log('Data > data4.json');
    })
})
