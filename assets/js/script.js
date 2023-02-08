//Declare the UI elements by id 
var ul = document.getElementById('ul')
var nextButton = document.getElementById('btnNext');
var quizbox = document.getElementById('questionBox')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')

var app={
    questions:[
        {
            q:'With 260 goals, who is the premier leagues all time top scorer',
            options: ['Ronaldo', 'Thierry Henry', 'Alan Shearer', 'Ian Wright'],
            answer:3
        },
        {
            q:'Which player with 653 games, has made the most premier league appearances',
            options: ['Roy Keane', 'Sol Campbell', 'Gary Neville', 'Gareth Barry'],
            answer:4
        },
        {
            q: 'Which team won the first premier league title',
            options: ['Manchester United' , 'Arsenal' , 'Blackburn' , 'Liverpool'],
            answer:1
        },
        {
            q: 'With 202 clean sheets, which goalie has the best record in the premier league',
            options: ['Petr Cech' , 'Peter Schmeichel' , 'Shay Given' , 'Ederson'],
            answer:1
        },
        {
            q: 'Who scored the fastest hat-trick in the premier league' ,
            options: ['Alan Shearer' , 'Ronaldo' , 'Fernando Torres', 'Sadio Mane'],
            answer:4
        }          
    ],

