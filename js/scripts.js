var femaleNames = ['Ania', 'Monika', 'Zuza', 'Jola', 'Ewelina'];
var maleNames = ['Adam', 'Jacek', 'Jarek', 'Damian', 'Lukasz'];
var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName ='Marian';

if (allNames.indexOf(newName) === -1) {
	console.log('Nie ma Mariana w tabeli');
}

var x = allNames.push('Marian');
console.log(x);
console.log('Zmienna allNames: ' + allNames);