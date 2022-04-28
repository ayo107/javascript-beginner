/*Exercise closely resembles 11 - consider introducing another concept here? */
let min = 1;
let max = 10;
function getRandomInt()
{
	var randomNumber = Math.floor((Math.random() * (max - min + 1)) + min);
	return randomNumber;
}


console.log(getRandomInt());
