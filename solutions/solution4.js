// Not really another solution. Just solution 3 but with the styling enabled
function theGoodSolution4() {
    window.theGoodSolution3();

    //replace header text and add styling
    $('body').addClass('body-styles--enabled');
    $('h2').html('Solution 4:<br><span style="font-size: .7em">just solution 3 but with ugly styling</span>');
}

//window.theGoodSolution4();