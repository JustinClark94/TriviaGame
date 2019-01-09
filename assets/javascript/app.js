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
            question: 'Where was coffee first discovered?',
            options: ['Ethiopia', 'Brazil', 'Columbia'],
            answer: 0,
            name: 'discovered'
        },{
            question: 'Do coffee bushes produce nuts or fruits?',
            options: ['nuts', 'fruits', 'neither'],
            answer: 1,
            name: 'caffeine'
        },{
            question: 'The two kinds of coffee beans are Arabica and …?',
            options: ['India', 'Hearty', 'Robusta'],
            answer: 2,
            name: 'popular'
        },{
            question: 'There are over ___ coffee farmers around the world',
            options: ['twenty-five million', 'one-hundred-thousand', 'fifty-thousand'],
            answer: 0,
            name: 'farmers'
        },{
            question: 'Which of these choices has the most caffeine?',
            options: ['6 ounce cup of black coffee', 'ounce cup of espresso', 'Both choices have the same amount of caffeine'],
            answer: 0,
            name: 'caffeine'
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
            
            // $("triviaQuestion").prepend('<div class="' + gameQuestions[i].name + '"></div>')
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
        $("#gameStarted").append("<button id='submit-btn'>Done</button>");
    }
    //
    function startTimer (){
        intervalId = setInterval(decrement, 1000);
    }
    
    function decrement() {

        timer--;

        $("#timeRemaining").html("<h4>Time Remaining: " + timer + "</h4>");

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
