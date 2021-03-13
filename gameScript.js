function rpsGame(yourChoice) {
	var humanChoice, botChoice;
	humanChoice = yourChoice.id;
	
	botChoice = numberToChoice(ranToRpsInt());
	//console.log('compChoice:',botChoice);
	
	results = decideWinner(humanChoice,botChoice);
	//console.log(results);
	
	message = finalMessage(results); //{'message': 'you won', 'color': 'green'};
	console.log(message);
	rpsFontEnd(yourChoice.id, botChoice, message);

}

function ranToRpsInt() {
	return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
	return ['paper','scissors','rock'][number];
}

function decideWinner(humanChoice, compChoice) {
	var rpsDatabase = {
		'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
		'paper': {'rock': 1, 'paper': 0.5, 'scissors':0},
		'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
	};
	var youScore = rpsDatabase[humanChoice][compChoice];
	var compScore = rpsDatabase[compChoice][humanChoice];

	return [youScore, compScore];
}

function finalMessage([youScore, compScore]) {
	if (youScore === 0) {
		return {'message': 'you lost!', 'color': 'red'};
	}else if (youScore === 0.5) {
		return {'message': 'you tied', 'color': 'yellow'};
	}else {
		return {'message': 'you won', 'color': 'green'};
	}	
}

function rpsFontEnd(humanImageChoice, botImageChoice, finalMessage) {
	var imagesDatabase = {
		'rock': document.getElementById('rock').src,
		'paper': document.getElementById('paper').src,
		'scissors': document.getElementById('scissors').src
	};
	document.getElementById('rock').remove();
	document.getElementById('paper').remove();
	document.getElementById('scissors').remove();

	var humanDiv =  document.createElement('div');
	var botDiv = document.createElement('div');
	var messageDiv = document.createElement('div');

	humanDiv.innerHTML = "<img src = '" + imagesDatabase[humanImageChoice] + "'height = 150 weight = 150 style = 'box-shadow: 0px 10px 50px rgba(0, 255, 36, 1)'>";
	messageDiv.innerHTML = "<h1 style = 'color: "+finalMessage['color']+"; font-size: 60px; padding: 30px; '>" + finalMessage['message']+  "</h1>"
	botDiv.innerHTML = "<img src = '" + imagesDatabase[botImageChoice] + "'height = 150 weight = 150 style = 'box-shadow: 0px 10px 50px rgba(255, 0, 0, 1)'>";
	
	document.getElementById("flex-box-div").appendChild(humanDiv);
	document.getElementById("flex-box-div").appendChild(messageDiv);
	document.getElementById("flex-box-div").appendChild(botDiv);

}
