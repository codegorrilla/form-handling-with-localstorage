const inputs = document.querySelectorAll('input');

document.getElementById('save').addEventListener('click', () => {
	inputs.forEach((input) => {
		//input.addEventListener('change', (e) => console.log(e.target.value));
		// input.addEventListener('change', (e) => {
		// 	if (input.value) {
		// 		localStorage.setItem(e.target.id, e.target.value);
		// 		console.log('Saved');
		// 	}
		// });

		if (input.value) {
			localStorage.setItem(input.id, input.value);
			console.log('Saved');
		}
	});

	//console.log('Saved');

	inputs.forEach((input) => {
		if (input.value) {
			input.value = localStorage.getItem(input.id);
			console.log('Retrieved');
		}
	});
});

//on window re-load, check if the local storage has any data and set the input fields
window.onload = async () => {
	inputs.forEach((input) => {
		if (localStorage.getItem(input.id)) {
			input.value = localStorage.getItem(input.id);
			console.log('Retrieved on form-reload');
		}
	});
};

//on clicking reset button, clear the local storage and reset the input fields
document.getElementById('reset').addEventListener('click', () => {
	localStorage.clear();
	inputs.forEach((input) => {
		input.value = '';
	});
	//console.log('Cleared');
});
