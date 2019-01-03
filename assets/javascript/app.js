$(document).ready(function(){
    
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
        
    ]})

    //Initial screen prompting user to start game.
    $('.startQuiz').on('Click', function(){
        //When the start or 'ready' button is clicked, questions will appear and timer will start.
        $('.gameStarted').show();
    })


    //timer appears on screen. play has 60 seconds to answer 5 questions. When timer hits 0 scores are added.
    var number = 60;

    function run() {
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

        number--;

        $("#timeRemaining").html("Time Remaining: " + number);

        if (number === 0) {

        stop();

        alert("Time Up!");
        }  
        function stop() {

            clearInterval(intervalId);
        }
    }
