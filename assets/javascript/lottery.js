var randomNum;

//wait until page loads
$(document).ready(function () {


    //create button listener
    $("button").click(function () {
        //create a nine digit random number
        randomNum = Math.floor(10000000 + Math.random() * 900000000);
        console.log("randomNum: ", randomNum);
        //I need an element to modify in the DOM
        $("#firstNumber").append("<p>" + randomNum + "</p>");

        //Need to create additional divs and append them to firstNumber to hold more randomNums

    });
});