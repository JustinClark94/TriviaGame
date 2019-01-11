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
            answer: 'Ethiopia',
            name: 'discovered'
        },{
            question: 'Do coffee bushes produce nuts or fruits?',
            options: ['nuts', 'fruits', 'neither'],
            answer: 'fruits',
            name: 'bushes'
        },{
            question: 'The two kinds of coffee beans are Arabica and …?',
            options: ['India', 'Hearty', 'Robusta'],
            answer: 'Robusta',
            name: 'popular'
        },{
            question: 'There are over ___ coffee farmers around the world',
            options: ['twenty-five million', 'one-hundred-thousand', 'fifty-thousand'],
            answer: 'twenty-five million',
            name: 'farmers'
        },{
            question: 'Which of these choices has the most caffeine?',
            options: ['6 ounce cup of black coffee', 'ounce cup of espresso', 'Both choices have the same amount of caffeine'],
            answer: '6 ounce cup of black coffee',
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
            
            $("#triviaQuestion").append("<div>" + gameQuestions[i].question + "</div>");
            $("#triviaQuestion").append('<div class="' + gameQuestions[i].name + '"></div>');
            
            //Loop through question array and create buttons for each answer
            // Clear button div of any newly created buttons

            for (j = 0; j < gameQuestions[i].options.length; j++) {

               $(`.${gameQuestions[i].name}`).append(
                "<div><input type='radio' name='" + gameQuestions[i].name +
                  i +
                  "' value='" +
                  gameQuestions[i].options[j] +
                  "''</div>" + gameQuestions[i].options[j]);
            }
          
        
        }
        $("#answerOptions").append("<button id='gradeQuizbtn'>Done</button>");
    }
    //
    function startTimer (){
        intervalId = setInterval(decrement, 1000);
    }
    
    function decrement() {
        $("#timeRemaining").empty()
        timer--;

        
        $("#timeRemaining").html("<h4>Time Remaining: " + timer + "</h4>");

        if (timer === 0) {
            clearInterval(intervalId);
            gameOver(); 
        }  
    }
    $('#gradeQuizbtn').click(function(){
        alert('hello');
        gameOver();
    });

    function gameOver (){
        $('#gameStarted').empty();
        gradeQuiz();
        revealAnswers();
    };

    function gradeQuiz(){

        for (var i = 0; i < gameQuestions.length; i++) {

            if ($( "input[type=radio][name='" + gameQuestions[i].name + "']:checked").val() === gameQuestions[i].answer) {

                correctAnswers++;

            } else {
                incorrectAnswers++;

            };
        
        };

    };
    function revealAnswers(){
        $("#correctAnswersDisplay").html("<h1>Correct Answers: " + correctAnswers + "</h1>");
        $("#incorrectAnswersDisplay").html("<h1>Incorrect Answers: " + incorrectAnswers + "</h1>");
        $("#messageDisplay").html("<h1> YOU COMPLETED THE QUIZ <BR> GREAT JOB! </h1>");
    };
