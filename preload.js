// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const upt = require('./updatetable');
const myex = require('./example');

window.addEventListener('DOMContentLoaded', async () => {
	let table = document.querySelector('table');

	window.raw = await myex();
	upt(table);
});
