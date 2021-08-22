const choiceHand = {
	'rock' : 'asset/Rock.png',
	'paper' : 'asset/Paper.png',
	'scissors' : 'asset/Scissors.png'
}
let score = 0

const userHandPicked=(hand)=>{
	let hands = document.querySelector('.hands')
	hands.style.display = "none"

	let handSelcted= document.querySelector('.contest');
	handSelcted.style.display = "flex"

	document.getElementById('selectedImage').src = choiceHand[hand]

	let cpHand = computerHandPicked()
	referee(hand,cpHand)
}

const computerHandPicked = ()=>{
	let handcomputer= ['rock', 'paper', 'scissors']

	let cpHand = handcomputer[Math.floor(Math.random()*3)]

	document.getElementById('computerPickImage').src = choiceHand[cpHand]

	return cpHand
}

const referee= (hand,cpHand)=>{
	if(hand == 'rock' && cpHand == 'scissors'){
		setDecision('You Win')
		setScore(score+=1)
	}
	if(hand == 'paper' && cpHand == 'rock'){
		setDecision('You Win')
		setScore(score+=1)
	}
	if(hand == 'scissors' && cpHand == 'paper'){
		setDecision('You Win')
		setScore(score+=1)
	}
	if(hand == 'rock' && cpHand == 'rock'){
		setDecision('It is A Tie')
	}
	if(hand == 'scissors' && cpHand == 'scissors'){
		setDecision('It is A Tie')
	}
	if(hand == 'paper' && cpHand == 'paper'){
		setDecision('It is A Tie')
	}
	if(hand == 'rock' && cpHand == 'paper'){
		setDecision('You Lose')
	}
	if(hand == 'paper' && cpHand == 'scissors'){
		setDecision('You Lose')
	}
	if(hand == 'scissors' && cpHand == 'rock'){
		setDecision('You Lose')
	}

}

const setDecision= (decision)=>{
	document.querySelector('.referee h1').innerText = decision;
}

const setScore=(score)=>{
	document.querySelector('.score h1').innerText = score
}

const playAgain = ()=>{

	let handSelcted= document.querySelector('.contest');
	handSelcted.style.display = "none"

	let hands = document.querySelector('.hands')
	hands.style.display = "flex"
}