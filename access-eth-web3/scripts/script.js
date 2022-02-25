document.getElementById("______").addEventListener("______", () => {
    // Create a container element for block container : container
	let container = document.getElementById('block-container');
	
	// Define a FileReader object without parameters : file
	var file = new FileReader();
	
	file.onload = () => {
		let json = JSON.parse(file.result);
		// In the for-in loop, create an entry element for HTML rendering : entry
		for (const key in json) {
			var entry = document.createElement('p');
			entry.innerHTML = key + ': <span style="color: #4a60ce">' + json[key] + '</span>';
			container.appendChild(entry)
		}

		// Append the entry element into the container element defined at the top

	};
	file.readAsText(this.files[0]);
});
