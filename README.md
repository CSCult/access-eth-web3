Accessing Ethereum blockchain using Web3.js
===========================================

This project is meant to teach the participants about the structure of the Ethereum blockchain, how by the help of APIs like Infura and Web3.js, they can connect directly to the Ethereum blockchain using a JSON RPC API, which acts as a mediator between Web2 and Web3.

Project structure
-----------------

There are mainly 2 folders: _/scripts & /frontend_. The **/scripts** folder has 2 Javascript files: `etherscan.js` (used to fetch data from the Ethereum blockchain and writing a JSON file to store that data) and `script.js` (that renders JSON in the HTML page). The **/frontend** folder has 1 HTML file, where a file input is required to render JSON data.

Tasks for the participants
--------------------------

### Task 1: _Get blockchain data from block number 69420_ (store JSON response in data1.json)

### Task 2: _Get balance of the richest ETH account_ (store JSON response in data2.json)
To know who it is, visit: https://tokenview.com/en/learn/eth-top-rich-address

### Task 3: _Get the transaction count of the latest ETH block_ (store JSON response in data3.json)

### Task 4: _Get the current gas price_ (store JSON response in data4.json) 
Also add a `timestamp` key in `data4.json` with its value as the current timestamp (use JS built-in functions to get current timestamp
