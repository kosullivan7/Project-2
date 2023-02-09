//Declare the UI elements
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
        ],
       
        //Load a question using the index
        index:0,
        load:function(){
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                opt3.innerHTML=this.questions[this.index].options[2];
                opt4.innerHTML=this.questions[this.index].options[3];
            }
            
            else {
                //show the end screen
                quizbox.innerHTML="Quiz Completed!";
                ul.style.display="none";
                nextButton.style.display="none";
            }
        },
        next: function(){
            this.index++;
            this.load();
        },
        //check if answer is correct or not
        check: function(ele){
            var id=ele.id.split('');
            if(id[id.length-1]==this.questions[this.index].answer){
                this.score++;
                ele.className="correct";
                this.scoreCard();
            }
            else{
                ele.className="wrong";
            }
        },

        //Disable other options once answer has been clicked
        preventClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
            }
        },
        allowClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className=''
            }
        },
        score:0,
        scoreCard:function(){
            scoreCard.innerHTML=this.questions.length + "/" + this.score;
        }
}

//Create event listeners to listen to page reload event, button click for option and next button clicked
window.load=app.load();

function button(ele){
    app.check(ele);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
}






