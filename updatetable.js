const myex = require('./example');

let updatetable = (arr = [], table) => {
	let sum = 0;
    let utime = new Date().toTimeString();
    let last=0
	table.innerHTML = `<caption>${utime}</caption><tbody><tr><td>time</td><td>side</td><td>price</td><td>quantity</td></tr>`;
	arr.reverse();
	arr.forEach((element, i) => {
		let { price, quantity, side, time } = element;
		sum += Number(price);
		let ravg = sum / (i + 1);
        let cls = price >= ravg ? 'green' :last==price?'white': 'red';
      
        last=price
		table.innerHTML += `<tr class="${cls}"><td>${time}</td><td>${side}</td><td>${price}</td><td>${quantity}</td></tr>`;
	});
	table.innerHTML += '</tbody>';
	document.querySelector('caption').innerText += `--- ${sum / arr.length}`;
};
let rtn = tbl => {
	setInterval(async () => {
		let data = await myex();
		updatetable(data, tbl);
	}, 30000);
	myex().then(data => {
		updatetable(data, tbl);
	});
};
module.exports = rtn;
