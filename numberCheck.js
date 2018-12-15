const primes = [2, 3, 5, 7]

function compositeChk(){
	let x = parseInt(prompt("Please enter a number to be checked."));
	let window = document.getElementById("result");
	
	if (isNaN(x) === true) {
		window.innerHTML = "Only numbers can be checked.";
	
	} else if (primes.includes(x) === true){
		window.innerHTML = x + " is not a composite number.";
		
	} else if (x%2===0 || x%3===0 || x%5===0 || x%7===0) {
		window.innerHTML= x + " is a composite number.";
	
	} else {
		window.innerHTML = x + " is not a composite number.";
	}
}
