document.getElementById("inputFile1").addEventListener("change", function () {
  // Create a container element for block container : container
  let container = document.getElementById("block-container");
  // Define a FileReader object without parameters : file
  var file = new FileReader();
  file.onload = () => {
    let json = JSON.parse(file.result);
    // In the for-in loop, create an entry element for HTML rendering : entry
    var heading = document.createElement("h1");
    heading.innerHTML = "Blockchain data of Block number 69420";
    container.appendChild(heading);
    for (var key in json) {
      var entry = document.createElement("p");
      entry.innerHTML =
        key + ': <span style="color:#fff">' + json[key] + "</span>";
      container.appendChild(entry);
    }
    var space = document.createElement("br");
    container.appendChild(space);
    container.appendChild(space);
    // Append the entry element into the container element defined at the top
  };
  file.readAsText(this.files[0]);
});

document.getElementById("inputFile2").addEventListener("change", function () {
  let container = document.getElementById("block-container");
  // Define a FileReader object without parameters : file
  var file = new FileReader();
  file.onload = () => {
    let json = JSON.parse(file.result);
    // In the for-in loop, create an entry element for HTML rendering : entry
    var heading = document.createElement("h1");
    heading.innerHTML = "Balance of the Richest Ethereum Account";
    container.appendChild(heading);
    var entry = document.createElement("p");
    entry.innerHTML = json;
    container.appendChild(entry);
    var space = document.createElement("br");
    container.appendChild(space);
    container.appendChild(space);
    // Append the entry element into the container element defined at the top
  };
  file.readAsText(this.files[0]);
});
document.getElementById("inputFile3").addEventListener("change", function () {
  let container = document.getElementById("block-container");
  // Define a FileReader object without parameters : file
  var file = new FileReader();
  file.onload = () => {
    let json = JSON.parse(file.result);
    // In the for-in loop, create an entry element for HTML rendering : entry
    var heading = document.createElement("h1");
    heading.innerHTML = "Latest ETH Block Transaction Count";
    container.appendChild(heading);
    var entry = document.createElement("p");
    entry.innerHTML = json;
    container.appendChild(entry);
    var space = document.createElement("br");
    container.appendChild(space);
    container.appendChild(space);
    // Append the entry element into the container element defined at the top
  };
  file.readAsText(this.files[0]);
});
document.getElementById("inputFile4").addEventListener("change", function () {
  let container = document.getElementById("block-container");
  // Define a FileReader object without parameters : file
  var file = new FileReader();
  file.onload = () => {
    let json = JSON.parse(file.result);
    // In the for-in loop, create an entry element for HTML rendering : entry
    var heading = document.createElement("h1");
    heading.innerHTML = "Current Gas Price:";
    container.appendChild(heading);
    var entry = document.createElement("p");
    entry.innerHTML = json[0] + " " + json[1];
    container.appendChild(entry);
    var space = document.createElement("br");
    container.appendChild(space);
    container.appendChild(space);
    // Append the entry element into the container element defined at the top
  };
  file.readAsText(this.files[0]);
});
