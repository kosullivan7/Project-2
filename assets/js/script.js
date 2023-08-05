document.addEventListener('DOMContentLoaded', function() {
//Declare the UI elements
var ul = document.getElementById('ul')
var quizbox = document.getElementById('questionBox')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')
var index = 0;
var score = 0;
var clickLocked = false;
var questions = [
    {
        q:'With 260 goals, who is the premier leagues top scorer?',
        options: ['Ronaldo', 'Thierry Henry', 'Alan Shearer', 'Ian Wright'],
        answer:3
    },
    {
        q:'Which player with 653 games, has made the most premier league appearances?',
        options: ['Roy Keane', 'Sol Campbell', 'Gary Neville', 'Gareth Barry'],
        answer:4
    },
    {
        q:'Which team won the first premier league title?',
        options: ['Manchester United', 'Arsenal', 'Blackburn', 'Liverpool'],
        answer:1
    },
    {
        q:'With 202 clean sheets, who is the goalie with the best record in the premier league?',
        options: ['Peter Schmeichel', 'Petr Cech', 'Shay Given', 'Ederson'],
        answer:2
    },
    {
        q:'The fastest goal in premier league history was 7.69 seconds. Who scored it?',
        options: ['Ronaldo', 'Sadio Mane', 'Shane Long', 'Thierry Henry'],
        answer:3
    }
]

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

function load(){
    if(index <= questions.length-1){
        quizbox.innerHTML= index + 1 + ". " + questions[index].q;
        opt1.innerHTML=questions[index].options[0];
        opt2.innerHTML=questions[index].options[1];
        opt3.innerHTML=questions[index].options[2];
        opt4.innerHTML=questions[index].options[3];
        index = index + 1;
    }
    
    else {
        //show the end screen
        quizbox.innerHTML="Quiz Completed!";
        ul.style.display="none";
    }
}


function check(ele){
    if (clickLocked === true){
        return;
    }
    var id = ele.id.split('');
    if(id[id.length-1]==questions[index - 1].answer){
        score++;
        ele.classList.add("correct");
    }
    else{
        ele.classList.add("wrong");
    }
    scoreCard();
    next();
}
    

function scoreCard(){
    document.getElementById('scoreCard').innerHTML = score + "/" + questions.length;
}


function answer(event){
    check(event.target);
    clickLocked = true;
}

function next(){
    setTimeout(function() {
        document.querySelectorAll('.option').forEach(function(option) {
            option.classList.remove('correct');
            option.classList.remove('wrong');
        });
        load();
        clickLocked = false;
    }, 1500)
}

document.querySelectorAll('.option').forEach(function(option) {
    option.addEventListener('click', answer)
});

shuffle(questions);
load();
});


