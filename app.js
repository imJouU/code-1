const addWord = (w) => {
	const words = ['Hola', 'Hola', 'Hola'];
	let index = 0;

	const structure = `${w}-${(localStorage.length)+1}`;

	const taskRunning = setInterval(function() {
		localStorage.setItem((localStorage.length)+1, words[index]);
		console.log('Agregado.');
		index++;
		if (index == words.length) {
			clearInterval(taskRunning);
			console.log('Done.');
		}
	}, 1000);
}

const checkWords = (w) => {
	for (let i = 0; i < localStorage.length; i++) {
		const element = localStorage.getItem(i+1);
		// console.log(element, typeof(element));
		if (element == w) {
			return true;
		}
	}
	return false;
}

const mainFunction = (w) => {
	return checkWords(w) ? console.log('Ya se encuentra esta combinación.') : addWord(w);
}

const searchWord = (wtc) => {
	for (let i = 0; i < localStorage.length; i++) {
		const indexElement = localStorage.key(i);
		const element = localStorage.getItem(i+1);

		const structure = `${indexElement}: ${element}`;

		if (element == wtc) {
			return console.log(structure);
		}
	}
	return false;
}