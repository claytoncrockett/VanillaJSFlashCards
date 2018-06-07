let questions = ["What does const do?", "What does the fat arrow do?", "What does 'this' do?"]
let answers = ["sets a variable that can't be changed", "declares methods", "grabs closest parent method"]
let i = -1
document.getElementById('front').addEventListener("click", toggleCard);
document.getElementById('back').addEventListener("click", toggleCard);
document.getElementById('nextCard').addEventListener("click", nextCard);

function nextCard(){
  if (document.getElementById('front').classList.contains('hide')){
    toggleCard()
  }
  if (i < questions.length - 1){
    i++
  } else{
    i = 0
  }
  document.getElementById('front').innerHTML = questions[i]
  document.getElementById('back').innerHTML = answers[i]
}

function toggleCard(){
  let front = document.getElementById('front')
  let back = document.getElementById('back')
  if (back.classList.contains('hide')){
    back.classList.remove('hide')
  } else { 
    back.classList.add('hide')
  }
  if (front.classList.contains('hide')){
    front.classList.remove('hide')
  } else {
    front.classList.add('hide')
  }

}
