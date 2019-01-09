//why did doc ready ruin my code? Said my array(s) were undefined. Changes color of the variables.
//Why will my answers not show?
//Timer appears a few seconds after questions appeard. Why is it delayed.
//Put var back infront of cAnswers function and show what happens.
//$(document).ready(function(){
   var timer = 60;
   var correctAnswers = 0;
   var incorrectAnswers = 0;
   var unansweredAnswers = 0;
   var gameQuestions = [
        {
            question: 'A common type of radio wave is referred to as VHF. Does do the letters VHF stand for?',
            options: ['Very High Frequency', 'Variable High Frequency', 'Video Homing Frequency'],
            answer: 0,
            name: 'radio'
        },{
            question: 'If john is facing north and turns 90 degrees to his right, what direction is he facing now?',
            options: ['South', 'East', 'West'],
            answer: 1,
            name: 'john'
        },{
            question: 'Budapest is the capital of what European country',
            options: ['Austria', 'Portugal', 'Hungary'],
            answer: 2,
            name: 'budapest'
        },{
            question: 'A prism is a solid figure that has how many congruent bases?',
            options: ['Two', 'Four', 'Six'],
            answer: 0,
            name: 'prism'
        },{
            question: 'Which of the following is a homophone for the word "won"?',
            options: ['One', 'Lost', 'Now'],
            answer: 0,
            name: 'homophone'
        }
        
   ];


    //Initial screen prompting user to start game.
    //$(document).ready(function(){
    $('#startQuiz').click(function(){
        //When user clicks start button the directions and 'ready' button disappears.
        $('#directions').empty();
        startTimer();
        displayQuestions();
    });
    //This function is called when start button is clicked. Made to show Qs and As on screen.
    function displayQuestions(){

        for (i = 0; i < gameQuestions.length; i++) {
            
            // $("triviaQuestion").prepend('<div class="' + gameQuestions[i].question + '"></div>')
            $("#triviaQuestion").append("<h3>" + gameQuestions[i].question + "</h3>");
            //Loop through question array and create buttons for each answer
            // Clear button div of any newly created buttons
      
            for (j = 0; j < gameQuestions[i].options.length; j++) {
               $("#gameStarted").append(
                "<h3><input type='radio' name='question-"  +
                  i +
                  "' value='" +
                  gameQuestions[i].options[j] +
                  "''>" + gameQuestions[i].options[j]);
            }
          
        
        }
    }
    //
    function startTimer (){
        intervalId = setInterval(decrement, 1000);
    }
    
    function decrement() {

        timer--;

        $("#timeRemaining").html("Time Remaining: " + timer);

        if (timer === 0) {
            alert("Time Up!");
            clearInterval(intervalId);
            gameOver();
        }  
    }
    
    function gameOver (){
        $('#gameStarted').empty();
        //if( === gameQuestions.answer){
           //cAnswers();
        // }else{
        //   incorrectAnswer();
        // }

        
    };
    function cAnswers(){
        correctAnswers ++;
    }
    function inAnswers(){
        incorrectAnswers ++;
    }
