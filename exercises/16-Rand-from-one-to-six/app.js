let min = 1;
let max = 6;
function getRandomInt()
{
	var randomNumber = Math.floor((Math.random() * (max - min + 1)) + min);
	return randomNumber;
}
console.log(getRandomInt());