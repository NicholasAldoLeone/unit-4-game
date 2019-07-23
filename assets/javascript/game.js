
    
    var numbers = [0, 0, 0, 0];
    var maxNum = 10;
    var preNum = 0;
    var wins = 0;
    var losses = 0;
    var userCurrentNumber = 0;
    var numberGoal = Math.floor(Math.random()* 200) + 50;

    $("#goalNumberBox").text("Goal: " + numberGoal);    

    function resetGame() {
        numbers = [0, 0, 0, 0]
        maxNum = 10;
        preNum = 0;
        userCurrentNumber = 0;
        numberGoal = Math.floor(Math.random()* 200) + 50;

        generateNumbers();

        $("#goalNumberBox").text("Goal: " + numberGoal);
        $("#userNumberBox").text("Your number: " + userCurrentNumber);

        console.log("Button Numbers: " + numbers)
        console.log("Max Number: " + numberGoal);
        console.log("User's Current Number: " + userCurrentNumber);

    }

    function increaseNumbers() {
        maxNum = maxNum + 10;
        preNum = preNum + 20;

    }

    function generateNumbers(){
        for(var i = 0; i < numbers.length; i++) {
            var numberRange = Math.floor(Math.random()* maxNum) + preNum + 1;

            numbers[i] = numberRange;
            increaseNumbers();

        }
    }

    generateNumbers();

    console.log("Button Numbers: " + numbers)
    console.log("Max Number: " + numberGoal);
    console.log("User's Current Number: " + userCurrentNumber);

    $(".btn").on("click", function(){
        var buttonPressed = $(this).val();

        userCurrentNumber = userCurrentNumber + numbers[buttonPressed];
        $("#userNumberBox").text("Your number: " + userCurrentNumber);

        if(userCurrentNumber < numberGoal) {

        }

        if(userCurrentNumber === numberGoal) {
            resetGame();
            
            wins++;
            $("#winsNumberBox").text("Wins: " + wins);

        }

        if(userCurrentNumber > numberGoal) {
            resetGame();

            losses++;
            $("#lossesNumberBox").text("Losses: " + losses);

        }
    
    })
