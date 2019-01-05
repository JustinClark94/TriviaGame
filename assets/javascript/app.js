//why did doc ready ruin my code? Said my array(s) were undefined. Changes color of the variables.
//$(document).ready(function(){

   var correctAnswers = 0;
   var incorrectAnswers = 0;
   var unansweredAnswers = 0;
   var gameQuestions = [
        {
            question: 'A common type of radio wave is referred to as VHF. Does do the letters VHF stand for?',
            options: ['Very High Frequency', 'Variable High Frequency', 'Video Homing Frequency'],
            answer: 0
        },{
            question: 'If john is facing north and turns 90 degrees to his right, what direction is he facing now?',
            options: ['South', 'East', 'West'],
            answer: 1
        },{
            question: 'Budapest is the capital of what European country',
            options: ['Austria', 'Portugal', 'Hungary'],
            answer: 2
        },{
            question: 'A prism is a solid figure that has how many congruent bases?',
            options: ['Two', 'Four', 'Six'],
            answer: 0
        },{
            question: 'Which of the following is a homophone for the word "won"?',
            options: ['One', 'Lost', 'Now'],
            answer: 0
        }
        
   ];


    //Initial screen prompting user to start game.
   
    $('#startQuiz').click(function(){
        //When user clicks start button the directions and 'ready' button disappears.
        $('#directions').empty();
        displayQuestions();

    });

    var displayQuestions = function(){
        for (i = 0; i < gameQuestions.length; i++) {
            $("#triviaQuestion").append("<h2>" + gameQuestions[i].question + "</h2>");
        for (let j = 0; j < gameQuestions[j].answer.length; j++) {
            $("#triviaQuestion").append(questionArray[j].answers[j]);
        }}}

//)}