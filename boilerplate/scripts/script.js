document.getElementById("______").addEventListener("______", () => {
    // Create a container element for block container : container

	
	// Define a FileReader object without parameters : file

	
	file.onload = () => {
		let json = JSON.parse(file.result);
		// In the for-in loop, create an entry element for HTML rendering : entry
		for (const key in json) {

		}

		// Append the entry element into the container element defined at the top

	};
	file.readAsText(this.files[0]);
});
